var agora = new Date()
var hr = agora.getHours()

console.log(`Agora são exatamente ${hr} horas.`)

if (hr > 6 && hr < 12) {
    console.log(`Bom dia!`)
}
else if (hr > 12 && hr <= 18) {
    console.log(`Boa tarde!`)
}
else if (hr > 18 && hr <= 23) {
    console.log(`Boa noite!`)
}
else {
    console.log(`Boa madrugada!`)
}

