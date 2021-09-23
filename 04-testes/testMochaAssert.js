const assert = require('assert')
//Importando funções para teste
const calculadora = require('./calculadora')


describe('find list', ()=>{
	//Testando minha função de soma: 
	it('Testando retorno da soma de valores: ',()=>{
		const soma =calculadora.findSoma(2,8)
		assert.equal(soma, 10)
	})
	//Testando minha função de subtração: 
	it('Testando retorno da subtraçã de valores: ',()=>{
		const subt =calculadora.findSub(12,8)
		assert.equal(subt, 4)
	})
	//Testando minha função de soma: 
	it('Testando retorno da divisão de valores: ',()=>{
		const divis =calculadora.findDivision(20,8)
		assert.equal(divis, 2.5)
	})
	//Testando minha função de soma:2
	it('Testando retorno da multiplicação de valores: ',()=>{
		const multp =calculadora.findMultply(2,8)
		assert.equal(multp, 16)
	})
})

