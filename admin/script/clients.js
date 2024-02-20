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

onValue(ref(db, 'users/'), (snapshot) => {
    

    while ( i <= Object.keys(snapshot.val()).length){
        const data = snapshot.val();
        
        onValue(ref(db, `users/user_id_${i}`), (snapshot) => {
            const phoneDB =  snapshot.val().phone;
            const passwordDB = snapshot.val().password;
            const nameDB = snapshot.val().name;
            const surnameDB = snapshot.val().surname;
            const cityDB = snapshot.val().city;
            let id = `user_id_${i}`
          
            
            const parentContainer = document.querySelector('.client__container');
            let newDiv = document.createElement('div');
            newDiv.classList.add('client')
            newDiv.classList.add(`client_${i}`)

            // Задаем текст или другое содержимое для нового элемента
            newDiv.innerHTML = `
                <div class="client__header_edit dont H__${id}_edit">
                    <div class="modal__t3">Удалить</div>
                    <ion-icon class="t3" name="close" data-info="${id}"></ion-icon>
                </div>
                <div class="client__header H__${id}">
                    <h3 class="id">${id}</h3>
                    <!--  <ion-icon class="t3" name="ellipsis-vertical" data-info="${id}"></ion-icon>-->
                </div>
                <div class="content__info">
                    <p class="fio">${nameDB + ` ` + surnameDB }</p>
                    <p class="phone">${cityDB}</p>
                    <p class="phone">${phoneDB}</p>
                    <p class="passwd">${passwordDB}</p>
                </div>    
                `;

            // Добавляем новый элемент в родительский контейнер
            parentContainer.appendChild(newDiv);

        });
        
        i++

    }
    // let blocks = document.querySelectorAll('.t3');
    // let dataInfoValue = ''; 

    // blocks.forEach(function(block) {
    //     block.addEventListener('click', function() {
    //         dataInfoValue = this.getAttribute('data-info');
    //         let header1 = document.querySelector(`.H__${dataInfoValue}`);
    //         let header2 = document.querySelector(`.H__${dataInfoValue}_edit`);
    //         header1.classList.toggle('dont');
    //         header2.classList.toggle('dont');
                  
       
    //     });
          
        
    // });
    
    // let deleteButton = document.querySelectorAll('.modal__t3');    
    // deleteButton.forEach(function(button) {
    //     button.addEventListener('click', function() {
           
    //         alert(dataInfoValue)

       
    //     });
    // });

});


// let input = document.getElementById('search');
// input.addEventListener('input', ()=>{
    
//     console.log(input.value)
    
//     let searchTerm = input.value.toLowerCase(); 

//     let results = document.querySelectorAll('.id');
//     let matchingResults = [];

//     results.forEach(function(result) {

//         let resultText = result.textContent.toLowerCase();

//         if (resultText.includes(searchTerm)) {
//             let parentElement = result.parentNode;
//             let parentClasses = parentElement.parentNode
//             let papaEl = parentClasses.classList;
//             let papaEl2 = papaEl.item(1);
//             console.log(papaEl2)
//             matchingResults.push(papaEl2);
//             let a = document.querySelector(`.${papaEl2}`);
//             // a.classList.remove('hidden')

//         }else{
//             let parentElement = result.parentNode;
//             let parentClasses = parentElement.parentNode
//             let papaEl = parentClasses.classList;
//             let papaEl2 = papaEl.item(1);
//             console.log(papaEl2)
//             matchingResults.push(papaEl2);
//             // let a = document.querySelector(`.${papaEl2}`);
//             a.classList.add('hidden')

//         }
        
//     });


//     if (matchingResults.length > 0) {
//         console.log( 'Results: ' + matchingResults.join(', '));
//     } else {
//         console.log('No results found.');
    
//     }



// })

let searchInput = document.getElementById('search');

searchInput.addEventListener('input', function() {
   // Получаем значение из поля ввода
   let searchText = document.getElementById("search").value.trim().toLowerCase();
   console.log(searchText)
   // Получаем элементы на странице
   let elements = document.querySelectorAll('.client');

//    // Проходим по всем элементам на странице
   elements.forEach(function(element) {
        console.log(element)
        let idElement = element.querySelector('.id');
        let fioElement = element.querySelector('.fio');
        let phoneElements = element.querySelectorAll('.phone');
        let passwdElement = element.querySelector('.passwd');

        let idText = idElement.textContent.trim().toLowerCase();
        let fioText = fioElement ? fioElement.textContent.trim().toLowerCase() : '';

        let phoneTexts = Array.from(phoneElements).map(function(phoneElement) {
           return phoneElement.textContent.trim().toLowerCase();
        });

        let passwdText = passwdElement.textContent.trim().toLowerCase();
        
        console.log(idText)
        console.log(fioText)
        console.log(passwdText)

        // Проверяем, содержит ли элемент искомый текст
        if (idText.includes(searchText) || fioText.includes(searchText) || phoneTexts.includes(searchText) || passwdText.includes(searchText)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
   });
});


