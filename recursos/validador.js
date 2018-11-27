function comprobarCampoLleno(valor){
    var lleno;

    (valor == "")? lleno = false : lleno = true;

    return lleno;

}

function comprobarEmailValido(email){
    var valido = false;

    for(var i = 0; i < email.length && !valido; i++){
        if(email[i] == "@"){
            valido = true;
        }
    }

    return valido;
}


function comprobarContraValida(contra){
    var valido;
    (contra.length < 9)? valido = false : valido = true;

    return valido;
}

function cajaVacia(nombreCaja){
    document.getElementById(nombreCaja).placeholder = "Debe estar rellenado";
}

function vaciarCaja(nombreCaja){
    document.getElementById(nombreCaja).value = "";
}

function interaccionInputs(opcion, opcionSelec){

    document.getElementById("nombre-Alumno").disabled = opcion; 
    document.getElementById("apellidos-Alumno").disabled = opcion; 
    document.getElementById("email-Alumno").disabled = opcion;
    document.getElementById("dni-Alumno").disabled = opcion;
    document.getElementById("selecAsignatura").disabled = opcionSelec;

    
    document.getElementById("notaPrimerTriCaja").disabled = opcion; 
    document.getElementById("notaSegundoTriCaja").disabled = opcion;
    document.getElementById("notaTercerTriCaja").disabled = opcion;
    document.getElementById("notaMediaCaja").disabled = opcionSelec;
    
}

function comprobarDatosValidos(nombre, apellidos, email, dni, notaA, notaB, notaC){
    var valido; 

    var nombreComprobado = comprobarTexto(nombre, "nombre-Alumno");
    var apellidoCorrecto = comprobarTexto(apellidos, "apellidos-Alumno");
    var emailCorporativoCorrecto = comprobarCorreoCorporativo(email, "email-Alumno");
    var dniValido = comprobarDNI(dni, "dni-Alumno"); 

    var primeraNotaValida = comprobarNota(notaA, "notaPrimerTriCaja");
    var segundaNota = comprobarNota(notaB, "notaSegundoTriCaja");
    var terceraNota = comprobarNota(notaC, "notaTercerTriCaja");

    if(nombreComprobado && apellidoCorrecto && emailCorporativoCorrecto && dniValido && primeraNotaValida && segundaNota && terceraNota){
        valido = true;
        console.log("Datos válidos")
    } else {
       valido = false;
    }

    return valido;
}

function comprobarNota(nota, campo){
    var esValido = true;

    var esNumero = comprobarNumeros(nota);

    if((nota>10 || nota < 0) || !esNumero){
        esValido = false;
        datoNoValido(campo);
    } else {
        datoValido(campo);
    }

    return esValido;
}

function comprobarDNI(dni, campo){
    var esValido = true;

    var tamanyoDNi = (dni.length == 9) ? true :  false; 
    var primerosCaracteres = obtenerValoresDentroDeRango(dni, 0, 8);
    var sonNumeros = comprobarNumeros(primerosCaracteres);
    var esLetra = comprobarTexto(dni[8],campo);


    if(tamanyoDNi && sonNumeros && esLetra){
        datoValido(campo);
    } else {
        datoNoValido(campo);
        esValido = false;
    }
    
    return esValido;

}

function datoNoValido(campo){
   // console.log("Falla " + campo)
   /* document.getElementById(campo).placeholder = "Dato no válido";
    document.getElementById(campo).style.backgroundColor = "red";*/
}

function datoValido(campo){
    //console.log("funciona " + campo)
  //  document.getElementById(campo).style.backgroundColor = "green";
}

function comprobarCorreoCorporativo(email, campo){
    var textoValido = true;
    var emailCorporatiroInvertido = "moc.murtsoneramsei@"

    var emailInvertido = invertirCadena(email);
    var soloCorporativo = obtenerCorreoCorporativo(emailInvertido);
    var obtenerNumeros = obtenerValoresDentroDeRango(emailInvertido, 19, 24);
    var sonNumeros = comprobarNumeros(obtenerNumeros);
    var apellidoEmail = obtenerValoresDentroDeRango(emailInvertido, 25, emailInvertido.length);
    var esTexto = comprobarTexto(apellidoEmail);

    if((emailCorporatiroInvertido == soloCorporativo) && sonNumeros && esTexto){
        datoValido(campo);
    } else {
        datoNoValido(campo);
        textoValido = false;
    }

    return textoValido;
                    
}

function comprobarNumeros(valores){
    var sonNumeros = true;

    for(var i = 0; i<valores.length && sonNumeros; i++){

        var letraASCII =valores[i].charCodeAt();
        if(letraASCII>57 || letraASCII<48){
            sonNumeros = false;
            //console.log("Entra en comprobar si son numeros el valor " + letraASCII);
        }
    }

    return sonNumeros

}

function obtenerValoresDentroDeRango(texto, inicio, fin){
    var resultado = "";

    for(var i =  inicio; i<fin; i++){
        resultado+= texto[i];
    }

    //console.log("Obtener valores dentro de rango devuelve: " + resultado);

    return resultado;
}

function obtenerCorreoCorporativo(emailInvertido){
    var texto = "";

    for(var i = 0; i<19; i++){
        texto += emailInvertido[i];
    }

    //console.log("Email alumno invertido; " + texto);
    return texto;
}

function invertirCadena(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
   
    while (x>=0) {
      cadenaInvertida += cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }

function comprobarTexto(texto, campo){
    var textoValido = true;

 try{
        var textoMayuscula = texto.toUpperCase();

        for(var i = 0; i<textoMayuscula.length && textoValido; i++){
            var letraASCII =textoMayuscula[i].charCodeAt();
            if ((letraASCII > 90 || letraASCII < 65) && letraASCII != 32 ){
                textoValido = false;
            }
        }
    }
    catch {
        textoValido = false;
    }

    if(!textoValido){
        datoNoValido(campo);
    } {
        datoValido(campo);
    }

    return textoValido;

}