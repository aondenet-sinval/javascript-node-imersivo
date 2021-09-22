const swapi = require('swapi-node');

swapi.get('https://swapi.dev/api/people/').then(function resultado(result) {
	const valorPessoaName = result.results.name;
	const resultar =valorPessoaName.filter();
    console.log(resultar);
    //return result.nextPage();
}).catch((err) => {
    console.log(err);
});