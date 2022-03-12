// chalk, lib para colorir textos de console.. debug
const chalk = require('chalk');
const fs = require('fs');

//REGEX CAP LINK
/*\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)*/

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const linksExtraidos = texto.match(regex);
  console.log(chalk.green(linksExtraidos));
}


  // _ FAZ IGNORAR PARAMETRO DA FUNÇÃO
function tratarError(error) {
  throw new Error(chalk.red(error.code, 'Arquivo Não encontrado!'))
}


async function pegarArquivos(path){
  const encoding = 'utf-8';
  
  try {
    const texto = await fs.promises.readFile(path,encoding);
    console.log(chalk.green(texto));
  } catch (error) {
    tratarError(error)
  }
  
}
extraiLinks(texto)
//pegarArquivos('./arquivos/texto1.md');

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