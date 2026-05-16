// ============================================================
// VARIÁVEIS GLOBAIS
// ============================================================

// Esta variável guarda o tabuleiro inteiro do jogo.
// Ela começa como um array vazio porque o tabuleiro ainda será criado pela função criarTabuleiro.
// Depois, ela vai receber uma matriz, ou seja, um array que possui outros arrays dentro.
// Cada array interno representa uma linha do tabuleiro.
// Cada número dentro dessas linhas representa o estado de uma célula:
// 0 = água ainda não clicada.
// 1 = navio escondido.
// 2 = navio atingido pelo jogador.
// 3 = água que já recebeu um tiro.
let tabuleiro = [];

// Esta variável guarda quantos navios ainda faltam ser encontrados.
// O jogo começa com 3 navios, por isso o valor inicial é 3.
// Cada vez que o jogador acerta um navio, esse número diminui.
let naviosRestantes = 3;

// Esta variável conta quantas tentativas válidas o jogador já fez.
// Ela começa em 0 porque, ao carregar a página, o jogador ainda não clicou em nenhuma célula.
// Quando o jogador atira em uma posição nova, esse número aumenta.
let tentativas = 0;

// Esta variável controla se o jogo ainda está em andamento.
// Quando jogoAtivo é true, os cliques nas células são aceitos.
// Quando jogoAtivo vira false, os cliques deixam de alterar o jogo.
// Isso acontece quando o jogador vence a partida.
let jogoAtivo = true;

// Aqui o JavaScript procura, dentro do index.html, o elemento que possui id="tabuleiro".
// O document.querySelector permite selecionar um elemento da página usando um seletor CSS.
// O símbolo # indica que estamos procurando pelo id do elemento.
// Guardamos esse elemento em elTabuleiro para conseguir colocar as células dentro dele depois.
const elTabuleiro = document.querySelector('#tabuleiro');

// Aqui pegamos o elemento com id="mensagem".
// Esse elemento será usado para mostrar textos para o jogador, como "Acertou!" ou "Água!".
const elMensagem = document.querySelector('#mensagem');

// Aqui pegamos o botão com id="btn-reiniciar".
// Mais abaixo, vamos colocar um evento de clique nesse botão para reiniciar a partida.
const btnReiniciar = document.querySelector('#btn-reiniciar');

// Aqui pegamos o elemento com id="tentativas".
// Esse elemento será usado para mostrar quantos tiros válidos o jogador já deu.
const elTentativas = document.querySelector('#tentativas');


// ============================================================
// CRIAR TABULEIRO
// ============================================================

function criarTabuleiro(tamanho) {
    // Esta função cria uma matriz quadrada para ser usada como tabuleiro.
    // O parâmetro tamanho define quantas linhas e quantas colunas essa matriz terá.
    // Se tamanho for 5, por exemplo, o tabuleiro terá 5 linhas e 5 colunas.

    // Cria um array vazio que vai receber todas as linhas do tabuleiro.
    // No final da função, esse array será uma matriz completa.
    const novoTabuleiro = [];

    // Este primeiro for cria as linhas da matriz.
    // A variável i representa o número da linha que está sendo criada.
    // O laço começa em 0 e continua até criar a quantidade de linhas definida por tamanho.
    for (let i = 0; i < tamanho; i++) {

        // Cria um array vazio para representar uma linha do tabuleiro.
        // Dentro desta linha serão colocadas as colunas.
        const linha = [];

        // Este segundo for cria as colunas dentro da linha atual.
        // A variável j representa o número da coluna que está sendo criada.
        // Para cada linha, esse for adiciona a quantidade de colunas definida por tamanho.
        for (let j = 0; j < tamanho; j++) {

            // Adiciona o valor 0 dentro da linha.
            // O método push coloca um novo item no final do array.
            // O valor 0 significa "água ainda não clicada".
            // Assim, todas as posições começam vazias antes dos navios serem posicionados.
            linha.push(0);
        }

        // Depois que a linha recebeu todas as colunas, ela é adicionada ao tabuleiro.
        // Cada linha adicionada aqui vira uma nova linha dentro da matriz novoTabuleiro.
        novoTabuleiro.push(linha);
    }

    // Devolve a matriz pronta para quem chamou a função.
    // Assim, iniciarJogo consegue guardar esse resultado dentro da variável tabuleiro.
    return novoTabuleiro;
}


