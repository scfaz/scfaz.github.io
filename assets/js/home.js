"use strict";
(function( window, undefined ) {		
  class Page { 
    constructor() {
      this.eventChannel = new BroadcastChannel('eventChannel');
      this.eventChannel.onmessage = this.handleEvent.bind(this);
    }
      
    handleEvent(event) {
      console.log(event.data.name)
      if (event.data.name === 'template.initialized') {
        this.setTitle('Home');
        this.setMainContent('/components/home.html')
      }
    }

    setTitle(title) {
      window.document.title = title + " - " + window.document.title;
    }

    setMainContent(path) {
      fetch(path).then(function(response) {
        return response.text();
      }).then(function(html) {
          document.getElementById("main").innerHTML = html;
      }).catch(function(err) {  
          console.log('Fetch Error', err);  
      });
    }
  }

  new Page();
})()