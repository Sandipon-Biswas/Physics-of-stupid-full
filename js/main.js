
$(document).ready(function() {
  $('.slidder').slick({
    
    centerPadding: '60px',
    
    /* Just changed this to get the bottom dots navigation */
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow : ' <span class="priv_arrow"><i class="fa-solid fa-angle-left s-icon"></i></span>',
    nextArrow : ' <span class="next_arrow"><i class="fa-solid fa-angle-right s-icon"></i></span>',
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  });

});

// faq js

const buttons = document.querySelectorAll('.faqbtn');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

// menu


$(".lllll").click(function(){
  $(".lllll").css("background-color", "");
$(this).css("background-color", "#18ABF8");
});
