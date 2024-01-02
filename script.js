
function showNumberInputs() {
    document.getElementById('numberInputs').style.display = 'block';
    document.getElementById('nameTextarea').style.display = 'none';
    document.querySelector('h2').textContent = ''
}

function showNameTextarea() {
    document.getElementById('nameTextarea').style.display = 'block';
    document.getElementById('numberInputs').style.display = 'none';
    document.querySelector('h2').textContent = ''; // Limpa o <h2>
}

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

    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        // Exibindo o resultado no <h2>
        document.querySelector('h2').innerHTML = `Número sorteado:<b> ${result} </b>`;
    }
}

function generateName() {

    document.querySelector('h2').textContent = '';

    const namesInput = document.querySelector(".input-names").value.trim(); // Pega os nomes inseridos
    const namesArray = namesInput.split(','); // Converte a string em um array de nomes

    // Remove espaços em branco adicionais em cada nome e filtra nomes vazios
    const validNames = namesArray.map(name => name.trim()).filter(name => name !== "");

    // Verifica se há nomes válidos
    if (validNames.length === 0) {
        document.querySelector('h2').textContent = `Digite pelo menos um nome válido`;
        return;
    }

    // Sorteia um nome aleatório
    const randomIndex = Math.floor(Math.random() * validNames.length);
    const randomName = validNames[randomIndex];

    // Exibe o nome sorteado
    document.querySelector('h2').innerHTML = `Nome sorteado: <b>${randomName}</b>`;

}
