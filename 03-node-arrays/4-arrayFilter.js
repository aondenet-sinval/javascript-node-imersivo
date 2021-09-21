const { obterPessoas } = require('./pessoas')
/*
Filtrando resultados de arrays:
Exemplo: 
const item ={
   nome: 'Snval',
   telefone: 999,
   idade: 12,
}
const {nome} = item
console.log(nome)//Filtra e retorna somente o nome.
//ou
const {nome, telefone} = item
console.log(nome,telefone)//Filtra e retorna o nome e telefone.
*/




async function main (){
	try{
		const { results } = await obterPessoas('a')
		const familiaLars = results.filter(function(item){
			//boleano false remove true mantem
			const result = item.name.toLowerCase().indexOf('lars')!== -1;
			//retorna somente lars
			return result
		})
		const names = familiaLars.map((pessoa)=>pessoa.name)
		console.log('Names: ', names); 
		
	}catch(error){
		console.error('falhou mano', error);
   }
}

main()