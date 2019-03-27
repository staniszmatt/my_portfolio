$(document).ready(phoneSizing);

function phoneSizing() {
  
  let $window = $(window);
  let isMinimized = false;

  resize = () => {
    if (!isMinimized) {
      if ($window.width() < 415){
        $("span.fa-stack").removeClass('fa-4x').addClass('fa-2x');
        $('h4.skills-heading').replaceWith(function() {
          return $("<h6>", {
            class: this.className,
            html: $(this).html()
          });
        });
        $('h2.modal-header').replaceWith(function() {
          return $("<h3>", {
            class: this.className,
            html: $(this).html()
          });
        });

        isMinimized = true;
      } 
    } else if ($window.width() >= 415) {
      $("span.fa-stack").removeClass('fa-2x').addClass('fa-4x');

      $('h6.skills-heading').replaceWith(function() {
        return $("<h4>", {
          class: this.className,
          html: $(this).html()
        });
      });
      $('h3.modal-header').replaceWith(function() {
        return $("<h2>", {
          class: this.className,
          html: $(this).html()
        });
      });
      isMinimized = false;
    }
  }
  $window.resize(resize).trigger('resize');
}

(function($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })
})(jQuery); // End of use strict
