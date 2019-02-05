const electron = require('electron')
const ipc = electron.ipcRenderer

const button = document.getElementById('btn') //kraken-db
const trans = document.getElementById('translate') //kraken-translate
const myFile = document.getElementById('myFile') //fa file
const exportFile = document.getElementById('exportFile') //kraken console.dir();

//kraken-db
button.addEventListener('click', function(event){
  event.preventDefault()
  let seq = document.getElementById('seq').value //database name
  let exportFile = document.getElementById('exportFile').files[0].path //database's parent directory
  ipc.send('kraken-db', seq, exportFile)
})
//kraken-translate
trans.addEventListener('click', function(event){
  event.preventDefault()
  let seq = document.getElementById('seq').value
  ipc.send('kraken-translate', seq)
})
//changing lable of selected fa file...
myFile.addEventListener('change', function(event){
  event.preventDefault()
  document.getElementById('myLabel').innerHTML = document.getElementById('myFile').files[0].path
})
//setting pwd as kraken's dir
exportFile.addEventListener('change', function(event){
  event.preventDefault()
  document.getElementById('exportLabel').innerHTML = document.getElementById('exportFile').files[0].path;
  let data = document.getElementById('exportFile').files[0].path
  ipc.send('testFunc', data)
})
