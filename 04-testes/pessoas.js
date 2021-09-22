const axios = require('axios')
const URL = 'https://swapi.dev/api/people/'

async function obterPessoas(name){
	
	const response = await axios.get(URL)
	return response.data
}
obterPessoas()


module.exports ={
	obterPessoas
}