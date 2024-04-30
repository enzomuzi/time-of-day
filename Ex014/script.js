function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = '../img/manha.png'
        document.body.style.background = '#cccab8'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = '../img/tarde.png'
        document.body.style.background = '#cfa679'
    } else {
        //Boa Noite!
        img.src = '../img/noite.png'
        document.body.style.background = 'rgb(17, 34, 41)' 
    }
}
