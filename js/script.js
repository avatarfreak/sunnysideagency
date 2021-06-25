const menuToggler = document.querySelector(".navbar__toggler img");
const nav = document.querySelector(".collapsible-nav");

menuToggler.addEventListener("click", () => {
  nav.classList.toggle("active");
});
