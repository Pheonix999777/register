let elform = document.querySelector(".dark__form");
let elinp = document.querySelector(".dark__inp");
let elinpPassword = document.querySelector(".dark__password");


const userData = localStorage.getItem("userData");
if (userData) {
  
    window.location.pathname = "/src/modules/home/index.html";
}

if (elform) {
    elform.addEventListener("submit", async (e) => {
        e.preventDefault();
        let inp = elinp.value.trim();
        let inpPassword = elinpPassword.value.trim();

        try {
            const response = await fetch("http://localhost:7777/users");
            const users = await response.json();

            let foundUser = users.find((user) => user.name === inp && user.password === inpPassword);

            if (foundUser) {
                alert("Login successful");
                
                localStorage.setItem("userData", JSON.stringify(foundUser));
                window.location.pathname = "/src/modules/home/index.html";
            } else {
                alert("Incorrect username or password");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            alert("An error occurred. Please try again later.");
        }
    });
}

let darkbtn = document.querySelector(".dark__link");
darkbtn.addEventListener("click", () => {
    window.location.pathname = "/src/modules/register/index.html";
});
