let totalTareas = 0;
let tareasRealizadas = 0;

function agregarTarea() {
    // Obtener el valor del input
    const input = document.getElementById('nueva-tarea');
    const textoTarea = input.value.trim();

    // Verificar que el input no esté vacío
    if (textoTarea === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    // Incrementar el total de tareas
    totalTareas++;

    // Crear un nuevo elemento de lista para la tarea
    const li = document.createElement('li');
    li.textContent = textoTarea;

    // Botón para marcar la tarea como realizada
    const botonRealizada = document.createElement('button');
    botonRealizada.textContent = 'Realizada';
    botonRealizada.className = 'realizada';
    botonRealizada.onclick = function() {
        // Marcar tarea como realizada
        tareasRealizadas++;
        li.style.textDecoration = 'line-through';
        botonRealizada.disabled = true;
        actualizarContadores();
    };

    // Botón para eliminar la tarea
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'eliminar';
    botonEliminar.onclick = function() {
        // Eliminar la tarea de la lista
        if (!botonRealizada.disabled) {
            totalTareas--;
        } else {
            totalTareas--;
            tareasRealizadas--;
        }
        li.remove();
        actualizarContadores();
    };

    // Agregar los botones al elemento de lista
    li.appendChild(botonRealizada);
    li.appendChild(botonEliminar);

    // Agregar el elemento de lista a la lista de tareas
    document.getElementById('lista-tareas').appendChild(li);

    // Limpiar el input
    input.value = '';

    // Actualizar los contadores de tareas
    actualizarContadores();
}

function actualizarContadores() {
    document.getElementById('total-tareas').textContent = totalTareas;
    document.getElementById('tareas-realizadas').textContent = tareasRealizadas;
}