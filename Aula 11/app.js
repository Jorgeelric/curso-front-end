// Vetores  (array)
const listaCompras = ["Tomate", "Cebola", "Farinha"]

// Um array pode conter vários tipos de dados diferentes
const misturado = ["Tomate", 8, true]

// Acrescentando elemento novo no vetor
listaCompras.push("Limão") // Acrescenta no final
misturado.push("Guaraná")

// Consuntando um vetor
console.log(listaCompras[3]) // É atravéis do [] que é possível selecionar  o item específico. Lembrando que o index começa do 0
console.log(misturado.length) // É com método lenght que contamos quantos intens tem no vetor/array. Lembrando que com lenght é contado normalmente, 1,2,3....
console.log(listaCompras.pop()) // O método pop() retira o ultimo item do vetor/array e notifica qual foi o item removido
console.log(listaCompras)

listaCompras.push("Limão")

// começo; quando termina; acréscimo
for (let i = 0; i < listaCompras.length; i++) { // inicia i em 0; repete enquanto i < tamanho do array; incrementa i a cada volta
    console.log("------------------") // imprime uma linha separadora
    console.log(`Index ${i}: ${listaCompras[i]}`) // mostra o índice atual e o item correspondente no array
    console.log("\n") // adiciona uma quebra de linha para espaçamento
} 

for (const item of listaCompras) { // percorre diretamente cada valor do array listaCompras
    console.log("-----------------") // imprime uma linha separadora
    console.log(`Item: ${item}`) // mostra o valor atual do array
    console.log("\n")
}

console.log(listaCompras.indexOf("Limão")) // Com o método indexOf é possível verificar qual é o index de um item pelo seu nome
console.log("\n")

let x = 0 

while(x <= 10){
    console.log(x)

    x++
}