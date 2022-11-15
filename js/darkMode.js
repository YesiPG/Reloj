(function(){
    "use strict"

    const d = document, ls = localStorage;

    const imgDarkMode = d.querySelector(".imgDarkMode");
    const pintar = d.querySelectorAll("[data-darkMode]");
    const pintar2 = d.querySelectorAll("[data-darkMode2]");
    const colorLetras = d.querySelectorAll("[data-darkMode3]")

    const temaOscuro = ()=>{
        console.log("hola")
        pintar.forEach(element => element.classList.add("temaBgOscuro"));
        pintar2.forEach(element => element.classList.add("temaBg2Oscuro"));
        colorLetras.forEach(element => element.classList.add("temaColor"));
        imgDarkMode.removeAttribute("src");
        imgDarkMode.setAttribute("src","images/sun.svg")
        
        // ls.removeItem("tema");
        // ls.setItem("tema","oscuro");
    }

    const temaClaro = ()=>{

        pintar.forEach(element => element.classList.remove("temaBgOscuro"));
        pintar2.forEach(element => element.classList.remove("temaBg2Oscuro"));
        colorLetras.forEach(element => element.classList.remove("temaColor"));
        imgDarkMode.removeAttribute("src");
        imgDarkMode.setAttribute("src","images/moon.svg")
        
        // ls.setItem("tema","claro");
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(".btnDarkMode")){

            if(imgDarkMode.getAttribute("src") === "images/moon.svg" ){
                e.preventDefault();
                temaOscuro();
            }
            if(imgDarkMode.getAttribute("src") === "images/sun.svg" )temaClaro();

        }
    })

    // d.addEventListener("DOMContentLoaded", (e)=>{
    //     if(ls.getItem("tema") === null) ls.setItem("tema","claro");
    //     if(ls.getItem("tema") === "oscuro") temaOscuro();
    //     if(ls.getItem("tema") === "claro") temaClaro();
    // })
})()
