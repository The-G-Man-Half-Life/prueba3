// importing bootstrap but is js
import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

// variables of input buttons form tables etc..
let typeOfRoomInput = document.getElementById("room-type")
let wifiInput = document.getElementById("wifi")
let breakfastInput = document.getElementById("breakfast")
let airConditioningInput = document.getElementById("air-conditioning")
let priceDay = document.getElementById("price-day")
let bedsAmount = document.getElementById("bed-amount")
let bathroomAmount = document.getElementById("bathroom-amount")
let bedroomIMG = document.getElementById("bedroom-img")
let form = document.getElementById("form")
let logoutButton = document.getElementById("log-out")


let familiarTbodyTable = document.getElementById("familiar-tbody-table")
let suiteTbodyTable = document.getElementById("suite-tbody-table")
let simpleTbodyTable = document.getElementById("simple-tbody-table")

// flags and external info which is useful
let flag = false

let verification1

let globalId

// endpoints
let urlSimple = "http://localhost:3000/simple"
let urlSuite = "http://localhost:3000/suite"
let urlFamiliar = "http://localhost:3000/familiar"


// calling of all the tables function forms and add event listeners
guardian()


await showFamiliar(familiarTbodyTable)
await showSuite(suiteTbodyTable)
await showSimple(simpleTbodyTable)

logoutButton.addEventListener("click", (event)=>{
    logout()
    guardian()
})


familiarTbodyTable.addEventListener("click", async (event) => {
    event.preventDefault()
    if (event.target.getAttribute("kind") == "danger") {
        let id = event.target.getAttribute("data-id")
        await delete1(id, urlFamiliar)
        await showFamiliar(familiarTbodyTable)
    }
    else{
        let id = event.target.getAttribute("data-id")
        let url = event.target.getAttribute("url")
        await putInfo(typeOfRoomInput ,wifiInput ,breakfastInput ,airConditioningInput,priceDay,bedsAmount,bathroomAmount,bedroomIMG,id,url)

        globalId = id
    }

})

suiteTbodyTable.addEventListener("click", async (event) => {
    event.preventDefault()
    if (event.target.getAttribute("kind") == "danger") {
        let id = event.target.getAttribute("data-id")
        await delete1(id, urlSuite)
        await showSuite(suiteTbodyTable)
    }
    else{
        let id = event.target.getAttribute("data-id")
        let url = event.target.getAttribute("url")
        await putInfo(typeOfRoomInput ,wifiInput ,breakfastInput ,airConditioningInput,priceDay,bedsAmount,bathroomAmount,bedroomIMG,id,url)
    }
})

simpleTbodyTable.addEventListener("click", async (event) => {
    event.preventDefault()
    if (event.target.getAttribute("kind") == "danger") {
        let id = event.target.getAttribute("data-id")
        await delete1(id, urlSimple)
        await showSimple(simpleTbodyTable)
    }
    else{
        let id = event.target.getAttribute("data-id")
        let url = event.target.getAttribute("url")
        await putInfo(typeOfRoomInput ,wifiInput ,breakfastInput ,airConditioningInput,priceDay,bedsAmount,bathroomAmount,bedroomIMG,id,url)
    }
})

form.addEventListener("submit", async(event) => {
    event.preventDefault()

    if(flag==false){
        await create(typeOfRoomInput, wifiInput, breakfastInput, airConditioningInput,priceDay ,bedsAmount,bathroomAmount ,bedroomIMG)
    }
    else{
        await update(typeOfRoomInput, wifiInput, breakfastInput, airConditioningInput,priceDay,bedsAmount,bathroomAmount,bedroomIMG,globalId)
        typeOfRoomInput.removeAttribute("disabled")
    }



    await showFamiliar(familiarTbodyTable)
    await showSuite(suiteTbodyTable)
    await showSimple(simpleTbodyTable)
})

// This generates my unique ids
function IDRandomGeneration() {
    let randomNumber = Math.random().toString(36).substr(2, 9)
    console.log(randomNumber)
    return randomNumber

}


