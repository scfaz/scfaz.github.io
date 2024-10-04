/**
* Template Name: Eterna
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  fetch('/components/topbar.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("topbar").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/components/header.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("header").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/components/hero.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("hero").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/components/home.featured.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("featured").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/components/home.about.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("about").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/components/home.partners.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("clients").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/components/footer.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("footer").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });
})()