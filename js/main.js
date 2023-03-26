$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        items:2,
        navigationText:["prev","next"],
        responsive: {
            0: {
              items: 1,
              nav: false,
              center: true,
              dots: true  
            },
            680: {
              items: 1,
              nav: false,
              loop: true
            },
            1000: {
              items: 2,
              nav: true
            }
        }
    });
   
  });

  $(document).ready(function() {
 
    $("#tablaPremios").owlCarousel({
        items:1,
        responsive: {
            0: {
              items: 1,
              nav: false,
              center: true,
              dots: true  
            },
            680: {
              items: 1,
              nav: false,
              loop: true
            },
            1000: {
              items: 1,
              nav: true
            }
          }
    });
   
  });

  $(document).ready(function() {
 
    $("#premiosAcomulativos").owlCarousel({
        items:2,
        responsive: {
            0: {
              items: 1,
              nav: false,
              center: true,
              dots: true  
            },
            680: {
              items: 1,
              nav: false,
              loop: true
            },
            1000: {
              items: 1,
              nav: true
            }
          }
    });
   
  });


  $(document).ready(function(){
    let $owl = $('.owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 3,
      responsive: {
        0: {
          items: 1,
          nav: false,
          center: true,
          dots: true  
        },
        680: {
          items: 2,
          nav: false,
          loop: true
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
    
    
    $(document).on('click', '.owl-item>div', function() {
      let $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });
  })