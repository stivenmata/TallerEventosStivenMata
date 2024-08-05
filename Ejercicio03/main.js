let idGlobal = 0;
let notas = [];


function guardarNota() {
    const titulo = document.getElementById('nota_titulo').value.trim();
    const texto = document.getElementById('nota-contenedor').value.trim();

    if (titulo === '' || texto === '') {
        alert('Por favor, rellena tanto el título como el contenido.');
        return;
    }

    idGlobal++;
    const nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };

    notas.push(nuevaNota);
    document.getElementById('nota_titulo').value = '';
    document.getElementById('nota-contenedor').value = '';
    pintarNotas();
}


function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}


function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
    }
}


function pintarNotas() {
    const notasContainer = document.getElementById('notasContainer');
    notasContainer.innerHTML = '';

    if (notas.length === 0) {
        document.getElementById('noNotas').innerHTML = 'NO HAY NOTAS PARA MOSTRAR';
        return;
    }

    document.getElementById('noNotas').innerHTML = '';

    const textoBusqueda = document.getElementById('buscarTexto').value.toLowerCase();
    const soloRealizadas = document.getElementById('checkcompletado').checked;

    const notasFiltradas = notas
        .filter(nota => (soloRealizadas ? nota.realizada : true)) 
        .filter(nota => nota.titulo.toLowerCase().includes(textoBusqueda) || nota.texto.toLowerCase().includes(textoBusqueda)); // Filtra las notas según el texto de búsqueda

    notasFiltradas.forEach(nota => {
        const notaDiv = document.createElement('div');
        notaDiv.className = 'col-12 col-sm-6 col-md-5 col-lg-3 d-flex flex: 1 1 100%'; 

        notaDiv.innerHTML = `
            <div class="note-card">
                <div class="note-header">
                    <input type="checkbox" ${nota.realizada ? 'checked' : ''} onchange="marcarRealizada(${nota.id})"> 
                    <h5>${nota.titulo}</h5>
                </div>
                <div class="note-body">
                    <p>${nota.texto}</p>
                </div>
                <div class="checkbox-container">
                    <button class="btn btn-secondary" onclick="borrarNota(${nota.id})">Borrar Nota</button>
                </div>
            </div>
        `;

        notasContainer.appendChild(notaDiv);
    });
}


document.getElementById('guardarNota').addEventListener('click', guardarNota);
document.getElementById('limpiarCampos').addEventListener('click', () => {
    document.getElementById('nota_titulo').value = '';
    document.getElementById('nota-contenedor').value = '';
});
document.getElementById('buscarTexto').addEventListener('input', pintarNotas);
document.getElementById('checkcompletado').addEventListener('change', pintarNotas);



