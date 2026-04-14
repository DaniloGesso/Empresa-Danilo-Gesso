function irServicos() {
    window.location.href = "servicos.html";
}

function abrirOpcoes() {
    document.getElementById("modal").style.display = "flex";
}

window.onclick = function(e) {
    let modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

function enviarWhats() {
    let servico = document.getElementById("servico").value;
    let msg = `Olá, quero orçamento para ${servico}`;
    window.open(`https://wa.me/62991889486?text=${encodeURIComponent(msg)}`);
}

function abrirGaleria(servico) {

    document.getElementById("galeria").style.display = "block";

    let imagens = document.getElementById("imagens");
    imagens.innerHTML = "";

    // QUANTIDADE DE FOTOS (VOCÊ CONTROLA AQUI)
    let total = 11; // pode mudar pra 10, 20, etc

    for (let i = 1; i <= total; i++) {
        let img = document.createElement("img");
        img.src = `img/${servico}${i}.jpg`;
        imagens.appendChild(img);
    }

    let msg = `Olá, quero orçamento de ${servico}`;
    document.getElementById("whats").href =
        `https://wa.me/62991889486?text=${encodeURIComponent(msg)}`;
}
function fecharGaleria() {
    document.getElementById("galeria").style.display = "none";
}

function enviarAvaliacao() {
    let texto = document.getElementById("avaliacaoTexto").value;
    if (texto === "") return;

    let p = document.createElement("p");
    p.innerText = "⭐ ⭐ ⭐ ⭐ ⭐ - " + texto;

    document.getElementById("listaAvaliacoes").appendChild(p);
    document.getElementById("avaliacaoTexto").value = "";
}
