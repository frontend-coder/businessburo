$(document).ready(function() {


 //  var $icon = $(".hamburger");
 //  var API = $('#my-menu').data( "mmenu" );
 //  $icon.on( "click", function() {
 //   API.open();
 // });

 //  API.bind( "open:finish", function() {
 //    $icon.addClass( "is-active" );
 //  });

 //  API.bind( "close:finish", function() {
 //   $icon.removeClass( "is-active" );
 // });

  $(".top-menu ul li a, #my-menu ul li a, a.roket-link, a.pfone-man-rocets").mPageScroll2id({
    layout                 : "auto",
    offset                 : ".top-line",
    scrollEasing           : "linear",
    highlightByNextTarget  : true,
    keepHighlightUntilNext : true,
    autoScrollSpeed        : true,
    scrollSpeed            : 1000,
    highlightSelector: ".top-menu ul li a"
  });


  $('input').iCheck({checkboxClass: 'icheckbox_minimal-aero',radioClass: 'iradio_minimal-aero',increaseArea: '10%' });

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass    : 'mfp-fade',
  removalDelay : 400,
  type         : 'inline',
    fixedContentPos : false,
  fixedBgPos      : false,
  tClose: 'Закрыть (Esc)'
});
/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
});


$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');


// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".button-top", function() {
  $("html, body").animate({scrollTop: 0}, "slow");
});


$(window).scroll(function() {
  if ($(this).scrollTop() > $(this).height()) {
   $(".button-top").addClass("active");
 } else
 {    $(".button-top").removeClass("active");
}
});


var swiper = new Swiper('#swiper_three', {
   parallax: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  paginationClickable : true,
  spaceBetween        : 40,
  keyboardControl     : true,
  slidesPerView       : 1,
  pagination          : {
  el                  : '.swiper-pagination',
  clickable           : true,
  renderBullet        : function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });


var swiper = new Swiper('#firstswiper', {
slidesPerView       : 1,
loop                : true ,
centeredSlides      : true,
  keyboardControl     : true,
keyboardControl     : true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
roundLengths        : true,
mousewheelControl   : true,
paginationClickable : true,
spaceBetween        : 20,
  pagination          : {
  el                  : '.swiper-pagination',
  clickable           : true,
  }

});

// // галерея всплывающая на слайдерее
$(".adwise-box-item").each(function(e){
  var th = $(this);
  th.attr("href", "#adwise-box-image-" + e)
  .find(".adwise-box-popup")
  .attr("id", "adwise-box-image-" + e);
});
$(".adwise-box-item").magnificPopup({
  mainClass    : 'mfp-fade',
  removalDelay:300,
  fixedContentPos : false,
   tClose: 'Закрыть (Esc)',
  fixedBgPos      : false,
  type:'inline',
});

var swiper = new Swiper('#firstswiper00', {
slidesPerView       : 5,
 slidesPerGroup: 5,
loop                : true ,
 loopFillGroupWithBlank: true,
//centeredSlides      : true,
  keyboardControl     : true,
keyboardControl     : true,
      //   autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
roundLengths        : true,
mousewheelControl   : true,
paginationClickable : true,
spaceBetween        : 20,
  pagination          : {
  el                  : '.swiper-pagination',
  clickable           : true,
  }

});


// // галерея всплывающая на слайдерее
$(".portfolio-item").each(function(e){
  var th = $(this);
  th.attr("href", "#popup-box-image-" + e)
  .find(".popup-box-popup")
  .attr("id", "popup-box-image-" + e);
});
$(".portfolio-item").magnificPopup({
  mainClass    : 'mfp-fade',
  removalDelay:300,
  fixedContentPos : false,
   tClose: 'Закрыть (Esc)',
  fixedBgPos      : false,
  type:'inline',
});


// как заставить скроллить картику в контейнере
var xH
$('.modal_form_picture').hover(
  function () {
    xH = $(this).children('img').css('height');
    xH = parseInt(xH);
    xH = xH - 600;
    xH = '-' + xH + 'px';
    $(this).children('img').css({top: xH}, 1000000);
  }, function () {
    $(this).children('img').css({top: 0}, 1000000);
  });

var swiper = new Swiper('#swiper-avtor', {
  pagination          : {
  el                  : '.swiper-pagination',
  clickable           : true,
  },
loop                : true,
keyboardControl     : true,
roundLengths        : true,
paginationClickable : true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

//Аякс отправка форм Документация: http://api.jquery.com/jquery.ajax/
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
   type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
});