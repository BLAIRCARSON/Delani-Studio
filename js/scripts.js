$(document).ready(function(){
$("#design1").click(function(){
$("#design2").toggle();
$("#design3").toggle();
    
});

$("#development1").click(function(){
$("#development2").toggle();
$("#development3").toggle();
       
});
$("#product1").click(function(){
    $("#product2").toggle();
    $("#product3").toggle();
})
});

$(document).ready(function() {
    $(".col-md-3").hover(
      function() {
        $(this)
          .find(".projectcol")
          .show();
      },
      function() {
        $(this)
          .find(".projectcol")
          .hide();
      }
    );
  });

 