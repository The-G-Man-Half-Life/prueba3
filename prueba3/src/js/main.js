// importing bootstrap but is js
import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

// html variables
let showRoomsSimple = document.getElementById("show-rooms-simple")
let showRoomsSuit = document.getElementById("show-rooms-suit")
let showRoomsFamiliar= document.getElementById("show-rooms-familiar")

// the room endpoints

let urlSimple = "http://localhost:3000/simple"
let urlSuite = "http://localhost:3000/suite"
let urlFamiliar = "http://localhost:3000/familiar"

// the called functions to show the rooms

await showRooms(urlSimple,showRoomsSimple)
await showRooms(urlSuite,showRoomsSuit)
await showRooms(urlFamiliar,showRoomsFamiliar)

// the function to show the rooms
async function showRooms(url,space){
    let response = await fetch(url)
    let data = await response.json()
    space.innerHTML = ""
    data.forEach(room => {
        
        space.innerHTML += `
        <div class="card text-light w-25 card-custom">
        <img src=${room.bedroomIMG}
            class="card-img h-100 object-fit-cover" alt="example">
        <div class="card-body bg-light text-dark">
            <p class="card-text">Number: ${room.id}</p>
            <p class="card-text">Wi-fi: ${room.wifi}</p>
            <p class="card-text">Breakfast: ${room.breakfast}</p>
            <p class="card-text">Air-conditioning: ${room["air-conditioning"]}</p>
            <p class="card-text">Price for day: ${room.priceDay}</p>
            <p class="card-text">Amount of beds: ${room.bedAmount}</p>
            <p class="card-text">Amount of bathrooms: ${room.bathroomAmount}</p>
        </div>
    </div>
        `
    });
}

