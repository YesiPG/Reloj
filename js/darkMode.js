(function(){
    "use strict"

    const d = document; 
    const ls = localStorage;

    const imgDarkMode = d.querySelector(".imgDarkMode");
    const pintar = d.querySelectorAll("[data-darkMode]");
    const pintar2 = d.querySelectorAll("[data-darkMode2]");
    const colorLetras = d.querySelectorAll("[data-darkMode3]");
    const colorLetras2 = d.querySelectorAll("[data-darkMode4]");
    const bgHover = d.querySelectorAll("[data-darkModeHover]");
    const bgConfg = d.querySelectorAll("[data-darkModeConfig]");
    

    const temaOscuro = ()=>{
    
    
        pintar.forEach(element => element.classList.add("temaBgOscuro"));
        pintar2.forEach(element => element.classList.add("temaBg2Oscuro"));
        colorLetras.forEach(element => element.classList.add("temaColor"));
        colorLetras2.forEach(element => element.classList.add("temaColor2"));
        bgConfg.forEach(element => element.classList.add("temaBgAma"));
        bgHover.forEach(element => element.classList.add("temaBgHover"));
        imgDarkMode.removeAttribute("src");
        imgDarkMode.setAttribute("src","images/sun.svg")
        
        ls.setItem("tema","oscuro");
    }

    const temaClaro = ()=>{
        
        pintar.forEach(element => element.classList.remove("temaBgOscuro"));
        pintar2.forEach(element => element.classList.remove("temaBg2Oscuro"));
        colorLetras.forEach(element => element.classList.remove("temaColor"));
        bgConfg.forEach(element => element.classList.remove("temaBgAma"));
        colorLetras2.forEach(element => element.classList.remove("temaColor2"));
        bgHover.forEach(element => element.classList.remove("temaBgHover"));
        imgDarkMode.removeAttribute("src");
        imgDarkMode.setAttribute("src","images/moon.svg")
        
        
        ls.setItem("tema","claro");
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(".btnDarkMode")){
            if(imgDarkMode.getAttribute("src") === "images/moon.svg" )temaOscuro();
            else temaClaro();
            

        }
    })

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(ls.getItem("tema") === null) ls.setItem("tema","claro");
        if(ls.getItem("tema") === "oscuro") temaOscuro();
        if(ls.getItem("tema") === "claro") temaClaro();
    })
})()
