// importing bootstrap but is js
import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

// variables
let form = document.getElementById("form")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")


// Endpoint
let url = "http://localhost:3000/user"

// called guardian and form listener
guardian()

form.addEventListener("submit",async (event)=>{
    event.preventDefault()
    let dataUser = await verifyUserExistence(emailInput)
    await verifyPassword(dataUser,passwordInput)
})

// function to verify Email existence

async function verifyUserExistence(emailInput){
    let response = await fetch(`${url}?email=${emailInput.value}`)
    let data = await response.json()

    if (data.length===1){
        return data
    }
    else{
        alert("The Email is not in our database please Register")
        window.location.href="../../pages/register.html"
    }
}

// function to verify password existence

async function verifyPassword(data,passwordInput){
    if(data[0].password==passwordInput.value){
        alert("Welcome")
        localStorage.setItem("access",true)
        window.location.href="../../src/pages/dashboard.html"
    }
    else{
        alert("The password is uncorrect pls try again")
        passwordInput.value = ""
    }
}

// the guardian 
function guardian() {
    let existence = localStorage.getItem("access")
    if(existence =="true"){
        alert("You are already loged in")
        window.location.href="../../index.html"
    }
}