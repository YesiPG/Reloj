(function(){
    "use strict"

    const d = document;
    const contenido = d.querySelector(".hcont2");
    // const navegador = d.querySelector(".navegador");

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnMenu")){
            contenido.classList.add("hcont2Show");
        }
        if(e.target.matches(".btnSalir")){
            contenido.classList.remove("hcont2Show");
        }
        
        if(e.target.matches(".btnHora")){
            contenido.classList.remove("hcont2Show");
        }
        if(e.target.matches(".btnAlarma")){
            contenido.classList.remove("hcont2Show");
        }
        if(e.target.matches(".btnCronometro")){
            contenido.classList.remove("hcont2Show");
        }
    })
})();