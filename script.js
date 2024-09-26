const quadrados = document.getElementsByClassName("bloco");
const tabelaJogo = document.querySelector(".jogo");
let jogadorAtual = "X";
let jogador2 = "O";
let vitoriasJogadorX = 0;
let vitoriasJogadorO = 0;

for (let i = 0; i < quadrados.length; i++) quadrados[i].addEventListener("click", adicionarFuncao);

function adicionarFuncao(event) {
    colocarLetra(event.target);
}

function colocarLetra(quadrado) {
    if (quadrado.textContent === "X" || quadrado.textContent === "O") {
        alert("Ja tem uma letra");
        return;
    }

    quadrado.textContent = jogadorAtual;

    checarJogo();

    if (jogadorAtual === "X") jogadorAtual = jogador2;
    else jogadorAtual = "X";
    
}

function checarJogo() {
    checarTabuleiro(0, 1, 2);
}

function checarTabuleiro(a, b, c) {
    if (quadrados[a].textContent === "X" && quadrados[b].textContent === "X" && quadrados[c].textContent === "X") {
        alert("O jogador " + jogadorAtual + " é o vencedor!");
    }
}