export const showData = async (list, element) => {
    const products = await list

    products.forEach(product => {
        const {id, name, img} = product

        element.innerHTML += `
        <li class="card" style="width: 18rem;">
            <div class="card-body">
                <img src=${img} class="card-img-top" alt="...">
                    <h5 class="card-title">${name}</h5>
                    <a href="#" id=${id} class="btn btn-outline-dark" 
                    style="background-color: #45B649;">Agregar</a>
            </div>
        </li>
    `

    });
}