/**
* Template Name: Eterna
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  window.document.title = "Contact Us - " + window.document.title;
  document.getElementById("contact-link").classList.add("active");

  fetch('/layout/topbar.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("topbar").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/layout/header.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("header").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/fragments/contact/main.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("main").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/layout/footer.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("footer").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

})()