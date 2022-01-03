$('.customer-list').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   variableWidth: true,
   dots: true,
   prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fi fi-rr-arrow-left"></i></button>`,
   nextArrow:`<button type='button' class='slick-next pull-right'><i class="fi fi-rr-arrow-right"></i></button>`,
   responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
         }
      }
   ]
});
const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const activeClass = 'is-show'
toggle.onclick = () => {
   menu.classList.add(activeClass)
}
window.addEventListener('click', function(e){   
   if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
      menu.classList.remove(activeClass)
   }
});