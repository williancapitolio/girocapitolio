/* colocar um x quando clica nos itens da navbar */
const menuMobile = document.querySelector('.menuMobile'); // pegando a classe .menuMobile
const header = document.querySelector('.header'); // pegando a classe header

menuMobile.addEventListener("click", () => { //quando há um clique
    menuMobile.classList.contains("bi-list") // se na classe .menuMobile existir um bi-list
        ? menuMobile.classList.replace("bi-list", "bi-x") //troque o bi-list por um bi-x
        : menuMobile.classList.replace("bi-x", "bi-list"); //se não troque o bi-x por um bi-list
    header.classList.toggle("menuNavActive"); //adicionando a classe no header
});