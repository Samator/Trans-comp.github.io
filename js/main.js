$(document).ready(function(){
    $('.recommendation__block').slick({
        slidesToShow: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
              },
            ]
    });  
    
    $('.warranty__nav-item').on('click', function(){
        $('.warranty__nav-item__img').removeClass('nav-img-active')
        $(this).children('.warranty__nav-item__img').addClass('nav-img-active')
        if($(this).attr('id') == "tab-1"){
            $('.warranty__tab-1').css('display', 'flex')
            $('.warranty__tab-2').css('display', 'none')
            $('.warranty__tab-3').css('display', 'none')
            $('.warranty__tab-4').css('display', 'none')
            $('.warranty__tab-5').css('display', 'none')
        }else if($(this).attr('id') == "tab-2"){
            $('.warranty__tab-1').css('display', 'none')
            $('.warranty__tab-2').css('display', 'flex')
            $('.warranty__tab-3').css('display', 'none')
            $('.warranty__tab-4').css('display', 'none')
            $('.warranty__tab-5').css('display', 'none')
        }else if($(this).attr('id') == "tab-3"){
            $('.warranty__tab-1').css('display', 'none')
            $('.warranty__tab-2').css('display', 'none')
            $('.warranty__tab-3').css('display', 'flex')
            $('.warranty__tab-4').css('display', 'none')
            $('.warranty__tab-5').css('display', 'none')
        }else if($(this).attr('id') == "tab-4"){
            $('.warranty__tab-1').css('display', 'none')
            $('.warranty__tab-2').css('display', 'none')
            $('.warranty__tab-3').css('display', 'none')
            $('.warranty__tab-4').css('display', 'flex')
            $('.warranty__tab-5').css('display', 'none')
        }else if($(this).attr('id') == "tab-5"){
            $('.warranty__tab-1').css('display', 'none')
            $('.warranty__tab-2').css('display', 'none')
            $('.warranty__tab-3').css('display', 'none')
            $('.warranty__tab-4').css('display', 'none')
            $('.warranty__tab-5').css('display', 'flex')
        }
    })
  });


