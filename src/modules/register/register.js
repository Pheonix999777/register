
let elform = document.querySelector(".white__form")


let userdata = localStorage.getItem("userdata")

if(userdata){
    location.pathname = "/src/modules/login/index.html"
}

let elinp2 = document.querySelector(".white__inp")
let elUsername = document.querySelector(".white__username")
let elinpEmail = document.querySelector(".white__email")
let elinpPassword2 = document.querySelector(".white__password")
if(elform){
    elform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let registerInp = elinp2.value.trim()
        let registerUsername = elUsername.value.trim()
        let registerEmail = elinpEmail.value.trim()
        let registerPassword2 = elinpPassword2.value.trim()
       if(registerInp && registerUsername && registerEmail && registerPassword2 ){
        fetch("http://localhost:7777/users",{
        method: "POST",
        body: JSON.stringify({
            username: registerUsername,
            password: registerPassword2,
            name: registerInp,
            email: registerEmail,
            phone: "1-477-935-8478 x6430",
            image: "https://picsum.photos/360/300/?random=6"
        }),
        headers:{
            "Content-Type": "application/json"
        }
        }).then((res)=>{
            if(res.ok){
                return res.json()
            }
       
        }).then((data)=>{
            localStorage.setItem("userdata", JSON.stringify(data))
            location.pathname = "/src/modules/login/index.html"

        }).catch((error)=>{

            console.log(error)
           })
       }
    })
}

let elbtnLink = document.querySelector(".white__link")
elbtnLink.addEventListener("click", ()=>{
    location.pathname = "/src/modules/login/index.html"
   
})