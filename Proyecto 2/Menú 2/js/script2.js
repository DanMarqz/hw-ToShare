//BARRA DE NAVEGACIÓN: enlaces y datos.
//guardar los datos en arrays:
var titulos=new Array();
var enlaces=new Array();
//Datos de los submenús
titulos[0]=new Array(
          "Subsección uno uno",
          "Subsección uno dos",
          "Subsección uno tres",
          "Subsección uno cuatro");
enlaces[0]=new Array("https://twitter.com/home","#","#","#");
titulos[1]=new Array(
          "Subsección dos uno",
          "Subsección dos dos",
          "Subsección dos tres",
          "Subsección dos cuatro",
          "Subsección dos cinco");
enlaces[1]=new Array("#","#","#","#","#");
titulos[2]=new Array(
          "Subsección tres uno",
          "Subsección tres dos",
          "Subsección tres tres",
          "Subsección tres cuatro",
          "Subsección tres cinco");
enlaces[2]=new Array("#","#","#","#","#");	
titulos[3]=new Array(
          "Subsección cuatro uno",
          "Subsección cuatro dos",
          "Subsección cuatro tres");
enlaces[3]=new Array("#","#","#");
//arrays para guardar elementos de la lista y submenús:
var menu=new Array();
var submenu=new Array();

window.onload = function() {
    //BARRA DE NAVEGACIÓN: Crear desplegables:
    for (i=0;i<titulos.length;i++) {
         //localizar elementos principales
        menu[i]=document.getElementById("seccion"+i);
         //crear elemento menu desplegable
        menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
         //localizar elemento menu desplegable
        submenu[i]=document.getElementById('subseccion'+i);
         //escribir menu desplegable
        for (j=0;j<titulos[i].length;j++) {
        submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
        }
        //estilo de los submenús
        menu[i].style.position="relative";
        submenu[i].style.position="absolute";
        submenu[i].style.top="100%";
        submenu[i].style.left="0px";
        submenu[i].style.backgroundColor="#ff0000";
        submenu[i].style.font="normal 0.8em arial";
        submenu[i].style.padding="0.2em 0.5em";
        submenu[i].style.display="none";
    }
    for (i=0;i<titulos.length;i++) {
        menu[i].onmouseover = ver; //onmouseover Ver el menú cuando el cursor está encima de...
        menu[i].onmouseout = ocultar; // onmouseout Ver el menú cuando el cursor ya no está encima de..
    } 
}
//función para ver los menús desplegables.
function ver() {
    muestra=this.getElementsByTagName("div")[0];
    muestra.style.display="block"
    }
//funcion para ocultar los menús desplegables.
function ocultar() {
    oculta=this.getElementsByTagName("div")[0];
    oculta.style.display="none"
    }