window.addEventListener('DOMContentLoaded', function() {
    const addProduct = document.querySelector("#addProduct")
    const prodName = document.querySelector("#prodName")
    const colorProd = document.querySelector("#prodcolor")
    //const prodDescrip = document.querySelector("#prodDescrip")
    const productsList = document.querySelector("#productsList")
    const mesesProd = document.querySelector("#mesesProd")
    let prods = ""

    const allInputs = document.querySelectorAll('input')

    allInputs.forEach(input => {
      input.addEventListener('change', function(event) {
        if (event.target.value !== "") {
          input.classList.remove('is-invalid')
        }
      })
    })



    /*addProduct.addEventListener('click', function(event) {
        event.preventDefault()*/
    addProduct.addEventListener('click', function(event) {
            event.preventDefault()

        const producto = prodName.value
        let imagen = "" /*= imgUrlProd.value*/
        let descripcion = ""//prodDescrip.value
        const color = colorProd.value
        const meses = mesesProd.value

        let hoy = new Date();
        let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        let fechaYHora = fecha + ' ' + hora;

        
        if (prodName.value == "DQ7548-600"){
            imagen = "./assets/image/nike1.webp";
            descripcion ="LeBron 19";
        } else if (prodName.value == "DR9830-074"){
            imagen = "./assets/image/nike2.webp";
            descripcion ="Luka 1 Next Nature";
        } else if (prodName.value == "DM0829-002"){
            imagen = "./assets/image/nike3.webp";
            descripcion ="Nike Air Max Alpha Trainer 5";
        } else if (prodName.value == "DH3394-005"){
            imagen = "./assets/image/nike4.webp";
            descripcion ="Nike SuperRep Go 3";
        }

        console.log(imagen)
        if (producto === "") {
            prodName.classList.add('is-invalid')
          }
      
          if (color === "") {
            colorProd.classList.add('is-invalid')
          }

          if (meses === "") {
            mesesProd.classList.add('is-invalid')
          }
    
        //   if (descripcion === "") {
        //     prodDescrip.classList.add('is-invalid')
        //   }
      
          if (producto !== "" && imagen !== "" && descripcion !== "" && meses !== "") {
            prodName.classList.remove('is-invalid')
            colorProd.classList.remove('is-invalid')
           //prodDescrip.classList.remove('is-invalid')
          }


            const productCard = `<div class="card m-1">
               <img src="${imagen}" class="card-img-top"" alt="">
                <div class="card-body">
                    <h2 class="prodName">${producto}</h2>
                    <p class="prodDesc">${descripcion}</p>
                    <p class="prodcolor">${color}</p>
                    <p class="mesesProd">${meses}</p>
                    <p>Fecha: ${fechaYHora}</p>
                </div>
              </div>`
        
            prods += productCard
            productsList.innerHTML = prods

            prodcolor.value = ""
            prodName.value = ""
            mesesProd.value = ""
            //prodDescrip.value = ""
          


    })
})