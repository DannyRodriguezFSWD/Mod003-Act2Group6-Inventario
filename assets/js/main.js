window.addEventListener('DOMContentLoaded', function() {
    const addProduct = document.querySelector("#addProduct")
    const prodName = document.querySelector("#prodName")
    const imgUrlProd = document.querySelector("#imgUrlProd")
    const prodDescrip = document.querySelector("#prodDescrip")
    const productsList = document.querySelector("#productsList")
    let prods = ""



    /*addProduct.addEventListener('click', function(event) {
        event.preventDefault()*/
    addProduct.addEventListener('click', function(event) {
            event.preventDefault()

        const producto = prodName.value
        const imagen = imgUrlProd.value
        const descripcion = prodDescrip.value

        if (producto === "") {
            prodName.classList.add('is-invalid')
          }
      
          if (imagen === "") {
            imgUrlProd.classList.add('is-invalid')
          }
    
          if (descripcion === "") {
            prodDescrip.classList.add('is-invalid')
          }
      
          if (producto !== "" && imagen !== "" && descripcion !== "") {
            prodName.classList.remove('is-invalid')
            imgUrlProd.classList.remove('is-invalid')
            prodDescrip.classList.remove('is-invalid')
        


            const productCard = `<div class="prodCard">
                <figure><img src="${imagen}" class="imgsize" alt=""></figure>
                <div class="cardContetnt">
                    <h2 class="prodName">${producto}</h2>
                    <p class="prodDesc">${descripcion}</p>
                </div>
              </div>`
        
            prods += productCard
            productsList.innerHTML = prods

            imgUrlProd.value = ""
            prodName.value = ""
            prodDescrip.value = ""
          }


    })
})