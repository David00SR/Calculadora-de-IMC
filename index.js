const alturaInput = document.getElementById("alturaDoPivete");
const pesoInput = document.getElementById("pesoDoPivete");
const idadeInput = document.getElementById("idadeDoPivete");
const botaoInput = document.getElementById("botaoPraCalcularTudo");

botaoInput.addEventListener('click', function() {
    let altura = parseFloat(alturaInput.value);
    let peso = parseFloat(pesoInput.value);
    let idade = parseInt(idadeInput.value);

    let resultadoIMC = peso / (altura * altura);

    alert(`IMC = ${resultadoIMC.toFixed(2)}`);
});