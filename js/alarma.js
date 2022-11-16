(function(){
    "use strict"

    const d = document;
    const alHora = parseInt(d.getElementById("al_hora").value);
    const alMinutos = parseInt(d.getElementById("al_min").value);
    const parrafoHora = d.querySelector(".al_pHora");
    const parrafoMin = d.querySelector(".al_pMin");

    const validarHora = ()=>{
        
        if(typeof alHora !== "number" ) return parrafoHora.innerHTML = `el dato ${alHora} no es un numero`;
        if(alHora > 24 ) return parrafoHora.innerHTML = `la Hora no puede ser mayor a 24`;
        if(Math.sign(alHora) === -1)return parrafoHora.innerHTML = `el dato ${alHora} no puede ser un numero negativo`;
    
        parrafoHora.innerHTML = `<span style="color:#0f0">La hora se ingreso correctamente</span>`;
        return true;
    }

    const validarMinutos = ()=>{

        if(alMinutos === undefined ) return parrafoMin.innerHTML = `El Minuto esta vacio`;
        if(typeof alMinutos !== "number" ) return  parrafoMin.innerHTML = `El dato ${alMinutos} no es un numero`;
        if(alMinutos > 60 ) return parrafoMin.innerHTML = `Los minutos no pueden ser mayor a 60`;
        if(Math.sign(alMinutos) === -1)return parrafoMin.innerHTML = `el dato ${alMinutos} no puede ser un numero negativo`;

        parrafoMin.innerHTML = `<span style="color:#0f0">Los minutos se ingresaron correctamente</span>`;
        return true;
    }

    const alarma = ()=>{
        const fecha = new Date();
        const audio = document.createElement("audio");
        
        if(fecha.getHours() === alHora && fecha.getMinutes() === alMinutos){
            audio.preload = "auto";
            audio.src = "./images/alarma.mp3";
            audio.play();
            document.body.appendChild(audio);
        }

    }
    
    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnAl_iniciar")){
            e.preventDefault();
            validarHora();
            if(validarMinutos()===true && validarHora() === true){
                alarma();
                setInterval(alarma,1000);
            }
        }

        if(e.target.matches(".btnAl_reset")){
            parrafoHora.innerHTML = ``;
            parrafoMin.innerHTML = ``;
        }
    })
})();