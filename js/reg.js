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
let name =  document.getElementById('name');
let surname =  document.getElementById('surname');
let city =  document.getElementById('city');
let paswd =  document.getElementById('paswd');
let button = document.querySelector('.button');

phone.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';  

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
name.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
surname.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
city.addEventListener('input', ()=>{
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
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
    if (phone.value != '' && name.value != '' && surname.value != '' && paswd.value != '' && city.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;


    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})




onValue(ref(db, 'users/'), (snapshot) => {

    let lengthO = Object.keys(snapshot.val()).length;
    let userID = 'user_id_'+ lengthO;
    
    console.log(userID)
    

    document.querySelector('.button').addEventListener('click', ()=>{

    
    set(ref(db, `users/${userID}`),
    {
        phone: phone.value,
        name: name.value,
        surname: surname.value,
        city: city.value,
        password: paswd.value
    })
    .then(() => {
        console.log("Запись в базу данных прошла успешно.");
        form.reset();
        console.log('Вы авторизованы')
        window.location.replace("./index.html");
        localStorage.setItem('user', `${userID}`);
    })
    .catch((error) => {
        console.log("Ошибка записи в базу данных: ", error);
        location.reload();
        });
    
    })
});


