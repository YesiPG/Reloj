(function(){
    "use strict"

    const d = document;
    const h = d.querySelector(".h");
    const min = d.querySelector(".min");
    const seg = d.querySelector(".seg");
    const dia = d.querySelector(".dia");
    const mes = d.querySelector(".mes");
    const año = d.querySelector(".año");

    const horaActual = ()=>{

        const fecha = new Date();
        
        if(fecha.getHours() < 10) h.innerHTML = `0${fecha.getHours()}:`;
        else h.innerHTML = `${fecha.getHours()}:`;

        if(fecha.getMinutes() < 10) min.innerHTML = `0${fecha.getMinutes()}:`;
        else min.innerHTML = `${fecha.getMinutes()}:`;

        if(fecha.getSeconds() < 10) seg.innerHTML = `0${fecha.getSeconds()}`;
        else seg.innerHTML = `${fecha.getSeconds()}`;
    }

    const fechaActual = ()=>{
        const fecha = new Date();

        if(fecha.getDate() < 10 ) dia.innerHTML = `0${fecha.getDate()}/`;
        else dia.innerHTML = `${fecha.getDate()}/`;

        if(fecha.getMonth()+1 < 10 ) mes.innerHTML = `0${fecha.getMonth()+1}/`;
        else mes.innerHTML = `${fecha.getMonth()+1}/`;
        
        año.innerHTML = `${fecha.getFullYear()}`;
    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnHora")){
            fechaActual();
            horaActual();
            setInterval(horaActual,1000);
        }
    })

})()