// ============================================================
// POSICIONAR NAVIOS
// ============================================================

function posicionarNavios() {
    // Esta função coloca os navios em posições fixas da matriz.
    // Cada posição da matriz é acessada usando dois índices: linha e coluna.
    // O primeiro colchete indica a linha.
    // O segundo colchete indica a coluna.
    // O valor 1 significa que existe um navio escondido naquela célula.

    // Coloca um navio na linha 4, coluna 3.
    // Lembre que os índices começam em 0, então linha 4 é a quinta linha visual do tabuleiro.
    tabuleiro[4][3] = 1;

    // Coloca um navio na linha 0, coluna 2.
    // Essa posição fica na primeira linha do tabuleiro.
    tabuleiro[0][2] = 1;

    // Coloca um navio na linha 2, coluna 1.
    // Essa é mais uma posição escondida que o jogador precisa encontrar.
    tabuleiro[2][1] = 1;
}


// ============================================================
// ATIRAR
// ============================================================

function atirar(lin, col) {
    // Esta função recebe a linha e a coluna onde o jogador clicou.
    // O parâmetro lin representa a linha do tiro.
    // O parâmetro col representa a coluna do tiro.
    // A função verifica o que existe nessa posição e atualiza o jogo.

    // Pega o valor atual da posição escolhida pelo jogador.
    // Se a posição tiver 0, é água ainda não clicada.
    // Se tiver 1, existe um navio escondido.
    // Se tiver 2 ou 3, a posição já foi atingida antes.
    const pos = tabuleiro[lin][col];

    // Verifica se a posição já foi clicada antes.
    // O operador || significa "ou".
    // Então esta condição lê: se pos for 2 ou se pos for 3.
    // Como 2 representa navio já atingido e 3 representa água já atingida, não devemos contar outra tentativa.
    if (pos === 2 || pos === 3) {

        // Retorna uma mensagem avisando que o jogador escolheu uma posição repetida.
        // Como usamos return, a função termina aqui e nada abaixo é executado.
        return 'Posição já atingida!';
    }

    // Verifica se o valor da posição é 1.
    // No nosso jogo, valor 1 significa que havia um navio escondido ali.
    if (pos === 1) {

        // Troca o valor da posição para 2.
        // Isso marca, dentro da matriz, que o navio dessa célula já foi atingido.
        tabuleiro[lin][col] = 2;

        // Diminui em 1 a quantidade de navios restantes.
        // O operador -- é uma forma curta de escrever naviosRestantes = naviosRestantes - 1.
        naviosRestantes--;

        // Aumenta em 1 o número de tentativas válidas.
        // O operador ++ é uma forma curta de escrever tentativas = tentativas + 1.
        tentativas++;

        // Verifica se todos os navios já foram encontrados.
        // Quando naviosRestantes chega a 0, significa que o jogador venceu.
        if (naviosRestantes === 0) {

            // Desativa o jogo para impedir novos tiros depois da vitória.
            jogoAtivo = false;

            // Retorna a mensagem de vitória para ser exibida na tela.
            return '🎉 Vitória! Você afundou todos os navios!';
        }

        // Se ainda existem navios escondidos, retorna apenas a mensagem de acerto.
        // O jogo continua ativo para o jogador procurar os navios restantes.
        return '🔥 Acertou!';
    }

    // Se o código chegou até aqui, significa que a posição não era navio e ainda não tinha sido clicada.
    // Portanto, era uma posição de água.
    // Troca o valor da posição para 3 para marcar que essa água já foi atingida.
    tabuleiro[lin][col] = 3;

    // Mesmo errando, o tiro foi válido, então a quantidade de tentativas aumenta.
    tentativas++;

    // Retorna a mensagem de erro para ser exibida na tela.
    return '🌊 Água!';
}


