const menuToggler = document.querySelector(".navbar__toggler img");
const nav = document.querySelector(".collapsible-nav");

menuToggler.addEventListener("click", function (evt) {
  //decrease opacity of the hamburger or vice-versa
  this.classList.toggle("active");
  //show dropdown menu or vice-versa
  nav.classList.toggle("active");
});

//Close dropdown menu if clicked outside  navigation or hamburger
document.addEventListener("click", (evt) => {
  if (evt.target == menuToggler || nav.contains(evt.target)) {
    return;
  }
  nav.classList.remove("active");
  menuToggler.classList.remove("active");
});
