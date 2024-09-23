var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista"

var Paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = Paulo.querySelector('.info-peso').textContent;
var alturaPaulo = Paulo.querySelector('.info-peso').textContent;
var imcPaulo = pesoPaulo  (alturaPaulo * alturaPaulo);
Paulo.querySelector('info-imc').textContent = imcPaulo;