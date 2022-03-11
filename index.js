// chalk, lib para colorir textos de console.. debug
const chalk = require('chalk');
const fs = require('fs');

function tratarError(error) {
  throw new Error(chalk.red(error.code, 'Arquivo Não encontrado!'))
}


function pegarArquivos(path){
  const encoding = 'utf-8';
  fs.promises.readFile(path,encoding)
  .then((text)=>{ 
    console.log(chalk.green(text))
  })
  .catch((error)=>{
    tratarError(error)
  })
}

pegarArquivos('./arquivos/texto1.md');
/* 
function pegaArquivos(path) {
  const encoding = 'utf-8'

  // _ FAZ IGNORAR PARAMETRO DA FUNÇÃO
  fs.readFile(path, encoding, (error, data) => {
    if (error) {
      tratarError(error)
    }
    console.log(chalk.green(data));
  })

}

pegaArquivos('./arquivos/texto1.md'); */