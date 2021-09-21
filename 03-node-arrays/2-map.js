const service = require('./pessoas')

async function main (){
	try{
		const result = await service.obterPessoas('a')
		/*
		//const names =[]
	
			result.results.forEach(function(item){
				names.push(item.name)
			})
			*/
	/*	
	//Exemplo usando map
	const names = result.results.map(function(pessoa){
		return pessoa.name
	})
	*/
	//Exemplo usando map com  arrow function
	const names = result.results.map((pessoa) => pessoa.name)
		console.log('Names: ', names)
	}catch(error){
		console.error('falhou mano', error)
   }
}

main()