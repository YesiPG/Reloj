(function(){
    "use strict"

    const d = document;
    const crH = d.querySelector(".crH");
    const crM = d.querySelector(".crM");
    const crS = d.querySelector(".crS");
    let a,b,c;


    const iniciarCronometro = ()=>{
        let hora = 0;
        let min = 0;
        let seg = 0;

        a = setInterval(()=>{
            seg++;

            if(seg < 10) crS.innerHTML = `0${seg}`;
            if(seg >= 10)crS.innerHTML = `${seg}`;
            if(seg > 59) crS.innerHTML =`00`;
            if(seg === 60) seg = 0;
            
        },1000);

        b = setInterval(()=>{
            min++;

            if(min < 10) crM.innerHTML = `0${min}:`;
            if(min >= 10)crM.innerHTML = `${min}:`;
            if(min > 59) crM.innerHTML =`00:`;
            if(min === 60) min = 0;

        },60000);

        c =setInterval(()=>{
            hora++;

            if(hora < 10) crH.innerHTML = `0${hora}:`;
            if(hora >= 10)crH.innerHTML = `${hora}:`;
            if(hora > 23) crH.innerHTML =`00:`;
            if(hora === 24) hora = 0;

        },3600000);

    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnCrReset")){
            clearInterval(c);
        }

        if(e.target.matches(".btnCrIniciar"))iniciarCronometro();
    })
})();