/* colocar um x quando clica nos itens da navbar */
const hamburgerMenu = document.querySelector('.hamburgerMenu'); // pegando a classe .hamburgerMenu
const body = document.querySelector('body'); // pegando a classe header
const navMenu = document.querySelector('.navMenu');

hamburgerMenu.addEventListener("click", () => { //quando há um clique
    hamburgerMenu.classList.contains("bi-list") // se na classe .hamburgerMenu existir um bi-list
        ? hamburgerMenu.classList.replace("bi-list", "bi-x") //troque o bi-list por um bi-x
        : hamburgerMenu.classList.replace("bi-x", "bi-list"); //se não troque o bi-x por um bi-list
    navMenu.classList.toggle("active");
    body.classList.toggle("menuNavActive"); //adicionando a classe no header
});

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("bi-x");
    hamburgerMenu.classList.add("bi-list")
    navMenu.classList.remove("active");
}));