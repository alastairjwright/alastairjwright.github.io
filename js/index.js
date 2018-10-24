var snacksheep = snacksheep || {};

(function($) {
    $(function() {
        snacksheep.global = {

            options: {
                yesgif: 0,
                nogif: 0,
            },

            init: function(){
                snacksheep.global.listeners();
            },
    
            listeners: function() {

                $('.vote-button').click(function(e) {
                    let vote = $(this).data('vote');
                    snacksheep.private.showGif(vote);
                });

                $('.gifs img').click(snacksheep.private.cycle);
            },
        },
        
        snacksheep.private = {

            showGif: function(vote){
                if(vote){
                    $('.gifs-yes img').eq(snacksheep.global.options.yesgif).addClass('show');
                    snacksheep.global.options.yesgif = snacksheep.global.options.yesgif + 1;
                    if(!$('.gifs-yes img.show').length){
                        snacksheep.global.options.yesgif = 0;
                        $('.gifs-yes img').eq(snacksheep.global.options.yesgif).addClass('show');
                        snacksheep.global.options.yesgif = snacksheep.global.options.yesgif + 1;
                    }
                } else {
                    $('.gifs-no img').eq(snacksheep.global.options.nogif).addClass('show');
                    snacksheep.global.options.nogif = snacksheep.global.options.nogif + 1;
                    if(!$('.gifs-no img.show').length){
                        snacksheep.global.options.nogif = 0;
                        $('.gifs-no img').eq(snacksheep.global.options.nogif).addClass('show');
                        snacksheep.global.options.nogif = snacksheep.global.options.nogif + 1;
                    }
                }
            },

            cycle: function(){

                $('.gifs .show').removeClass('show');

                let count = $('.product-container img').length;
                $('.product-container .current').removeClass('current').next().addClass('current');

                let currentIndex = $('.product-container .current').index();

                if(currentIndex < 0){
                    $('.product-container img').eq(0).addClass('current');
                }

                let color = $('.product-container .current').data('color');
                $('body').css('background', color);

                let head = $('.product-container .current').data('head');
                let subhead = $('.product-container .current').data('subhead');

                $('.product-name h1').text(head);
                $('.product-name h2').text(subhead);

                let votes = Math.floor(Math.random() * 500);
                $('.votes h1').text(votes);

            }
        }
    
        $(document).ready(function() {
            snacksheep.global.init();
        });
    });
})(jQuery);