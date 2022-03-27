const chalk = require('chalk');
const pegaArquivos = require('./index')
const validaURLs = require('./http-validacao');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivos(caminhoDeArquivo[2])
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('Links Validados'), validaURLs(resultado));
    }else{
        console.log(chalk.yellow('lista de Links'), resultado)
    }
}

processaTexto(caminho)
//console.log(pegaArquivos(caminho[2]))