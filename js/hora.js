(function(){
    "use strict"

    const d = document;

    const horaActual = ()=>{
        const fecha = new Date();
        
    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnHora"))horaActual();
    })

})()