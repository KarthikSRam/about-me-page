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
  })
})
