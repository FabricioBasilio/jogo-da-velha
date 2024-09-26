const quadrados = document.getElementsByClassName("bloco");
const tabelaJogo = document.querySelector(".jogo");
let jogadorAtual = "X";
let jogador2 = "O";
let vitoriasJogadorX = 0;
let vitoriasJogadorO = 0;

for (let i = 0; i < quadrados.length; i++) quadrados[i].addEventListener("click", adicionarFuncao);

function adicionarFuncao(event) {
    console.log(event.target);
}