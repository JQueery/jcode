/*Jcode jquery*/

$(document).ready(function(){

    //Add pulse animation
    setTimeout(function(){
        $('.panel').addClass('pulse');
    },1350);

    //Minimize visuals for panels on hover
    $('#menu li a').hover(function(){
        let anchor = $(this).attr('class');
        $(`#${anchor}`).toggleClass('fadeIn pulse minimize');
        $('.panel').not(anchor).toggleClass('minimize');
        $('#container').toggleClass('vignette');
    });

    //Make other panels opaque
    $('.panel').hover(function(){
        $('.panel').not(this).toggleClass('shadow');
    });

    //Flip panel on click
    $('.panel').click(function(){
        $('.overlay').toggle();
        let panel = $(this);
        panel.toggleClass('fadeIn pulse');
        setTimeout(function(){
            console.log(panel);
            panel.toggleClass('open-panel');
            panel.find('.front-panel').toggle();
        },0);
    });

});