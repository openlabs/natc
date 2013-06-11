$(document).ready(function(){
    $('body').addClass('js');
  
      var $menu = $('#menu'),
        $menulink = $('.menu-link'),
        $wrap = $('.wrapper');
      
      $menulink.click(function() {
        $menulink.toggleClass('active');
        $wrap.toggleClass('active');
        return false;
        });
    

    $(function() {

        // grab the initial top offset of the navigation 
        var sticky_navigation_offset_top = $('.content').offset().top;
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var sticky_navigation = function(){
            var scroll_top = $(window).scrollTop(); // our current vertical position from the top
            // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
            if (scroll_top > sticky_navigation_offset_top) {     
            	$('.nav-right').css('margin-left','100px');
            	$('.nav-left').css('margin-right','100px');            
                $('.top-logo').css({'display':'inline-block','transform':'scale(0)'});
                $('.top-logo').fadeIn();
            	$('.top-logo').css({'transform':'scale(1)'});
            }else {
            	$('.top-logo').fadeOut();
            	$('.top-logo').css({'transform':'scale(0)'});
            	$('.nav-right').css('margin-left',0);
            	$('.nav-left').css('margin-right',0);
            }
        };
        
        if($(window).width()>979) {
            // run our function on load
           sticky_navigation();
            
            // and run it again every time you scroll
            $(window).on('resize scroll', function() {
                 sticky_navigation();
            }).resize();
        }
        
    });

});