// ============================================================
// RENDERIZAR TABULEIRO
// ============================================================

function renderizarTabuleiro() {
    // A função renderizarTabuleiro é responsável por mostrar a matriz na tela.
    // Sempre que o jogador clica em uma célula, a matriz muda e o tabuleiro precisa ser redesenhado.
    // Antes de criar as novas células, apagamos tudo que já estava dentro da div do tabuleiro.
    // Assim, o navegador não mistura o tabuleiro antigo com o tabuleiro atualizado.
    elTabuleiro.innerHTML = '';

    // Este primeiro for percorre as linhas da matriz tabuleiro.
    // A variável linha começa em 0 porque os índices de arrays em JavaScript começam do zero.
    // O laço continua enquanto linha for menor que a quantidade total de linhas da matriz.
    // A cada repetição, linha++ aumenta o valor de linha em 1 para passar para a próxima linha.
    for (let linha = 0; linha < tabuleiro.length; linha++) {

        // Este segundo for percorre as colunas da linha atual.
        // Como tabuleiro é uma matriz, tabuleiro[linha] representa uma linha inteira.
        // tabuleiro[linha].length informa quantas colunas existem nessa linha.
        // Juntos, os dois fors permitem visitar cada posição da matriz, uma por uma.
        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {

            // Cria um novo elemento HTML do tipo div.
            // Essa div será usada como a parte visual de uma célula do tabuleiro.
            // Cada posição da matriz vai ganhar uma div própria na tela.
            const celula = document.createElement('div');

            // Pega o valor que está guardado na posição atual da matriz.
            // A posição atual é definida por linha e coluna.
            // Por exemplo: tabuleiro[0][0] é a primeira linha e a primeira coluna.
            // Esse valor indica o estado da célula, como água, navio, acerto ou erro.
            const valor = tabuleiro[linha][coluna];

            // Guarda o número da linha dentro da própria div usando dataset.
            // O dataset permite criar informações personalizadas no elemento HTML.
            // Aqui, ele funciona como uma "etiqueta" dizendo de qual linha da matriz essa célula veio.
            celula.dataset.linha = linha;

            // Guarda também o número da coluna dentro da div.
            // Com linha e coluna salvas, o clique consegue descobrir exatamente qual posição foi escolhida.
            // Sem isso, o navegador saberia que uma div foi clicada, mas não saberia qual posição da matriz ela representa.
            celula.dataset.coluna = coluna;

            // Verifica se o valor da célula é 2.
            // No jogo, esse valor representa uma posição onde o jogador acertou um navio.
            // Quando isso acontece, adicionamos a classe CSS acerto para mudar a aparência da célula.
            if (valor === 2) {
                celula.classList.add('acerto');

            // Se o valor não for 2, o código testa se o valor é 3.
            // No jogo, esse valor representa um tiro que caiu na água.
            // Nesse caso, adicionamos a classe CSS erro para mostrar visualmente que foi um erro.
            } else if (valor === 3) {
                celula.classList.add('erro');
            }

            // Adiciona um evento de clique na célula criada.
            // Isso significa que esta função será executada quando o jogador clicar nessa div.
            // Cada célula recebe seu próprio evento de clique enquanto o tabuleiro é montado.
            celula.addEventListener('click', function () {

                // Verifica se o jogo ainda está ativo.
                // O ponto de exclamação significa negação, então !jogoAtivo quer dizer "jogo não está ativo".
                // Se o jogo já terminou, return encerra a função imediatamente e o clique não faz nada.
                if (!jogoAtivo) return;

                // Recupera do dataset a linha que foi salva na div.
                // O valor vem como texto, por isso usamos Number para converter para número.
                // A função atirar precisa receber números para acessar a matriz corretamente.
                const l = Number(celula.dataset.linha);

                // Recupera do dataset a coluna que foi salva na div.
                // Assim, l e c formam as coordenadas exatas do tiro do jogador.
                const c = Number(celula.dataset.coluna);

                // Chama a função atirar usando a linha e a coluna clicadas.
                // Essa função verifica se havia navio naquela posição.
                // Ela também atualiza os valores da matriz e devolve uma mensagem para o jogador.
                const mensagem = atirar(l, c);

                // Coloca a mensagem recebida dentro do elemento de texto da página.
                // textContent troca apenas o texto visível, sem criar novas tags HTML.
                // Assim, o jogador vê o resultado do clique, como acerto ou erro.
                elMensagem.textContent = mensagem;

                // Atualiza na tela a quantidade de tentativas feitas pelo jogador.
                // O texto usa template string, indicada pelas crases.
                // Dentro de ${tentativas}, o JavaScript coloca o valor atual da variável tentativas.
                elTentativas.textContent =
                    `Tentativas: ${tentativas}`;

                // Depois do tiro, a matriz pode ter mudado.
                // Por isso chamamos renderizarTabuleiro novamente.
                // Esse novo desenho mostra as classes acerto e erro nas células corretas.
                renderizarTabuleiro();
            });

            // Adiciona a div da célula dentro do elemento principal do tabuleiro.
            // appendChild coloca a nova célula como filha de elTabuleiro.
            // No final dos dois fors, todas as células da matriz estarão visíveis na página.
            elTabuleiro.appendChild(celula);
        }
    }
}


