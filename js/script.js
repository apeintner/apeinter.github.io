$(function(){
    $(".element").typed({
      strings: ["I'm Webdesigner ^1000", "My aim is creating things that others love to use"],
      typeSpeed: 30,
      startDelay: 1000
    });
  });
$('#top').click(function() {
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
  });

  function go_to(destination) {
    $("html, body").animate({
      scrollTop: $(destination).offset().top - 50
    }, "slow");
  };