const prompt = require("prompt-sync")({ sigint: true });

var map = function(arr, fn) {
var array = [];
for (i = 0; i < arr.length; i++){
	 array.push(fn(arr[i]))
}
return array; 
};

// Recebe uma string do usuário
let entrada = prompt("Digite os elementos da array separados por vírgula:");

// Converte a string em array
let arrayConvertida = entrada.split(",");

let fn = prompt("Digite a função de mapeamento (ex: x => x * 2):");

// Converte a string da função em uma função real
let funcaoMapeamento = eval(fn);

// Chama a função com a array
console.log(map(arrayConvertida, funcaoMapeamento));


