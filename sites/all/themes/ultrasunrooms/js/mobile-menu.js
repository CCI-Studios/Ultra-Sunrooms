(function($){    
    $(function(){

        $('li.expanded > a').click(function(event)
        {       

              if($(window).width() < 750)
              {
                event.preventDefault();
              }
               
              $(this).addClass('activeexpand');
      });

    
      $('#block-block-8').click(function(){

        $('#block-system-main-menu').slideToggle('slow');
      });

    });


})(jQuery);
