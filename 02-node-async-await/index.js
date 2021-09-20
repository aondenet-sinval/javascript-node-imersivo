 /*
Objetivo:
1- Obter um usuário
2- Obter um número de telefone a partir de id do usuário
3- Obter endereço pelo id
*/
//modulo interno do nodejs para promises
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
	//resolve em caso de sucesso
	//reject em caso de erro
	return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
		   //return reject(new Error('Quebrou no usuario'))
		   return resolve({
			      id: 1,
			      nome: 'sinval',
			      dataNascimento: new Date()
	        })
	    }, 500)					   
	})	
}

function obterTelefone(idUsuario){
	return new Promise(function resolvePromise(resolve, reject){
    	setTimeout(()=>{
		return resolve({
			telefone: '99999-9999',
		    ddd: 73
		})
	}, 500)					   
   })

}

function obterEndereco(idUsuario, callback){
	setTimeout(()=>{
		return callback(null, {
			rua: "gracinda lima",
			num: 34
		})
	}, 500)
	
}

//Adicionando async na função para o retorno da promise
// chamando o método main()
main()
async function main(){
	try{
		console.time('medindo-promise')
		const usuario = await obterUsuario()
		//const telefone = await obterTelefone(usuario.id)
		//const endereco = await obterEnderecoAsync(usuario.id)
		//Usando promise em segundo plano melhorando a performance
		//** com Promise.all => 500 ms de diferença.
		const resultado = await Promise.all([
			obterTelefone(usuario.id),
			obterEnderecoAsync(usuario.id)
		])
		const endereco = resultado[1]
		const telefone = resultado[0]
		
		console.log(`
			Nome: ${usuario.nome}
			Telelefone: (${telefone.ddd}) ${telefone.telefone}
			Endereço: ${endereco.rua},${endereco.num},
`)
		console.timeEnd('medindo-promise')
	}catch(error){
		console.error('Ops mano', error)
	}
}