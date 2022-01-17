const listGroup = document.querySelector(".list-group")

const getLocalStorage = () => {
    const detalle = JSON.parse(localStorage.getItem
    ("Detail"))

    const {name, description, img, price} = detalle

    listGroup.innerHTML += `
    <li class="card" style="width: 18rem;">
        <div class="card-body">
            <img src=${img} class="card-img-top" alt="...">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</>
            <h5 class="card-title">USD$ ${price}</h5>
            <a href="#" class="btn btn-outline-dark" style="background-color: #45B649">Return</a>
        </div>
    </li>
    `
}
listGroup.addEventListener('click', e => {
    if (e.target.classList.contains('btn-outline-dark')) {
        window.location.href = "index.html"
    }
})

document.addEventListener('DOMContentLoaded'
, getLocalStorage)
