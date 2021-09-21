const people = require('./pessoas')

async function main(){
	try{
		const result = await people.obterPessoas('a')
		/*
		const names1 = []
		//Laço for
		console.time('for1')
		for(let i = 0; i <= result.results.length -1; i++){
			const pessoa = result.results[i]
			names1.push(pessoa.name)
		}
		console.log('names', names1)		
		//-Medindo tempo de execução com console.time()
		console.timeEnd('for1')
		*/
		//Laço for in
		/*
		console.time('for2')
		const names2 = []
		for(let i in result.results){
			const pessoa2 = result.results[i]
			names2.push(pessoa2.name)
		}
		console.log('names', names2)
		console.timeEnd('for2')
		*/
		//Laço for of
		const names3 =[]
		for(pessoa of result.results){
			names3.push(pessoa.name)
		console.log('names3', names3)
		}
	}catch{
		console.error('erro interno'. error)
   }
}
main()