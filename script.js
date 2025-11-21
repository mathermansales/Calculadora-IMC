const botao = document.getElementById('botao-principal');
const resultadoElemento = document.getElementById('resultado');

botao.addEventListener("click", calcularImc);



function calcularImc() {
    const campoPeso = document.getElementById('peso');
    const campoAltura = document.getElementById('altura'); 
    
    const peso = parseFloat(campoPeso.value);
    const altura = parseFloat(campoAltura.value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultadoElemento.innerHTML = 'Erro: Insira valores válidos.';
        resultadoElemento.style.color = 'red';
        return;
    }

    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(2);

    const classificacao = classificarImc(imc);

    resultadoElemento.innerHTML = 
        `Seu IMC é ${imcArredondado}. Classificação: ${classificacao}`;
    
    resultadoElemento.style.color = '#A0F0A0';
    resultadoElemento.style.fontSize = '1.2em';
}


function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc < 39.9) {
        return "Obesidade Grau II (Severa)";
    } else {
        return "Obesidade Grau III (Mórbida)";
    }
}