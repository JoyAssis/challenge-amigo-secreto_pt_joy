let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        input.value = "";
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    // Cria uma cópia dos índices dos amigos
    const indices = amigos.map((_, i) => i);
    let sorteados = [];

    // Função para embaralhar um array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // sortear amigos sem que ninguém tire o próprio nome
    let valid = false;
    while (!valid) {
        sorteados = shuffleArray([...indices]); // Cria uma cópia e embaralha
        valid = sorteados.every((sorteado, i) => sorteado !== indices[i]);
    }

    // Exibindo os resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    amigos.forEach((nome, i) => {
        const li = document.createElement("li");
        li.textContent = `${nome} tirou ${amigos[sorteados[i]]}`;
        resultado.appendChild(li);
    })
}