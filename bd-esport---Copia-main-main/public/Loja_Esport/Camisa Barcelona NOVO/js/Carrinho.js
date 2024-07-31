function addToCart(itemName, itemPrice) {
    // Crie um objeto para o item
    const cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: 1
    };
  
    // Verifique se há um carrinho no localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Adicione o item ao carrinho
    cart.push(cartItem);
  
    // Armazene o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Redirecione para a página do carrinho
    window.location.href = "../Tela de Carrinho/index.html";  // Substitua pelo caminho correto para a página do carrinho
  }
  
  function addToCart(itemName, itemPrice, ) {
    const cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: 1,
        image: "../images/0c179cd1-793f-4749-a075-3199bbfe7706.png"   // Adicione a propriedade de imagem
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = "../Tela de Carrinho/index.html";
}
