const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const experiencesMenu = document.querySelector('#experiences-page');
  const signupMenu = document.querySelector('#project-page');
  let scrollPos = window.scrollY;
  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 450) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1100) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    experiencesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1900) {
    experiencesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    signupMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2600) {
    experiencesMenu.classList.remove('highlight');
    signupMenu.classList.add('highlight');   
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 150 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

const parallax = documet.getElementById("home")

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
