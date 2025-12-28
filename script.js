let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const ul = document.getElementById("cart");
  if (!ul) return;
  ul.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.innerText = `${i.name} - ₹${i.price}`;
    ul.appendChild(li);
  });
}

function placeOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!name || !phone || cart.length === 0) {
    alert("Fill details & add items");
    return;
  }

  let total = 0;
  let items = cart.map(i => {
    total += i.price;
    return `${i.name} ₹${i.price}`;
  }).join("\n");

  fetch("PASTE_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify({ name, phone, items, total })
  })
  .then(r => r.json())
  .then(d => {
    alert("✅ Cart sent successfully. Order ID: " + d.orderId);
    localStorage.removeItem("cart");
    cart = [];
    updateCart();
  });
}
