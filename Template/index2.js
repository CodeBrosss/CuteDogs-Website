let navEl = document.getElementById("nav-toggle")
 if(navEl){
    navEl.addEventListener('click', () => {
        document.body.classList.toggle("nav-open")
    
    })
 }   


/*navEl.addEventListener('click', () => {
    document.body.classList.toggle("nav-open")

})*/
// registtration data
let firstName = document.getElementById("first-name")
let secondName = document.getElementById("second-name")
let userName = document.getElementById("user-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let regBtn = document.getElementById("reg-btn")
let regStatus = document.getElementById("reg-status")

let userdata =JSON.parse(localStorage.getItem("userdata")) || []

regBtn.addEventListener("click", () => {
    let search = userdata.find((x)=> x.User === userName.value) 
    console.log(search)
    if(search === undefined){
        userdata.push({fname:firstName.value,
                      lname:secondName.value,
                     User:userName.value,
                      Email:email.value,
                    Password:password.value,})
                    regStatus.innerHTML = `<p class="reg-succesful"> Account has been created!</p>`
                    localStorage.setItem("userdata", JSON.stringify(userdata))
        console.log(userdata)
    }
    else{       
        regStatus.innerHTML = `<p class="reg-status"> username exists!</p>`
    }

})

/* login data */
/*let login = document.getElementById("login")
let loginStatus = document.getElementById("login-status")
let loginPassowrd =document.getElementById("login-password")
let loginUsername = document.getElementById("login-username")

login.addEventListener('click', ()=> {
    loginStatus.textContent = "hello"
})*/