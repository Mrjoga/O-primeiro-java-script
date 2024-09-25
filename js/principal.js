var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    var peso = parseFloat(paciente.querySelector(".info-peso").textContent);
    var altura = parseFloat(paciente.querySelector(".info-altura").textContent);

    var imc = peso / (altura * altura);

    paciente.querySelector(".info-imc").textContent = imc.toFixed(2); 
});
