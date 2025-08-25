// script do menu dropdown
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("menu-button");
  const menu = document.getElementById("menu-options");
  const links = menu.querySelectorAll("a"); // Seleciona todos os links do menu

  // Alterna o menu ao clicar no botão
  button.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  // Fecha o menu ao clicar em qualquer link dentro dele
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  });
});