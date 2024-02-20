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

// ПЕРЕБОР ПАРСЕЛС


let i = 1;

onValue(ref(db, `users/${userID}/bookmarks/`), (snapshot) => {
  const data = snapshot.val();
  let dataI = (Object.keys(snapshot.val()).length); 
  while ( i <= dataI){

    onValue(ref(db, `users/${userID}/bookmarks/bookmark_id_${i}`), (snapshot) => {
      if (snapshot.exists()) {
        i++
      }else{
        dataI++
        i++
      }
      
  
   
    })
  }
  
});


document.querySelector('.add__track').addEventListener('click', ()=>{
    
    document.querySelector('.modal').classList.add('modal__open');
    document.querySelector('.overflow').classList.add('modal__open');
    document.querySelector('.close').addEventListener('click', ()=>{
        document.querySelector('.modal').classList.remove('modal__open');
        document.querySelector('.overflow').classList.remove('modal__open');
    
    })
    // let trackEvent = true;

    document.querySelector('.addTrackButton').addEventListener('click', ()=>{

        const title = document.getElementById('title').value;
        const track = document.getElementById('number').value;
        

        // let p = 0;

        // onValue(ref(db, 'parcels/'), (snapshot) => {

            // let dataLenght = (Object.keys(snapshot.val()).length)
          
            // while ( p <= dataLenght && trackEvent == true){
              // let parTex = 'parcels_id_' + p;
                
              // if (snapshot.val()[parTex] !== undefined) {
                
                // onValue(ref(db, `parcels/parcels_id_${p}`), (snapshot) => {
                  // const trackDB = snapshot.val().track;
                  // console.log(trackDB)
                  
                  // if (track != trackDB) {
                    // trackEvent = true;
                   
                  // }else{
                    // trackEvent = false;

                    // const hrefDB = `parcels_id_${p}`;


                    set(ref(db, `users/${userID}/bookmarks/bookmark_id_${i}`),
                    {
                        title: title,
                        track: track,
                        // status: statusHTML,
                        // href: hrefDB,
                    })
                    .then(() => {
                        console.log("Запись в базу данных прошла успешно.");
                        form.reset();
                        location.reload();

                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                        location.reload();
                        });
                  // }

                    
                    
                // });

                // p++
                
              // }else{
              //   dataLenght++
              //   p++
              // }  
              // console.log(p) 
            // }
        // });
        // if(trackEvent){
        //   document.getElementById('title').value = '';
        //   document.getElementById('number').value = '';

        // }else{
        //   document.getElementById('title').value = '';
        //   document.getElementById('number').value = '';
        //   location.reload();
        // }

        // console.log(title);
        // console.log(track);
      
        
    })


});

