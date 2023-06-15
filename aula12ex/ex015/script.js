function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#iano')
    var res = window.document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano || fano.value < 1920) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = "Masculino"
            if(idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'crianca-h.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            genero = "Feminino"
            if(idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}