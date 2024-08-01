document.addEventListener(`DOMContentLoaded`, () => {

    const dolar = 4054.49;
    window.convertToCOP = () => {
        const usd = parseFloat(document.getElementById("usd").value);
        if (!isNaN(usd)) {
            const cop = usd * dolar;
            document.getElementById("cop").value = cop.toFixed(2);
            document.getElementById("resultado").innerHTML = `<p class="alert alert-info">Resultado: ${cop.toFixed(2)} COP</p>`;
        } else {
            document.getElementById("resultado").innerHTML = `<p class="alert alert-danger">Por favor, ingresa una cantidad válida en USD.</p>`;
        }
    };

   
    window.convertToUSD = () => {
        const cop = parseFloat(document.getElementById("cop").value);
        if (!isNaN(cop)) {
            const usd = cop / dolar;
            document.getElementById("usd").value = usd.toFixed(2);
            document.getElementById("resultado").innerHTML = `<p class="alert alert-info">Resultado: ${usd.toFixed(2)} USD</p>`;
        } else {
            document.getElementById("resultado").innerHTML = `<p class="alert alert-danger">Por favor, ingresa una cantidad válida en COP.</p>`;
        }
    };
});
