const body = document.querySelector('body'),
      navMenu = body.querySelector('.navbar-content'),
      navOpenButton = body.querySelector('.nav-open-button'),
      navCloseButton = navMenu.querySelector('.nav-close-button'),
      bodyButton = document.querySelector(".body-button");

// Nav open/close
if(navMenu && navOpenButton){
  navOpenButton.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseButton) {
  navCloseButton.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Button animation
bodyButton.addEventListener("click", (e) => {
  e.preventDefault;
  bodyButton.classList.add("animate");
  setTimeout(() => {
  bodyButton.classList.remove("animate");
  }, 600);
});

// Scroll events
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Header height
  if(scrollY > 5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll-Up button
  const scrollUpButton = document.querySelector('.scroll-up-button');
  if(scrollY > 50){
    scrollUpButton.classList.add("scroll-up-button-active");
  }else{
    scrollUpButton.classList.remove("scroll-up-button-active");
  }
  
})
  
// Scroll reveal animation
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
  
sr.reveal(`.footer-content, .footer-links`, {interval:100,})