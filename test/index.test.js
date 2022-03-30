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
    const result = await pegaArquivo('C:\Users\estre\Desktop\Projetos e Aulas\Alura\nodeJS\mdLib\test\files\texto1.md')
    expect(result).toEqual(arrayResult)
  }) 
  it('Deve retornar mensagem: "Não Há Links"', async ()=>{
    const result = await pegaArquivo('C:\Users\estre\Desktop\Projetos e Aulas\Alura\nodeJS\mdLib\test\files\texto.md')
    expect(result).rejects.toThrow('não há links');
  })
})







/* // teste para ver se é uma função
test('deve ser uma função', () => {

    expect(typeof pegaArquivo).toBe('function');
  }); */