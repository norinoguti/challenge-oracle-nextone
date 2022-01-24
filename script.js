const texto = document.getElementById("input-texto");
const botaoCripto = document.getElementById("btn-cripto");
const botaoDescripto = document.getElementById("btn-descripto");
const textoCripto = document.getElementById("msg");
const botaoCopiar = document.getElementById("btn-copy");
const formulario = document.getElementById("form");
const formCripto = document.getElementById('form-cripto');

function gerarCripto(){
	let textoDigitado = texto.value;
	let textoCriptografado = textoDigitado
		.replace(/e/gi, "enter")
		.replace(/i/gi, "imes")
		.replace(/a/gi, "ai")
		.replace(/o/gi, "ober")
		.replace(/u/gi, "ufat");
	textoCripto.value = textoCriptografado;

}


 botaoCripto.addEventListener("click", function(event){
	event.preventDefault();
	gerarCripto();
	formulario.reset();
});

function gerarDescripto(){
	let textoGerado = texto.value;
	let textoDescriptografado = textoGerado
		.replace(/enter/gi, "e")
		.replace(/imes/gi, "i")
		.replace(/ai/gi, "a")
		.replace(/ober/gi, "o")
		.replace(/ufat/gi, "u");
		textoCripto.value = textoDescriptografado;

	}
	

 botaoDescripto.addEventListener("click", function(event){
	event.preventDefault();
	gerarDescripto();
	formulario.reset();
});

/*function validarCriptografia(texto){
  return /^[a-z\s]*$/.test(texto);
};*/

function copy() {
  var copyText = textoCripto;
  copyText.select();
  document.execCommand("copy");
  alert("Texto copiado!");
}

botaoCopiar.addEventListener("click", copy);