// ============================================================
// VARIÁVEIS GLOBAIS
// ============================================================

let tabuleiro = [];
let naviosRestantes = 3;
let tentativas = 0;
let jogoAtivo = true;

const elTabuleiro = document.querySelector('#tabuleiro');
const elMensagem = document.querySelector('#mensagem');
const btnReiniciar = document.querySelector('#btn-reiniciar');
const elTentativas = document.querySelector('#tentativas');


// ============================================================
// CRIAR TABULEIRO
// ============================================================

function criarTabuleiro(tamanho) {
    const novoTabuleiro = [];

    for (let i = 0; i < tamanho; i++) {
        const linha = [];

        for (let j = 0; j < tamanho; j++) {
            linha.push(0);
        }

        novoTabuleiro.push(linha);
    }

    return novoTabuleiro;
}


// ============================================================
// POSICIONAR NAVIOS
// ============================================================

function posicionarNavios() {
    tabuleiro[4][3] = 1;
    tabuleiro[0][2] = 1;
    tabuleiro[2][1] = 1;
}


// ============================================================
// ATIRAR
// ============================================================

function atirar(lin, col) {
    const pos = tabuleiro[lin][col];

    // posição já atingida
    if (pos === 2 || pos === 3) {
        return 'Posição já atingida!';
    }

    // acertou navio
    if (pos === 1) {
        tabuleiro[lin][col] = 2;

        naviosRestantes--;
        tentativas++;

        // vitória
        if (naviosRestantes === 0) {
            jogoAtivo = false;
            return '🎉 Vitória! Você afundou todos os navios!';
        }

        return '🔥 Acertou!';
    }

    // água
    tabuleiro[lin][col] = 3;
    tentativas++;

    return '🌊 Água!';
}


// ============================================================
// RENDERIZAR TABULEIRO
// ============================================================

function renderizarTabuleiro() {
    elTabuleiro.innerHTML = '';

    for (let linha = 0; linha < tabuleiro.length; linha++) {

        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {

            const celula = document.createElement('div');

            const valor = tabuleiro[linha][coluna];

            celula.dataset.linha = linha;
            celula.dataset.coluna = coluna;

            // classes visuais
            if (valor === 2) {
                celula.classList.add('acerto');

            } else if (valor === 3) {
                celula.classList.add('erro');
            }

            // evento de clique
            celula.addEventListener('click', function () {

                if (!jogoAtivo) return;

                const l = Number(celula.dataset.linha);
                const c = Number(celula.dataset.coluna);

                const mensagem = atirar(l, c);

                elMensagem.textContent = mensagem;

                elTentativas.textContent =
                    `Tentativas: ${tentativas}`;

                renderizarTabuleiro();
            });

            elTabuleiro.appendChild(celula);
        }
    }
}


// ============================================================
// INICIAR JOGO
// ============================================================

function iniciarJogo() {

    tabuleiro = criarTabuleiro(5);

    naviosRestantes = 3;
    tentativas = 0;
    jogoAtivo = true;

    posicionarNavios();

    elMensagem.textContent =
        'Clique em uma célula para atirar.';

    elTentativas.textContent =
        'Tentativas: 0';

    renderizarTabuleiro();
}


// ============================================================
// EVENTOS
// ============================================================

btnReiniciar.addEventListener('click', function () {
    iniciarJogo();
});


// ============================================================
// INÍCIO DO JOGO
// ============================================================

iniciarJogo();