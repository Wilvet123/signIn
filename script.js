const signIn = document.getElementById("signIn")
const signUp = document.getElementById("signUp")
const signInC = document.querySelector(".signIn")
const signUpC = document.querySelector(".signUp")
const create = document.getElementById("create")
const signUpform = document.getElementById("signUpForm")
const signInform = document.getElementById("signInForm")
const email = document.querySelector("#email")
const userName = document.querySelector("#name")
const eye = document.querySelector("i")
const password = document.getElementById("password")
const confirmP = document.getElementById("confirmP")
const confirmError = document.querySelector(".confirmError")
const nameError = document.querySelector(".nameError")
const emailError = document.querySelector(".emailError")
const passwordError = document.querySelector(".passwordError")

signUpform.addEventListener("submit", e => {
    e.preventDefault()
    userErrors()
})
signInform.addEventListener("submit", e => {
    e.preventDefault()
})

signUp.addEventListener("click", () => {

    signUpC.classList.add("hidden")
    signInC.classList.remove("hidden")
})
signIn.addEventListener("click", () => {
  
    signInC.classList.add("hidden")
    signUpC.classList.remove("hidden")

})

const userErrors = () => {

    //for username
    if (userName.value === "") {
        nameError.innerHTML = "Name is Required"
    }
    else nameError.innerHTML = ""

    //for email
    if (email.value === "") {
        emailError.innerHTML = "Email is Required"
    }
    else emailError.innerHTML = ""

    //for password
    if (password.value === "") {
        passwordError.innerHTML = "Password is Required"
    }
    else if (password.value.length < 8) {
        passwordError.innerHTML = "Password should be at least 6 characters"
    }
    else passwordError.innerHTML = ""

    if (confirmP.value !== password.value) {
        confirmError.innerHTML = "Passwords do not match"
            ;
    }
}



eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
    }
    else {
        password.type = "password"
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
    }


})







