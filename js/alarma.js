(function(){
    "use strict"

    const d = document;
    const alHora = d.getElementById("al_hora");
    const alMinutos = d.getElementById("al_min");
    const parrafoHora = d.querySelector(".al_pHora");
    const parrafoMin = d.querySelector(".al_pMin");

    const validarHora = ()=>{
        let h = Number(alHora.value);
        console.log(h);
        if(typeof h !== "number" ) return parrafoHora.innerHTML = `el dato ${h} no es un numero`;
        if(h > 23 ) return parrafoHora.innerHTML = `la Hora no puede ser mayor a 23`;
        if(Math.sign(h) === -1)return parrafoHora.innerHTML = `el dato ${h} no puede ser un numero negativo`;
        if(Number.isInteger(h) !== true) return parrafoHora.innerHTML = `la hora no debe ser un numero flotante`;
    
        parrafoHora.innerHTML = `<span style="color:#0f0">La hora se ingreso correctamente</span>`;
        return true;
    }

    const validarMinutos = ()=>{
        let m = Number(alMinutos.value);
        console.log(m)

        if(typeof m !== "number" ) return  parrafoMin.innerHTML = `El dato ${m} no es un numero`;
        if(m > 59 ) return parrafoMin.innerHTML = `Los minutos no pueden ser mayor a 59`;
        if(Math.sign(m) === -1)return parrafoMin.innerHTML = `el dato ${m} no puede ser un numero negativo`;
        if(Number.isInteger(m) !== true) return parrafoMin.innerHTML = `los minutos no deben ser numeros flotante`;

        parrafoMin.innerHTML = `<span style="color:#0f0">Los minutos se ingresaron correctamente</span>`;
        return true;
    }

    const alarma = ()=>{
        const fecha = new Date();
        const audio = document.createElement("audio");
        
        if(fecha.getHours() === Number(alHora.value) && fecha.getMinutes() === Number(alMinutos.value)){
            audio.preload = "auto";
            audio.src = "./images/alarma.mp3";
            audio.play();
            document.body.appendChild(audio);
        }

    }
    
    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnAl_iniciar")){
            e.preventDefault();
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