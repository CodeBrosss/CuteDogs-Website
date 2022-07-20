let navEl = document.getElementById("nav-toggle")
navEl.addEventListener('click', () => {
    document.body.classList.toggle("nav-open")

})
// registtration data
let firstName = document.getElementById("first-name")
console.log(firstName.value)
let secondName = document.getElementById("second-name")
let userName = document.getElementById("user-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let regBtn = document.getElementById("reg-btn")
let regStatus = document.getElementById("reg-status")

let userdata = []

regBtn.addEventListener("click", () => {
    for(let i = 0; i < userdata.length; i++){
        if(userdata[i].username === userName.value){
            regStatus.innerHTML = `<p> username already exists!</p>`

        }
        else{
            userdata.push(
                {firstname: firstName.value,
                secondname: secondName.value,
                username: userName.value,
            Email: email.value,
           password: password.value,})
           regStatus.innerHTML = `<p> user created</p>`
           console.log("saved")
        }
        localStorage.setItem("userdata", JSON.stringify(userdata))
    }
})

firstNameVlue = firstName.value
console.log(firstNameVlue)
