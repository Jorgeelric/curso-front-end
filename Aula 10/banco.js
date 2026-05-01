const numero_conta = 1
let titular = "Jorge Gàlddino"
let saldo = 1895.45
let conta_ativa = false // Valor boleano também como boolean
let status_conta

function verExtrato() {
    if (conta_ativa) {
        status_conta = 'Ativada'
    } else {
        status_conta = "Bloqueado"
    }
    
    console.log("==== BANCO INOVABANK ====")
    console.log(`Conta: ${numero_conta}`)
    console.log(`Titular: ${titular}`)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${status_conta}`)
}

function depositar(valor) {
    if (valor > 0) {
        saldo = saldo + valor
        console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Novo saldo: R$ ${saldo}`)
    } else {
        console.log("\nValor inválido. O valor deve ser maior que zero.")
    }
}



function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso. O valor atual agora é de R$ ${saldo}`)
    } else {
        console.log("\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo ")
    }
}

function bloquearConta(){
    if (conta_ativa === true) {
        console.log("\nAcesso a conta realizada com sucesso")
    } else {
        console.log("\nAcesso a conta negada! Conta bloqueada, verefique com o seu gerente. ")
    }
}

bloquearConta()
verExtrato()
depositar(1585)
sacar(458)
verExtrato()

