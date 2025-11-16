
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}



if (window.location.pathname.includes("cart.html")) {
    let cartBox = document.getElementById("cart-items");
    let totalBox = document.getElementById("total");

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;

        cartBox.innerHTML += `
            <div class="cart-item">
                ${item.name} — ${item.price} PKR
            </div>
        `;
    });

    totalBox.innerHTML = "Total: " + total + " PKR";
}



function confirmOrder() {
    let method = document.querySelector('input[name="pay"]:checked');

    if (!method) {
        alert("Please select a payment method!");
        return;
    }

    alert("Order confirmed using: " + method.value);

    localStorage.removeItem("cart");
    location.reload();
}
