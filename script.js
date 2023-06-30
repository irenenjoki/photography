function FuncClose(){
    var chk = window.document.getElementById("check")
    chk.checked = false
}

// Tema
if(localStorage.tema){
    if(localStorage.tema == "escuro"){
        FuncEscuro()
    }else{
        FuncClaro()
    }
}
var c = window.document.getElementById("tema")
var chk_lamp = window.document.getElementsByClassName("pos")[0]
chk_lamp.addEventListener("click", FuncTheme)

function FuncEscuro(){
    window.document.getElementsByClassName("hamburger")[0].classList.add("burger")
    window.document.getElementsByTagName("main")[0].style.background = "#3B444B"
    window.document.getElementsByTagName("footer")[0].style.background = "#003353"
    window.document.getElementsByTagName("span")[1].style.color = "yellow"
    window.document.getElementsByClassName("social")[0].style.background = "#3B444B"
    window.document.getElementsByTagName("nav")[0].style.background = "#3B444B"
    window.document.getElementsByTagName("h1")[0].style.color = "#fff"
    window.document.getElementsByTagName("h2")[0].style.color = "#fff"
    window.document.getElementsByClassName("frase")[0].style.color = "gray"
    window.document.getElementsByTagName("h1")[1].style.color = "gray"
    window.document.getElementsByClassName("f2")[0].style.color = "gray"
    var bio = window.document.getElementsByClassName("bio")[0]
    if(bio){
        bio.style.color = "#fff"
    }
    var links = window.document.getElementsByTagName("a")
    for(var l = 0; l < 8; l+=1){
        links[l].style.color = "#fff"
    }
}


function FuncClaro(){
    window.document.getElementsByClassName("hamburger")[0].classList.remove("burger")
    window.document.getElementsByTagName("main")[0].style.background = "#F0F8FF"
    window.document.getElementsByTagName("footer")[0].style.background = "#B0C4DE"
    window.document.getElementsByTagName("span")[1].style.color = "#000"
    window.document.getElementsByClassName("social")[0].style.background = "#F0F8FF"
    window.document.getElementsByTagName("nav")[0].style.background = "#F0F8FF"
    window.document.getElementsByTagName("h1")[0].style.color = "#000"
    window.document.getElementsByTagName("h2")[0].style.color = "#000"
    window.document.getElementsByClassName("frase")[0].style.color = "#fff"
    window.document.getElementsByTagName("h1")[1].style.color = "#fff"
    window.document.getElementsByClassName("f2")[0].style.color = "#fff"
    var bio = window.document.getElementsByClassName("bio")[0]
    if(bio){
        bio.style.color = "#000"
    }
    var links = window.document.getElementsByTagName("a")
    for(var l = 0; l < 8; l+=1){
        links[l].style.color = "#000"
    }
}


function FuncTheme(){
    if(c.checked){
        localStorage.setItem("tema", "claro")
        FuncClaro()
    }else{
        localStorage.setItem("tema", "escuro")
        FuncEscuro()
    }
}
 // JavaScript code to get the current date and year
 var currentDate = new Date();
 var year = currentDate.getFullYear();


 // Function to update the date and year
 function updateDate() {
   document.getElementById('current-year').textContent = "© IRENE. All right Reserved " + year;
 }

 // Update the date and year initially
 updateDate();

 // Update the date and year every second
 setInterval(updateDate, 1000);