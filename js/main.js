$( document ).ready( function() {

  if ( $( '.products' ).length ) {
    $('.products').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });   
  }

    if ( $( '.collections' ).length ) {
      $('.collections').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }

    if ( $( '.books' ).length ) {
      $('.books').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }

    $(".books").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var div = $(".books-indicator").children("div:eq("+i+")");
      $(".books-indicator").children(".active").removeClass();
      div.addClass("active");
  });

  if ( $( '.portfolios' ).length ) {
    $('.portfolios').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $(".portfolios").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0);
      var div = $(".portfoio-indicator").children("div:eq("+i+")");
      $(".portfoio-indicator").children(".active").removeClass();
      div.addClass("active");
  });
  }

});