const pesosEquipamentos = {
    1: [15, 16, 17, 18], // Pesos para Equipamento 1
    2: [14, 15, 16, 17], // Pesos para Equipamento 2
    3: [13, 14, 15, 16]  // Pesos para Equipamento 3
};

function registrar() {
    const equipamento = document.getElementById('equipamento').value;
    const ampola = document.getElementById('ampola').value;
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const pesoAtual = parseFloat(document.getElementById('peso').value);
    const pesoOriginal = pesosEquipamentos[equipamento][ampola - 1];

    let mensagem = '';
    let classe = '';

    if (pesoAtual > pesoOriginal + 14) {
        mensagem = 'Trocar a ampola: peso atual muito alto. Registro não salvo.';
        classe = 'error';
    } else if (pesoAtual < pesoOriginal - 8) {
        mensagem = 'Trocar a ampola: peso atual muito baixo. Registro não salvo.';
        classe = 'error';
    } else {
        // Armazenar os dados no localStorage
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.push({ equipamento, ampola, nome, data, pesoAtual });
        localStorage.setItem('registros', JSON.stringify(registros));

        mensagem = 'Ampola em condições normais. Registro salvo com sucesso.';
        classe = 'success';
    }

    // Exibir resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensagem;
    resultadoDiv.className = classe;
}