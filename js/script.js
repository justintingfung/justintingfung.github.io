$(document).ready(function(){

    // Define easing type for all animation using plugin
    jQuery.easing.def = "easeInOutQuad";

    // Start screen animation
    $('#mylogoJ').animate({
        opacity: 1
    }, 400);
    $('#mylogoT').delay(1000).animate({
        opacity: 1
    }, 400);
    $('#mylogoF').delay(2000).animate({
        opacity: 1
    }, 400);
    $('#mylogoJ, #mylogoT, #mylogoF').delay(3000).animate({
        opacity: 0.6
    }, 400);
    
    // Show main content
    setTimeout(function(){
        $('html').css({
            'overflow': 'auto'
        });
        $('.main').animate({
            'opacity': '1'
        }, 3000);
    }, 3000);

    // Mouse move parallax
    $(document).on('mousemove', function(e){
        $('#parallax3').css({
            "transform": "translateX(" + (-1*(e.pageX / 80)) + "px) translateY(" + (-1*(e.pageY / 80)) + "px)"
        })
        $('#parallax2').css({
            "transform": "translateX(" + (-1*(e.pageX / 20)) + "px) translateY(" + (-1*(e.pageY / 20)) + "px)"
        })
        $('#parallax1').css({
            "transform": "translateX(" + (-1*(e.pageX / 5)) + "px) translateY(" + (-1*(e.pageY / 5)) + "px)"
        })              
    })

    // Smooth page jump on click(https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2)
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, {duration: 1500, easing: 'easeInOutQuad'});
        }
    });


    // Scroll event
    $(document).on('scroll', function(event){
        
        var curScrollTop = $(document).scrollTop();

        // For logo
        var getSectionTop = $('#sect2').position().top;       
        if (parseInt($('body').css('width')) > 1024){
            if (curScrollTop <= getSectionTop) {
                $('#mylogoJ, #mylogoT, #mylogoF').css({
                    "width": "100%",
                    "height": "100%"
                });
                $('#mylogoJ').css({
                    "left": (-185 + 185*(curScrollTop/(getSectionTop)))
                });
                $('#mylogoF').css({
                    "left": (185 - 185*(curScrollTop/(getSectionTop)))
                });
                $('.start-animation .logo-box').css({
                    "transform": "translateY(" + (0.62*curScrollTop) + "px)",
                    "width": (180 - 100*(curScrollTop/800)) + "px",
                    "height": (180 - 100*(curScrollTop/800)) + "px",
                    "cursor": "pointer"
                });
            } else {
                $('.start-animation .logo-box').css({
                    "top": "translateY(" + curScrollTop + "px)",
                });
            }
        }
    });

    // About Me box hover
    $('.propic').mouseover(function(){
        $('.fa-user').animate({
            'font-size': '300px',
        }, 250);
    });
    $('.propic').mouseleave(function(){
        $('.fa-user').animate({
            'font-size': '250px'
        }, 250);
    });
    $('#detail1').mouseover(function(){
        $('#detail1 .fainname').animate({
            'font-size': '300px'
        }, 250);
    });
    $('#detail1').mouseleave(function(){
        $('#detail1 .fainname').animate({
            'font-size': '250px'
        }, 250);
    });
    $('#detail2').mouseover(function(){
        $('.fa-commenting').animate({
            'font-size': '300px'
        }, 250);
    });
    $('#detail2').mouseleave(function(){
        $('.fa-commenting').animate({
            'font-size': '250px'
        }, 250);
    });
    $('#detail3').mouseover(function(){
        $('.fa-heart').animate({
            'font-size': '300px'
        }, 250);
    });
    $('#detail3').mouseleave(function(){
        $('.fa-heart').animate({
            'font-size': '250px'
        }, 250);
    });
    $('#detail4').mouseover(function(){
        $('.fa-laptop').animate({
            'font-size': '300px'
        }, 250);
    });
    $('#detail4').mouseleave(function(){
        $('.fa-laptop').animate({
            'font-size': '250px'
        }, 250);
    });

    // About me box click
    $('.propic').click(function(){
        $('#mypic').animate({
            'top': '0'
        }, {duration: 1200, easing: 'easeOutBounce'});
        $('.propic').css('cursor', 'default');
    });
    $('#detail1').click(function(){
        $('#paper1').animate({
            'top': '0'
        }, {duration: 1200, easing: 'easeOutExpo'});
        $('#detail1').css('cursor', 'default');
    });
    $('#detail2').click(function(){
        $('#paper2').animate({
            'top': '0'
        }, {duration: 1200, easing: 'easeOutExpo'});
        $('#detail2').css('cursor', 'default');
    });
    $('#detail3').click(function(){
        $('#paper3').animate({
            'left': '0'
        }, {duration: 1200, easing: 'easeOutExpo'});
        $('#detail3').css('cursor', 'default');
    });
    $('#detail4').click(function(){
        $('#paper4').animate({
            'left': '0'
        }, {duration: 1200, easing: 'easeOutExpo'});
        $('#detail4').css('cursor', 'default');
    });

    // Portfolio slide tilt
    $(document).on('mousemove', function(e){
        if (parseInt($('body').css('width')) > 1024){
            var middleLineV = Number($('#sect3').css('width').replace('px', '')) / 2;
            var middleLineH = Number($('body').css('height').replace('px', '')) * (2.5/4);
            if (e.pageX > middleLineV) {
                if (e.pageY > middleLineH) {
                    $('.slidewrap a, .portfolio .title, .deco-div').css({
                        "transform": "rotateX(" + (-1*(e.pageY - middleLineH)/20) + "deg) rotateY(" + ((e.pageX - middleLineV)/20) + "deg)"
                    });
                    $('.portfolio .logo-box').css({
                        "transform": "rotateX(" + (-1*(e.pageY - middleLineH)/20) + "deg) rotateY(" + ((e.pageX - middleLineV)/20) + "deg) translateX(-50%)"
                    });
                } else {
                    $('.slidewrap a, .portfolio .title, .deco-div').css({
                        "transform": "rotateX(" + ((middleLineH - e.pageY)/20) + "deg) rotateY(" + ((e.pageX - middleLineV)/20) + "deg)"
                    });
                    $('.portfolio .logo-box').css({
                        "transform": "rotateX(" + ((middleLineH - e.pageY)/20) + "deg) rotateY(" + ((e.pageX - middleLineV)/20) + "deg) translateX(-50%)"
                    });
                } 
            } else {
                if (e.pageY > middleLineH) {
                    $('.slidewrap a, .portfolio .title, .deco-div').css({
                        "transform": "rotateX(" + (-1*(e.pageY - middleLineH)/20) + "deg) rotateY(" + (-1*(middleLineV - e.pageX)/20) + "deg)"
                    });
                    $('.portfolio .logo-box').css({
                        "transform": "rotateX(" + (-1*(e.pageY - middleLineH)/20) + "deg) rotateY(" + (-1*(middleLineV - e.pageX)/20) + "deg) translateX(-50%)"
                    });
                } else {
                    $('.slidewrap a, .portfolio .title, .deco-div').css({
                        "transform": "rotateX(" + ((middleLineH - e.pageY)/20) + "deg) rotateY(" + (-1*(middleLineV - e.pageX)/20) + "deg)"
                    });
                    $('.portfolio .logo-box').css({
                        "transform": "rotateX(" + ((middleLineH - e.pageY)/20) + "deg) rotateY(" + (-1*(middleLineV - e.pageX)/20) + "deg) translateX(-50%)"
                    });
                } 
            } 
        }
    })

    // Contact envelop
    $('.contact .fa-envelope').mouseover(function(){
        $('.contact .fa-envelope').animate({
            'font-size': '88px',
            'transform': 'translateY(-50%) translateX(-50%)'
        }, {duration: 300, easing: 'easeOutBounce'});
    });
    $('.contact .fa-envelope').mouseleave(function(){
        $('.contact .fa-envelope').animate({
            'font-size': '64px'
        }, {duration: 300, easing: 'easeOutBounce'});
    });

    // Nav up down
    function pageJump (input) {
        $('html, body').stop().animate({
            scrollTop: $(input).offset().top
        }, {duration: 1500, easing: 'easeInOutQuad'});
    }

    $('.up').on('click', function(){
        switch ($(document).scrollTop()) {
            case $('#sect2').position().top:
                pageJump('#sect1');
                break;
            case $('#sect3').position().top:
                pageJump('#sect2');
                break;
            case $('#sect4').position().top:
                pageJump('#sect3');
                break;
        };
    })

    $('.down').on('click', function(){
        switch ($(document).scrollTop()) {
            case $('#sect1').position().top:
                pageJump('#sect2');
                break;
            case $('#sect2').position().top:
                pageJump('#sect3');
                break;
            case $('#sect3').position().top:
                pageJump('#sect4');
                break;
        };
    })
    
    

})
