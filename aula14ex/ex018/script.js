let txtn = document.getElementById('inum')
let res = window.document.getElementById('res')
let lista = []


function adicionar() {
    let n = Number(txtn.value)
    lista.push(n)
    res.innerHTML += `<option>Valor ${n} adicionado</option>`
}


function calcular() {
    let msg = window.document.getElementById('calc')
    msg.innerHTML = `Ao todo, temos ${lista.length} números cadastrados. <br>`
}

