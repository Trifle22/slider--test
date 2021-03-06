let slideIndex = 1;

const burgerButton = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.burger-menu');
const aboutUsText = document.querySelector('.about-us--text');
const aboutUsImg = document.querySelector('.about-us--img');
const aboutUsAdvantages = document.querySelector('.about-us--advantages');
const btnPrev = document.querySelector('.button-prev');
const btnNext = document.querySelector('.button-next');
const studentWorkDropdown = document.querySelector('.student-work--dropdown');


showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("swiper-slide-header");
  let paginationButtons = document.querySelectorAll('.pagination--button');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  paginationButtons.forEach(item => {
    item.addEventListener('click', buttons)
  });
  
  function buttons() {
    paginationButtons.forEach(item => {
      item.classList.remove('active');
    })
    this.classList.add('active');
  }

  slides[slideIndex - 1].style.display = "flex";

}

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});


  function adaptive() {
    if (screen.width <= 992) {
      aboutUsAdvantages.before(aboutUsImg);
    } else {
      ''
    }
  };

  adaptive();


  let slider = multiItemSlider('.slider');

studentWorkDropdown.addEventListener('click', function(event) {
  event.preventDefault();
  studentWorkDropdown.classList.toggle('active');
});

let tab = function() {
  let tabNav = 
  document.querySelectorAll('.tab-link');
  let tabContent = 
  document.querySelectorAll('.student-work__tabs--content');
  let tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav(event) {
    event.preventDefault();
    tabNav.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
    tabName = this.getAttribute('data-tab-work-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    })
  }
}

tab();

let dropdownTabs = function() {
  let tabNav = 
  document.querySelectorAll('.dropdown--tab-link');
  let selectedTab = 
  document.querySelector('.selected-tab');
  let tabContent = 
  document.querySelectorAll('.student-work__tabs--content');
  let studentWorkDropdown = document.querySelector('.student-work--dropdown');
  let tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav(event) {
    event.preventDefault();
    selectedTab.textContent = this.textContent;
    tabName = this.getAttribute('data-tab-work-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    })
  }
}

dropdownTabs();