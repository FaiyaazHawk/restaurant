import pizza from "./img/main-pizza.jpg";
import './styles/homestyle.css'
import {contact} from './contact.js'
import {menu} from './menu.js'

const container = document.querySelector(".container")

export const homepage = () => {
    container.textContent = ""
    //clear the page

    const header = document.createElement('h1')
    header.textContent = "Pizza time is the right time"
    container.appendChild(header)

    const image = document.createElement('img')
    image.src = (pizza)
    container.appendChild(image)

    const welcome = document.createElement('p')
    welcome.innerText = 'These pizzas are really good and awesome and fresh and delicioso.'
    container.appendChild(welcome)



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


homepage();




