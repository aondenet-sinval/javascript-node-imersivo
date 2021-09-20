/*
Trabalhando com eventos:
Monitorando eventos com EventEmitter
*/
const EventEmitter = require('events')
class MeuEmisssor extends EventEmitter{
	
}
//1º exemplo:
/*
const meuEmissor = new MeuEmisssor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function(click){
	console.log('um usuario clicou', click)
})

meuEmissor.emit(nomeEvento, 'na barr de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

let contagem = 0;
setInterval(function(){
	meuEmissor.emit(nomeEvento, 'no ok'+" "+ (contagem ++)+ ' vezes')
}, 1000)
*/
//2º exemplo:
/*
const stdin = process.openStdin()
//Pegando o que for digitado
stdin.addListener('data', function(value){
	//Mensagem após usuário digitar qualquer coisa + tc Enter:
	console.log(`você digitou: ${value.toString().trim()}`)
})
*/
//-------
//3º exemplo:
/*
const stdin = process.openStdin()
function main(){
	return new Promise(function(resolve,reject){
		stdin.addListener('data', function(value){
			return resolve(value)
		})
	})
}
main().then(function(resultado){
	//Pegando o que for digitado
	//Com promise só retorna uma vez
	console.log('resultado', resultado.toString())
})
*/