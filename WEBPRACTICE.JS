let listButton =document.getElementById("list-btn");
document.getElementById("main-nav").classList.toggle("dis");
listButton.addEventListener('click',()=>{
    document.getElementById("main-nav").classList.toggle("dis");
    document.getElementById("logo").remove();
})