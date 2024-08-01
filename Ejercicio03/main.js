let idGlobal = 0;
let notas = [];


const guardarNota = () => {
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
};


const borrarNota = (id) => {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
};


const marcarRealizada = (id) => {
    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
    }
};


const pintarNotas = () => {
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
        .filter(nota => (nota.realizada === soloRealizadas))
        .filter(nota => nota.titulo.toLowerCase().includes(textoBusqueda) || nota.texto.toLowerCase().includes(textoBusqueda));

    notasFiltradas.forEach(nota => {
        const notaDiv = document.createElement('div');
        notaDiv.className = 'col-12 col-sm-6 col-md-5 col-lg-3'; 

        notaDiv.innerHTML = `
            <div class="note-card">
                <div class="note-header">
                    <h5>${nota.titulo}</h5>
                    <button class="btn btn-secondary" onclick="borrarNota(${nota.id})">Borrar Nota</button>
                </div>
                <div class="note-body">
                    <p>${nota.texto}</p>
                </div>
                <div class="checkbox-container">
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? 'checked' : ''}> Marcada
                </div>
            </div>
        `;

        notasContainer.appendChild(notaDiv);
    });
};


document.getElementById('guardarNota').addEventListener('click', guardarNota);
document.getElementById('limpiarCampos').addEventListener('click', () => {
    document.getElementById('nota_titulo').value = '';
    document.getElementById('nota-contenedor').value = '';
});
document.getElementById('buscarTexto').addEventListener('input', pintarNotas);
document.getElementById('checkcompletado').addEventListener('change', pintarNotas);


