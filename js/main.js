$(window).on('load', function(){
  console.log("Sanity check");

  //Functionality for highlighting the current nav section.
  //Referenced from https://codepen.io/clokey2k/pen/jgfFD
  var $sections = $('.spacing-for-nav');
  $(window).on("scroll", function(){
    var currentScroll = $(this).scrollTop();
    var $currentSection = $("#aboutLink");

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

  //Animated scroll to sections
  $('a').on("click", function(e){
    e.preventDefault();
    var clickedID = $(this).attr("id");
    clickedID = clickedID.substring(0, clickedID.length - 4);
    console.log(clickedID);
    $('html, body').animate({
        scrollTop: $("#" + clickedID).offset().top
    }, 2000);
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
