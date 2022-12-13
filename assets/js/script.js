$(document).ready(function(){
    // $(document).on('mouseover', '.sub-categories > ul > li > a', function() {
    //     $(this).addClass('animate__animated animate__shakeY');
    // });

    // $(document).on('mouseout', '.sub-categories > ul > li > a', function() {
    //     $(this).removeClass('animate__animated animate__shakeY');
    // });

    $(document).on('click', '.categories', function() {
        let currentState = $('.sub-categories').data('current-state');
        // console.log(currentState);
        if (currentState == 'show') {
            $('.sub-categories').hide();
            $('.sub-categories').data('current-state', 'hide');
            $(this).css('border-bottom-left-radius', '10px');
            $(this).css('border-bottom-right-radius', '10px');
        } else {
            $('.sub-categories').show();
            $('.sub-categories').data('current-state', 'show');
            $(this).css('border-bottom-left-radius', '0px');
            $(this).css('border-bottom-right-radius', '0px');
        }
    });

   
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

});