/*1. Написати фугкцію getData, яка буде приймати дані, за посиланням
фільтрувати їх та виведе у консоль масив об'єктів, де кожна властивість
title  починається з літери а.*/

//let url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url).then((response) => {
//     //console.log(response)
//     if (response.ok) {
//         return response.json();
//     }
//     throw new Error('Something went wrong');
// })
//     .then((responseJson) => {
//         responseJson.map((el) => {
//             if (!el.title.indexOf('a')) {
//                 console.log(el);
//             }
//         })
//         return responseJson
//     })
//     .catch((error) => {
//         console.log(error)
//     });

//2. Переписати задачу з першого завдання, використовуючи async/await

// let url = 'https://jsonplaceholder.typicode.com/posts';

// async function getAsyncData(url) {
//     try {
//         let result = await fetch(url);
//         if (result.ok) {
//             let response = await result.json();
//             response.map((el) => {
//                 if (!el.title.indexOf('a')) {
//                     console.log(el);
//                 }
//                 return el;
//             })
//         } else {
//             throw new Error(`Error: ${result.status}`);
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// };

// getAsyncData('https://jsonplaceholder.typicode.com/posts');

/*3, 4 Є розмітка html. Написати функцію, яка буде отримувати дані за посиланням і
записувати у user-a всі об'єкти, де кожна властивість title починається з літери
"а". Кожен об'єкт повинен бути записан з нового рядка. Потім із цих об'єктів
треба обрати обрати об'єкти, які починаються з літери "ab" та записати їх
у блоці user-ab, додати кнопки, де виводяться об'єкти title починається з літери
"а" "ab" і all*/
//в мене не знашлося title ab  тому виводжу ad

let url = 'https://jsonplaceholder.typicode.com/posts';
let userA = document.querySelector('.user-a');
let userAd = document.querySelector('.user-ad');
let tittleA = document.querySelector('.add-a');
let tittleAd = document.querySelector('.add-ad');
let tittleAall = document.querySelector('.add-all');

let arr = [],
    arrAd = [];

fetch(url).then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Something went wrong');
})

tittleA.addEventListener('click', getAsyncData);

async function getAsyncData() {
    try {
        let result = await fetch(url);
        if (result.ok) {
            let response = await result.json();
            while (userA.firstChild) {
                userA.removeChild(userA.firstChild);
            };
            response.map((el) => {
                if (!el.title.indexOf('a')) {
                    let divA = document.createElement('div');
                    if (divA.innerHTML !== '') {
                        divA.innerHTML = '';
                        divA.innerHTML = JSON.stringify(el, null);
                    } else {
                        userA.appendChild(divA);
                        divA.innerHTML = JSON.stringify(el, null);
                    }
                    userAd.innerHTML = '';
                    return divA;
                }
            });
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (error) {
        console.log(error.message)
    }
};

tittleAd.addEventListener('click', getAsyncDataAD);

async function getAsyncDataAD() {
    try {
        let result = await fetch(url);
        if (result.ok) {
            let response = await result.json();
            while (userAd.firstChild) {
                userAd.removeChild(userAd.firstChild);
            };
            response.map((el) => {
                if (!el.title.indexOf('ad')) {
                    let divAd = document.createElement('div');
                    if (divAd.innerHTML !== '') {
                        divAd.innerHTML = '';
                        divAd.innerHTML = JSON.stringify(el, null);
                    } else {
                        userAd.appendChild(divAd);
                        divAd.innerHTML = JSON.stringify(el, null);
                    }
                    userA.innerHTML = '';
                    return divAd;
                }
            });
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (error) {
        console.log(error.message)
    }
};

async function getAsyncDataAll() {
    try {
        let result = await fetch(url);
        if (result.ok) {
            let response = await result.json();
            while (userA.firstChild) {
                userA.removeChild(userA.firstChild);
            };
            while (userAd.firstChild) {
                userAd.removeChild(userAd.firstChild);
            };
            response.map((el) => {
                if (!el.title.indexOf('a')) {
                    let divA = document.createElement('div');
                    if (divA.innerHTML !== '') {
                        divA.innerHTML = '';
                        divA.innerHTML = JSON.stringify(el, null);
                    } else {
                        userA.appendChild(divA);
                        divA.innerHTML = JSON.stringify(el, null);
                    }
                    if (!el.title.indexOf('ad')) {
                        let divAd = document.createElement('div');
                        if (divAd.innerHTML !== '') {
                            divAd.innerHTML = '';
                            divAd.innerHTML = JSON.stringify(el, null);
                        } else {
                            userAd.appendChild(divAd);
                            divAd.innerHTML = JSON.stringify(el, null);
                        }
                        return divAd;
                    }
                    return divA, divA;
                }
            });
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (error) {
        console.log(error.message)
    }
};

tittleAall.addEventListener('click', getAsyncDataAll)





