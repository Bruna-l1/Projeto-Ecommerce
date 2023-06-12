function init() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let str = ''
        for (let i = 0; i < 9; i++) {
          let product = data[i]
          console.log(product)
          str +=
            `<div class="card col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 text-center bg-light">
            <a href="detalhes.html?id=${product.id}"><img class="card-img-top" src="${product.image}" alt="Card image cap"><a>
            <!--div class="card-header">
               Stratocaster
          </div-->
            <div class="card-body">
            <a href="detalhes.html?id=${product.id}"><h5 class="card-title">${product.title} </h5></a>
              <p class="card-text"> De R$ ${product.price} </br>
                Por R$699,00 </p>
            </div>
            <!--div class="card-footer">
              <span class="font-weight-bold">  </span>
              <span>  </span>
               <div class="container">
          <div class="row text-center bg-light">
            <table class="border-bottom">
              <tr class="border-bottom">
               <div class="card-body">
            <a href="detalhes.html?id=${product.id}"><h5 class="card-title">${product.title} </h5></a>
              <p class="card-text"> De R$ ${product.price} </br>
              </tr>
            </div!-->
          </div>`
          
        }
        console.log(str)
        $('#tela').html(str)
  
      })
      .catch(error => console.log(error));
    
  }

  function exibirFavoritos() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            let str = ''
            for (let p = 4; p < 8; p++) {
                let product = data[p]
                console.log(product)
                str += 
                `<li class="list-group-item text-center border-0"> <img src="${product.image}" class="w-50" width="50%" alt="">
                  <label><b>${product.title} <br></b>
                  ${product.price}
                  </label>
                </li>`
            }
            console.log(str)
            document.getElementById('maisvendidos').innerHTML = str
        })
}
