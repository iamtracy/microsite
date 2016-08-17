  var card = $('.card-block');
  console.log(card)
  card.each(function(){    
    var t = $(this).height();
      if (t > 100) {
        card.addClass('card-max');
    }   
  }).click(function (e) {
      e.preventDefault();
      $(this).toggleClass("card-max");
      $(this).find('i').toggleClass('fa-minus-square-o fa-plus-square-o');
    });
  $('[data-smooth="smooth"]').on('click', function(event) {
    var target;
    var theWindow = $(window).width();
    target = this.hash;
    event.preventDefault();
    var navOffset;
    if(theWindow > 420){
      navOffset = 90
    }else{
      navOffset = 126;
    } 
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 650, function() {
      return window.history.pushState(null, null, target);
    });
  });
  $(window).scroll(function(){
    var navHeight = $('nav').height();
    var tMobile = $('.t-mobile-bar').height();
    var navTmobile = navHeight + tMobile;
    var bannerHeight = $('.banner').height();
    var navRegButton = $('#RegLinkNav');
    var fixedLogo = $('#fixedLogo');
    if ($(window).scrollTop() >= bannerHeight - navTmobile) {
        if ($(this).width() < 480) {
          navRegButton.show();
        } else {
          navRegButton.show(450, 'swing');
        } 
      }
    else{
        if ($(window).width() < 480) {
          navRegButton.hide();
        } else {
          navRegButton.hide(450);
        }
    }
  }); 