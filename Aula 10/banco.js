const numeroConta = 1
let titular = "Jorge"
let saldo = 1000
let contaAtiva = true
let statusConta
function verExtrato() {
    if (contaAtiva) {
        statusConta = "Ativa"
    } else {
        statusConta = "Bloqueado"
    }


    console.log("======Banco InovaBank===== ")
    console.log(`Conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${statusConta}`)

}

function depositar(valor) {
    if (valor > 0) {
        saldo = saldo + valor
        console.log(`\ndeposito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Novo saldo:R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nValor de deposito invalido, o valor deve ser maior que zero.")
    }
}

depositar(500)
depositar(3000)
depositar(-100)
depositar(-500)

function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!\nNovo saldo: R$ ${valor.toFixed(2)}`)
    } else {
        console.log("\nValor de saque invalido. o Valor deve ser maior que maior que zero e menor ou igual ao saldo")
    }
}

function bloquearConta() {   
contaAtiva = true;
        console.log("\nConta Bloqueada!");
    
    }
bloquearConta()
verExtrato()
depositar(100)
sacar(4600)
verExtrato()