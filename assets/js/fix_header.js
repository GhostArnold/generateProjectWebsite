const navbarEl = document.querySelector(".navbar")

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY

  if (scrollPos > 100) {
    navbarEl.classList.add("fixed-navbar_mini")
  } else {
    navbarEl.classList.remove("fixed-navbar_mini")
  }
})