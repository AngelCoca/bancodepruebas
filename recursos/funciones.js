/*
CLASES
    Profesor; Nombre, Apellidos, Correo, Contraseña, Clase;
    Alumno: Nombre, Apellidos, Correo, Clase, Modulos
    Modulo: NombreProfesor, ApellidoProfesor, NombreAlumnos, ApellidosAlumno ¿?¿?¿?¿¿?


METODOS
    -comprobarUsuarioProfesor(email, contra)
    -obtenerIDProfesor
    -cargarPortalProfesor(idProfesor)
*/

var posicionID;
var idProfesorBack;
var contadorPaginadorFin = 8;
var contadorPaginadorInicio = 0;
var esPrimerCar = false;


var listaProfesores;
var listaAlumnos;

    //Horario Profesor Ángel
    var horasHorario = new Array("15:00-15:55","15:55-16:50","16:50-17:45","18:05-19:00","19:00-19:55","19:55-20:50");
    var lunesAngel = new Array("2DAW", "2DAW", "1DAW", "1DAW", "1ASIR", "1ASIR");
    var martesAngel = new Array("2DAW","2DAW", "1ASIR", "1ASIR", "1DAW","1DAW");
    var miercolesAngel = new Array("2ASIR", "2ASIR", "1ASIR", "1ASIR", "1DAW", "1DAW")
    var juevesAngel = new Array("2DAW", "2DAW", "1ASIR", "2ASIR", "Tutoria", "Tutoria");
    var viernesAngel = new Array("2DAW", "1DAW", "1DAW", "1ASIR", "Tutoria", "Tutoria");

    var horarioAngel = new Array(horasHorario, lunesAngel, martesAngel, miercolesAngel, juevesAngel, viernesAngel);

    var AngelProfe = new Profesor("Ángel", "Mira Boatella", "mira19029@iesmarenostrum.com", "048670054F", "DAW", horarioAngel);
    var AntonioProfe = new Profesor("Antonio", "Sirvent Carbonell", "sirvent2364@iesmarenostrum.com", "1234567890", "DAM");

    
    var notasA = new Array(3, 5, 8);
    var notasB = new Array(4, 5, 7);
    var notasC = new Array(7, 8, 9);
    var notasD = new Array(6, 8, 9);
    var notasE = new Array(2, 5, 7);
    var notasF = new Array(4, 5, 7);
    var notasG = new Array(7, 8, 9);
    var notasH = new Array(6, 8, 9);
    var notasI = new Array(2, 5, 7);
    var notasJ = new Array(4, 5, 7);
    var notasK = new Array(7, 8, 9);
    var notasL = new Array(6, 8, 9);
    var notasM = new Array(2, 5, 7);


    var Jose = new Alumno("Jose", "Sanchis Carmona", "sanchis25871@iesmarenostrum.com", "04521457F", "1DAW",  notasA );
    var Pedro = new Alumno("Pedro", "Planelles Frances", "planelles25871@iesmarenostrum.com", "12345678A", "1DAW", notasB );
    var Aitana = new Alumno("Aitana", "Hernandez Purser", "hernandez25871@iesmarenostrum.com", "87654321Z", "1DAW", notasC );
    var Maria = new Alumno("Maria", "Pla Sirvent", "pla25871@iesmarenostrum.com", "45612396D", "1DAW", notasD );

    var Lucia = new Alumno("Lucia", "Morant Garcia", "morant25871@iesmarenostrum.com", "96385274L", "2DAW", notasE );
    var Mario = new Alumno("Mario", "Gimenez Moneris", "gimenez25871@iesmarenostrum.com", "74859632S", "2DAW", notasF );
    var Cristina = new Alumno("Cristina", "Planelles Cremades", "planelles25871@iesmarenostrum.com", "41526398W", "2DAW", notasG );
    var Miguel = new Alumno("Miguel", "Garrigos Moreno", "garrigos25871@iesmarenostrum.com", "85478547S", "2DAW", notasH );

    var Cristian = new Alumno("Cristian", "Cremades Mira", "cremades25871@iesmarenostrum.com", "96587412C", "1ASIR", notasI );
    var Antonio = new Alumno("Antonio", "Garrigos Sirvent", "garrigos25871@iesmarenostrum.com", "96325874X", "1ASIR", notasJ );
    var Marta = new Alumno("Marta", "Donat Pla", "donat25871@iesmarenostrum.com", "96325874G", "1ASIR", notasK );

    var Sebastian = new Alumno("Sebastian", "Miquel Juan", "miquel25871@iesmarenostrum.com", "12345678R", "2ASIR", notasL );
    var Mireia = new Alumno("Mireia", "Teruel Gil", "teruel25871@iesmarenostrum.com", "87654321E", "2ASIR", notasM );

    


