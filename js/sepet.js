let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Ürünü sepete ekle
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Ürün sepete eklendi!");
    updateCartCount();
}

// Sepet sayfasında ürünleri listele
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let list = document.getElementById("cartList");
    let total = 0;

    list.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        list.innerHTML += `
        <li>
            ${item.name} - ${item.price} TL 
            <button onclick="removeItem(${index})">Sil</button>
        </li>`;
    });

    document.getElementById("totalPrice").innerText = total + " TL";
}

// Ürünü sepetten sil
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// Menüde sepet sayısını güncelle
function updateCartCount() {
    let count = JSON.parse(localStorage.getItem("cart"))?.length || 0;
    document.getElementById("cartCount").innerText = count;
}

updateCartCount();
