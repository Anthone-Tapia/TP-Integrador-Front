const btnCleaner = document.getElementById('clear');
const btnResumen = document.getElementById('summary');
const categoria = document.getElementById('category');
const ticketValue = 200;

btnCleaner.addEventListener('click', limpiar);
btnResumen.addEventListener('click', validarCampos);

function limpiar() {
    document.getElementById('form-ticket').reset();
    document.getElementById('detalle').innerHTML = '';
    document.getElementById('detalle').style.display = 'none';

}

function validarCampos() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let cant = document.getElementById('cant').value;

    if (name === '' || lastname === '' || email === '' || cant === '') {
        alert("Por favor completa todos los campos.");
        return;
    } else if (name.length < 3 || lastname.length < 3) {
        alert('El nombre y el apellido deben tener al menos 3 caracteres.');
        return;
    }

    if (!validarCorreo(email)) {
        alert('El correo electrónico no tiene un formato válido.');
        return;
    }

    calcular();
}

function validarCorreo(correo) {
    var regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(correo);
}

function calcular() {
    let cantidad = parseInt(document.getElementById('cant').value);
    let categoriaSeleccionada = categoria.value;
    let descuento = 0;
    let total = cantidad * 200;

    if (total > 0 && categoriaSeleccionada == 'Estudiante') {
        descuento = total * 0.8;
        total -= descuento;
    } else if (total > 0 && categoriaSeleccionada == 'Trainee') {
        descuento = total * 0.5;
        total -= descuento;
    } else if (total > 0 && categoriaSeleccionada == 'Junior') {
        descuento = total * 0.15;
        total -= descuento;
    }


    if (total <= 0) {
        document.getElementById('detalle').style.display = 'block';
        document.getElementById('detalle').innerHTML = `Debe ingresar una cantidad mayor a 0`;
    } else {
        document.getElementById('detalle').style.display = 'block';
        document.getElementById('detalle').innerHTML = `Total a Pagar: $${total}`;
    }
}

