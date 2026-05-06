const numeroConta = 1
let titular = "Jorge"
let saldo = 1000
let contaAtiva = true
let statusConta
const historico = [];
let contador = 1

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
    if (valor > 0) {
        saldo = saldo + valor
        //console.log(`\ndeposito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        //console.log(`Novo saldo:R$ ${saldo.toFixed(2)}`)
       historico.push(`Depósito: R$ ${valor.toFixed(2)} | Saldo: ${saldo.toFixed(2)}`)
       console.log(historico)
    } else {
        console.log("\nValor de deposito invalido, o valor deve ser maior que zero.")
    }
}

function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        //console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!\nNovo saldo: R$ ${valor.toFixed(2)}`)
        historico.push(`Saque: R$ ${valor.toFixed(2)} | Saldo: ${saldo.toFixed(2)}`)
        console.log(historico)
    } else {
        console.log("\nValor de saque invalido. o Valor deve ser maior que maior que zero e menor ou igual ao saldo")
    }
}

function bloquearConta() {   
contaAtiva = true;
        console.log("\nConta Bloqueada!");
    
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
    console.log("\n===Resumo de Transações===")
    console.log(`Depósitos: ${nDepositos}`)
    console.log(`Saques: ${nSaques}`)
    console.log(`Transações: ${qtdTransacoes}`)

}

function simularTentativasSaque(valor, maxTentativas){
    
}

//bloquearConta()
depositar(100)
sacar(95)
depositar(525)
depositar(885)
depositar(685)
verExtrato()
verResumo()


