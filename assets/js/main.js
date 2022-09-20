window.addEventListener('DOMContentLoaded', function() {
    const addProduct = document.querySelector("#addProduct")
    const prodName = document.querySelector("#prodName")
    const colorProd = document.querySelector("#prodcolor")
    const prodDescrip = document.querySelector("#prodDescrip")
    const productsList = document.querySelector("#productsList")
    let prods = ""



    /*addProduct.addEventListener('click', function(event) {
        event.preventDefault()*/
    addProduct.addEventListener('click', function(event) {
            event.preventDefault()

        const producto = prodName.value
        var imagen = "" /*= imgUrlProd.value*/
        const descripcion = prodDescrip.value
        const color = colorProd.value

        var hoy = new Date();
        var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        var fechaYHora = fecha + ' ' + hora;

        
        if (prodName.value == "DQ7548-600"){
            imagen = "./assets/image/nike1.webp";
        } else if (prodName.value == "DR9830-074"){
            imagen = "./assets/image/nike2.webp";
        } else if (prodName.value == "DM0829-002"){
            imagen = "./assets/image/nike3.webp";
        } else if (prodName.value == "DH3394-005"){
            imagen = "./assets/image/nike4.webp";
        }

        console.log(imagen)
        /*if (producto === "") {
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
            prodDescrip.classList.remove('is-invalid')*/
        


            const productCard = `<div class="prodCard">
                <figure><img src="${imagen}" class="imgsize" alt=""></figure>
                <div class="cardContetnt">
                    <h2 class="prodName">${producto}</h2>
                    <p class="prodDesc">${descripcion}</p>
                    <p class="prodcolor">${color}</p>
                    <p>Fecha: ${fechaYHora}</p>
                </div>
              </div>`
        
            prods += productCard
            productsList.innerHTML = prods

            prodcolor.value = ""
            prodName.value = ""
            prodDescrip.value = ""
          


    })
})