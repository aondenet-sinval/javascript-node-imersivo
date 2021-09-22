const assert = require('assert')
//Assert pode ser usado para testes sem módulos adicionais
const { obterPessoas} = require('./service')
//Nota instalei o mocha globalmente
const nock = require('nock')

describe('Stars Wars', function(){
	/*
	this.beforeAll(()=>{
		const response ={
			nome:'R2-D2',
			peso:'90'
			 
		}
	})*/
	//Subsuite de teste => it
	it('deve buscar o r2d2 com formato correto', async()=>{
		//this.timeout(5000);
		const expected = [{nome: 'R2-D2', peso: '96'}]
		const nomeBase = 'r2-d2';//item a pesquisar
		const resultado = await obterPessoas(nomeBase)
		assert.deepEqual(resultado, expected)
		//assert.equal(resultado, expected)
	})
})
