$(function () {

  'use strict'
      var n= 46;
      var photos = []; 
      /*for(var i=0;i<=n; i++){
        photos[i] ={};
      }*/

      var carouselLinks = []
      var linksContainer = $('#links')
      var baseUrl
      // Add the demo images as links with thumbnails to the page:
      //$.each(photos.photo, function (index, photo) {
      for(var i=1;i<=n;i++){ 
        baseUrl = './images/'+ i
        
        $('<a/>')
          .append($('<img>').prop('src', baseUrl + '_tn.jpg'))
          .prop('href', baseUrl + '.png')
          //.prop('title', photo.title)
          .prop('title', i)
          .attr('data-gallery', '')
          .appendTo(linksContainer)
        
        carouselLinks.push({
          href: baseUrl + '.PNG',
          title: i
          //title: photo[i].title
        })
      }
    })




