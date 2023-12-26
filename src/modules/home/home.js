

let elUl = document.querySelector(".ul")
let temp = document.querySelector(".template").content

let elfragment = document.createDocumentFragment("div")
fetch("http://localhost:7777/popular-posts").then((response)=>{
    return response.json()
}).then((data)=>{
    data.forEach((element) => {
    let eltemp = temp.cloneNode(true)
    let elLi = eltemp.querySelector(".ul__li")
    let eldiv = elLi.querySelector(".ul__div")
    elLi.querySelector(".ul__pht").src = element.image
    eltemp.querySelector(".ul__title").textContent = element.title
    eltemp.querySelector(".ul__body").textContent = element.body  
    eltemp.querySelector(".ul__word-wiews").textContent = element.views    
 
    elLi.appendChild(eldiv)
    elfragment.appendChild(elLi)
    })
    elUl.appendChild(elfragment)
})


let btn = document.querySelector(".header__btn")


let userdata = localStorage.getItem("userdata")

if(!userdata){
    location.pathname = "/src/modules/login/index.html"
}
btn.addEventListener("click",() =>{
    location.pathname = "/src/modules/post/index.html"
})
