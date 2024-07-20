function tabuada() {
    let num = document.getElementById('inum')
    let res = document.getElementById('res')
    

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } 
    else {
        res.innerHTML = ''
        let n = Number(num.value)
        let c = 1
        for(c = 1; c <= 10; c++) {
            res.innerHTML += `<p>${n} x ${c} = ${n*c}</p>`
        }
        
    }
    
} 

