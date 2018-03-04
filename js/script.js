$(function(){
    $(".element").typed({
      strings: ["I'm Web Developer ^1000", "My aim is to create things that others love to use"],
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