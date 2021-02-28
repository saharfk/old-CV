$('#navigation a').on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000);
});


$('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
  $('.toggler').toggleClass('change');
  $('.nav-content').slideToggle();
});

$('.nav-content .dropdown').on('click', function(){
});

  $('.toggler').removeClass('change');
  $('.nav-content').slideUp();

});

$("#contact input, #contact textarea").on('focusout', function(){

  var text_val = $(this).val();
  if (text_val === "") {
    $(this).removeClass('has-value');
  } else {
    $(this).addClass('has-value');
  }

});