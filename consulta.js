window.onload = function() {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const registrosDiv = document.getElementById('registros');

    if (registros.length === 0) {
        registrosDiv.textContent = 'Nenhum registro encontrado.';
        return;
    }

    let html = '';
    registros.forEach(registro => {
        html += `
            <div class="registro">
                <strong>Data:</strong> ${registro.data} <br>
                <strong>Equipamento:</strong> ${registro.equipamento} <br>
                <strong>Ampola:</strong> ${registro.ampola} <br>
                <strong>Nome:</strong> ${registro.nome} <br>
                <strong>Peso:</strong> ${registro.pesoAtual} g <br>
            </div>
        `;
    });

    registrosDiv.innerHTML = html;
}