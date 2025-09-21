var argumentsLength = function(...args) {
    return args.meuReduce(acumula);
	/*vou pegar os argumentos em rest, que acho que acaba transformando tudo em função */
};
/*aprendi agora que uma função callback é uma função que podemos chamar depois, nesse contexto o callback é a minha função acumuladora
 * para ela eu vou passar os argumentos */
Array.prototype.meuReduce = function(callback, valorInicial){
	/*array agora recebe o contexto no qual a função é rodada, no caso recebe Array*/
	const array = this;
	let acumulador = valorInicial;
	let i = 0;
	/*se não for fornecido nenhum valor para o parâmetro ValorInicial*/
	if (acumulador === undefined) {
		acumulador = array[0];
		i = 1;
		};
	for (;i<array.length; i++){
		acumulador = callback(acumulador, array[i], i, array);
	};

	return acumulador;
};


var acumula = function(acumulador, valorAtual, index, array){
	acumulador = acumulador + valorAtual;
	return acumulador;
};

console.log(argumentsLength(1,2,3,4,5)); // 5