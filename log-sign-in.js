const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJleqageqo4Oz5ohWaCE7HH-YsVScU67o",
    authDomain: "authentication-9b8e5.firebaseapp.com",
    projectId: "authentication-9b8e5",
    storageBucket: "authentication-9b8e5.firebasestorage.app",
    messagingSenderId: "755142878076",
    appId: "1:755142878076:web:5b50d4114cc35261383af9",
    measurementId: "G-Z3LQZPET0H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const submit = document.getElementById('button-reg');
  submit.addEventListener("click",function (event){
    event.preventDefault()
    // inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // Swal.fire({
    //   title:"Creating Account...",
    //   icon:"success",
    //   timer: 1500,
    // });
    alert("Creating Account...")
    window.location.href = "log-sign.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })

  