const assert = require('assert')
const { obterPessoas} = require('./service')

const nock = require('nock')

describe('Stars Wars', function(){
	this.beforeAll(()=>{
		const response ={
			nome:'R2-D2',
			peso:'90'
			
		}
	})
	it('deve buscar o r2d2 com formato correto', async()=>{
		const expected = [{nome: 'R2-D2', peso: '96'}]
		const nomeBase = 'r2-d2';
		const resultado = await obterPessoas(nomeBase)
		assert.deepEqual(resultado, expected)
	})
})