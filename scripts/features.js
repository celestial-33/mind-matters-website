import { services } from "../data/services.js";

//Shrink Header On Scroll

  //vh and vw
  let vh = window.innerHeight / 100;
  let vw = window.innerWidth / 100;

const listOfClasses = ['header','.header-left', '.header-logo', '.header-right', '.header-icon'];

listOfClasses.forEach((mainClassName) => {
  document.addEventListener('scroll', () => { 
    document.querySelectorAll(`${mainClassName}`).forEach((mainClass) => {
      if (window.scrollY > ((vh * 100) - (vh * 15))) {
        mainClass.classList.add('scrolled')
      } else {
        mainClass.classList.remove('scrolled')
      };
    });
  });
});

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
  `;
  service.names.forEach((serviceName) => {
    servicesHTML += `
    <p class="service-name">- ${serviceName}</p>
    `;
  });
  servicesHTML += `
    </div>
    <button class="know-more-btn white-green-btn main-btns">Know More</button>
  </div>
  `;
})
document.querySelector('.js-services-container').innerHTML = servicesHTML;
