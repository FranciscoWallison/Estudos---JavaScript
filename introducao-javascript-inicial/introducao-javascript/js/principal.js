var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {
	//ATRIBUINDO VALORES
	var paciente = pacientes[i] ;

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");
	//var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>> 25
	//tdImc.textContent = imc;

	var alturaEhValida = true;
	var pesoEhValido = true;

	//VALIDANDO O PESO
	if(peso <= 0 || peso > 1000){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	    pesoEhValido = false;
	}

	///VALIDANDO O ALTURA
	if(altura <= 0 || altura >= 3.00){
	    console.log("Altura inválida");
	    tdImc.textContent = "Altura inválida!";
	    alturaEhValida = false;
	}

	if(pesoEhValido && alturaEhValida){
	    var imc = peso / ( altura * altura);
	    tdImc.textContent = imc.toFixed(2);
	}
}