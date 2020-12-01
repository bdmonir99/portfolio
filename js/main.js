// Text Typewritter Slider 
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


// Progress Bar
$(document).ready(function(){

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller({ barColor: '#1EBBA3', duration: 3000 });
    $('#bar5').barfiller({ barColor: '#1EBBA3', duration: 3000 });
    $('#bar6').barfiller({ barColor: '#1EBBA3', duration: 3000 });
    
});


// Content Filter 
$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.gallery a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide').addClass('p-0');
    else
      $(this).removeClass('hide').removeClass('p-0');
  });

});

$('.gallery a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.gallery a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});


// OWL Carousel


    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          navigation : true, // Show next and prev buttons
     
          slideSpeed : 300,
          paginationSpeed : 400,
     
          items : 1, 
          itemsDesktop : false,
          itemsDesktopSmall : false,
          itemsTablet: false,
          itemsMobile : false,
          autoplay:true,
          autoplayTimeout:3000,
          loop:true,
          autoplayHoverPause:true,
      });
     
    });


$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0){
    $(".header_fixed").addClass('header_bg');
    $(".my_logo").addClass('my_logo2');
    $(".my_nav_link").addClass('text-dark');
  } else{
    $(".header_fixed").removeClass('header_bg');
    $(".my_logo").removeClass('my_logo2');
    $(".my_nav_link").removeClass('text-dark');
  }
})

// Scrolling
$(document).ready(function(){
  $("a").on('click', function(event){
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 600, function(){
          window.location.hash = hash;
      });
    } //
  });
});


$(window).ready(function(){
  $('#bck_to_top').hide();
})
$(window).scroll(function(){
  if($(this).scrollTop() > 300){
    $('#bck_to_top').fadeIn();
  } else{
    $('#bck_to_top').fadeOut();
  }
})


$(document).ready(function(){
  $(".gallery_inner_content").on('click', function(event){
    $(".gallery_over_lay").hide();
  });
});