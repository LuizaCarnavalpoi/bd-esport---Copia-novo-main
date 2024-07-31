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
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function updateCartDisplay() {
            updateCartCount();
            updateTooltip();
        }

        function clearCart() {
            cart = [];
            updateCartDisplay();
            localStorage.removeItem('cart');
        }

        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cart-count').textContent = totalItems;
        }

        function updateTooltip() {
            const tooltip = document.getElementById('cart-tooltip');
            let content = '<h3>Itens no Carrinho:</h3>';
            cart.forEach(item => {
                content += `<div>${item.name} - ${item.quantity} x R$ ${item.price.toFixed(2).replace('.', ',')}</div>`;
            });
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            content += `<div><strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong></div>`;
            tooltip.innerHTML = content;
        }

        function toggleTooltip() {
            const tooltip = document.getElementById('cart-tooltip');
            tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
        }

        window.onload = function() {
            updateCartDisplay();
        };
      });
    });
  });
  