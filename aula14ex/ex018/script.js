let txtn = document.getElementById('inum')
let res = window.document.getElementById('res')
let lista = []
let soma = 0
let media = 0
let maior = 0
let menor = 0



function adicionar() {
    let n = Number(txtn.value)

     //regra para adicionar número
    if(lista.indexOf(n) != -1) {
        alert('[ERRO] O valor já foi encontrado na lista')
    }
    else if(txtn.value.length == '' || n < 1 || n > 100) {
        alert('[Erro] Erro ao informar o valor')
    } else {
        lista.push(n)
        res.innerHTML += `<option>Valor ${n} adicionado</option>`
        soma += n
        media = soma / 2
        
        //Calcular maior número
        for (let pos in lista) {
            if(lista[pos] > maior) {
                maior = lista[pos]
            }
        }

        //Calcular menor número
        menor = maior
        for(let i = 0; i < lista.length; i++) {
            if(lista[i] < menor) {
                menor = lista[i]
            }
        }
    }

}


function calcular() {
    if(res.length == '') {
        alert('Adicione valores antes de finalizar!')
    } else {
        let msg = window.document.getElementById('calc')
        msg.innerHTML = `Ao todo, temos ${lista.length} números cadastrados. <br>
        O maior valor informado foi ${maior} <br>
        O menor valor informado foi ${menor} <br>
        Somando todos os valores, temos ${soma} <br>
        A média dos valores digitados é ${media}`
    }    
}

