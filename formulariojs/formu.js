function validar() {

    var nombre, apellido, telefono, edad, contraseña, correo, notific;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    telefono = document.getElementById("telefono").value;
    old = document.getElementById("edad").value;
    contraseña = document.getElementById("pass").value;
    correo = document.getElementById("email").value;
    //gen = document.getElementById("genero").value;
    indice = document.getElementById("departamentos").selectedIndex;
    docecorreo = /\w+@\w+\.+[a-z]/;

    if (nombre == "" || apellido == "" || telefono == "" || edad == "" || contraseña == "" || email == "") {
        alert("falta el completar!!");
        return false;
    } else if (nombre.length > 30 || apellido.length > 30) {
        alert("el nombre y el apellido son extensos");
        return false;
    } else if (correo.length > 30) {
        alert("el correo es muy largo");
        return false;
    } else if (isNaN(telefono)) {
        alert("ingrese solo digitos por favor");
        return false;
    } else if (old.length > 200) {
        alert("edad inadecuada");
        return false;
    } else if (!docecorreo.test(correo)) {
        alert("email incorrecto");
        return false;
        /*else if (!gen.checked) {
         *alert("escoja su genero")
         *return false;*/
    } else if (indice == null || indice == 0) {
        alert("escoja su departamento");
        return false;
    }
    return true;
}

function nomyape(numero) {
    if ((/^([0-9])*$/).test(numero)) {
        alert("no es adecuado colocar un numero")
        return false;
    }
    return true;
}