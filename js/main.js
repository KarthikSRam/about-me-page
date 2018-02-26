// TODO: $(document).on (ready, function(){}) will load AFTER the html has finished loading. window on load may create timing errors (rare, but possible)
$(window).on('load', function(){
  console.log("Sanity check");

  //initially hide the hamburger dropdown menu

  $(".hamburger-menu").hide();

  //hamburger Functionality

  $(".hamburger").on("click", function(e){
    e.preventDefault();
    $(".hamburger-menu").slideToggle(400);
  })

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
  $('nav a').on("click", function(e){
    e.preventDefault();
    var clickedID = $(this).attr("id");
    clickedID = clickedID.substring(0, clickedID.length - 4);
    console.log(clickedID);
    $('html, body').animate({
        scrollTop: $("#" + clickedID).offset().top
    }, 2000);
  });

  $('.hamburger-menu ul li a').on("click", function(e){
    e.preventDefault();
    var clickedID = $(this).attr("id");
    clickedID = clickedID.substring(0, clickedID.length - 4);
    console.log(clickedID);
    $('html, body').animate({
        scrollTop: $("#" + clickedID).offset().top
    }, 2000);
    $(".hamburger-menu").slideToggle(400);
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

  //Rotating testimonials

  // var testimonials = [
  //   {
  //     paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     author: "-Pluto"
  //   },
  //   {
  //     paragraph: "Karthik is a great teammate to work with and always gets the job done",
  //     author: "-John"
  //   },
  //   {
  //     paragraph: "Working with Karthik has been a privilege and a pleasure!",
  //     author: "-Smith"
  //   }
  // ];
  // for(var i=0; i<testimonials.length; i++){
  //   $('.testimonial-div').delay(2000).fadeOut();
  //   $('.testimonial-div p:first-child').html(testimonials[i].paragraph);
  //   $('.testimonial-div p:last-child').html(testimonials[i].author);
  //   $('.testimonial-div').fadeIn();
  //   // if(i == testimonials.length - 1){
  //   //   i = -1;
  //   // }
  // }

  //Code from https://codepen.io/htmlr/pen/dslfL
  function initQuoteCarousel() {

    var $quotesWrapper = $(".testimonial-div");
    var $quotes = $quotesWrapper.find("blockquote");

    if (!$quotes.length) {
        return;
    }

    var selectNextQuote = function () {
        // keep moving first quote in dom to the end to make continuous
        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

        setTimeout(selectNextQuote, $quote.data("timeout"));
    };

    setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

  }

  $(function () {
    initQuoteCarousel();
  });
})
