const pegaArquivo = require('../index');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::',()=>{

  it('deve ser uma função', ()=>{
    expect(typeof pegaArquivo).toBe('function');
  })


  it('Deve retornar Array com resultados', async () =>{
    const result = await pegaArquivo('.\test\files\texto1.md')
    expect(result).toEqual(arrayResult)
  }) 
  
})







/* // teste para ver se é uma função
test('deve ser uma função', () => {

    expect(typeof pegaArquivo).toBe('function');
  }); */