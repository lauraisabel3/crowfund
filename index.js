const span = document.getElementById("header-main-menu");
const nav = document.getElementById("header-main-nav");


span.addEventListener("click", () => {
    if(nav.classList.contains("close")){
        nav.classList.replace("close", "show");
    }else{
        nav.classList.replace("show", "close");
    }
})
