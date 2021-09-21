const { obterPessoas } = require('./pessoas')
/*
Filtrando resultados de arrays:
.
*/

Array.prototype.meuFiltro = function(callback){
	const lista =[]
	for(index in this){
		const item = this[index]
		const result = callback(item, index, this)
		if(!result) continue;
		lista.push(item)
	}
	return lista;
}


async function main (){
	try{
		const { results } = await obterPessoas('a')
		
		const familiaLars = results.meuFiltro((item, index, lista) =>{
			console.log(`index: ${index}`, lista.length)
		return item.name.toLowerCase().indexOf('lars') !== -1
		})
		
		const names = familiaLars.map((pessoa)=>pessoa.name)
		console.log('Names: ', names); 
	}catch(error){
		console.error('falhou mano', error);
    }
}


main()