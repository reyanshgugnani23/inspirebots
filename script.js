let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.textContent = `${i.name} - ₹${i.price}`;
    list.appendChild(li);
  });
}

function filterCategory(cat) {
  document.querySelectorAll(".product").forEach(p => {
    p.style.display = (cat === "all" || p.classList.contains(cat)) ? "block" : "none";
  });
}

function placeOrder() {
  const name = document.getElementById("custName").value;
  const phone = document.getElementById("custPhone").value;

  if (!name || !phone || cart.length === 0) {
    alert("Fill details & add items");
    return;
  }

  let msg = `🛒 InspireBots Order%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A%0A`;
  let total = 0;

  cart.forEach(i => {
    msg += `• ${i.name} - ₹${i.price}%0A`;
    total += i.price;
  });

  msg += `%0A💰 Total: ₹${total}%0A%0AReply ORDER to confirm`;

  const isMobile = /Android|iPhone/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `https://wa.me/91XXXXXXXXXX?text=${msg}`;
  } else {
    window.location.href =
      `mailto:yourmail@gmail.com?subject=New InspireBots Order&body=${msg}`;
  }

  localStorage.removeItem("cart");
}
