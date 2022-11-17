(function(){
    "use strict"

    const d = document, w = window;
    const dismTitulo = d.querySelectorAll("[data-minusT]");
    const dismParrafo = d.querySelectorAll("[data-minusP]");
    const incTitulo = d.querySelectorAll("[data-plusT]");
    const incParrafo = d.querySelectorAll("[data-plusP]");
    const fullScreen  = d.documentElement;
    const imgScreen = d.querySelector(".full");
    
    const disminuirLetra = ()=>{

        if(w.screen.width > 800){
            dismTitulo.forEach(e => e.style.fontSize = "8rem");
            dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
        }

        else if(w.screen.width > 600 && w.screen.width <= 800){
            dismTitulo.forEach(e => e.style.fontSize = "7rem");
            dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
        }
        else if(w.screen.width > 500 && w.screen.width <= 600){
            dismTitulo.forEach(e => e.style.fontSize = "6rem");
            dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
        }
        else if(w.screen.width > 400 && w.screen.width <= 500){
            dismTitulo.forEach(e => e.style.fontSize = "5.3rem");
            dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
        }
        else if(w.screen.width > 350 && w.screen.width <= 400){
            dismTitulo.forEach(e => e.style.fontSize = "4.6rem");
            dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
        }
        else{
            dismTitulo.forEach(e => e.style.fontSize = "4rem");
            dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
        }
    }

    const incrementarLetra = ()=>{

        if(w.screen.width > 800){
            incTitulo.forEach(e => e.style.fontSize = "10rem");
            incParrafo.forEach(e => e.style.fontSize = "1.6rem");
        }
        else if(w.screen.width > 600 && w.screen.width <= 800){
            incTitulo.forEach(e => e.style.fontSize = "9rem");
            incParrafo.forEach(e => e.style.fontSize = "1.6rem");
        }
        else if(w.screen.width > 500 && w.screen.width <= 600){
            incTitulo.forEach(e => e.style.fontSize = "7.5rem");
            incParrafo.forEach(e => e.style.fontSize = "1.5rem");
        }
        else if(w.screen.width > 400 && w.screen.width <= 500){
            incTitulo.forEach(e => e.style.fontSize = "6.2rem");
            incParrafo.forEach(e => e.style.fontSize = "1.5rem");
        }
        else if(w.screen.width > 350 && w.screen.width <= 400){
            incTitulo.forEach(e => e.style.fontSize = "5.3rem");
            incParrafo.forEach(e => e.style.fontSize = "1.5rem");
        }
        else{
            incTitulo.forEach(e => e.style.fontSize = "4.4rem");
            incParrafo.forEach(e => e.style.fontSize = "1.5rem");
        }
    }

    const openFullscreen = ()=>{
            if (fullScreen.requestFullscreen) {
                fullScreen.requestFullscreen();
            }
            imgScreen.removeAttribute("src");
            imgScreen.setAttribute("src","images/exitFscreen.svg");
        
    }
    
    const closeFullscreen = ()=>{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        imgScreen.removeAttribute("src");
        imgScreen.setAttribute("src","images/fullScreen.svg");
    }
    
    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnMinus"))disminuirLetra();
        if(e.target.matches(".btnPlus"))incrementarLetra();

        if(e.target.matches(".btnFullScreen")){
        if(imgScreen.getAttribute("src") === "images/fullScreen.svg")openFullscreen();
        else closeFullscreen();
        }

    })

})()