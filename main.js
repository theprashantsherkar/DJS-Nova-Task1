let btn = document.getElementById("myBtn")

btn.addEventListener("click", ()=>{
    let mail=window.prompt("enter your email id: ")
    let passw = window.prompt("enter password: ")

})

let sign = document.getElementById("darkmode")

sign.addEventListener("click", ()=>{
    let new_mail=window.prompt("enter your email id: ")
    let new_passw = window.prompt("enter password: ")

})


let mem = document.getElementById("membut")

mem.addEventListener("click", ()=>{
    let mail=window.prompt("enter your email id: ")
    let passw = window.prompt("enter password: ")

})

let abc = document.getElementsByClassName("trans2")
abc.addEventListener("mouseover", changeCol)

function changeCol() {
    abc.style.color = "cyan"
    
}