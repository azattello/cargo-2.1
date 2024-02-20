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


let i = 1;

const userID = localStorage.getItem('user');

onValue(ref(db, `users/${userID}/bookmarks`), (snapshot) => {
    
    let dataLenght = (Object.keys(snapshot.val()).length); 
    while ( i <= dataLenght){
        // console.log(snapshot.val()[`bookmark_id_${i}`].track)

        let track = (snapshot.val()[`bookmark_id_${i}`].track);
        console.log(track)
        onValue(ref(db, `parcels/`), (snapshot) => {
            console.log(snapshot.val())

            let dataLenght2 = (Object.keys(snapshot.val()).length); 
            let p = 1
            while ( p <= dataLenght2){
                let trackDB = (snapshot.val()[`parcels_id_${p}`].track)
                if (track === trackDB) {
                    
                    console.log(track)
                    console.log(trackDB)
                }else{
                    console.log(track)
                }
                p++
            }

        })
        i++
    }
    

})

// if(statusDB.option5 === undefined){
                                    
//     const parentContainer = document.querySelector('.track__container');
//     let newDiv = document.createElement('div');

//     newDiv.classList.add('track');
//     newDiv.innerHTML = `
//     <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('${bookmarkID}')" name="close-outline"></ion-icon></div>
//         <div class="track__content">
//             <div class="opisanie"><p class="opisanie__p">${title}</p></div>
//             <div class="status__container">
            
//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color: ${statusDB.option1 !== undefined ? '#8faf82':''};"></div>
//                     </div>
//                     <div><p>Поступило на склад в Китае</p><p class="date">${statusDB.option1 != undefined ? statusDB.option1 : ''}</p></div>
//                 </div>

//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color: ${statusDB.option2 != undefined ? '#8faf82':''};"></div>
//                     </div>
//                     <div><p>В пути</p><p class="date">${statusDB.option2 != undefined ? statusDB.option2 : ''}</p></div>
//                 </div>

//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color: ${statusDB.option3 != undefined ? '#8faf82':''};"></div>
//                     </div>
//                     <div><p>Поступило на <br/> склад в Алматы</p><p class="date">${statusDB.option3 != undefined ? statusDB.option3 : ''}</p></div>
//                 </div>


        
//                 <div class="status_el" style="display: ${statusDB.optionR1 != undefined ? 'flex':'none'};">
//                 <div class="status-ellipse">
//                     <div class="ellips" style="background-color: ${statusDB.optionR1 != undefined ? '#8faf82':''};"></div>
//                 </div>
//                 <div><p>Поступило на <br/> склад в FST_GLAVNIY</p><p class="date">${statusDB.optionR1 != undefined ? statusDB.optionR1 : ''}</p></div>
//             </div>

        
//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color: ${statusDB.option5 != undefined ? '#8faf82':''};"></div>
//                     </div>
//                     <div><p>Получено</p><p class="date">${statusDB.option5 != undefined ? statusDB.option5 : ''}</p></div>
//                 </div>
               
//             </div>
//         </div>`;


//     parentContainer.appendChild(newDiv);
   

//     }

// });

// if (!bookmarkEvent) {
//     const parentContainer = document.querySelector('.track__container');
//     let newDiv = document.createElement('div');

//     newDiv.classList.add('track');
//     newDiv.innerHTML = `
//     <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('${bookmarkID}')" name="close-outline"></ion-icon></div>
//         <div class="track__content">
//             <div class="opisanie"><p class="opisanie__p">${title}</p></div>
//             <div class="status__container">
//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color:#8faf82"></div>
//                     </div>
//                     <div><p>Создан</p><p class="date"></p></div>
                    
//                 </div>
                
//             </div>
//         </div>`;

//     parentContainer.appendChild(newDiv);
// }