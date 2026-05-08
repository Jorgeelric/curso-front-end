const numeroConta = 1
let titular = "Jorge"
let saldo = 10000
let contaAtiva = true
let statusConta
const historico = [];

const elSaldo = document.querySelector('#saldo')
const elMensagem = document.querySelector('#mensagem')

const btnDepositar = document.querySelector('#btn-depositar')
const btnSacar = document.querySelector('#btn-sacar')

const btnBloquear = document.querySelector('#btn-bloquear')

const elTotaDepositos = document.querySelector('#total-depositos')
const elTotalSaques = document.querySelector('#total-saques')
const elTotalTransacoes = document.querySelector('#total-transacoes')

const historicoTransacoes = document.querySelector('#lista-historico')


btnDepositar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor')
    const valor = Number(campValor.value)

    depositar(valor)
})

btnSacar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor')
    const valor = Number(campValor.value)

    sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)


function verExtrato() {
    if (contaAtiva) {
        statusConta = "Ativa"
    } else {
        statusConta = "Bloqueado"
    }


    console.log("======Banco InovaBank===== ")
    console.log(`Conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log("---------------------------")

    for (let i = 1; i < 6; i++) {
        const indexAtual = historico.length - i
        console.log(`${i} ${historico[indexAtual]}`)
    }
    console.log("---------------------------")
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${statusConta}`)

}

function depositar(valor) {
    if (!contaAtiva){
        exibirMensagem(
            'Conta bloqueada! Entre em contato com o seu gerente.',
            'msg-erro'
        )
        return
    }

    if (valor > 0) {
            saldo = saldo + valor
           historico.push(`Depósito: R$ ${valor.toFixed(2)} | Saldo: ${saldo.toFixed(2)}`)
           atualizarSaldo()
           verResumo()
           exibirMensagem(`Depósito de R$ ${valor.toFixed(2)} reais realizado com sucesso`, 'sucesso')
        } else {
            console.log("\nValor de deposito invalido, o valor deve ser maior que zero.")
            exibirMensagem(`Valor R$ ${valor.toFixed(2)} inválido`, 'msg-erro')
        }
}

function sacar(valor) {

    if (!contaAtiva) {
        exibirMensagem(
            'Conta bloqueada! Entre em contato com o seu gerente.',
            'msg-erro'
        )
        return
    }

    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        historico.push(
            `Saque: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`
        )

        atualizarSaldo()
        verResumo()
        exibirMensagem(
            `Saque de R$ ${valor.toFixed(2)} realizado com sucesso`,
            'sucesso'
        )

    } else {

        exibirMensagem(
            'Valor de saque inválido!',
            'msg-erro'
        )
    }
}

function bloquearConta() {   
        if(contaAtiva) {
            contaAtiva = false
            exibirMensagem('Conta bloqueada com sucesso', 'sucesso')
            btnBloquear.textContent = '🔓 Desbloquear Conta'
        } else {
            contaAtiva = true 
            exibirMensagem('Conta desbloqueada com sucesso', 'sucesso')
            btnBloquear.textContent = '🔒 Bloquear Conta'
        }
    }

function verResumo(){
    let nDepositos = 0
    let nSaques = 0
    let qtdTransacoes = 0

    for(let i = 0; i < historico.length; i++){
        if(historico[i].includes("Depósito")){
            nDepositos++
        } else {
            nSaques++
        }
        qtdTransacoes++
    }

   elTotaDepositos.textContent = nDepositos
   elTotalSaques.textContent = nSaques
   elTotalTransacoes.textContent = qtdTransacoes

}

function simularTentativasSaque(valor, maxTentativas){
    
}


function atualizarSaldo(){
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`
}

function exibirMensagem(texto, tipo){
    elMensagem.textContent = texto
    elMensagem.style.display = 'block'
    elMensagem.className = tipo ==='sucesso' ? 'msg-sucesso': 'msg-erro'
}