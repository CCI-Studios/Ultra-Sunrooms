(function($){    
    $(function(){
    
        var max= $('.view-products-page .views-row').length;
      
        for(var i=1; i<=max; i++)
        {	     
	       $('.view-products-page .views-row-'+i+' .views-field-nothing .main-image').replaceImgtag();		
        }

        $('.view-banner .views-field-field-image-banner').replaceImgtag();

        var max1= $('.view-products-front-view .views-row').length;
        for(var i=1; i<=max1; i++)
        {   
            $('.view-products-front-view .views-row-'+i+' .views-field-field-main-image').replaceImgtag();
          
       }    
    });

    $.fn.replaceImgtag = function( action ) {
        
        var img = $(this).find('img');
        var imgSrc = img.attr('src');
        var div = $(this).find('div');
        img.remove();
        div.html('<div class="backbg"></div>');
        $(this).find('.backbg').css('background-image', 'url(' + imgSrc + ')');
    };


})(jQuery);
