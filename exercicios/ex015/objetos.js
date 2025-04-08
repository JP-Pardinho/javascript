let amigo = {nome: 'joao',
    sexo: 'm',
    peso: 82,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}kg`)