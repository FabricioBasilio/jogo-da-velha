const quadrados = document.getElementsByClassName("bloco");
const tabelaJogo = document.querySelector(".jogo");
const elementoMensagem = document.querySelector(".mensagem");
const elementoMensagemSpan = document.querySelector(".mensagem-jogador");
const elementoMensagemEmpate = document.querySelector(".mensagem-empate");
const botaoReiniciar = document.querySelector(".botao-reiniciar");
const secaoBotoesPrimeiroJogador = document.querySelector(".botoes-primeiro-jogador");
const botaoSelecionarJogadorX = document.querySelector("#botao-selecionar-jogador-x");
const botaoSelecionarJogadorO = document.querySelector("#botao-selecionar-jogador-o");
const elementoMensagemPrimeiroJogador = document.querySelector(".mensagem-primeiro-jogador");
const elementoMensagemPrimeiroJogadorSpan = document.querySelector(".mensagem-primeiro-jogador-span");


let jogadorAtual = null;
// let vitoriasJogadorX = 0;
// let vitoriasJogadorO = 0;
let preenchidos = 0;
let jogoAcabou = false;

botaoSelecionarJogadorX.addEventListener("click", selecionarJogador);
botaoSelecionarJogadorO.addEventListener("click", selecionarJogador);

botaoReiniciar.addEventListener("click", reiniciarJogo);

function adicionarFuncao(event) {
    elementoMensagemPrimeiroJogador.classList.remove("mostrar-na-tela");
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
        jogadorAtual = "O";
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

        if (jogadorAtual === "X") elementoMensagemSpan.classList.add("cor-letra-x");
        else elementoMensagemSpan.classList.add("cor-letra-o");

        elementoMensagemSpan.textContent = jogadorAtual;

        elementoMensagem.classList.add("mostrar-na-tela");

        botaoReiniciar.classList.add("mostrar-na-tela");

        jogoAcabou = true;

        removerEventos();
    }
}

function checarEmpate() {
    if (preenchidos === 9) {
        elementoMensagemEmpate.classList.add("mostrar-na-tela");
        botaoReiniciar.classList.add("mostrar-na-tela");

        removerEventos();
    }

}

function removerEventos() {
    for (let i = 0; i < quadrados.length; i++) quadrados[i].removeEventListener("click", adicionarFuncao);
}

function reiniciarJogo() {
    jogadorAtual = null;
    preenchidos = 0;
    jogoAcabou = false;

    botaoReiniciar.classList.remove("mostrar-na-tela");
    elementoMensagem.classList.remove("mostrar-na-tela");
    elementoMensagemSpan.classList.remove("cor-letra-x");
    elementoMensagemSpan.classList.remove("cor-letra-o");
    elementoMensagemEmpate.classList.remove("mostrar-na-tela");
    elementoMensagemPrimeiroJogadorSpan.classList.remove("cor-letra-x");
    elementoMensagemPrimeiroJogadorSpan.classList.remove("cor-letra-o");

    secaoBotoesPrimeiroJogador.classList.remove("remover-da-tela");

    secaoBotoesPrimeiroJogador.classList.add("mostrar-secao-na-tela");

    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].classList.remove("cor-letra-x");
        quadrados[i].classList.remove("cor-letra-o");
        quadrados[i].textContent = "";
    }

    removerEventos();
}

function adicionarEventos() {
    for (let i = 0; i < quadrados.length; i++) quadrados[i].addEventListener("click", adicionarFuncao);

}

function selecionarJogador(e) {
    if (e.target.textContent === "X") {
        jogadorAtual = "X";
        elementoMensagemPrimeiroJogadorSpan.textContent = jogadorAtual;
        elementoMensagemPrimeiroJogadorSpan.classList.add("cor-letra-x");
    }
    else {
        jogadorAtual = "O";
        elementoMensagemPrimeiroJogadorSpan.textContent = jogadorAtual;
        elementoMensagemPrimeiroJogadorSpan.classList.add("cor-letra-o");
    }

    secaoBotoesPrimeiroJogador.classList.add("remover-da-tela");
    secaoBotoesPrimeiroJogador.classList.remove("mostrar-secao-na-tela");

    elementoMensagemPrimeiroJogador.classList.add("mostrar-na-tela");

    adicionarEventos();
}