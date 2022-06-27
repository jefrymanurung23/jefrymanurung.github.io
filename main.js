const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});

// let items = document.querySelectorAll('#featureContainer .carousel .carousel-item');
// items.forEach((el) => {
//   const minPerSlide = 4
//   let next = el.nextElementSibling
//   for (var i=1; i<minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child
//       next = items[0]
//     }
//     let cloneChild = next.cloneNode(true)
//     el.appendChild(cloneChild.children[0])
//     next = next.nextElementSibling
//   }
// })
// $(document).ready(function(){
//   $('#featureCarousel').carousel({interval: false});
//   $('#featureCarousel').carousel('pause');
// });

