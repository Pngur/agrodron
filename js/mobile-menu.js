const burgerButton = document.querySelector('.mobile-menu');
const burgerClass = document.querySelector('.mobile-menu__burger-icon');
const mobileMenu = document.querySelector('.navigation');

// burgerButton.addEventListener('click', function() {
// });

burgerButton.addEventListener('click', function() {
   mobileMenu.classList.toggle('toggle-js');

   if (burgerClass.classList.contains('mobile-menu__burger-icon')) {
      burgerClass.classList.remove('mobile-menu__burger-icon'); 
      burgerClass.classList.add('mobile-menu__cross-icon'); 
   } else {
      burgerClass.classList.remove('mobile-menu__cross-icon'); 
      burgerClass.classList.add('mobile-menu__burger-icon'); 
   }
});
