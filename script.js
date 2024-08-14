let icon = document.getElementById("Icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "http://www.w3.org/2000/svg";
    }
}