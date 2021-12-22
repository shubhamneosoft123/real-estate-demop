
// -------card slider Buy property------
$('.slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
})
// -------card slider services property------
$('.row').owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
})

$(document).ready(function(){
    $(window).scroll(function(){
       if( $(this).scrollTop()>1000){
        $('.gotop').fadeIn();
       }else{
            $('.gotop').fadeOut();;
        }
       })


       $('.gotop').click(function(){
           $('html,body').animate({scrollTop:0},2000)
       });

    })

    
