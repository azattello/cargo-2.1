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



let selectElement = document.getElementById("pet__select");
let selectElement2 = document.getElementById("pet__select2");




selectElement.addEventListener('change', ()=>{

    let input = document.getElementById("trackInput");

    
    // С регионам  
    if (selectElement.value === "option4") {
        
        selectElement.setAttribute("disabled", "disabled");
        selectElement2.removeAttribute("disabled");

        input.addEventListener('keydown', function(event) {
            // Код клавиши Enter
            let enterKeyCode = 13;

            // Проверяем, была ли нажата клавиша Enter
            if (event.keyCode === enterKeyCode) {
                // Вызываем вашу функцию, которую вы хотите выполнить при нажатии Enter
                addNewTrack();

            }
        });
          
        
        function addNewTrack() {

            let inputDate = document.getElementById('date');
            let component = inputDate.value.split("-");
            let formattedDate = component[2] + '.' + component[1] + '.' + component[0];
            


            let i = 1;
            let trackEvent = true;

            

                onValue(ref(db, 'parcels/'), (snapshot) => {
                    let dataLenght = (Object.keys(snapshot.val()).length)
            
                    
                    while ( i <= dataLenght && trackEvent === true){
                        let parTex = 'parcels_id_' + i;

                        if (snapshot.val()[parTex] !== undefined) {
                            
                            onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
                                const track = snapshot.val().track;
                
                                if (document.getElementById('trackInput').value === track) {
                                    console.log(track);
                                    trackEvent = false;
                                    
                                    
                                    
                                }else{
                                    trackEvent = true;    
                                    i++

                                }
                                
                            });

                            console.log(snapshot.val()[parTex])

                        }else{
                            dataLenght++
                            i++
                        }
                        
                        
                    }
                });
   


            
            

            
            let selectedOption = selectElement2.options[selectElement2.selectedIndex];
            let selectedValue = selectedOption.value;

            
            if (selectedValue === 'optionR1') {
                
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR1`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR2') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            set(ref(db, `parcels/parcels_id_${i}/options/optionR2`),formattedDate)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            }else if (selectedValue === 'optionR3') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR3`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR4') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            set(ref(db, `parcels/parcels_id_${i}/options/optionR4`),formattedDate)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            }else if (selectedValue === 'optionR5') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR5`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR6') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR6`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR7') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR7`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR8') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR8`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR9') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR9`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR10') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR10`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR11') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR11`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR12') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR12`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR13') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR13`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR14') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR14`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR15') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR15`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR16') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR16`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR17') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR17`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR18') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR18`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR19') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR19`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR20') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR20`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR21') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR21`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR22') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR22`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR23') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR23`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }



        };
      


    // Без региона
    }
     else {


        input.addEventListener('keydown', function(event) {
            // Код клавиши Enter
            let enterKeyCode = 13;

            // Проверяем, была ли нажата клавиша Enter
            if (event.keyCode === enterKeyCode) {
                // Вызываем вашу функцию, которую вы хотите выполнить при нажатии Enter
                addNewTrack2();

            }
        });

        
        // selectElement2.setAttribute("disabled", "disabled");
        // selectElement.setAttribute("disabled", "disabled");

        function addNewTrack2() {
            
            let inputGroup = document.getElementById("trackInput").value.split(' ');
            console.log(inputGroup);

            for (let trackG of inputGroup) {

                let trackValue = trackG.trim();

                
                console.log(trackValue);
                

                let inputDate = document.getElementById('date');
                let component = inputDate.value.split("-");
                let formattedDate = component[2] + '.' + component[1] + '.' + component[0];
                

                let i = 1;
                let trackEvent = true;
            
                onValue(ref(db, 'parcels/'), (snapshot) => {
                    let dataLenght = (Object.keys(snapshot.val()).length)
            
                    
                    while ( i <= dataLenght && trackEvent === true){
                        let parTex = 'parcels_id_' + i;
                    
                        if (snapshot.val()[parTex] !== undefined) {
                            onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
                                const track = snapshot.val().track;
                                console.log(track)
                                if (trackValue === track) {
                                    console.log(track);
                                    trackEvent = false;
                                    
                                    
                                }else{
                                    console.log(document.getElementById('trackInput').value)
        
                                    trackEvent = true;
                                    
                                    i++
                                }
                                
                            });


                        }else{
                            dataLenght++
                            i++
                        }
                        
                        
                    }
                });

                
                

                let selectElement = document.querySelector('.pets');
                let selectedOption = selectElement.options[selectElement.selectedIndex];
                let selectedValue = selectedOption.value;
                
                if (selectedValue === 'option1') {

                    set(ref(db, `parcels/parcels_id_${i}/track`),trackValue)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                    set(ref(db, `parcels/parcels_id_${i}/options/option1`),formattedDate)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });

                }else if (selectedValue === 'option2') {

                    set(ref(db, `parcels/parcels_id_${i}/track`),trackValue)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                    set(ref(db, `parcels/parcels_id_${i}/options/option2`),formattedDate)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });

                }else if (selectedValue === 'option3') {

                    set(ref(db, `parcels/parcels_id_${i}/track`),trackValue)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                    set(ref(db, `parcels/parcels_id_${i}/options/option3`),formattedDate)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                }
                // else if (selectedValue === 'option4') {

                //     set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                //         .then(() => {
                //             console.log('Трек добавлен')
                //             // location.reload();
                //             input.value = ''
                //         })
                //         .catch((error) => {
                //             console.log("Ошибка записи в базу данных: ", error);
                //         });
                //     set(ref(db, `parcels/parcels_id_${i}/options/option4`),formattedDate)
                //         .then(() => {
                //             console.log('Трек добавлен')
                //             // location.reload();
                //             input.value = ''
                //         })
                //         .catch((error) => {
                //             console.log("Ошибка записи в базу данных: ", error);
                //         });
                // }
                else if (selectedValue === 'option5') {

                    set(ref(db, `parcels/parcels_id_${i}/track`),trackValue)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                    set(ref(db, `parcels/parcels_id_${i}/options/option5`),formattedDate)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                }else if (selectedValue === 'option6') {

                    set(ref(db, `parcels/parcels_id_${i}/track`),trackValue)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                    set(ref(db, `parcels/parcels_id_${i}/options/option6`),formattedDate)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                }else if (selectedValue === 'option7') {

                    set(ref(db, `parcels/parcels_id_${i}/track`),trackValue)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                    set(ref(db, `parcels/parcels_id_${i}/options/option7`),formattedDate)
                        .then(() => {
                            console.log('Трек добавлен')
                            // location.reload();
                            input.value = ''
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                }


            };

                



        };
    }
        

    
    
});
