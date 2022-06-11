/* colocar um x quando clica nos itens da navbar */
const hamburgerMenu = document.querySelector('.hamburgerMenu'); // pegando a classe .hamburgerMenu
const body = document.querySelector('body'); // pegando a tag body
const navMenu = document.querySelector('.navMenu'); // pegando a classe .navMenu

hamburgerMenu.addEventListener("click", () => { //quando há um clique
    hamburgerMenu.classList.contains("bi-list") // se na classe .hamburgerMenu existir um bi-list
        ? hamburgerMenu.classList.replace("bi-list", "bi-x") //troque o bi-list por um bi-x
        : hamburgerMenu.classList.replace("bi-x", "bi-list"); //se não troque o bi-x por um bi-list
    navMenu.classList.toggle("active"); // adiciona a classe .navMenu e abre a navbar mobile
    body.classList.toggle("menuNavActive"); //adicionando a classe no body
});

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => { // quando há um clique nos links da nav mobile
    hamburgerMenu.classList.remove("bi-x"); // remove o ícone x
    hamburgerMenu.classList.add("bi-list") // adiciona o ícone list
    navMenu.classList.remove("active"); // remova a classe ativa da classe .navMenu
    body.classList.toggle("menuNavActive"); //remove a classe no body
}));