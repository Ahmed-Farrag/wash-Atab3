//img carousel
$('.owl-carousel').owlCarousel({
    loop:true,
  
    rtl: true,
    margin:10,
   
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});


//button
$(document).ready(function () {
	$('.to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 2000)
	});
	$('a').click(function () {
		let aHref = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(aHref).offset().top
		}, 1000)
	});
	AOS.init();
	$('.parallax').parallax({
		imageSrc: 'img/bm.jpg'
	});
});


//scroll down & nicescroll
$(function () {
    $('html, .orders .row').niceScroll({
        cursorcolor: '#FF4445',
        cursorborder: '5px solid #FF4445'
    });

    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.touer').offset().top
        }, 1000);
    })
});

//uploud imgs
$(document).ready(function () {
    $(document).on('change', '.file1 :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.file1 :file').on('fileselect', function (event, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }

    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-upload1').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp1").change(function () {
        readURL(this);
    });
});



$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 100,
    gutter: 13,
    originLeft: false,

  });


  


