

let elform = document.querySelector(".dark__form")

let data2 = localStorage.getItem("data2")
if(data2){
  window.location.pathname = "/src/modules/home/index.html"
}

let elinp = document.querySelector(".dark__inp")
let elinpPassword = document.querySelector(".dark__password")

if(elform){
    elform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let inp = elinp.value.trim()  
        let inpPassword = elinpPassword.value.trim() 
        if(inp && inpPassword){
          fetch("http://localhost:8080/users",{
              method: "POST",
              body: JSON.stringify({
                name: inp,
                username: inp,
                password: inpPassword,
              
              }), headers:{
                "Content-Type": "application/json"
            }
          }).then((res)=>{
            if(res.ok){
                return res.json()
            }
          }).then((data2)=>{
            localStorage.setItem("data2", JSON.stringify(data2))
            window.location.pathname = "/src/modules/login/index.html"
          })
        }

    })
}

let darkbtn = document.querySelector(".dark__link")
darkbtn.addEventListener("click", ()=>{
    window.location.pathname = "/src/modules/register/index.html"
}) 