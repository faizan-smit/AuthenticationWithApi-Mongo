
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAHHNcIiJfVI2RxN2FBxROYPtv9oRmXpJU",
    authDomain: "faizan-socialapp.firebaseapp.com",
    projectId: "faizan-socialapp",
    storageBucket: "faizan-socialapp.appspot.com",
    messagingSenderId: "218792561325",
    appId: "1:218792561325:web:7bdf5924d8ef7fc7b3d424",
    measurementId: "G-XBH0G5BRV6"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  var signin = document.getElementById('signin')

  signin.addEventListener('click', function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('email', email);
    var successlogin = true;
    // ...
    // alert('Sign in Successful')
    location.href = './app.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('Error: ' + errorMessage)
    location.href = './index.html'

  });


  })






  const handleAuthStateChange = (user) => {
    if (user) {
      
      console.log('User is logged in:', user.email);

      location.href = `./app.html`;

    } else {
    
      console.log('User is logged out');
    }
  };
  

onAuthStateChanged(auth, handleAuthStateChange);