// ============================================================
// INICIAR JOGO
// ============================================================

function iniciarJogo() {

    // Esta função prepara uma nova partida.
    // Ela é usada tanto quando a página carrega quanto quando o jogador clica em reiniciar.

    // Cria uma matriz 5x5 para ser o tabuleiro do jogo.
    // A função criarTabuleiro devolve uma matriz preenchida com zeros.
    // O resultado é guardado na variável global tabuleiro.
    tabuleiro = criarTabuleiro(5);

    // Reinicia a quantidade de navios restantes.
    // Como posicionarNavios coloca 3 navios, o contador também precisa voltar para 3.
    naviosRestantes = 3;

    // Reinicia o contador de tentativas.
    // Toda nova partida começa com 0 tiros feitos.
    tentativas = 0;

    // Reativa o jogo.
    // Isso permite que os cliques nas células funcionem novamente após reiniciar.
    jogoAtivo = true;

    // Coloca os navios escondidos dentro da matriz recém-criada.
    // Essa função troca algumas posições de 0 para 1.
    posicionarNavios();

    // Atualiza o texto inicial da mensagem do jogo.
    // Esse texto orienta o jogador a clicar em uma célula para começar.
    elMensagem.textContent =
        'Clique em uma célula para atirar.';

    // Atualiza o texto inicial das tentativas.
    // Como a partida acabou de começar, o valor mostrado deve ser 0.
    elTentativas.textContent =
        'Tentativas: 0';

    // Chama a função que desenha o tabuleiro na tela.
    // Sem isso, a matriz existiria no JavaScript, mas o jogador não veria as células no HTML.
    renderizarTabuleiro();
}


// ============================================================
// EVENTOS
// ============================================================

// Adiciona um evento de clique ao botão Reiniciar.
// O botão foi guardado anteriormente na variável btnReiniciar.
// Quando o usuário clicar nesse botão, a função abaixo será executada.
btnReiniciar.addEventListener('click', function () {

    // Chama iniciarJogo novamente para criar uma nova matriz, zerar as tentativas e redesenhar o tabuleiro.
    // Na prática, isso reinicia a partida do começo.
    iniciarJogo();
});


// ============================================================
// INÍCIO DO JOGO
// ============================================================

// Esta chamada executa a função iniciarJogo assim que o arquivo JavaScript é carregado.
// Isso faz a primeira partida começar automaticamente quando a página abre.
// Sem esta linha, o tabuleiro só apareceria depois que alguma outra parte do código chamasse iniciarJogo.
iniciarJogo();
