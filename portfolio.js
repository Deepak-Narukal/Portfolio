/*===========scroll section active link=================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });




  /*===========Menu icon============*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };


  /*===========Sticky Navbar============*/

  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);



  /*===========remove menu icon navbar when click navbar link (scroll)=================*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

// Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Darkmode light change

let darkmode = document.querySelector('#darkMode-icon');

darkmode.onclick = () => {
  darkmode.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');


}


ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.leftsection, .heading', { origin: 'top' });
ScrollReveal().reveal('.full-image img, .service-container, .portfolio-box, .blog-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.leftsection h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.leftsection h3, .leftsection p, .about-content', { origin: 'right' });