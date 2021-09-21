/*
Trabalhando com Arrays:
Consumindo dados de StarWars SWAPI
*/
const axios = require('axios')
const URL = 'https://swapi.dev/api/people/'

async function obterPessoas(name){
	//const url = '${URL}/?search=${name}'
	const response = await axios.get(URL)
	return response.data
}
obterPessoas()/*
.then(function (resultado){
	console.log('resultado', resultado)
})
.catch(function(error){
	console.error("ops fail", error)
})
*/
module.exports ={
	obterPessoas
}