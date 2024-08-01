document.getElementById("IMCForm").addEventListener("submit",(event) => {
    event.preventDefault(); 

  
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);


    const bmi = peso / (altura * altura);

   
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p class="alert alert-info">Tu IMC es: ${bmi.toFixed(2)}</p>`;
});