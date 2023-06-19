function calcular() {
    let num = document.getElementById('inum')
    let res = document.getElementById('res')
    let n = Number(num.value)
    res.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        for(var i = 1; i <= 10; i++) {
            var calc = (n * i)
            res.innerHTML += `<option>${n} x ${i} = ${calc}</option>`
        }
    }    
}