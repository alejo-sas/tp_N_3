var principal = document.getElementById('principal')
var boton = document.getElementById('boton')
var formulario = document.createElement


boton.addEventListener('click', function(){
    var etiquetaH1 = document.createElement('h1');
etiquetaH1.innerHTML = "hola buenos dias"

principal.appendChild(etiquetaH1)
 })

