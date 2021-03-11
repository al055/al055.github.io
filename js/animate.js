const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navigation_menu");
  const navLinks = document.querySelectorAll(".navigation_menu li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("navigation_menu_active");
    burger.classList.toggle("toggle");
  });
};

navSlide();