function Profesor(nombre, apellidos, correo, contrasenya, clase, Horario){
    this.name = nombre;
    this.surname = apellidos;
    this.email = correo;
    this.passw = contrasenya
    this.roomClass = clase;
    this.timetable = Horario;
}



function Alumno(nombre, apellidos, correo, dni, curso, notasEvaluacion){

    this.name = nombre;
    this.surname = apellidos;
    this.email = correo;
    this.identif = dni;
    this.course = curso;
    this.note = notasEvaluacion;

    this.mostrar = mostrarDatos;
    
}

    function mostrarDatos(){
        document.getElementById("nombre-Alumno").value = this.name;
        document.getElementById("apellidos-Alumno").value = this.surname;
        document.getElementById("email-Alumno").value = this.email;
        document.getElementById("dni-Alumno").value = this.identif;

        var select = document.getElementsByName("selecAsignatura")[0];
 
        var option = document.createElement("option");
        option.text = this.course;
        select.remove(0);
        select.add(option);

        document.getElementById("notaPrimerTriCaja").value = this.note[0];
        document.getElementById("notaSegundoTriCaja").value = this.note[1];
        document.getElementById("notaTercerTriCaja").value = this.note[2];
        console.log(this.note);
        console.log("La media es " + calcularNotaMedia(this.note[0], this.note[1], this.note[2] ))
        document.getElementById("notaMediaCaja").value = calcularNotaMedia(this.note[0], this.note[1], this.note[2]);


    }

function calcularNotaMedia(primeraNota, segundaNota, terceraNota){
    //ERROR TODO
    var notaMedia = (primeraNota + segundaNota + terceraNota)/3;
    var notaRedondeada = Math.round(notaMedia * 100) / 100;
    console.log(primeraNota + ", " + segundaNota + ", " + terceraNota + "La nota redondeada es " + notaRedondeada);
    return notaRedondeada;
}



function iniciarArray(){
     listaProfesores = new Array(AngelProfe, AntonioProfe);
     listaAlumnos = new Array(Jose, Pedro, Aitana, Maria, Lucia, Mario, Cristina, Miguel, Cristian, Antonio, Marta, Sebastian, Mireia);
}


//LOGIN
function comprobarUsuarioProfesor(mail, contra){
    iniciarArray();
    // 0- No existe / 1- Existe usuario, contraseña fallida / 2-Correcto
    var existe = false;
    var resultado = 0;
    var texto = "";


    for(var i = 0; i<listaProfesores.length && !existe; i++){
        console.log(listaProfesores[i].email);
        if(listaProfesores[i].email == mail && listaProfesores[i].passw == contra){
            existe = true;
            resultado = 2;
            posicionID = i;
        } else if (listaProfesores[i].email == mail){
            existe = true;
            resultado = 1
        } else {
            
        }
    }

    switch (resultado) {
        case 0:
            texto = "El usuario no existe";
            break;
        case 1:
            texto = "La contraseña no es correcta";
            break;
        case 2:
            texto = "Correcto";
            break;
    
        default:
            break;
    }

    return texto;

}


