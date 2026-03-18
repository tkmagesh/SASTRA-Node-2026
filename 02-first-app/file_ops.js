const fs = require('node:fs')

function getFileContents(){
    const fileContents = fs.readFileSync('./data.txt', {encoding : 'utf-8'})
    return fileContents
}

module.exports = { 
    getFileContents : getFileContents 
}
