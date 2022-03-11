const chalk = require('chalk');
const { Console } = require('console');
const fs = require('fs');

function tratarError(error){
  throw new Error(chalk.red(error.code, 'Arquivo Não encontrado!'))
}


function pegaArquivos(path){
  const encoding = 'utf-8'

  // _ FAZ IGNORAR PARAMETRO DA FUNÇÃO
  fs.readFile(path, encoding,(error, data) => {
    if(error){
      tratarError(error)
    }
    console.log(chalk.green(data));
  })

}

pegaArquivos('./arquivos/texto1.md');