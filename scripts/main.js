const btnCleaner = document.getElementById('clear');
const btnResumen = document.getElementById('summary');
const categoria = document.getElementById('category');
const ticketValue = 200;

btnCleaner.addEventListener('click', limpiar);
btnResumen.addEventListener('click', calcular);

function limpiar(){
    document.getElementById('form-ticket').reset();
    document.getElementById('detalle').innerHTML = '';
    document.getElementById('detalle').style.display = 'none';

}

function calcular(){
    let cantidad = document.getElementById('cant').value;
    let categoriaSeleccionada = categoria.value;
    let descuento = 0;
    let total = cantidad * 200;

   
    if(total > 0 && categoriaSeleccionada == 'Estudiante'){
        descuento = total * 0.8;
        total -= descuento;
    } else if (total > 0 && categoriaSeleccionada == 'Trainee'){
        descuento = total * 0.5;
        total -= descuento;
    } else if (total > 0 && categoriaSeleccionada == 'Junior'){
        descuento = total * 0.15;
        total -= descuento;
    }


    if (total <= 0){
        document.getElementById('detalle').innerHTML = `Debe ingresar una cantidad mayor a 0`;
    } else {
        document.getElementById('detalle').style.display = 'block';
        document.getElementById('detalle').innerHTML = `Total a Pagar: $${total}`;
    }
}