//LOGIN

 function obtenerIDProfesor(){
     return posicionID;
 }

 //PORTAL PROFESOR




 function comprobarIDProfesor(){

    
   // var idProfesorId = 0;
  //  console.log("Cuando llega, el indentificador vale: " +idProfesorId);


            /*if(idProfesorId == ""){
                document.getElementById("cuerpo-portalProfesor").style.display= 'none';
                alert("No introdujo ningun usuario");
                setTimeout(location.reload(),2000);
                
          //  } else {*/
          
          cargarPortalProfesor(0);
          monstrarAlumnos("todos");

           // }


       
    
}


 function cargarPortalProfesor(idProfesor){
   // console.log(idProfesor)
    //iniciarArray();
    idProfesorBack = idProfesor;
    cargaNombreEnNav();
    imprimirHorario();
    monstrarAlumnos("todos");
    obtenerTamanyoTodos();

 }

 function obtenerTamanyoTodos(){
     document.getElementById("tamnyoListaTodos").innerHTML =  listaAlumnos.length;
 }

 function cargaNombreEnNav(){
    var nombre = listaProfesores[idProfesorBack].name;
    document.getElementById("nombreUsuario-Nav").innerHTML = " " +nombre;
 }

 function imprimirHorario(){
    var texto = "";

    for(var x =0; x<  listaProfesores[idProfesorBack].timetable.length; x++){
       texto += "<tr>";
        for(var y = 0; y <listaProfesores[idProfesorBack].timetable.length; y++){
            var estilo = comprobarNombreParaEstiloCalendario(listaProfesores[idProfesorBack].timetable[y][x]);
            var claseAsignatura = comprobarClaseDeAsignatura(listaProfesores[idProfesorBack].timetable[y][x]);
            if(y == 0){
            texto +=("<th style='border: 1px solid black;  "+ estilo + " '>"); texto +=(listaProfesores[idProfesorBack].timetable[y][x]); texto+= claseAsignatura + "</th>" ;
            } else {
            ;
            texto +=("<td style='border: 1px solid black;  "+ estilo + "'>"); texto += "<strong>" + (listaProfesores[idProfesorBack].timetable[y][x]) + "</strong>"; texto+= claseAsignatura + "</td>" ;
            }
        }
        texto +=("</tr>");
    }

    document.getElementById("horarioProfesor").innerHTML = texto;


 }

 function comprobarNombreParaEstiloCalendario(nombreAsignatura){
     var colorFondo = "background-color: ";

     switch (nombreAsignatura) {
        case "2DAW":
             colorFondo += "#D7BDE2"
             break;
        case "1DAW":
             colorFondo += "#A9CCE3"
             break;
        case "1ASIR":
             colorFondo += "#A2D9CE"
             break;
        case "2ASIR":
             colorFondo += "#FAD7A0"
             break;
        case "Tutoria":
             colorFondo += "#F5B7B1"
             break;
     }
        return colorFondo;
     
 }

 function comprobarClaseDeAsignatura(nombreAsignatura){
    var claseAsig = "<br>";

    switch (nombreAsignatura) {
       case "2DAW":
            claseAsig += "A.151"
            break;
       case "1DAW":
            claseAsig += "A.150"
            break;
       case "1ASIR":
            claseAsig += "A.250"
            break;
       case "2ASIR":
            claseAsig += "A.251"
            break;
       case "Tutoria":
            claseAsig += "A.051"
            break;
    }
       return (claseAsig ) ;
 }

 function monstrarAlumnos(asignatura){

        var tabla = "";


        if(asignatura =="todos"){

            if(listaAlumnos.length<8){

            for(var i = 0; i<listaAlumnos.length; i++){
                tabla+= "<tr onclick=obtenerIdentificadorAlumno('" + listaAlumnos[i].identif + "') name='tablaAlumnosFiltrar'>";
                tabla+= "<td>" + listaAlumnos[i].name + " " +  listaAlumnos[i].surname + "</td>";
                tabla+= "<td>" + listaAlumnos[i].email + "</td>";
                tabla+= "<td>" + listaAlumnos[i].identif + "</td>";
                tabla+= "<td >" + listaAlumnos[i].course + "</td>" ;
                tabla+= "<td class='group'>"
                + " <button type='button' id='botonBorrarDanger' style='margin-left:40px;' onclick=\"botonBorrar('" + listaAlumnos[i].identif  +"' )\"  class='btn btn-danger btn-xs'>" 
                + " <span class='glyphicon glyphicon-trash'></span>" 
                + " </button>"
                +"</td>";

                tabla +="</tr>";
            }

         
        } else {

        for(var i = contadorPaginadorInicio; i<contadorPaginadorFin; i++){
            tabla+= "<tr onclick=obtenerIdentificadorAlumno('" + listaAlumnos[i].identif + "') name='tablaAlumnosFiltrar'>";
            tabla+= "<td>" + listaAlumnos[i].name + " " +  listaAlumnos[i].surname + "</td>";
            tabla+= "<td>" + listaAlumnos[i].email + "</td>";
            tabla+= "<td>" + listaAlumnos[i].identif + "</td>";
            tabla+= "<td >" + listaAlumnos[i].course + "</td>" ;
            tabla+= "<td class='group'>"
            + " <button type='button' id='botonBorrarDanger' style='margin-left:40px;' onclick=\"botonBorrar('" + listaAlumnos[i].identif  +"' )\"  class='btn btn-danger btn-xs'>" 
            + " <span class='glyphicon glyphicon-trash'></span>" 
            + " </button>"
            +"</td>";

            tabla +="</tr>";
        }
        tabla +=" <tr><td colspan='5' > <nav>";
        tabla += "<ul class='pager'>";
         tabla += " <li ><a href='#' onclick=paginador('anterior')><span aria-hidden='true'>&larr;</span> Anterior</a></li>";
         tabla += " <li ><a href='#' onclick=paginador('siguiente')>Siguiente <span aria-hidden='true'>&rarr;</span></a></li>";
       tabla += " </ul>";
     tabla += " </nav></td></tr>";

    }
            
        } else {
            for(var i = 0; i<listaAlumnos.length; i++){
                if(listaAlumnos[i].course == asignatura){
                    tabla+= "<tr onclick=obtenerIdentificadorAlumno('" + listaAlumnos[i].identif + "') name='tablaAlumnosFiltrar'>";
                    tabla+= "<td>" + listaAlumnos[i].name + " " +  listaAlumnos[i].surname + "</td>";
                    tabla+= "<td>" + listaAlumnos[i].email + "</td>";
                    tabla+= "<td>" + listaAlumnos[i].identif + "</td>";
                    tabla+= "<td>" + listaAlumnos[i].course + "</td>";
                    tabla+= "<td class='group'>"
                    + " <button type='button' id='botonBorrarDanger' style='margin-left:40px;' onclick=\"botonBorrar('" + listaAlumnos[i].identif  +"' )\"  class='btn btn-danger btn-xs'>" 
                    + " <span class='glyphicon glyphicon-trash'></span>" 
                    + " </button>"
                    +"</td>";
    
                    tabla +="</tr>";
                }
            }
        }   

      document.getElementById("tablaAlumnos").innerHTML = tabla;

}


