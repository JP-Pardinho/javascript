// p/ add valor na ultima posição do vetor  -> num.push(n)
// p/ achar o comprimento do vetor          -> num.length
// p/ ordenar o vetor em jv                 -> num.sort()
// p/ procurar valores no vetor basta usar  -> num.indexOf()
// num = (nome do vetor)

let num = []
let i = 0


for(i=0; i<10; i++){
    num[i] = i + 1
}
  
for(let i in num){
    console.log(`NUM[${i}] = ${num[i]}`)
}

console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`vetor ordenado é ${num}`)
console.log(`10 no vetor está na posição ${num.indexOf(10)}`)


 