// creation feature
async function create(typeOfRoomInput, wifiInput, breakfastInput, airConditioningInput, priceDay ,bedsAmount,bathroomAmount ,bedroomIMG) {
    let typeOfRoom = typeOfRoomInput.value
    let typeOfRoom2 = typeOfRoom.toLowerCase().replace(" ", "")

    let wifi = wifiInput.value
    let wifi2 = wifi.toLowerCase().replace(" ", "")

    let breakfast = breakfastInput.value
    let breakfast2 = breakfast.toLowerCase().replace(" ", "")

    let airConditioning = airConditioningInput.value
    let airConditioning2 = airConditioning.toLowerCase().replace(" ", "")

    let priceDay1 = priceDay.value
    let bedsAmount1 = bedsAmount.value
    let bathroomAmount1 = bathroomAmount.value
    let bedroomIMG1 = bedroomIMG.value

    if ((breakfast2 == "yes" || breakfast2 == "no") && (wifi2 == "yes" || wifi2 == "no") && (airConditioning2 == "yes" || airConditioning == "no")) {
        verification1 = true
    }
    else {
        alert("you must write 'yes' or 'no' in the inputs")
        verification1 = false
        form.reset()
    }

    if (verification1 == true && typeOfRoom2 == "simple") {
        let newSimpleRoom = {
            "id": IDRandomGeneration(),
            "wifi": wifi2,
            "breakfast": breakfast2,
            "air-conditioning": airConditioning2,
            "priceDay":priceDay1,
            "bedAmount":bedsAmount1,
            "bathroomAmount":bathroomAmount1,
            "bedroomIMG": bedroomIMG1
        }

        await fetch(urlSimple, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSimpleRoom)
        })

        alert("The new room has been added")
        form.reset()
    }
    else if (verification1 == true && typeOfRoom2 == "suite") {
        let newSuiteRoom = {
            "id": IDRandomGeneration(),
            "wifi": wifi2,
            "breakfast": breakfast2,
            "air-conditioning": airConditioning2,
            "priceDay":priceDay1,
            "bedAmount":bedsAmount1,
            "bathroomAmount":bathroomAmount1,
            "bedroomIMG": bedroomIMG1
        }

        await fetch(urlSuite, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSuiteRoom)
        })

        alert("The new room has been added")
        form.reset()
    }
    else if (verification1 == true && typeOfRoom2 == "familiar") {
        let newFamiliarRoom = {
            "id": IDRandomGeneration(),
            "wifi": wifi2,
            "breakfast": breakfast2,
            "air-conditioning": airConditioning2,
            "priceDay":priceDay1,
            "bedAmount":bedsAmount1,
            "bathroomAmount":bathroomAmount1,
            "bedroomIMG": bedroomIMG1
        }

        await fetch(urlFamiliar, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFamiliarRoom)
        })

        alert("The new room has been added")
        form.reset()
    }
    else {
        alert("You must write 'simple' or 'suite' or ''familiar")
    }

}

// this shows rooms in the familiar category
async function showFamiliar(familiarTbodyTable) {
    let response = await fetch(urlFamiliar)
    let data = await response.json()

    familiarTbodyTable.innerHTML = ""

    data.forEach(room => {
        familiarTbodyTable.innerHTML += `
        <tr>
        <th scope="row">${room.id}</th>
        <td>${room.wifi}</td>
        <td>${room.breakfast}</td>
        <td>${room["air-conditioning"]}</td>
        <td>${room.priceDay}</td>
        <td>${room.bedAmount}</td>
        <td>${room.bathroomAmount}</td>
        <td><img width="200" src="${room.bedroomIMG}" alt="bedroom" srcset=""></td>
        <td>
        <button type="button" class="btn btn-primary" url= "http://localhost:3000/familiar" kind="update" data-id = ${room.id}>Update</button>
        <button type="button" class="btn btn-danger" kind="danger" data-id = ${room.id}>Delete</button>
        </td>
        </tr>`
    });
}

// this shows rooms in the suite category
async function showSuite(suiteTbodyTable) {
    let response = await fetch(urlSuite)
    let data = await response.json()

    suiteTbodyTable.innerHTML = ""

    data.forEach(room => {
        suiteTbodyTable.innerHTML += `
        <tr>
        <th scope="row">${room.id}</th>
        <td>${room.wifi}</td>
        <td>${room.breakfast}</td>
        <td>${room["air-conditioning"]}</td>
        <td>${room.priceDay}</td>
        <td>${room.bedAmount}</td>
        <td>${room.bathroomAmount}</td>
        <td><img width="200" src="${room.bedroomIMG}" alt="bedroom" srcset=""></td>
        <td>
        <button type="button" class="btn btn-primary" kind="update" url="http://localhost:3000/suite" data-id = ${room.id}>Update</button>
        <button type="button" class="btn btn-danger" kind="danger" data-id = ${room.id}>Delete</button>
        </td>
        </tr>`
    });
}

// this shows rooms in the simple category
async function showSimple(simpleTbodyTable) {
    let response = await fetch(urlSimple)
    let data = await response.json()

    simpleTbodyTable.innerHTML = ""

    data.forEach(room => {
        simpleTbodyTable.innerHTML += `
        <tr>
        <th scope="row">${room.id}</th>
        <td>${room.wifi}</td>
        <td>${room.breakfast}</td>
        <td>${room["air-conditioning"]}</td>
        <td>${room.priceDay}</td>
        <td>${room.bedAmount}</td>
        <td>${room.bathroomAmount}</td>
        <td><img width="200" src="${room.bedroomIMG}" alt="bedroom" srcset=""></td>
        <td>
        <button type="button" class="btn btn-primary" url= "http://localhost:3000/simple" kind="update" data-id = ${room.id}>Update</button>
        <button type="button" class="btn btn-danger" kind="danger" data-id = ${room.id}>Delete</button>
        </td>
        </tr>`
    });
}

