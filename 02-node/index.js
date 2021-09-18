 /*
Objetivo:
1- Obter um usuário
2- Obter um número de telefone a partir de id do usuário
3- Obter endereço pelo id
*/

function obterUsuario(callback){
	setTimeout(function(){
		return callback(null, {
			id: 1,
			nome: 'sinval',
			dataNascimento: new Date()
		})
	}, 1000)
	
}

function obterTelefone(idUsuario, callback){
	setTimeout(()=>{
		return callback(null, {
			telefone: '99999-9999',
		    ddd: 73
		})
	}, 1000)
}

function obterEndereco(idUsuario, callback){
	setTimeout(()=>{
		return callback(null, {
			rua: "gracinda lima",
			num: 34
		})
	}, 1000)
	
}

function resolverUsuario(erro, usuario){
	console.log('usuario', usuario)
}
/*A função resolverUsuario é executada após a a obterUsuario
prevenindo erro de callback*/
obterUsuario(function resolverUsuario(erro1, usuario){
		if(erro1){
		console.error("Usuario falhou", error)
		}

/*A função resolverTelefone é executada após a a obterTelefone
prevenindo erro de callback*/
obterTelefone(usuario.id, function resolverTelefone(erro2, telefone){
	if(erro2){
		console.error("Usuario falhou", error)
		return;
	}

/*A função resolverEndereco é executada após a a obterEndereco
prevenindo erro de callback*/
obterEndereco(usuario.id, function resolverEndereco(erro3, endereco){
		if(erro3){
		console.error("Usuario falhou", error)
		return;
	}
	
	console.log(`
       Usuario: ${usuario.nome},
       Telefone: (${telefone.ddd})${telefone.telefone},
       Endereço: ${endereco.rua}, nº ${endereco.num}
       `)
     })
	
   })

})
	