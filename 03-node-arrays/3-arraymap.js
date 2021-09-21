const service = require('./pessoas')

Array.prototype.meuMap = function(callback){
	const novoArrayMapeado = []
	for(let indice = 0; indice <= this.length -1; indice ++){
		const resultado = callback(this[indice], indice)
		novoArrayMapeado.push(resultado);
	}
	return novoArrayMapeado;
}


async function main (){
	try{
		const result = await service.obterPessoas('a');
		
		const names = result.results.meuMap(function(pessoa, indice){
			return pessoa.name;
		})
		console.log('Names: ', names);
	}catch(error){
		console.error('falhou mano', error);
   }
}

main()