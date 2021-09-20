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
	    }, 1000)					   
	})	
}

function obterTelefone(idUsuario){
	return new Promise(function resolvePromise(resolve, reject){
    	setTimeout(()=>{
		return resolve({
			telefone: '99999-9999',
		    ddd: 73
		})
	}, 1000)					   
   })

}

function obterEndereco(idUsuario, callback){
	setTimeout(()=>{
		return callback(null, {
			rua: "gracinda lima",
			num: 34
		})
	}, 1000)
	
}

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function(usuario){
	     return obterTelefone(usuario.id)
	     .then(function resolverTelefone(result){
			 return{
				 usuario: {
					 nome: usuario.nome,
					 id: usuario.id
				 },
				 telefone: result
			 }
		 })
   })
    .then(function(resultado){
	const endereco = obterEnderecoAsync(resultado.usuario.id)
	return endereco.then(function resolverEndereco(result){
		return{
			usuario: resultado.usuario,
			telefone: resultado.telefone,
			endereco: result
		}
	})
    })
	.then(function(resultado){
	//console.log('resultado:', resultado);
	console.log(`
	Nome: ${resultado.usuario.nome}
	Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
	Endereço: ${resultado.endereco.rua}, ${resultado.endereco.num}
	`);
    })
    .catch(function(error){
	console.error('Ops', error);
} )