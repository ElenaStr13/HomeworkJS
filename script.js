//1. Замінити текст в елементі <h2> на DOM method description

const span = document.querySelector('.dom span');
span.previousElementSibling.innerHTML = 'DOM method description';

/*2. Посилання на сайті site.ua  розділені мовними префіксами /ua/ та 
 /en/. Знайти всі посилання з українськими сторінками */

let aUa = document.getElementsByTagName('a');

for (link of aUa) {
    let href = link.getAttribute('href');
    if (href.startsWith('site.ua/ua')) {
        console.log(href);
    } else {
        continue
    }
};

// 3.Є список. Вставити теги  li 0,2,4 у список в js за порядком

let firstLi = document.getElementById("first");
let thirdLi = document.getElementById("third");

let nullLi = document.createElement("li");
nullLi.setAttribute('id', 'null');
nullLi.innerHTML = '0';
firstLi.prepend(nullLi);

let twoLi = document.createElement("li");
twoLi.setAttribute('id', 'two');
twoLi.innerHTML = '2';
thirdLi.prepend(twoLi);

let fourLi = document.createElement("li");
fourLi.setAttribute('id', 'four');
fourLi.innerHTML = '4';
thirdLi.appendChild(fourLi);

/*4. Є заголовок <h1>Document Object Model<span>DOM</span></h1>. 
Створити посилання та вставити всередину посилання.*/

let aDom = document.createElement("a");
aDom.setAttribute('id', 'link');
aDom.setAttribute('href', 'https://dom.spec.whatwg.org/');
let h1 = document.body.lastChild.previousElementSibling;
aDom.appendChild(h1);
document.body.appendChild(aDom);



