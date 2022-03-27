const pegaArquivos = require('./index')

const caminho = process.argv;

console.log(pegaArquivos(caminho[2]))