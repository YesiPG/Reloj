(function(){
    "use strict"

    const d = document;
    const hora = d.querySelector(".hora");
    const bienvenida = d.querySelector(".bienvenida");
    const alarma = d.querySelector(".alarma");
    const cronometro = d.querySelector(".cronometro");

    const seccionHora = ()=>{

        bienvenida.classList.add("showSeccion");
        alarma.classList.add("showSeccion");
        cronometro.classList.add("showSeccion");
        hora.classList.remove("showSeccion");
    }

    const seccionAlarma = ()=>{

        bienvenida.classList.add("showSeccion");
        cronometro.classList.add("showSeccion");
        hora.classList.add("showSeccion");
        alarma.classList.remove("showSeccion");
    }

    const seccionCronometro = ()=>{

        bienvenida.classList.add("showSeccion");
        hora.classList.add("showSeccion");
        alarma.classList.add("showSeccion");
        cronometro.classList.remove("showSeccion");
    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnHora"))seccionHora();
        if(e.target.matches(".btnAlarma"))seccionAlarma();
        if(e.target.matches(".btnCronometro"))seccionCronometro();
        
    })

})()