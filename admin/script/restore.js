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



export function showClass(element) {
    // var className = element.className;
    let confirmed = window.confirm("Вы точно хотите удалить трек?");
    if (confirmed){
        
        let deleteStatus = 'false';

        set(ref(db, `parcels/${element}/delete`),deleteStatus)
            .then(() => {
                console.log('Трек добавлен')
                location.reload();
                input.value = ''
            })
            .catch((error) => {
                location.reload();
                console.log("Ошибка записи в базу данных: ", error);
            });
    
        
 
 
    }
}