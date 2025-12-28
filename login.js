import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Login successful");
    location.href = "products.html";
  } catch {
    alert("Invalid login");
  }
};
