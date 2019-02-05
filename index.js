const { app, BrowserWindow } = require('electron')
const electron = require('electron')
const exec = require('child_process').exec;
const ipc = electron.ipcMain
const dialog = electron.dialog

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600, resizable: false, nodeIntegration: true})
  win.setMenu(null)
  win.loadFile('index.html')
}

app.on('ready', createWindow)

ipc.on('funcYou', function(event, seq, exportFile){
  console.log(seq);
  exec(`cd ${seq}`, callback)
})

var krakenDir = null

ipc.on('kraken-db', function(event, seq, exportFile){
  exec(`kraken --db ${seq} '${exportFile}' > sequences.kraken`, {cwd: `${krakenDir}`}, callback)
})

ipc.on('testFunc', function(event, data){
  exec(`cd ${data}`, cdCallback)
  krakenDir = `${data}` //changes the pwd to kraken directory
})

ipc.on('kraken-translate', function(event, seq, exportFile){
  exec(`kraken-translate --db ${seq} sequences.kraken > sequences.labels`,{cwd: `${krakenDir}`}, callback)
})

function callback(error, stdout, stderr){
  if(error){
    console.log(error)
  }
  else{
    console.log(stdout)
  }
}
function cdCallback(error, stdout, stderr){
  if(error){
    console.log(error)
  }
  else{
    console.log(stdout)
    dialog.showErrorBox("pwd is...",stdout)
  }
}
