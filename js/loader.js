var page = document.getElementById('fullpage')
var loader= document.getElementById('loader')


setTimeout(()=>{
    loader.style.transition="5s",
    loader.style.display="none",
    // page.style.visibility="visible"
    // page.style.opacity="1"
    page.style.display="block"
    },10000)