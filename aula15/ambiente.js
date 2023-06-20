let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(1)

console.log(`Nosso vetor é o ${num}`)

console.log(`O primeir valor do vetor é ${num[0]}`)

console.log(`Nosso vetor tem ${num.length} elementos`)

console.log(`Vetor ordenado: ${num.sort()}`)


let pos = num.indexOf(8)
if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}
