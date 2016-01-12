$(document).ready(function(){

  $(".javascript").click(function() {
    $(".javascript p").toggle();
    $(".javascript li").toggle();
  });

  $(".modulo").click(function() {
    $(".modulo p").toggle();
    $(".modulo li").toggle();
  });

  $(".operators").click(function() {
    $(".operators p").toggle();
    $(".operators li").toggle();
  });

  $(".Nan").click(function() {
    $(".Nan p").toggle();
    $(".Nan li").toggle();
  });

  $(".variable").click(function() {
    $(".variable p").toggle();
    $(".variable li").toggle();
  });

  $(".plus").click(function() {
    $(".plus p").toggle();
    $(".plus li").toggle();
  });

  $(".function").click(function() {
    $(".function p").toggle();
    $(".function li").toggle();
  });

  $(".string").click(function() {
    $(".string p").toggle();
    $(".string li").toggle();
  });


});

//Instead of having to write out nearly identical code each time, perhaps there is a way you can write a more generic code. Here is what we used:
//
// $(".thumbnail").click(function() {
//   $(this).find(".term").toggle();
//   $(this).find(".definition").toggle();
// });
