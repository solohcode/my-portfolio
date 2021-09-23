var page = document.getElementById('fullpage')
var home = document.getElementById('home')
var loader= document.getElementById('loader')



setTimeout(()=>{
    loader.style.display="none",
    // home.style.visibility="visible"
    home.style.display="block"
    page.style.visibility="visible"
    // page.style.opacity="1"
    // page.style.display="block"
    },7000)