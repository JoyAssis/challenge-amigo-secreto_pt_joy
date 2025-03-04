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

