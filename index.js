// chalk, lib para colorir textos de console.. debug
const chalk = require('chalk');
const { exec } = require('child_process');
const fs = require('fs');

//REGEX CAP LINK
/*\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)*/



function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while((temp = regex.exec(texto)) !== null){
    arrayResultados.push({[temp[1]]: temp[2]})
  }
  return arrayResultados
  //console.log(chalk.green(arrayResultados));
}


  // _ FAZ IGNORAR PARAMETRO DA FUNÇÃO
function tratarError(error) {
  throw new Error(chalk.red(error.code, 'Arquivo Não encontrado!'))
}


async function pegarArquivos(path){
  const encoding = 'utf-8';
  
  try {
    const texto = await fs.promises.readFile(path,encoding);
    console.log(extraiLinks(texto));
  } catch (error) {
    tratarError(error)
  }
  
}

pegarArquivos('./arquivos/texto1.md');

/* [
  {
    [nomeDoLink]: (url)
  
  }
]
 */










/* 
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
 */

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