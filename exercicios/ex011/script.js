function Contar() {
    let ini     = document.getElementById('iinicio')
    let fim     = document.getElementById('ifim')
    let passo   = document.getElementById('ipasso')
    let res     = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro faltam dados')
    }
    else {
        res.innerHTML = (`Contando: `)
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }

}