function filtarAlumnoTabla(){
    document.getElementById("tablaAlumnos").innerHTML = "";
    var tex = document.getElementById("input-buscarAlumno-tabla").value;
    if(tex != ""){
        var longitud = tex.length;
        //alert(tex);
        var tabla = "";
        for(var i = 0; i<listaAlumnos.length; i++){
            var primerosCaracteresNombre =  obtenerPrimerosCaracteres(listaAlumnos[i].name, longitud);
            var primerosCaracteresApe =  obtenerPrimerosCaracteres(listaAlumnos[i].surname, longitud);
            var primerosCaracteresEmail =  obtenerPrimerosCaracteres(listaAlumnos[i].email, longitud);
            var primerosCaracteresDNI =  obtenerPrimerosCaracteres(listaAlumnos[i].identif, longitud);

            if(tex == primerosCaracteresNombre || tex == primerosCaracteresApe || tex == primerosCaracteresEmail || tex == primerosCaracteresDNI ){
                tabla+= "<tr onclick=presentarAlumno('" + listaAlumnos[i].identif + "') name='tablaAlumnosFiltrar'>";
                tabla+= "<td>" + listaAlumnos[i].name + " " +  listaAlumnos[i].surname + "</td>";
                tabla+= "<td>" + listaAlumnos[i].email + "</td>";
                tabla+= "<td>" + listaAlumnos[i].identif + "</td>";
                tabla+= "<td>" + listaAlumnos[i].course + "</td>";
                tabla+= "<td class='group'>"
                + " <button type='button' id='botonBorrarDanger' style='margin-left:40px;' onclick=\"botonBorrar('" + listaAlumnos[i].identif  +"' )\"  class='btn btn-danger btn-xs'>" 
                + " <span class='glyphicon glyphicon-trash'></span>" 
                + " </button>"
                +"</td>";

                tabla +="</tr>";
            }

        }

        if(tabla !=""){
            document.getElementById("tablaAlumnos").innerHTML = tabla;
        } else {
            document.getElementById("tablaAlumnos").innerHTML =  "<tr><th >No existen valores</th></tr>"
        }
    } else {
        monstrarAlumnos("todos");
    }

}

function obtenerPrimerosCaracteres(nombre, long){
    var texto = "";
    for(var i = 0; i < long; i++){
        texto += nombre[i];
    }
    return texto;
}


function botonBorrar(identificador){
 
    var nombreAlumno= obtenerNombreCompletoAlumno(identificador)
    var confirmado = confirm("Está seguro que desea borrar a:\n"+nombreAlumno);
   if(confirmado){
       borrarAlumno(identificador);
   }
   
    console.log(identificador);
    
}


function botonEditar(identificador){
    presentarAlumno(identificador, false);
}

function obtenerNombreCompletoAlumno(identifc){
    var nomApe  = "";
    var encontrado = false;
    for(var i = 0; i<listaAlumnos.length && !encontrado; i++){
        if(listaAlumnos[i].identif == identifc){
            nomApe = listaAlumnos[i].name + ", " + listaAlumnos[i].surname;
            encontrado = true;
        }
    }
    return nomApe;
}

