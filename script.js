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
    if (quadrado.textContent) {
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
    checarTabuleiro(3, 4, 5);
    checarTabuleiro(6, 7, 8);
    checarTabuleiro(0, 4, 8);
    checarTabuleiro(6, 4, 2);
    checarTabuleiro(0, 3, 6);
    checarTabuleiro(1, 4, 7);
    checarTabuleiro(2, 5, 8);
}

function checarTabuleiro(a, b, c) {
    if ((quadrados[a].textContent === "X" && quadrados[b].textContent === "X" && quadrados[c].textContent === "X") || (quadrados[a].textContent === "O" && quadrados[b].textContent === "O" && quadrados[c].textContent === "O")) {
        alert("O jogador " + jogadorAtual + " é o vencedor!");
    }
}