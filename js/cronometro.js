(function(){
    "use strict"

    const d = document;
    const crH = d.querySelector(".crH");
    const crM = d.querySelector(".crM");
    const crS = d.querySelector(".crS");
    const btnReset = d.querySelector(".btnCrReset");
    let seg = 0, min = 0, hora = 0;

    const segundos = ()=>{
        seg++;

        if(seg < 10) crS.innerHTML = `0${seg}`;
        if(seg >= 10)crS.innerHTML = `${seg}`;
        if(seg > 59) crS.innerHTML =`00`;
        if(seg === 60) seg = 0;
    }

    const minutos = ()=>{
        min++;

        if(min < 10) crM.innerHTML = `0${min}:`;
        if(min >= 10)crM.innerHTML = `${min}:`;
        if(min > 59) crM.innerHTML =`00:`;
        if(min === 60) min = 0;
    }

    const horas = ()=>{
        hora++;

        if(hora < 10) crH.innerHTML = `0${hora}:`;
        if(hora >= 10)crH.innerHTML = `${hora}:`;
        if(hora > 23) crH.innerHTML =`00:`;
        if(hora === 24) hora = 0;
    }

    const iniciarCronometro = ()=>{

        const intervalHor = setInterval(horas,3600000);
        const intervalMin = setInterval(minutos,60000);
        const intervalSeg = setInterval(segundos,1000);

        btnReset.addEventListener("click",(e)=>{
            clearInterval(intervalSeg);
            clearInterval(intervalMin);
            clearInterval(intervalHor);
            crS.innerHTML = `00`;
            crM.innerHTML = `00:`;
            crH.innerHTML = `00:`;
            seg = 0;
            min = 0;
            hora = 0;
        })
    }

    
    d.addEventListener("click",(e)=>{
        
        if(e.target.matches(".btnCrIniciar"))iniciarCronometro();
    
    })
})();