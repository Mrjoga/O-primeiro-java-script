var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista"

var Paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = parseFloat(Paulo.querySelector('.info-peso').textContent);
var alturaPaulo = parseFloat(Paulo.querySelector('.info-peso').textContent);

alturaPaulo = alturaPaulo / 100;
var imcPaulo = pesoPaulo  (alturaPaulo * alturaPaulo);

Paulo.querySelector('.info-imc').textContent = imcPaulo;