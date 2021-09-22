const { obterPessoas } = require('./pessoas')
/*
Objetivo do reduce: reduzir a um valor final
*/

async function viewPesos(){
	try{
		const { results } = await obterPessoas('a')
		const pesos = results.map(item => parseInt(item.height))
		//console.log('pesos', pesos)
		
		const total = pesos.reduce((anterior, proximo)=>{
			return anterior + proximo;
		})
		
		console.log('total', total)
	}catch(error){
		console.log('Falhou mano', error)
}
	
}

viewPesos()

module.exports = viewPesos