function sortear() {
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);
    const menorValor = Number(document.querySelector('#menorValorInput').value);
    const maiorValor = Number(document.querySelector('#maiorValorInput').value);

    // Limpar resultados antigos do HTML existente
    const elementoHtmlDoResultValues = document.querySelector('.results');
    elementoHtmlDoResultValues.innerHTML = '';

    let seed = Date.now(); // Semente inicial baseada no timestamp atual

    function random() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }

    for (let i = 0; i < totalResultados; i++) {
        // Gerar um número aleatório entre o menor e o maior valor
        const resultado = Math.floor(random() * (maiorValor - menorValor + 1)) + menorValor;
        console.log(resultado);

        // Gerar um elemento HTML para o resultado
        const elementoHtmlDoResultado = document.createElement('div');
        elementoHtmlDoResultado.classList.add('result-value');
        elementoHtmlDoResultado.innerText = resultado;

        // Adicionar o elemento criado dentro do HTML existente
        elementoHtmlDoResultValues.appendChild(elementoHtmlDoResultado);
    }
}

     elementoHtmlDoResultValues = document.querySelector('.resultado');

