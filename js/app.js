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

      $(".my-affix").css("position", "relative");
      $(window).on('resize scroll', function() {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > 300){
            $("section.index-more").fadeOut();
        }
        else{
            $("section.index-more").fadeIn();
        }
        var sticky_offset_top = 0;
        var sticky_offset_bottom = 180;
        sticky_offset_bottom = $(document).height() - sticky_offset_bottom - $(".my-affix").height();
        console.log(sticky_offset_bottom);
        if (scroll_top > sticky_offset_top && scroll_top < sticky_offset_bottom ) {
            $(".my-affix").animate({top:scroll_top + "px"},{duration:500,queue:false});
        }
        else if (scroll_top > sticky_offset_top && scroll_top > sticky_offset_bottom ) {
            $(".my-affix").animate({top:sticky_offset_bottom + "px"},{duration:500,queue:false});
        }
        else{
            $(".my-affix").animate({top:sticky_offset_top + "px"},{duration:500,queue:false});
        }
      }).resize();
});