/*const swapi = require('swapi-node');

swapi.get('https://swapi.dev/api/people/').then((result) => {
    console.log(result);
    return result.nextPage();
}).then((result) => {
    console.log(result);
    return result.previousPage();
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});*/
const assert = require('assert')

let vale = 'Oi';
let vale1 = '';
assert.ok(vale)//Teste positivo
//assert.ok(vale1)//Teste negativo