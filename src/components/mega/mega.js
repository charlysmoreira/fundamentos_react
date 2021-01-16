
function gerarNumeroNaoRepetido(min, max, vetor){
    let valorCorrente = parseInt(Math.random()*(max - min)) + min;
    return vetor.includes(valorCorrente) ? gerarNumeroNaoRepetido(min, max, vetor) : valorCorrente
}

function gerarNumero(qtd) {
    const numeros = Array(qtd).fill(0).reduce(
        (nums) => {
            const novoNumero = gerarNumeroNaoRepetido(1, 60, nums);
            return [...nums, novoNumero]
        }, 
        [])
        .sort((n1, n2) => n1 - n2)
    return numeros
}
console.log(gerarNumero(7));