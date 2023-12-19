function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value) // valor do input "entre"
    const max = Math.floor(document.querySelector(".input-max").value) // valor do input "e"
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    // Exibindo o resultado no <h2>
    document.querySelector('h2').innerHTML = `Número sorteado:<b> ${result} </b>`;
}