// this deletes objects and rooms
async function delete1(id, url) {
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// this puts the info in the form
async function putInfo(typeOfRoomInput ,wifiInput ,breakfastInput ,airConditioningInput,priceDay,bedsAmount,bathroomAmount,bedroomIMG,id,url){

let response = await fetch(`${url}?id=${id}`)

let data = await response.json()

typeOfRoomInput.setAttribute("disabled","true")


if(url=="http://localhost:3000/simple"){
typeOfRoomInput.value= "simple"
wifiInput.value= data[0].wifi
breakfastInput.value= data[0].breakfast
airConditioningInput.value= data[0]["air-conditioning"]
priceDay.value= data[0].priceDay
bedsAmount.value= data[0].bedAmount
bathroomAmount.value= data[0].bathroomAmount
bedroomIMG.value= data[0].bedroomIMG
}
else if(url=="http://localhost:3000/suite"){
    typeOfRoomInput.value= "suite"
    wifiInput.value= data[0].wifi
    breakfastInput.value= data[0].breakfast
    airConditioningInput.value= data[0]["air-conditioning"]
    priceDay.value= data[0].priceDay
bedsAmount.value= data[0].bedAmount
bathroomAmount.value= data[0].bathroomAmount
bedroomIMG.value= data[0].bedroomIMG
}

else if(url == "http://localhost:3000/familiar"){
    typeOfRoomInput.value= "familiar"
wifiInput.value= data[0].wifi
breakfastInput.value= data[0].breakfast
airConditioningInput.value= data[0]["air-conditioning"]
priceDay.value= data[0].priceDay
bedsAmount.value= data[0].bedAmount
bathroomAmount.value= data[0].bathroomAmount
bedroomIMG.value= data[0].bedroomIMG
}

flag= true
}

// This allows to update the info
async function update(typeOfRoomInput, wifiInput, breakfastInput, airConditioningInput,priceDay,bedsAmount,bathroomAmount,bedroomIMG,id){
    let typeOfRoom = typeOfRoomInput.value
    let typeOfRoom2 = typeOfRoom.toLowerCase().replace(" ", "")

    let wifi = wifiInput.value
    let wifi2 = wifi.toLowerCase().replace(" ", "")

    let breakfast = breakfastInput.value
    let breakfast2 = breakfast.toLowerCase().replace(" ", "")

    let airConditioning = airConditioningInput.value
    let airConditioning2 = airConditioning.toLowerCase().replace(" ", "")

    let priceDay2=    priceDay.value
    let bedsAmount2=    bedsAmount.value
    let bathroomAmount2=    bathroomAmount.value
    let bedroomIMG2=    bedroomIMG.value

    if ((breakfast2 == "yes" || breakfast2 == "no") && (wifi2 == "yes" || wifi2 == "no") && (airConditioning2 == "yes" || airConditioning == "no")) {
        verification1 = true
    }
    else {
        alert("you must write 'yes' or 'no' in the inputs")
        verification1 = false
        form.reset()
    }

    if (verification1 == true && typeOfRoom2 == "simple") {
        let newSimpleRoom = {
            "id": id,
            "wifi": wifi2,
            "breakfast": breakfast2,
            "air-conditioning": airConditioning2,
            "priceDay":priceDay2,
            "bedAmount":bedsAmount2,
            "bathroomAmount":bathroomAmount2,
            "bedroomIMG": bedroomIMG2
                }

        await fetch(`${urlSimple}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSimpleRoom)
        })

        alert("The new room has been added")
        form.reset()
    }
    else if (verification1 == true && typeOfRoom2 == "suite") {
        let newSuiteRoom = {
            "id": IDRandomGeneration(),
            "wifi": wifi2,
            "breakfast": breakfast2,
            "air-conditioning": airConditioning2,
            "priceDay":priceDay2,
            "bedAmount":bedsAmount2,
            "bathroomAmount":bathroomAmount2,
            "bedroomIMG": bedroomIMG2
        }

        await fetch(`${urlSuite}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSuiteRoom)
        })

        alert("The new room has been added")
        form.reset()
    }
    else if (verification1 == true && typeOfRoom2 == "familiar") {
        let newFamiliarRoom = {
            "id": id,
            "wifi": wifi2,
            "breakfast": breakfast2,
            "air-conditioning": airConditioning2,
            "priceDay":priceDay2,
            "bedAmount":bedsAmount2,
            "bathroomAmount":bathroomAmount2,
            "bedroomIMG": bedroomIMG2
        }

        await fetch(`${urlFamiliar}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFamiliarRoom)
        })

        alert("The Room information has been updated")
        form.reset()
    }
    else {
        alert("You must write 'simple' or 'suite' or ''familiar")
    }
    flag= false
}

// logout function
function logout(){
    localStorage.removeItem("access")
} 

// the guardian

function guardian() {
    let existence = localStorage.getItem("access")
    if(existence !="true"){
        window.location.href="../../index.html"
    }
}