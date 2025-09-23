document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("menu-button");
  const menu = document.getElementById("menu-options");
  const links = menu.querySelectorAll("a");

  button.addEventListener("click", function () {
    menu.classList.toggle("active");
    button.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("active");
      button.classList.remove("open");
    }
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      button.classList.remove("open");
    });
  });
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Botão Back to Top (Opcional)
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Rolagem suave
            });
        });
    }