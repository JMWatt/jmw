$(document).ready(function () {

    $('.slide').each(function () {
        $(this).css({
            'background-image': "url(" + $(this).attr('img') + ")",
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': 'center'
        })
    });

    $('.slide').click(function () {

        if ($(this).attr('id') == 'slideshow-left') {
            nextSlide('left');
        } else {
            nextSlide('right');
        }
        
    });

    var nextSlide = function (direction) {
        duration = 1000
        left = $('#slideshow-left');
        center = $('#slideshow-center');
        right = $('#slideshow-right');

        offLeftPos =    { 'height': '40%', 'width': '30%', 'top': '30%', 'left': '-30%', 'opacity': 0 }
        leftPos =       { 'height': '60%', 'width': '40%', 'top': '20%', 'left': '0%',   'opacity': 0.7 }
        centerPos =     { 'height': '80%', 'width': '60%', 'top': '10%', 'left': '20%',  'opacity': 1 }
        rightPos =      { 'height': '60%', 'width': '40%', 'top': '20%', 'left': '60%',  'opacity': 0.7 }
        offRightPos =   { 'height': '40%', 'width': '30%', 'top': '30%', 'left': '100%', 'opacity': 0 }

        left.animate(direction == 'right' ? offLeftPos : centerPos, 
                     duration, 
                     function () {
                        if (direction == 'right') {
                            left.css('left', '100%');
                            left.appendTo('#slideshow-container');
                        }
        });

        center.animate(direction == 'right' ? leftPos : rightPos, duration);

        right.animate(direction == 'right' ? centerPos : offRightPos, 
                      duration, 
                      function () {
                            if (direction == 'left') {
                                right.css('left', '100%');
                                // right.appendTo('#slideshow-container');
                                $('#slideshow-container').children(':eq(2)').after(right);
                            }
        });


        if (direction == 'right') {
            right.next().animate(rightPos, duration);

            left.removeAttr('id');
            center.attr('id', 'slideshow-left');
            right.attr('id', 'slideshow-center');
            right.next().attr('id', 'slideshow-right');
        } else {
            $('#slideshow-container div').last().animate(leftPos, duration);

            $('#slideshow-container div').last().attr('id', 'slideshow-left')
            left.attr('id','slideshow-center');
            center.attr('id', 'slideshow-right');
            right.removeAttr('id');
        }

        // function () {
        //     center.appendTo('#container');
        //     // center.attr('id', 'slideshow-left');
        // }

    };

});




// var moving = false;

// $('body').keydown(function() {
    
//     if (!moving) {
//         moving = true;
//         var target = $('#target');
    
//         target.removeAttr('id');
//         fadeOut = false;
//         target.fadeOut({queue: false, duration: 500});
//         target.animate({
//             left: '-50%'
//         }, 'slow', function() {
//             target.css({'left': '150%', 'display': 'none'});
//             target.removeAttr('opacity');
//             $(this).appendTo('#container');
//         });

//         target.next().attr('id', 'target');
//         fadeIn = false;
//         target.next().fadeIn({queue: false, duration: 700});
//         target.next().animate({
//             left: '50%'
//         }, 700, function() {
//             moving = false;
//         });
//     }
// });

// $('.slide').click(function() {

//     $(this).fadeOut({queue: false, duration: 500});
//     $(this).animate({
//         left: '-50%'
//     }, 'slow', function() {
//         $(this).css({'left': '150%', 'display': 'none'});
//         $(this).appendTo('#container');
//     });

//     $(this).next().fadeIn({queue: false, duration: 1000});
//     $(this).next().animate({
//         left: '50%'
//     }, 'slow');
// });