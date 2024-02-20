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
let l = 1

onValue(ref(db, `parcels`), (snapshot) => {
    
    let dataLenght = (Object.keys(snapshot.val()).length);
   
    while (i <= dataLenght){
            
        onValue(ref(db, `parcels/`),(snapshot)=>{
            let parTex = 'parcels_id_' + i;
         
  
            if (snapshot.exists()) {

                onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
                    let track = snapshot.val().track != undefined ? snapshot.val().track : '';
                   
                    const statusDB = snapshot.val().options;
                            
                    const parentContainer = document.querySelector('.parrent__td');
                    let newDiv = document.createElement('tr');
        
                    newDiv.classList.add('table__tracks');
                    newDiv.innerHTML = `
                    <tr>
                        <td class="count">${l}</td>
                        <td class="track-number">${track}</td>
                        <td class="china-warehouse">${statusDB.option1 != undefined ? statusDB.option1 : ''}</td>
                        <td class="in-transit">${statusDB.option2 != undefined ? statusDB.option2 : '-'}</td>
                        <td class="almaty-warehouse">${statusDB.option3 != undefined ? statusDB.option3 : '-'}</td>
                        <td class="branch">${statusDB.optionR1 != undefined ? "Название " + statusDB.optionR1 : '-'}</td>
                        <td class="delivered-to-client">${statusDB.option5 != undefined ? statusDB.option5 : '-'}</td>
                    </tr>
                    `;
                
                        if (snapshot.val().delete === 'false' || snapshot.val().delete === undefined ) {
                            parentContainer.appendChild(newDiv);
                        }
                    i++
                    l++
                });
            }else{
                dataLenght++
                i++
            }
        });

        
    }
  
});



let searchInput = document.getElementById('search');

searchInput.addEventListener('input', function() {
   // Получаем значение из поля ввода
   let searchText = document.getElementById("search").value.trim().toLowerCase();
   console.log(searchText)
   // Получаем элементы на странице
   let elements = document.querySelectorAll('.table__tracks');

   // Проходим по всем элементам на странице
   elements.forEach(function(element) {
       console.log(element);
       let tracknumber = element.querySelector('.track-number');
       let chinawarehouse = element.querySelector('.china-warehouse');
       let intransit = element.querySelector('.in-transit');
       let almatywarehouse = element.querySelector('.almaty-warehouse');
       let branch = element.querySelector('.branch');
       let deliveredtoclient = element.querySelector('.delivered-to-client');

       let tracknumberText = tracknumber.textContent.trim().toLowerCase();
       let chinawarehouseText = chinawarehouse.textContent.trim().toLowerCase();
       let intransitText = intransit.textContent.trim().toLowerCase();
       let almatywarehouseText = almatywarehouse.textContent.trim().toLowerCase();
       let branchText = branch.textContent.trim().toLowerCase();
       let deliveredtoclientText = deliveredtoclient.textContent.trim().toLowerCase();



    
    // Проверяем, содержит ли элемент искомый текст
        if (tracknumberText.includes(searchText) || chinawarehouseText.includes(searchText) || intransitText.includes(searchText) || almatywarehouseText.includes(searchText) || branchText.includes(searchText) || deliveredtoclientText.includes(searchText))  {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
   });
});






  