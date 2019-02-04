# KrakenApp
Kraken is a system for assigning taxonomic labels to short DNA sequences which can be used directly with the command-line interface. Kraken is written in C++ and Perl, and it is designed for use with the Linux Operating System. \
Kraken doesn't have a GUI Application so It would be better if we can declutter the commands by simple click of the buttons. This app is made in ElectronJS and as Kraken is designed for Linux  :penguin: so as this app, but this will also support macOS. I've attached a .deb package in _pkg_ folder for direct installation. Kudos :v:
## Official Sites
>http://ccb.jhu.edu/software/kraken/MANUAL.html \
>https://ccb.jhu.edu/software/kraken/

## Installation
- Just download the .deb package from _pkg_ folder
- After the installation, open the app and enter the database folder's name for ex. minikraken (which is the folder's name where database exists)
- Select the directory which is the parent directory of minikraken database folder
- And finally browse and open your genome sequences
- Then you can run `kraken --db $DBNAME seqs.fa` by clicking on **kraken-db**
- And, `kraken-translate --db $DBNAME sequences.kraken > sequences.labels` would run by clicking on **kraken-translate**
- The expected output which here is `sequences.labels` would be generated at the database directory
