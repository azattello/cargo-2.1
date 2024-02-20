// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
  get,
  ref,
  set,
  onValue, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKE7FqV-ij_hOo9WPIRHVfTu7eubz-3tE",
  authDomain: "cargo-6cf33.firebaseapp.com",
  databaseURL: "https://cargo-6cf33-default-rtdb.firebaseio.com",
  projectId: "cargo-6cf33",
  storageBucket: "cargo-6cf33.appspot.com",
  messagingSenderId: "855244540183",
  appId: "1:855244540183:web:ea2cb22740b503c21a4f52",
  measurementId: "G-G7N40LJ7WN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const userID = localStorage.getItem('user');
    
onValue(ref(db, `users/${userID}`), (snapshot) => {
        
        const name = snapshot.val().name;
        const phone = snapshot.val().phone;
        const surname = snapshot.val().surname;
        const city = snapshot.val().city;
        const password = snapshot.val().password;

        console.log(city)

        document.querySelector('.surname').innerHTML = surname;
        document.querySelector('.name').innerHTML = name;
        document.querySelector('.phone').innerHTML = phone;
        document.querySelector('.city').innerHTML = city;
        document.querySelector('.passwd').innerHTML = password;

});

document.querySelector('.exit').addEventListener('click', ()=>{
    
    if(confirm("Выйти из аккаунта?")){
        localStorage.removeItem('user');
        location.reload();
    }else{
        console.log('hmm...')
    }


});