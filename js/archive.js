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
        let bookmarkEvent = false;
        let track = ''
        let title = ''
        let bookmarkID = (`bookmark_id_${i}`)
        console.log(bookmarkID)
        if (snapshot.val()[`bookmark_id_${i}`] !== undefined) {
            title = snapshot.exists() ? snapshot.val()[`bookmark_id_${i}`].title : '';
            track = snapshot.exists() ? snapshot.val()[`bookmark_id_${i}`].track : '';

            console.log(title)
            console.log(track)

            let p = 1;
            onValue(ref(db, 'parcels/'), (snapshot) => {
                let dataLenght2 = (Object.keys(snapshot.val()).length)
                while ( p <= dataLenght2 && bookmarkEvent === false){
                    if (snapshot.val()[`parcels_id_${p}`] !== undefined) {
                        let hrefDB = `parcels_id_${p}`;
                        let trackDB = snapshot.val()[hrefDB].track;
                        

                        if (track === trackDB) {
                            
                            bookmarkEvent = true;


                            onValue(ref(db, `parcels/${hrefDB}/options`), (snapshot) => {
                               
                                const statusDB = snapshot.val();
                                if(statusDB.option5 !== undefined){
                                    
                                    const parentContainer = document.querySelector('.track__container');
                                    let newDiv = document.createElement('div');

                                    newDiv.classList.add('track');
                                    newDiv.innerHTML = `
                                    <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('${bookmarkID}')" name="close-outline"></ion-icon></div>
                                    <div class="track__content">
                                        <div class="opisanie"><p class="opisanie__p">${title}</p></div>
                                        <div class="status__container">
                                        
                                            <div class="status_el">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.option1 !== undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>Поступило на склад в Китае</p><p class="date">${statusDB.option1 != undefined ? statusDB.option1 : ''}</p></div>
                                            </div>

                                            <div class="status_el">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.option2 != undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>В пути</p><p class="date">${statusDB.option2 != undefined ? statusDB.option2 : ''}</p></div>
                                            </div>

                                            <div class="status_el">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.option3 != undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>Поступило на <br/> склад в Алматы</p><p class="date">${statusDB.option3 != undefined ? statusDB.option3 : ''}</p></div>
                                            </div>

                                            
                                        
                                            <div class="status_el" style="display: ${statusDB.optionR1 != undefined ? 'flex':'none'};">
                                            <div class="status-ellipse">
                                                <div class="ellips" style="background-color: ${statusDB.optionR1 != undefined ? '#8faf82':''};"></div>
                                            </div>
                                            <div><p>Поступило на <br/> склад в FST_GLAVNIY</p><p class="date">${statusDB.optionR1 != undefined ? statusDB.optionR1 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR2 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR2 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в FST_KOLOS</p><p class="date">${statusDB.optionR2 != undefined ? statusDB.optionR2 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR3 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR3 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Туркестан</p><p class="date">${statusDB.optionR3 != undefined ? statusDB.optionR3 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR4 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR4 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Шымкент</p><p class="date">${statusDB.optionR4 != undefined ? statusDB.optionR4 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR5 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR5 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Орал</p><p class="date">${statusDB.optionR5 != undefined ? statusDB.optionR5 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR6 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR6 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Астана</p><p class="date">${statusDB.optionR6 != undefined ? statusDB.optionR6 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR7 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR7 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Кокшетау</p><p class="date">${statusDB.optionR7 != undefined ? statusDB.optionR7 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR8 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR8 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Караганды</p><p class="date">${statusDB.optionR8 != undefined ? statusDB.optionR8 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR9 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR9 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Жезказган</p><p class="date">${statusDB.optionR9 != undefined ? statusDB.optionR9 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR10 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR10 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Кызылорда</p><p class="date">${statusDB.optionR10 != undefined ? statusDB.optionR10 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR11 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR11 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Тараз</p><p class="date">${statusDB.optionR11 != undefined ? statusDB.optionR11 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR12 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR12 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Талдыкорган</p><p class="date">${statusDB.optionR12 != undefined ? statusDB.optionR12 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR13 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR13 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Атырау</p><p class="date">${statusDB.optionR13 != undefined ? statusDB.optionR13 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR14 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR14 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Актау</p><p class="date">${statusDB.optionR14 != undefined ? statusDB.optionR14 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR15 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR15 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Актобе</p><p class="date">${statusDB.optionR15 != undefined ? statusDB.optionR15 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR16 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR16 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Кызылту</p><p class="date">${statusDB.optionR16 != undefined ? statusDB.optionR16 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR17 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR17 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Жанаозен</p><p class="date">${statusDB.optionR17 != undefined ? statusDB.optionR17 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR18 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR18 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Павлодар</p><p class="date">${statusDB.optionR18 != undefined ? statusDB.optionR18 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR19 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR19 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Каскелен</p><p class="date">${statusDB.optionR19 != undefined ? statusDB.optionR19 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR20 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR20 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Узынагаш</p><p class="date">${statusDB.optionR20 != undefined ? statusDB.optionR20 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR21 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR21 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Меркi</p><p class="date">${statusDB.optionR21 != undefined ? statusDB.optionR21 : ''}</p></div>
                                        </div>


                                        <div class="status_el" style="display: ${statusDB.optionR22 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR22 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Балхаш</p><p class="date">${statusDB.optionR22 != undefined ? statusDB.optionR22 : ''}</p></div>
                                        </div>

                                        <div class="status_el" style="display: ${statusDB.optionR23 != undefined ? 'flex':'none'};">
                                        <div class="status-ellipse">
                                            <div class="ellips" style="background-color: ${statusDB.optionR23 != undefined ? '#8faf82':''};"></div>
                                        </div>
                                        <div><p>Поступило на <br/> склад в Сатпаев</p><p class="date">${statusDB.optionR23 != undefined ? statusDB.optionR23 : ''}</p></div>
                                        </div>

                                            
                                            <div class="status_el">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.option5 != undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>Получено</p><p class="date">${statusDB.option5 != undefined ? statusDB.option5 : ''}</p></div>
                                            </div>
                                           
                                        </div>
                                    </div>`;

                                    parentContainer.appendChild(newDiv);
                                   

                                    }

                                });
                        }else{

                            bookmarkEvent = false;
                        }

                        
                        
                        p++
                    }else{
                        p++
                        dataLenght2++
                    }

                   

                }
               
            })
            console.log(bookmarkEvent)

            

            i++
        }else{
            i++
            dataLenght++
        }
        
        
        
    }

})


// else{
//     const parentContainer = document.querySelector('.track__container');
//     let newDiv = document.createElement('div');

//     newDiv.classList.add('track');
//     newDiv.innerHTML = `
//     <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('bookmark_id_${i}')" name="close-outline"></ion-icon></div>
//         <div class="track__content">
//             <div class="opisanie"><p class="opisanie__p">${title}</p></div>
//             <div class="status__container">
//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color:'#8faf82'};"></div>
//                     </div>
//                     <div><p>Создан</p><p class="date"></p></div>
                    
//                 </div>
                
//             </div>
//         </div>`;

//     parentContainer.appendChild(newDiv);
// }