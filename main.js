/* burger menu */

const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll("nav-link");
const burgerBtn = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".fa-circle-xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menu.removeAttribute('id', 'showMenu')
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        menu.classList.remove('burger-style');
    } else {
        menu.classList.add("showMenu");
        menu.setAttribute('id', 'showMenu')
        closeIcon.style.display = 'block';
        menuIcon.style.display = "none";
        menu.classList.add('burger-style');
    }
}

burgerBtn.addEventListener('click', toggleMenu);
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', toggleMenu);
});

/* slider */

const left = document.querySelector('.fa-chevron-left');
const right = document.querySelector('.fa-chevron-right');
const images = document.querySelector('.slider').children;
const totalImages = images.length;
let index = 0;

left.addEventListener('click', () => {
    nextImage('next');
});

right.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}

left.addEventListener('click', function () {
    document.getElementsByClassName('main')[0].classList.add('animate__animated');
    document.getElementsByClassName('main')[0].classList.add('animate__fadeIn');
});

right.addEventListener('click', function () {
    document.getElementsByClassName('main')[0].classList.add('animate__animated');
    document.getElementsByClassName('main')[0].classList.add('animate__fadeIn');
})

/* fetch data 
let animalName = 'cheetah';
fetch('https://api.api-ninjas.com/v1/animals?name=' + animalName, {
    method: 'GET',
    headers: {
        'X-Api-Key': 'h2ZCRhxfUdCZiVLQclYyMg==VfVjOJlKDyriefTU'
    }
})
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => { console.log(data) })
    .catch(error => console.log(error));
    */