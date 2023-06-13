/* 
    Acronomo para Document Object Model, é um conjunto de objetos dentro do seu navegador que da acesso aos componentes internos do seu website.


            Raiz(window)
    location, document, history
                html
            head    body
       meta, title   h1, p, div
                        strong                          
*/

//Formas de selecionar um elemento do DOM

window.document.getElementsByTagName()[0] //Selecionar por marca

window.document.getElementById() //Selecionar por ID

window.document.getElementsByName() //Selecionar pelo nome

window.document.getElementsByClassName() //Selecionar por classe

window.document.querySelector()
window.document.querySelectorAll()


/* • Evento DOM
    Evento é tudo que possa acontecer com algum elemento
    Eventos de mouse: mouseenter, mouseout, mousemove, mousedowan, mouseupt, click
*/

/* • Funções
    Conjunto de linhas que serão executadas quando ocorrer um evento.
*/

function acao() {
    bloco_de_cod_1
}

/*
<div id = "area" onclick="clicou()"> </div>

<script>

    fuction clicou() {
        acao
    }

</script>

        OU

<div id = "area"> </div>

<script>
    var a = window.document.getElementById('area')
    a.addEventListener('click', clicou)
    
    fuction clicou() {
        acao
    }

</script>

*/