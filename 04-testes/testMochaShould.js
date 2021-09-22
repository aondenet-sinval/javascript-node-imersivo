const should = require('should')
const findSoma = require('./findSoma')
//Função findSoma(a,b)
const findMultply = require('./findMultply')
//Função findMultply(a,b)

describe('find list', ()=>{
	//Testando minhas funções de soma: 
	it('Testando retorno da soma de valores: ',()=>{
		findSoma(2,8).should.be.equal(10)
	})
	//Testando minhas funções de multiplicação: 	
	it('Testando mutiplicação: ', ()=> {
		findMultply(2,8).should.be.equal(16)
	})
})
