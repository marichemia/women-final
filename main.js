//burger menu

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

//slider 

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

// fetching animal data

let animals = ['panda', 'Harpy Eagle', 'gorilla', 'sloth', 'cheetah', 'penguin'];
let nameParagraph = document.getElementsByClassName('name');
let lifespanParagraphs = document.getElementsByClassName('lifespan');
let populationSizeParagraphs = document.getElementsByClassName('population');
let dietParagraphs = document.getElementsByClassName('diet');
let habitatParagraphs = document.getElementsByClassName('habitat');
let factParagraph = document.getElementsByClassName('fact');


animals.forEach(function (animalName, index) {
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
        .then(data => {
            nameParagraph[index].textContent = `${data[0]['name']}`;
            lifespanParagraphs[index].textContent = `Lifespan: ${data[0]['characteristics']['lifespan']}`
            dietParagraphs[index].textContent = `Diet: ${data[0]['characteristics']['diet']}`;
            habitatParagraphs[index].textContent = `Habitat: ${data[0]['characteristics']['habitat']}`;
            factParagraph[index].textContent = `${data[0]['characteristics']['slogan']}`;
        })
        .catch(error => console.log(error));
})

// modal window for form
let buttons = Array.from(document.getElementsByClassName('donate-btn'));
console.log(Array.isArray(buttons))
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.getElementById('modal').classList.remove('none');
    })
})


document.getElementsByClassName('modal-close-btn')[0].addEventListener('click', function () {
    document.getElementById('modal').classList.add('none');
})
