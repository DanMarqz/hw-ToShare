function actual() {
    fecha=new Date(); //Da el valor de la fecha/hora que tenga el equipo
    hora=fecha.getHours(); //Toma la hora de new Date()
    minuto=fecha.getMinutes(); //Toma los minutos
    segundo=fecha.getSeconds(); //Toma los segundos
    if (hora<10) { //Cuando sea menor de 10 va a agregar '0' para que salgan 2 dígitos (09-05-03) 
        hora="0"+hora;
    } if (minuto<10) { //Cuando sea menor de 10 va a agregar '0' para que salgan 2 dígitos (09-05-03) 
        minuto="0"+minuto;
    } if (segundo<10) { //Cuando sea menor de 10 va a agregar '0' para que salgan 2 dígitos (09-05-03) 
        segundo="0"+segundo;
    }
    //devolver los datos:
    mireloj = hora+" : "+minuto+" : "+segundo;	
    return mireloj;
}

function actualizar() { //función del temporizador
    mihora=actual(); //recoge hora actual
    mireloj=document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
}
setInterval(actualizar,1000); //Actualiza cada segundo el reloj