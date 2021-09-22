const should = require('should')
//Importando funções para teste
const calculadora = require('./calculadora')


describe('find list', ()=>{
	//Testando minha função de soma: 
	it('Testando retorno da soma de valores: ',()=>{
		calculadora.findSoma(2,8).should.be.equal(10)
	})
	//Testando minha função de multiplicação: 	
	it('Testando mutiplicação: ', ()=> {
		calculadora.findMultply(2,8).should.be.equal(16)
	})
	//Testando minha função de subtração: 	
	it('Testando subtração: ', ()=> {
		calculadora.findSub(8,4).should.be.equal(4)
	})
	//Testando minha função de divisão: 	
	it('Testando divisão: ', ()=> {
		calculadora.findDivision(8,4).should.be.equal(2)
	})
})
