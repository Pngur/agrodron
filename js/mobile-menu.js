const burgerButton = document.querySelector('.mobile-menu');
const burgerClass = document.querySelector('.mobile-menu__burger-icon');
const mobileMenu = document.querySelector('.navigation');
const linkList = document.querySelector('.navigation__list');
const linkItems = document.querySelectorAll('.navigation__link');
const bodyTag = document.body;

burgerButton.addEventListener('click', function(e) {
   
   mobileMenu.classList.toggle('toggle-js');
   if (burgerClass.classList.contains('mobile-menu__burger-icon')) {
      burgerClass.classList.remove('mobile-menu__burger-icon'); 
      burgerClass.classList.add('mobile-menu__cross-icon'); 
   } else {
      burgerClass.classList.remove('mobile-menu__cross-icon'); 
      burgerClass.classList.add('mobile-menu__burger-icon'); 
   }
   
});

linkList.addEventListener('click', function(e) {

   for (let i of linkItems) {
      if (i === e.target) {
         mobileMenu.classList.toggle('toggle-js')
         burgerClass.classList.remove('mobile-menu__cross-icon'); 
         burgerClass.classList.add('mobile-menu__burger-icon'); 
        };
   }
});

//Плавный скроллинг

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// Скроллинг вверх   
const btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

