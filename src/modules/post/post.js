
let form = document.querySelector(".form")
let postinp = document.querySelector(".form__inp")
let postinp2 = document.querySelector(".form__inp2")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let postinpValue = postinp.value.trim() 
    let postinp2Value = postinp2.value.trim()  
    if(postinpValue || postinp2Value){
        fetch("http://localhost:7777/popular-posts", {
            method: "POST",
            body: JSON.stringify({
                    title: postinpValue,
                    body: postinp2Value,
                    created_at: "2023-09-16T09:30:15.874Z",
                    views: 589,
                    image: "https://picsum.photos/360/300/?random=8",
                    user: {
                      img: "https://picsum.photos/360/300/?random=141",
                      name: "Sophia",
                      surname: "Wilson"
                    }   
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
 
})