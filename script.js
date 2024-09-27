const quadrados = document.getElementsByClassName("bloco");
const tabelaJogo = document.querySelector(".jogo");
let jogadorAtual = "X";
let jogador2 = "O";
let vitoriasJogadorX = 0;
let vitoriasJogadorO = 0;
let preenchidos = 0;
let jogoAcabou = false;

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

    preenchidos++;

    checarJogo();

    if (!jogoAcabou) checarEmpate();

    if (jogadorAtual === "X") {
        quadrado.classList.add("cor-letra-x");
        jogadorAtual = jogador2;
    }
    else {
        quadrado.classList.add("cor-letra-o");
        jogadorAtual = "X";
    }
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
        jogoAcabou = true;
        removerEventos();
    }
}

function checarEmpate() {
    if (preenchidos === 9) alert("Empate!");
}

function removerEventos() {
    for (let i = 0; i < quadrados.length; i++) quadrados[i].removeEventListener("click", adicionarFuncao);
    alert("Elementos removidos");
}