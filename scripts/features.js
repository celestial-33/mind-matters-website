import { services } from "../data/services.js";

console.log(services);

//Shrink Header On Scroll

  //vh and vw
  let vh = window.innerHeight / 100;
  let vw = window.innerWidth / 100;

const listOfClasses = ['header','.header-left', '.header-right'];

listOfClasses.forEach((mainClassName) => {
  document.addEventListener('scroll', () => {
    const mainClass = document.querySelector(`${mainClassName}`);
  
    if (window.scrollY > ((vh * 100) - (vh * 15))) {
      mainClass.classList.add('scrolled')
    } else {
      mainClass.classList.remove('scrolled')
    };
  });
});

/*
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > ((vh * 100) - (vh * 15))) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  };
});
*/

//Generate Services HTML Elements
let servicesHTML = '';
services.forEach((service) => {
  servicesHTML += `
  <div class="service-container">
    <div class="service-img-container img-placeholder-container">
      <img src="placeholder.png" class="img-placeholder">
    </div>
    <div class="service-heading-container">
      <h3>${service.heading}</h3>
    </div>
    <div class="service-name-container">
      <p class="service-name">- Individual Therapy</p>
      <p class="service-name">- Couples Therapy</p>
      <p class="service-name">- Group Therapy</p>
      <p class="service-name">- Stress Management</p>
    </div>
    <button class="know-more-btn white-green-btn main-btns">Know More</button>
  </div>
  `;
})
document.querySelector('.js-services-container').innerHTML = servicesHTML;
