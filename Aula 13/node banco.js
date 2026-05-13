// ===============================
// DADOS DA CONTA
// ===============================

// Número da conta (const = valor fixo que não muda)
const numeroConta = 1

// Nome do titular da conta
let titular = "Jorge"

// Saldo atual da conta
let saldo = 10000

// Define se a conta está ativa ou bloqueada
// true = ativa | false = bloqueada
let contaAtiva = true

// Variável usada para armazenar o status da conta
let statusConta

// Array responsável por guardar o histórico de transações
const historico = [];


// ===============================
// ELEMENTOS DO HTML
// ===============================

// Seleciona o elemento que mostra o saldo na tela
const elSaldo = document.querySelector('#saldo')

// Seleciona o elemento responsável pelas mensagens
const elMensagem = document.querySelector('#mensagem')

// Botão de depósito
const btnDepositar = document.querySelector('#btn-depositar')

// Botão de saque
const btnSacar = document.querySelector('#btn-sacar')

// Botão de bloquear/desbloquear conta
const btnBloquear = document.querySelector('#btn-bloquear')

// Elemento que mostra total de depósitos
const elTotaDepositos = document.querySelector('#total-depositos')

// Elemento que mostra total de saques
const elTotalSaques = document.querySelector('#total-saques')

// Elemento que mostra total de transações
const elTotalTransacoes = document.querySelector('#total-transacoes')

// Lista do histórico de transações
const historicoTransacoes = document.querySelector('#lista-historico')

const btnLimpar = document.querySelector('#btn-limpar')

const inputTitular = document.querySelector('#titular-alterar')

const btnAlterar = document.querySelector('#btn-alterar')

const elTitular = document.querySelector('#titular')



// ===============================
// EVENTOS DOS BOTÕES
// ===============================

// Quando clicar no botão de depositar
btnDepositar.addEventListener('click', () => {

    // Captura o campo de valor
    const campValor = document.querySelector('#campo-valor')

    // Converte o valor digitado para número
    const valor = Number(campValor.value)

    // Executa a função de depósito
    depositar(valor)
})

btnAlterar.addEventListener('click', () => {

    // Captura o texto digitado
    const novoTitular = inputTitular.value

    // Verifica se não está vazio
    if(novoTitular !== '') {

        // Atualiza o nome no HTML
        elTitular.textContent = novoTitular

        // Atualiza variável JS
        titular = novoTitular

        // Limpa o input
        inputTitular.value = ''
    }
})

btnLimpar.addEventListener('click', () => {
    historico.length = 0

    historicoTransacoes.innerHTML = ''

    const itemVazio = document.createElement('li')
    itemVazio.classList.add('historico-vazio')
    itemVazio.textContent = 'Nenhuma transação ainda.'
    historicoTransacoes.appendChild(itemVazio)
})
// Quando clicar no botão de sacar
btnSacar.addEventListener('click', () => {

    // Captura o campo de valor
    const campValor = document.querySelector('#campo-valor')

    // Converte o valor digitado para número
    const valor = Number(campValor.value)

    // Executa a função de saque
    sacar(valor)
})


// Quando clicar no botão bloquear/desbloquear
btnBloquear.addEventListener('click', bloquearConta)


// ===============================
// FUNÇÃO EXTRATO
// ===============================

