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


document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size-button');
  
    sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        sizeButtons.forEach(btn => btn.classList.remove('active'));
  
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
      });
    });
  });
  