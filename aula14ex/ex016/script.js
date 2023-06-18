function contar() {
    var inicio = document.getElementById('idini')
    var fim = document.getElementById('idfim')
    var passo = document.getElementById('idpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "[ERRO] PREENCHA TODOS OS CAMPOS"
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('O Passo não pode ser 0')
            p = 1
        }
        if(i < f) {
            res.innerHTML = `Contando: <br>`
            for(var c = i; c <= f; c += p) { 
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            res.innerHTML = `Contando: <br>`
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
