$(window).on('load', function(){
  console.log("Sanity check");

  //Functionality for highlighting the current nav section.
  //Referenced from https://codepen.io/clokey2k/pen/jgfFD
  var $sections = $('.spacing-for-nav');
  $(window).on("scroll", function(){
    var currentScroll = $(this).scrollTop();

    $sections.each(function(){
      var divPosition = $(this).offset().top;
      if(divPosition - 1 < currentScroll){
        $currentSection = $(this);
      }
      var id = $currentSection.attr('id');
      $('a').removeClass('active');
      $("#"+id+"Link").addClass('active');
    })
  });

  

  //Add event listener to form
  $('#comment-form').on('submit', function(e){
    e.preventDefault();
    console.log("In event listener");
    $('form input, form textarea').each(function(){
      if($(this).val() === ""){
        $(this).addClass("error");
        $(this).siblings(".error-message").fadeIn();
        return;
      }
       $(this).removeClass('error');
			 $(this).siblings('.error-message').hide();
    });
  });
})
