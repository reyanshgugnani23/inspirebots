import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { setDoc, doc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.signup = async () => {
  const name = name.value;
  const phone = phone.value;
  const email = email.value;
  const password = password.value;

  if (!name || !phone || !email || !password) {
    alert("Fill all fields");
    return;
  }

  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.user.uid), {
    name, phone, email
  });

  alert("Account created");
  location.href = "login.html";
};