function obtenerNombreAlumno(identifc){
    var nomApe  = "";
    var encontrado = false;
    for(var i = 0; i<listaAlumnos.length && !encontrado; i++){
        if(listaAlumnos[i].identif == identifc){
            nomApe = listaAlumnos[i].name;
            encontrado = true;
        }
    }
    return nomApe;
}

function borrarAlumno (identificador){
    var encontrado = false;
    for(var i = 0; i<listaAlumnos.length && !encontrado; i++){
        if(listaAlumnos[i].identif == identificador){
            listaAlumnos.splice(i, 1);
            encontrado = true;
            if(contadorPaginadorInicio != 0){
            contadorPaginadorFin -= 1;
            contadorPaginadorInicio -= 1;
            }
        }
    }

    monstrarAlumnos("todos");
    obtenerTamanyoTodos();

}


function paginador(motivo){
    if(motivo == "siguiente"){

        contadorPaginadorFin+=8;

        if(contadorPaginadorFin>listaAlumnos.length){
            contadorPaginadorFin = listaAlumnos.length;
            contadorPaginadorInicio =listaAlumnos.length-8;
        } else {

            contadorPaginadorInicio+=8;
        }


        console.log(contadorPaginadorFin, contadorPaginadorInicio)
    } else {
       contadorPaginadorInicio-=8;

       if(contadorPaginadorInicio<0){
           contadorPaginadorInicio=0;
           contadorPaginadorFin=8;
       } else {
        contadorPaginadorFin-=8;
       }
        console.log(contadorPaginadorFin, contadorPaginadorInicio)
    }

    monstrarAlumnos("todos")

}


//Presentación alumno. 

function obtenerIdentificadorAlumno(identificador){
    presentarAlumno(identificador, true);
}

function presentarAlumno(identificador, interaccion){

    document.getElementById("formularioMostrarAlumno").style.display = 'block';
    document.getElementById("boton-guardar-Alumno").disabled = true;

    
    interaccionInputs(interaccion, interaccion)

    var posicionAlumno = obtenerPosionAlumno(identificador);

        if(posicionAlumno != ""){
            if((posicionAlumno-1) != listaAlumnos.length)
            listaAlumnos[posicionAlumno-1].mostrar();
            
        }
    
}

function obtenerPosionAlumno(identificador){
    
    var encontrado = false;
    var i;
    for(i = 0; i<listaAlumnos.length && !encontrado; i++){
        
        if(listaAlumnos[i].identif == identificador){
            encontrado=true;

        }
    }
 
    return i;

}

function cargarNombresSelect () {

    var listaNombres = ["1DAW", "2DAW", "1ASIR", "2ASIR"];

    addOptions("selecAsignatura", listaNombres);
}


function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];

    for (value in array) {
        var option = document.createElement("option");
        option.text = array[value];
        select.add(option);
    }
}

    function editarAlumno(){
       // var dniAlumno = document.getElementById("dni-Alumno").value;

        interaccionInputs(false, true);
        document.getElementById("boton-guardar-Alumno").disabled = false;

       
    }

   
function guardaAlumno(nombre, apellidos, email, dni, curso, notaPri, notaSeg, notaTer){
    console.log("Primer tri " + notaPri + " Segunda nota: " + notaSeg + " Nota tercer: " + notaTer)

    try{
        var nuevasNotas = new Array(notaPri, notaSeg, notaTer);
        var nuevoAlumno = new Alumno(nombre, apellidos, email, dni, curso, nuevasNotas);

        var posicion = identificadorAlumnoFormulario(dni);

            if(posicion == listaAlumnos.length){
                listaAlumnos.add(nuevoAlumno);          
            } else {
                editarElementoArray(posicion, listaAlumnos, nuevoAlumno);
            }

            document.getElementById("boton-editar-Alumno").style.display = 'block';
            document.getElementById("boton-eliminar-alumno").style.display = 'block';
            document.getElementById("divNotaMedia").style.display = 'block';
            monstrarAlumnos("todos");
            interaccionInputs(true, true);
            alert("El alumno " + nombre + " se registró correctamente.")
        } catch {

        }

}


function identificadorAlumnoFormulario(dni){

    var existe = false;
    var i;
    for( i = 0; i<listaAlumnos.length && !existe; i++){
        dni = dni.toUpperCase();
        if(listaAlumnos[i].identif == dni){
            existe = true;
        }  
        
    }
    return i-1;

}


function editarElementoArray(posicion, lista, objeto){

    lista.splice(posicion, 1, objeto);
    console.log(objeto)

}
