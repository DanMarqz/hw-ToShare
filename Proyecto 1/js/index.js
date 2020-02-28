// Prácticas desde: https://www.aprende-web.net/jspracticas/
window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    document.onkeydown = teclado;  //función teclado disponible
    }
x="0";           //x es el valor que está en pantalla
xi=1;            //reincia número en pantalla: 1=si; 0=no;
coma=0;          //estado coma decimal 0=no, 1=si;    
ni=0;            //número oculto o en espera.
op="no";            //operación en curso; "no" =  sin operación.
//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) {    // inicializar un número, 
       pantalla.innerHTML=xx;    //muestra en pantalla resultado
       x=xx; //guardar número
        if (xx==".") { //si escribimos una coma al principio del número
            pantalla.innerHTML="0."; 
            x=xx; //guardar número
            coma=1; //cambiar estado de la coma
        }
    }
    else { //continuar escribiendo un número
        if (xx=="." && coma==0) {   //si escribimos una coma decimal por primera vez
            pantalla.innerHTML+=xx;
            x+=xx;
            coma=1; //cambiar el estado de la coma  
        }
         //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (xx=="." && coma==1) {} 
          //Resto de casos: escribir un número del 0 al 9: 	 
        else {
            pantalla.innerHTML+=xx;
            x+=xx
        }
    }
xi=0; //no reinicia la pantalla
}
//Operar (Suma, resta, multiplicación y división)
function operar(s) {
    igualar(); //llama la función igualar() - si hay operaciones pendientes se realizan primero
    ni=x //ponemos el número en "numero en espera" para poder escribir el segundo.
    op=s; // guarda la operación
    xi=1; //reinicia pantalla
}
//Totalizar las operaciones
function igualar() {
    if (op=="no") { //op="no" = Ya no quedan operaciones por resolver
       pantalla.innerHTML=x;	
    }
    else { //si hay operación pendiente resolvemos
       sl=ni+op+x; // escribimos la operación en una cadena ni=numero en espera + op=tipo de operación + x=el número en pantalla
       sol=eval(sl) //convertimos la cadena a código y resolvemos eval() transforma la cadena sl en código y resuelve la operación
       pantalla.innerHTML=sol //muestra resultado 'sol' en pantalla
       x=sol; //guardamos la solución
       op="no"; 
       xi=1; 
    }
}
//Sacar raíz cuadrada
function raizc() {
    x=Math.sqrt(x) //Math.sqrt resuelve la raíz cuadrada (Math Square Root)
    pantalla.innerHTML=x; 
    op="no"; 
    xi=1; 
}
//Sacar porcentaje
function porcent() { 
    x=x/100 //divide x (el número en pantalla) entre 100
    pantalla.innerHTML=x; 
    igualar(); 
    xi=1;
}
//Sacar el número opuesto
function opuest() { 
    nx=Number(x); //convertir en número
    nx=-nx; //cambiar de signo
    x=String(nx); //volver a convertir a cadena
    pantalla.innerHTML=x; //mostrar en pantalla.
}
//Sacar el número inverso
function inve() {
    nx=Number(x);
    nx=(1/nx);
    x=String(nx);		 
    pantalla.innerHTML=x;
    xi=1; 
}
//Borra sólo el último número escrito.
function retro(){
    cifras=x.length; //hallar número de caracteres en pantalla
    br=x.substr(cifras-1,cifras) //substr() busca la última cifra que se va a quitar para saber si tiene décimal
    x=x.substr(0,cifras-1) //substr() elimina el último caracter
    if (x=="") {x="0";} //si ya no quedan caracteres coloca el 0
    if (br==".") {coma=0;} //Si hemos quitado la coma, se permite escribirla de nuevo.
    pantalla.innerHTML=x; 
}
//Borrado parcial que elimina los datos de la pantalla, sin embargo, no elimina la operación anterior (si existiese)
function borradoParcial() {
    pantalla.innerHTML=0; //Lo mostrado en pantalla pasa a 0
    x=0; //Valor de pantalla es 0
    coma=0; //reinicia la coma
}
//Borrado total, literalmente... Borra todas las operaciones y reinicia todas las variables.
function borradoTotal() {
    pantalla.innerHTML=0; 
    x="0"; 
    coma=0;
    ni=0 
    op="no"
    }
//Función para usar la calculadora con el teclado
function teclado (elEvento) { 
    evento = elEvento || window.event;
    k=evento.keyCode; //número de código de la tecla.
    //teclas númericas del teclado alfamunérico
    if (k>47 && k<58) { 
        p=k-48; //buscar número a mostrar.
        p=String(p) //convertir a cadena para poder añádir en pantalla.
        numero(p); //enviar para mostrar en pantalla
    }	
    //Teclas del teclado númerico.
    if (k>95 && k<106) {
        p=k-96;
        p=String(p);
        numero(p);
    }
    if (k==110 || k==190) {numero(".")} //teclas de coma decimal
    if (k==106) {operar('*')} //tecla multiplicación
    if (k==107) {operar('+')} //tecla suma
    if (k==109) {operar('-')} //tecla resta
    if (k==111) {operar('/')} //tecla división
    if (k==32 || k==13) {igualar()} //Tecla igual: intro o barra espaciadora
    if (k==46) {borradoTotal()} //Tecla borrado total: "supr"
    if (k==8) {retro()} //Retroceso en escritura : tecla retroceso.
    if (k==36) {borradoParcial()} //Tecla borrado parcial: tecla de inicio.
}