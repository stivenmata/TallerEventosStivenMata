document.getElementById("IMCForm").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);       
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p class="alert alert-info">Tu IMC es: ${imc.toFixed(2)}</p>`;

    let clasificacion = '';
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';

    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = 'Peso normal';

    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = 'Sobrepeso';
        
    } else {
        clasificacion = 'Obesidad';
    }

    resultadoDiv.innerHTML += `<p class="alert alert-info">Clasificación: ${clasificacion}</p>`;
});






