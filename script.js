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

    // funcao de checar o jogo pra ver o vencedor

    if (jogadorAtual === "X") jogadorAtual = jogador2;
    else jogadorAtual = "X";
    
}

function checarJogo() {
    
}