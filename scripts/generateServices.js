//generateServicesForHomePage
const services = [
  {
    heading: 'Counseling & Psychotherapy',
    name: [
      'Individual Therapy',
      'Couples Therapy',
      'Group Therapy',
      'Stress Management'
    ]
  }, {
    heading: 'Counseling & Psychotherapy',
    name: [
      'Individual Therapy',
      'Couples Therapy',
      'Group Therapy',
      'Stress Management'
    ]
  }, {
    heading: 'Counseling & Psychotherapy',
    name: [
      'Individual Therapy',
      'Couples Therapy',
      'Group Therapy',
      'Stress Management'
    ]
  }
]

let servicesHTML = '';
services.forEach((service) => {
  servicesHTML += `
  <div class="service-container">
    <div class="service-img-container img-placeholder-container">
      <img src="placeholder.png" class="img-placeholder">
    </div>
    <div class="service-heading-container">
      <h3>Counseling & Psychotherapy</h3>
    </div>
    <div class="service-name-container">
      <p class="service-name">- Individual Therapy</p>
      <p class="service-name">- Couples Therapy</p>
      <p class="service-name">- Group Therapy</p>
      <p class="service-name">- Stress Management</p>
    </div>
    <button class="know-more-btn white-green-btn main-btns">Know More</button>
  </div>
  `
})
document.querySelector('.js-services-container').innerHTML = servicesHTML;