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
	//Testando minha se não retorna um número infinito: 	
	it('Se o retorno não é infinito o teste passa: ', ()=> {
		calculadora.findDivision(8,4).should.not.be.Infinity();
	})
	//Verificando se valor passado não é false: 	
	it('Se NaN o teste passa: ', ()=> {
		calculadora.findDivision(0,0).should.be.eql(NaN);
	})
	//Verificando se valor passado não é false: 	
	it('Se não é false o teste passa: ', ()=> {
		calculadora.findDivision(0,0).should.not.be.false();
	})
})
