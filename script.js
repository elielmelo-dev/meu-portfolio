class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

/*------------*Fim do Header ----------------------------------*/

/*------------------calendario-------------------------------- */
const dayNumber = new Date().getDate();
const monthName = new Date().toLocaleString("default", {month: "long"});

document.querySelector(".data-dia").innerHTML = dayNumber;
document.querySelector(".data-mes").innerHTML = monthName;

/*------------------Fim calendario-------------------------------- */

/*-----------------------Scroll---------------------------- */

const menuLinks = document.querySelectorAll('#logo-nav, #sobre-nav, #habilidade-nav, #projeto-nav, #contato-nav');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("id");
  return document.querySelector(`#${id}`).offsetTop;
}


function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}


/*-----------------------Scroll  Fim  ---------------------------- */

/*----------------------------animation scroll---------------- */



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
    });
});

const hiddenElements = document.querySelectorAll('.ola, .calendar, .sobre, .sobre-mim, p, .habilidades, .habili-cards, .projeto-name, .projeto-cards, .contato-name, .contato');
hiddenElements.forEach((el) => observer.observe(el));



/*----------------------------animation scroll  fim---------------- */