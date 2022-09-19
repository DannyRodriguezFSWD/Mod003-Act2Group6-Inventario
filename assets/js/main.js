window.addEventListener('DOMContentLoaded', function() {
    const addProduct = document.querySelector("#addProduct")
    const prodName = document.querySelector("#prodName")
    const imgUrlProd = document.querySelector("#imgUrlProd")
    const prodDescrip = document.querySelector("#addProduct")
    const productsList = document.querySelector("#productsList")
    let prods = ""

    addProduct.addEventListener('click', function(event) {
        event.preventDefault()

        const productName = prodName.value
        const imgUrl = imgUrlProd.value
        const productDescrip = prodDescrip.value
        


        const productCard = `<div class="prodCard">
                <figure><img src="${imgUrl}" alt=""></figure>
                <div class="cardContetnt">
                    <h2 class="prodName">${productName}</h2>
                    <p class="prodDesc">${productDescrip}</p>
                </div>
            </div>`
        
        prods +=productCard
        productsList.innerHTML = prods

    })
})