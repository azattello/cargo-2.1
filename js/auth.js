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




let phone =  document.getElementById('phone');
let paswd =  document.getElementById('paswd');
let button = document.querySelector('.button');

phone.addEventListener('input', ()=>{
    if (phone.value != '' && paswd.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;


    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
paswd.addEventListener('input', ()=>{
    if (phone.value != '' && paswd.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})




document.querySelector('.button').addEventListener('click', ()=>{
    
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('paswd').value;
    
    let i = 1;

    onValue(ref(db, 'users/'), (snapshot) => {



        while ( i <= Object.keys(snapshot.val()).length){
            const data = snapshot.val();
            
            onValue(ref(db, `users/user_id_${i}`), (snapshot) => {
                const phoneDB = snapshot.val().phone;
                const passwordDB = snapshot.val().password;
              
                console.log(phoneDB)
                console.log(passwordDB)
                
                if (phone === phoneDB && password === passwordDB ) {
                    console.log('Вы авторизованы')
                    window.location.replace("./index.html");
                    localStorage.setItem('user', `user_id_${i}`);

                }else{
                    console.log('Вы не авторизованы')
                    location.reload();
                }
                
            });
            
            i++

        }
    });

});