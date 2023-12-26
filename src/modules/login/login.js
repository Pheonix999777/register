
let elform = document.querySelector(".dark__form")


let elinp = document.querySelector(".dark__inp")
let elinpPassword = document.querySelector(".dark__password")
if(elform){
    elform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let inp = elinp.value.trim()  
        let inpPassword = elinpPassword.value.trim() 
        if(localStorage.getItem("userdata").includes(inp && inpPassword)){
            location.pathname = "/src/modules/home/index.html"
        }else{
            alert("Username yoki parol xato")
        }

    })
}

let darkbtn = document.querySelector(".dark__link")
darkbtn.addEventListener("click", ()=>{
    location.pathname = "/src/modules/register/index.html"
})