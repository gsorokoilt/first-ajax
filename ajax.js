document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

addEventListener('click',function () {

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'get',

    dataType: 'text'
  });
})



});
