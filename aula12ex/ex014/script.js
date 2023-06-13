function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        window.document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        window.document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        window.document.body.style.backgroundColor = '#515154'
    }

}
