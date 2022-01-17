import getData from "./getData.js"
import { showData } from "./showData.js"


const element = document.querySelector(".list-group")
const element2 = document.querySelector("#populares")
const endpoint="http://localhost:3000/products/"
const endpoint2="http://localhost:3000/populares/"

//variables carrito
const btnCarrito = document.querySelector(".btnCarrito")
const btnCerrar = document.querySelector(".close-cart")
const cartDOM = document.querySelector(".carrito")
const fondoCarrito = document.querySelector(".fondo-carrito")
const contenidoCar = document.querySelector(".contenido-carrito")

let cart = [];


//fin variables carrito
btnCarrito.addEventListener('click', e => {
    fondoCarrito.classList.add("transparfentBcg");
    cartDOM.classList.add("showCart");
})

const cartBtn = document.querySelector(".btnCarrito");
const cartBox = document.querySelector(".carrito");


document.addEventListener("DOMContentLoaded", async () =>{
    const data = getData(endpoint)
    showData(data, element)
    console.log(data);
})
document.addEventListener("DOMContentLoaded", async () =>{
    const data = getData(endpoint2)
    showData(data, element2)
    console.log(data);
})

element.addEventListener("click", async e =>{
    const btnDetail = e.target.classList.contains
    ("btn-outline-dark")
    const id = e.target.id

    if(btnDetail){
        const lista = await getData(endpoint)
        const objeto = lista.find(list => list.id === 
        Number(id))

        localStorage.setItem("Detail", JSON.stringify 
        (objeto))
        window.location.href ="detail.html"
    }
})
/*cartBtn.addEventListener('click', showCart())

function showCart() {
    cartBox.style.display = "block";
    document.body.style.overflowY = "hidden";
  }*/
