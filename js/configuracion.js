(function(){
    "use strict"

    const d = document;
    const dismTitulo = d.querySelectorAll("[data-minusT]");
    const dismParrafo = d.querySelectorAll("[data-minusP]");
    const incTitulo = d.querySelectorAll("[data-plusT]");
    const incParrafo = d.querySelectorAll("[data-plusP]");
    const fullScreen  = d.documentElement;
    const imgScreen = d.querySelector(".full");
    
    const disminuirLetra = ()=>{
        dismTitulo.forEach(e => e.style.fontSize = "8rem");
        dismParrafo.forEach(e => e.style.fontSize = "1.3rem");
    }

    const incrementarLetra = ()=>{
        incTitulo.forEach(e => e.style.fontSize = "10rem");
        incParrafo.forEach(e => e.style.fontSize = "1.6rem");
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