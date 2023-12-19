function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value) // valor do input "entre"
    const max = Math.floor(document.querySelector(".input-max").value) // valor do input "e"

    //Verifica se min ou max são menores que zero
    if (min < 0 || max < 0) {
        document.querySelector('h2').textContent = `Digite um número válido`;
        return;
    }

    //Verifica se min é igual a max
    if (min === max) {
        document.querySelector('h2').textContent = `Digite um número válido`;
        return;
    }

    else{
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    // Exibindo o resultado no <h2>
    document.querySelector('h2').innerHTML = `Número sorteado:<b> ${result} </b>`;
}
}
