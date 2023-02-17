
function abirDialogo(){
    const dialog = document.getElementById('dialogo');
    const importe = document.getElementById('inputImporte').value;
    document.getElementById("importeDialog").value = importe;
    console.log(importe);
    dialog.showModal();
}

function cerrarDialogo(){
    const dialog = document.getElementById('dialogo');
    dialog.close();
}