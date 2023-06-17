function pesquisar_produto() {
    //console.log('pesquisar_produto')
    const palavra = $('#palavra').val()
    //console.log(palavra)
  
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(data => {
        let str = ''
       
        for (let i = 0; i < data.length; i++) {
          let product = data[i]
          let text = product.description
          let position = text.search(palavra);
          if (position > 0) {
            str += `<div class="row">          
              <div class="col-7">
                <p>${product.description}</p>
              </div>
              <div class="col-3">
                <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
              </div>
              <div class="col-2">
                <a class="btn btn-primary" href="detalhes.html?id=${product.id}" role="button">detalhes</a>
              </div>
            </div>`
          }
        }
  
        if (str === '') {
          str = '<div class="row">Nenhum resultado encontrado</div>'
        }
  
        $('#tela_pesquisa').html(str)
      })
      .catch(error => console.log(error));
  }
  
  
  //exemplo com busca dos produtos já carregados na memória
  function pesquisar_produto_sesseionStorage() {
    console.log('pesquisar_produto')
    const palavra = $('#palavra').val()
    //console.log(palavra)
    var data = JSON.parse(sessionStorage.getItem('db_produtos'));
    console.log(data)
    let str = ''
    for (let i = 0; i < data.length; i++) {
      let product = data[i]
      let text = product.description
      let position = text.search(palavra);
      if (position > 0) {
        str +=
          `<div class="row">          
              <div class="col-7">
                <p>${product.description}</p>
              </div>
              <div class="col-3">
                <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
              </div>
              <div class="col-2">
                <a class="btn btn-primary" href="detalhes.html?id=${product.id}" role="button">detalhes</a>
              </div>
            </div>`
      }
    }
  
    $('#tela_pesquisa').html(str)
  
  }