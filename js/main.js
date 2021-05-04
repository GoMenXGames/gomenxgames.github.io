// Зададим пиздец

let itemlist = [document.querySelector('.menu__item#menu__social'),
                document.querySelector('.menu__item#menu__hobby'),
                document.querySelector('.menu__item#menu__other')];


let droplist = [document.querySelector('.menu__droplist#droplist__social'),
                document.querySelector('.menu__droplist#droplist__hobby'),
                document.querySelector('.menu__droplist#droplist__other')
                ];

             // Зададим пиздец
let category__marker = [
 document.querySelector('.category__marker#drawings'),
 document.querySelector('.category__marker#videostreaming'),
 document.querySelector('.category__marker#gaming'),
 document.querySelector('.category__marker#gamedev'),
 document.querySelector('.category__marker#other')
];

let subitemlist = [
  document.querySelector('.droplist__category#drawings'),
  document.querySelector('.droplist__category#videostreaming'),
  document.querySelector('.droplist__category#gaming'),
  document.querySelector('.droplist__category#gamedev'),
  document.querySelector('.droplist__category#other')
];

let subdroplist = [
  document.querySelector('.category__subdroplist#drawings'),
  document.querySelector('.category__subdroplist#videostreaming'),
  document.querySelector('.category__subdroplist#gaming'),
  document.querySelector('.category__subdroplist#gamedev'),
  document.querySelector('.category__subdroplist#other')
];

function closeHobbySubcategory(i) {
  //console.log("Закрываю подменю так навелись на другое меню #" + i);
  for (let i = 0; i<subdroplist.length; i++){
    subdroplist[i].classList.add('category__subdroplist_hidden');
    category__marker[i].classList.remove('category__marker_openned');
    category__marker[i].classList.add('category__marker_closed');
  }
}

// Подставим пиздец
for (let i = 0; i<droplist.length; i++) {
  itemlist[i].onmouseover = ()=>{
    if ((i==2)||(i==0)) {
      closeHobbySubcategory(i);
    }
    droplist[i].classList.remove('menu__droplist_hidden');
  }
  itemlist[i].onmouseout = ()=>{

    droplist[i].classList.add('menu__droplist_hidden');
  }
}




// Готовый пиздец ( Помощь от }E{ )...


// Подставим пиздец
for (let i = 0; i<subdroplist.length; i++) {
  category__marker[i].onmousedown = ()=>{
    if(category__marker[i].classList.contains('category__marker_closed')) {
      category__marker[i].classList.remove('category__marker_closed');
      category__marker[i].classList.add('category__marker_openned');
      subdroplist[i].classList.remove('category__subdroplist_hidden');
    }
    else {
      subdroplist[i].classList.add('category__subdroplist_hidden');
      category__marker[i].classList.remove('category__marker_openned');
      category__marker[i].classList.add('category__marker_closed');
    }
  }
}
