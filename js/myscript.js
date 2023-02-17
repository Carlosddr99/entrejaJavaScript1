const dialog = document.getElementById('dialogo');

function abirDialogo(){
    const importe = document.getElementById('inputImporte').value;
    document.getElementById("importeDialog").value = importe;
    dialog.showModal();
}

function cerrarDialogo(){
    limpiarCampos();
    dialog.close();
}

function limpiarCampos(){
    document.getElementById('nombreDialogo').value = "";
    document.getElementById('importeDialog').value = "";
    document.getElementById('inputImporte').value = "";
    document.getElementById('comentarioDialogo').value = "";
}

function validarDonacion(){
    const nombre = document.getElementById('nombreDialogo').value;
    const importeDialogo = document.getElementById('importeDialog').value;
    const comentario = document.getElementById('comentarioDialogo').value ;

    if(importeDialogo.toString() === ''){
        alert("Introduce un importe");
        limpiarCampos();
        return;
    }
    else if(nombre === ''){
        alert("Introduce tu nombre");
        limpiarCampos();
        return;
    }

    modificarNumeroDonantes();
    modificarPagos(nombre,importeDialogo);
    modificarBarraProgreso(importeDialogo);

    if(comentario !=''){
        modificarComentario(nombre, comentario, importeDialogo);
    }
    limpiarCampos();
    dialog.close();
}

function modificarNumeroDonantes(){
    var numeroDonantes = document.getElementById('numeroDonantes').textContent;
    document.getElementById('numeroDonantes').textContent = parseInt(numeroDonantes, 10) + 1;
}

function modificarComentario(name, comment, importe){
    document.getElementById('donorNameThree').textContent = document.getElementById('donorNameTwo').textContent;
    document.getElementById('donorCommentThree').textContent = document.getElementById('donorCommentTwo').textContent;
    document.getElementById('donorNameTwo').textContent = document.getElementById('donorNameOne').textContent;
    document.getElementById('donorCommentTwo').textContent = document.getElementById('donorCommentOne').textContent;
    document.getElementById('donorNameOne').textContent = name;
    document.getElementById('donorCommentOne').textContent = comment;

    document.getElementById('donorPayComentarioThree').textContent = document.getElementById('donorPayComentarioTwo').textContent;
    document.getElementById('donorPayComentarioTwo').textContent = document.getElementById('donorPayComentarioOne').textContent;
    document.getElementById('donorPayComentarioOne').textContent = importe + "$";

    document.getElementById('donorTimeComentarioThree').textContent = document.getElementById('donorTimeComentarioTwo').textContent ;
    document.getElementById('donorTimeComentarioTwo').textContent = document.getElementById('donorTimeComentarioOne').textContent ;
    document.getElementById('donorTimeComentarioOne').textContent = "now";
}

function modificarPagos(name, importe){
    document.getElementById('donorNameThreePay').textContent = document.getElementById('donorNameTwoPay').textContent;
    document.getElementById('donorPayThree').textContent = document.getElementById('donorPayTwo').textContent;
    document.getElementById('donorNameTwoPay').textContent = document.getElementById('donorNameOnePay').textContent;
    document.getElementById('donorPayTwo').textContent = document.getElementById('donorPayOne').textContent;
    document.getElementById('donorNameOnePay').textContent = name;
    document.getElementById('donorPayOne').textContent = importe + "$";

    document.getElementById('donorTimeThree').textContent = document.getElementById('donorTimeTwo').textContent ;
    document.getElementById('donorTimeTwo').textContent = document.getElementById('donorTimeOne').textContent ;
    document.getElementById('donorTimeOne').textContent = "now";
}

function modificarBarraProgreso(importe){
    var barraProgreso = document.getElementById('barraProgreso').value;
    document.getElementById('barraProgreso').value = barraProgreso + parseInt(importe,10);
    var labelPagado = document.getElementById('labelPagado').textContent;
    document.getElementById('labelPagado').textContent = parseInt(labelPagado, 10) + parseInt(importe,10) + "$";
    console.log(document.getElementById('barraProgreso').max);
    console.log(document.getElementById('barraProgreso').value);
    if(document.getElementById('barraProgreso').value === document.getElementById('barraProgreso').max){
        console.log("Legue");
        document.getElementById('barraProgreso').style.background = 'green';
    }
}