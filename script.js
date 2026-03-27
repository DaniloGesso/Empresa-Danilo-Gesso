function enviarWhats(servico) {
    let numero = "62991889486"; // SEU NÚMERO

    let mensagem = `Olá, gostaria de um orçamento para ${servico}`;
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

function abrirOpcoes() {
    let servico = prompt(
        "Digite o serviço:\n\nRebaixamento\nForro\nGesso\nMolduras\nCortineiras\nSancas\nDivisórias\nReparos"
    );

    if (servico) {
        enviarWhats(servico);
    }
}

function abrirImagem(img) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("imgGrande").src = img.src;
}

function fecharImagem() {
    document.getElementById("modal").style.display = "none";
}

function enviarAvaliacao() {
    alert("Obrigado pela sua avaliação!");
}