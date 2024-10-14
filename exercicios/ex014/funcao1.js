function parimpar(n){
    if(n%2 == 0){
        return "É par!"
    } else {
        return "É impar!"
    }
}

let i = 0

for(i=0; i<10; i++){
    console.log(`O numero ${i} é ${parimpar(i)}`)
}