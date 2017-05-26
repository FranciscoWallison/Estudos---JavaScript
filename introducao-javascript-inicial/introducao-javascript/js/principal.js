var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Se estamos interessados em buscar vários elementos que possuem a mesma classe
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {
	//ATRIBUINDO VALORES
	var paciente = pacientes[i] ;

	//querySelector nos retorna apenas um elemento
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
	    pesoEhValido = false;
	    tdImc.textContent = "Peso inválido!";
	    paciente.classList.add("paciente-invalido");
	}

	///VALIDANDO O ALTURA
	if(altura <= 0 || altura >= 3.00){
	    console.log("Altura inválida");
	    alturaEhValida = false;
	    tdImc.textContent = "Altura inválida!";
	     paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
	    var imc = peso / ( altura * altura);
	    tdImc.textContent = imc.toFixed(2);
	}
}


//Add event to form new user 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(e) {
	e.preventDefault();
    var form = document.querySelector("#form-adicionar");
    //Pegando os dados dos inputs do formulario
    var name 	= form.name.values;
    var peso 	= form.peso.values;
    var altura 	= form.altura.values;
    var gordura = form.gordura.values;

    var pacienteTr = document.createElement("tr");

    var nameTd = document.createElement("td");
    var pesoTd = document.createElement("td"); 
    var alturaTd = document.createElement("td"); 
    var gorduraTd = document.createElement("td"); 
    var imcTd = document.createElement("td");

    nameTd.textContent 		= name;
    pesoTd.textContent 		= peso;
    alturaTd.textContent 	= altura;
    gorduraTd.textContent 	= gordura;

    pacienteTr.appendChild(nameTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

});