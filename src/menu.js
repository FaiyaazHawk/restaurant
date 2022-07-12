import { homepage } from "./index";
import {contact} from './contact.js'
import './styles/menu.css'
import carnivora from './img/carnivora.jpg'
import herbiosa from './img/herbiosa.jpg'
import classico from './img/classico.jpg'

const container = document.querySelector(".container")


export function menu() {
    container.textContent = ""
    //clear the page
    
    const header = document.createElement('h1')
    header.textContent = "Here is what we have"
    container.appendChild(header)

    const item1pic = document.createElement('img')
    item1pic.src = (carnivora)
    container.appendChild(item1pic)

    const item1 = document.createElement('div')
    item1.textContent = 'Pizza Carnivora \r\n All of the meats, none of the guilt. \r\n Toppings: Pepperoni, Sausage, Ham, Ground Beef, Chorizo, Grilled chicken, Homemade pizza sauce.'
    container.appendChild(item1)

    const item2pic = document.createElement('img')
    item2pic.src = (herbiosa)
    container.appendChild(item2pic)


    const item2 = document.createElement('div')
    item2.textContent = 'Pizza Herbiosa \r\n All of the greens, lean life supreme. \r\n Toppings: Mozzarella cheese, Spinach, Olives, Mushrooms, Tomatoes, Onions, Homemade pizza sauce.'
    container.appendChild(item2)

    const item3pic = document.createElement('img')
    item3pic.src = (classico)
    container.appendChild(item3pic)


    const item3 = document.createElement('div')
    item3.textContent = 'Pizza Classico \r\n All time classic. Basic at its best. \r\n Toppings: Mozzarella Cheese, Homemade pizza sauce., Napoli Dough'
    container.appendChild(item3)

    

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