function verExtrato() {

    // Define o texto do status da conta
    if (contaAtiva) {
        statusConta = "Ativa"
    } else {
        statusConta = "Bloqueado"
    }

    // Exibe informações principais da conta
    console.log("======Banco InovaBank===== ")
    console.log(`Conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log("---------------------------")

    // Exibe as últimas 5 movimentações do histórico
    for (let i = 1; i < 6; i++) {

        // Pega os itens do final do array
        const indexAtual = historico.length - i

        console.log(`${i} ${historico[indexAtual]}`)
    }

    console.log("---------------------------")

    // Exibe saldo formatado com 2 casas decimais
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)

    // Exibe status da conta
    console.log(`Status: ${statusConta}`)
}

function atualizarExtrato(transacao) {
    historico.push(transacao)
    const elListaVazia = document.querySelector('.historico-vazio')
    if (elListaVazia) elListaVazia.remove()
  
    const item = document.createElement('li')
    item.textContent = transacao
    historicoTransacoes.insertBefore(item, historicoTransacoes.firstChild)
  
    while (historicoTransacoes.children.length > 5) {
        historicoTransacoes.removeChild(historicoTransacoes.lastChild)
    }
  
    /* for (let i = 1; i < 6; i++) {
      const item = historico[historico.length - i];
      // console.log(item);
    } */
  }


// ===============================
// FUNÇÃO DE DEPÓSITO
// ===============================

function depositar(valor) {

    // Verifica se a conta está bloqueada
    if (!contaAtiva){

        // Exibe mensagem de erro
        exibirMensagem(
            'Conta bloqueada! Entre em contato com o seu gerente.',
            'msg-erro'
        )

        // Interrompe a função
        return
    }

    // Verifica se o valor é válido
    if (valor > 0) {

        // Soma o valor ao saldo atual
        saldo = saldo + valor

        // Adiciona o depósito no histórico
        atualizarExtrato(
            `Depósito: R$ ${valor.toFixed(2)} | Saldo: ${saldo.toFixed(2)}`
        )

        // Atualiza saldo na tela
        atualizarSaldo()

        // Atualiza resumo das transações
        verResumo()

        // Exibe mensagem de sucesso
        exibirMensagem(
            `Depósito de R$ ${valor.toFixed(2)} reais realizado com sucesso`,
            'sucesso'
        )

    } else {

        // Caso valor seja inválido
        console.log("\nValor de deposito invalido, o valor deve ser maior que zero.")

        exibirMensagem(
            `Valor R$ ${valor.toFixed(2)} inválido`,
            'msg-erro'
        )
    }
}



// ===============================
// FUNÇÃO DE SAQUE
// ===============================

function sacar(valor) {

    // Verifica se a conta está bloqueada
    if (!contaAtiva) {

        exibirMensagem(
            'Conta bloqueada! Entre em contato com o seu gerente.',
            'msg-erro'
        )

        return
    }

    // Verifica se o valor é válido e se existe saldo suficiente
    if (valor > 0 && valor <= saldo) {

        // Subtrai o valor do saldo
        saldo -= valor

        // Salva movimentação no histórico
        atualizarExtrato(
            `Saque: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`
        )

        // Atualiza saldo visual
        atualizarSaldo()

        // Atualiza resumo
        verResumo()

        // Exibe mensagem de sucesso
        exibirMensagem(
            `Saque de R$ ${valor.toFixed(2)} realizado com sucesso`,
            'sucesso'
        )

    } else {

        // Caso valor seja inválido
        exibirMensagem(
            'Valor de saque inválido!',
            'msg-erro'
        )
    }
}


// ===============================
// FUNÇÃO BLOQUEAR/DESBLOQUEAR
// ===============================

function bloquearConta() {

    // Se conta estiver ativa
    if(contaAtiva) {

        // Bloqueia a conta
        contaAtiva = false

        // Exibe mensagem
        exibirMensagem(
            'Conta bloqueada com sucesso',
            'sucesso'
        )

        // Altera texto do botão
        btnBloquear.textContent = '🔓 Desbloquear Conta'

    } else {

        // Reativa a conta
        contaAtiva = true

        // Exibe mensagem
        exibirMensagem(
            'Conta desbloqueada com sucesso',
            'sucesso'
        )

        // Altera texto do botão
        btnBloquear.textContent = '🔒 Bloquear Conta'
    }
}


// ===============================
// FUNÇÃO RESUMO DAS TRANSAÇÕES
// ===============================

function verResumo(){

    // Contador de depósitos
    let nDepositos = 0

    // Contador de saques
    let nSaques = 0

    // Quantidade total de transações
    let qtdTransacoes = 0

    // Percorre todo o histórico
    for(let i = 0; i < historico.length; i++){

        // Verifica se é depósito
        if(historico[i].includes("Depósito")){

            nDepositos++

        } else {

            nSaques++
        }

        // Soma total de transações
        qtdTransacoes++
    }

   // Atualiza valores na interface
   elTotaDepositos.textContent = nDepositos
   elTotalSaques.textContent = nSaques
   elTotalTransacoes.textContent = qtdTransacoes
}


// ===============================
// FUNÇÃO FUTURA
// ===============================

// Função ainda não implementada
function simularTentativasSaque(valor, maxTentativas){

}


// ===============================
// ATUALIZAÇÃO DO SALDO
// ===============================

function atualizarSaldo(){

    // Atualiza saldo visual formatado
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`

    // Saldo alto
    if(saldo > 5000) {

        elSaldo.style.color = 'green'

    // Saldo médio
    } else if(saldo > 1000 && saldo <= 5000) {

        elSaldo.style.color = 'yellow'

    // Saldo baixo
    } else {

        elSaldo.style.color = 'red'
    }
}



// ===============================
// EXIBIÇÃO DE MENSAGENS
// ===============================

function exibirMensagem(texto, tipo){

    // Define o texto da mensagem
    elMensagem.textContent = texto

    // Exibe a mensagem
    elMensagem.style.display = 'block'

    // Define classe CSS dependendo do tipo
    // sucesso -> msg-sucesso
    // erro -> msg-erro
    elMensagem.className =
        tipo === 'sucesso'
            ? 'msg-sucesso'
            : 'msg-erro'
}