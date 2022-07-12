import { homepage } from "./index";
import {menu} from './menu.js'
import map from './img/locationpic.jpg'
import './styles/contact.css'

const container = document.querySelector(".container")


export function contact() {
    container.textContent = ""
    //clear the page
    
    const header = document.createElement('h1')
    header.textContent = "You can find us here"
    container.appendChild(header)

    const welcome = document.createElement('p')
    welcome.innerText = 'Find us at: 123 Napoli Drive, Mississauga, Ontario, P1Z 2A5'
    container.appendChild(welcome)

    const image = document.createElement('img')
    image.src = (map)
    container.appendChild(image)



    //nav buttons
    const homebtn = document.createElement('button')
    homebtn.innerText = "Home"
    container.appendChild(homebtn)
    homebtn.addEventListener('click', homepage)

    const menubtn = document.createElement('button')
    menubtn.innerText = "Menu"
    container.appendChild(menubtn)
    menubtn.addEventListener('click', menu)

    const locatebtn = document.createElement('button')
    locatebtn.innerText = "Locate Us"
    container.appendChild(locatebtn)
    locatebtn.addEventListener('click', contact)
}
