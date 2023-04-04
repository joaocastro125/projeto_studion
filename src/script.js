$(document).ready(function(){
    
        const slickOptions={
            dots:false,
            autoplay:true,
            prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
            nextArrow:'<button type="button" class="slick-prev slider__next-arrow">Previous</button>'


        };
     $('.slider').slick(slickOptions)
    });
