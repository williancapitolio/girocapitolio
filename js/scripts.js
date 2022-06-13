/* colocar um x quando clica nos itens da navbar */
const hamburgerMenu = document.querySelector('.hamburgerMenu'); // pegando a classe .hamburgerMenu
const body = document.querySelector('body'); // pegando a tag body
const navMenu = document.querySelector('.navMenu'); // pegando a classe .navMenu

hamburgerMenu.addEventListener("click", () => { //quando há um clique
    hamburgerMenu.classList.contains("bi-list") // se na classe .hamburgerMenu existir um bi-list
        ? hamburgerMenu.classList.replace("bi-list", "bi-x") //troque o bi-list por um bi-x
        : hamburgerMenu.classList.replace("bi-x", "bi-list"); //se não troque o bi-x por um bi-list
    navMenu.classList.toggle("active"); // adiciona a classe .navMenu e abre a navbar mobile
    //body.classList.toggle("menuNavActive"); //adicionando a classe no body
});

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => { // quando há um clique nos links da nav mobile
    hamburgerMenu.classList.remove("bi-x"); // remove o ícone x
    hamburgerMenu.classList.add("bi-list") // adiciona o ícone list
    navMenu.classList.remove("active"); // remova a classe ativa da classe .navMenu
    //if (document.querySelector("menuNavActive"))
    //body.classList.toggle("menuNavActive"); //remove a classe no body
}));

//animações
const item = document.querySelectorAll("[data-anime"); //pegando o atributo data anime

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate")
        }
    });
};

animeScroll();

window.addEventListener("scroll" , () => {
    animeScroll();
});

/* criou constante para selecionar css da navbar da tag a onde existe um '#', excluindo links externos */
const menuLinks = document.querySelectorAll('.navbar a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

/* não funcional, pois o safari não suporta
function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}
*/

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 124;
    smoothScrollTo(0, distanceFromTheTop, 200)
}

/*
function scrollToSection(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section.offsetTop);
}
*/

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

/* função do GitHub iwazaru/smooth-scroll.js */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}
