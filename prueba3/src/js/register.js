// importing bootstrap but is js
import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

// variables from the html
let form = document.getElementById("form")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let confirmPasswordInput = document.getElementById("confirm-password")

// the json Endpoint
let url = "http://localhost:3000/user"

// calling functions and the form
guardian()

form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    let confirmation = await verifyUserPassword(emailInput,passwordInput,confirmPasswordInput)
    if(confirmation==true){
        await registerUser(emailInput,passwordInput)
    }
})


// function to verifyuser's password
async function verifyUserPassword(emailInput,passwordInput,confirmPasswordInput){
    let response = await fetch(`${url}?email=${emailInput.value}`)
    let data = await response.json()

    if(data.length===1){
        alert("This Email is already in our database pls Sign In")
        window.location.href="../../pages/login.html"
    }
    else{
        if(passwordInput.value!=confirmPasswordInput.value){
            alert("Please use the same password for both fields ")
        }
        else{
            return true
        }
    }

}

// function to register user 

async function registerUser(emailInput,passwordInput) {
    let newUser = {
        "email":emailInput.value,
        "password":passwordInput.value
    }

    await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newUser)
    })

    localStorage.setItem("access",true)
    alert("Your user has been created")
    window.location.href="../../src/pages/dashboard.html"
}

// guardian that only lets those with access the entry

function guardian() {
    let existence = localStorage.getItem("access")
    if(existence =="true"){
        alert("You are already loged in")
        window.location.href="../../index.html"
    }
}