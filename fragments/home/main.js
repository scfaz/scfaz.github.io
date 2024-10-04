/**
* Template Name: Eterna
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  window.document.title = "Home - " + window.document.title;

  fetch('/fragments/home/topbar.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("topbar").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/fragments/home/header.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("header").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/fragments/home/hero.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("hero").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/fragments/home/featured.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("featured").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/fragments/home/about.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("about").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  fetch('/fragments/home/partners.html').then(function(response) {
    return response.text();
  }).then(function(html) {
    document.getElementById("clients").innerHTML = html;
  }).then(function() {
    new BroadcastChannel('eventChannel').postMessage({
      name: "partners.initialized",
      message: null
    });
  }).catch(function(err) {  
    console.log('Fetch Error', err);  
  });

  fetch('/fragments/home/footer.html').then(function(response) {
    return response.text();
  }).then(function(html) {
      document.getElementById("footer").innerHTML = html;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

})()