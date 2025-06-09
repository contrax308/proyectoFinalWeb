// Script para gestionar carrito con diseño limpio y código moderno

const productsContainer = document.getElementById('products-container');
const cartItems = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar productos (asumiendo productos.json con id, name, price, image)
fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        data.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-item card';
            productDiv.style = `
                background: #f9fafb;
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(108, 99, 255, 0.12);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
                max-width: 280px;
                margin: 12px auto;
                text-align: center;
                color: #374151;
                font-family: 'Poppins', sans-serif;
            `;
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:180px; object-fit:cover; border-radius: 12px;" />
                <h3 style="font-size: 20px; font-weight: 700; margin: 0 0 8px;">${product.name}</h3>
                <p style="font-size: 16px; color: #6b7280; min-height: 48px;">${product.descripcion || ''}</p>
                <p style="font-weight: 600; font-size: 18px; color: #6c63ff; margin-bottom: 12px;">$${product.precio.toFixed(2)}</p>
                <button 
                    style="
                        background-color: #6c63ff;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                        width: 100%;
                    "
                    onmouseover="this.style.backgroundColor='#5846d1';"
                    onmouseout="this.style.backgroundColor='#6c63ff';"
                    onclick="addToCart(${product.id_producto}, '${product.nombre}', ${product.precio})"
                    aria-label='Agregar ${product.nombre} al carrito'
                >
                  Agregar al carrito
                </button>
            `;
            productsContainer.appendChild(productDiv);
        });
    })
    .catch(err => {
        productsContainer.innerHTML = '<p style="color:#ef4444; text-align:center;">Error al cargar productos.</p>';
        console.error('Error cargando productos:', err);
    });

function addToCart(id, name, price) {
    // Buscar si producto ya existe en carrito
    const index = cart.findIndex(item => item.id === id);
    if (index >= 0) {
        cart[index].quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    // Opcional: feedback visual breve
    alert(`Se agregó "${name}" al carrito.`);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color:#6b7280; font-weight:500;">No hay productos en el carrito.</p>';
        checkoutButton.style.display = 'none';
        return;
    }
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.style = `
            display:flex; 
            justify-content:space-between; 
            align-items:center; 
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
            font-family: 'Poppins', sans-serif;
            color: #374151;
            font-weight: 600;
            font-size: 16px;
        `;
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span style="color:#6c63ff;">$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
    });
    checkoutButton.style.display = 'block';
}

// Botón de checkout redirige a compra.html
checkoutButton.addEventListener('click', () => {
    window.location.href = 'compra.html';
});

// Al cargar la página, actualiza la UI del carrito
updateCartUI();

