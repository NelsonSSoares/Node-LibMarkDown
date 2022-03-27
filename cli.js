const chalk = require('chalk');
const pegaArquivos = require('./index')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivos(caminhoDeArquivo[2])
    console.log(chalk.yellow('lista de Links'), resultado)
}

processaTexto(caminho)
//console.log(pegaArquivos(caminho[2]))