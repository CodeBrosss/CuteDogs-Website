let loginStatus = document.getElementById("login-status")
let loginBtn = document.getElementById("login")
let loginUsername = document.getElementById("login-username")
let loginPassword = document.getElementById("login-password")
//console.log(loginUsername)
//console.log(loginPassword)


 userdata =JSON.parse(localStorage.getItem("userdata")) || []

loginBtn.addEventListener('click', () =>{
    let search = userdata.find((x) => x.User === loginUsername.value) || []
    if(loginUsername.value === search.User && loginPassword.value === search.Password){
        loginStatus.innerHTML = `<p> Login successful!</p>`
    }
    else{
        loginStatus.innerHTML = `<p class="login-error">Invalid login details!</p>` 
    }
    
})