// JavaScript Document

if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}


 function initMap() {
   var mapDiv = document.getElementById('map');
      var map = new google.maps.Map(mapDiv, {
        center: {lat: -19.2716, lng: 146.8092},
         zoom: 15
       });
 }
 
 
 
