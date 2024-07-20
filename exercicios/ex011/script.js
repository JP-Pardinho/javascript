function Contar() {
    let ini     = document.getElementById('iinicio')
    let fim     = document.getElementById('ifim')
    let passo   = document.getElementById('ipasso')
    let res     = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    }
    else {
        res.innerHTML = (`Contando: <br>`)
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
                if (c <= (f - p)) {
                    res.innerHTML += `\u{1F449}`
                }
                else {
                    res.innerHTML += `\u{1F6A9}`
                }
            }
        }
        else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
                if (c > f) {
                    res.innerHTML += `\u{1F449}`
                }
                else {
                    res.innerHTML += `\u{1F6A9}`
                }
            }
        }
    }

}