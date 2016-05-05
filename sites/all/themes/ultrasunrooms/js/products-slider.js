(function($){

$(function(){
var j=1;
	var active=[];
	var min = [];
	var max =[];
$('.item-list li > a').swipebox();
var max1= $('.view-products-page .views-row').length;

       for(j=1;j<=max1;j++)
       {
       		active[j]=0;
			min[j]=0;
			max[j]=0;
			   
			init(j);	
       }

    function init(j)
	{	
		$('.view-products-page .views-row-'+j+' .side-text .subtitle1').addClass('active');
        $('.view-products-page .views-row-'+j+' .side-text .subbody1').addClass('visiblebody');

        if($('.view-products-page .views-row-'+j+' .side-text .subtitle p').text()==" ")
        {
        	 $('.view-products-page .views-row-'+j+' .side-text .subtitle').css('display','none');
        }

		$('.view-products-page .views-row-'+j+' .side-text .subtitle').click(function()
		{
         	if($(this).hasClass('subtitle1'))
            {   
                $('.view-products-page .views-row-'+j+' .side-text .subtitle2').removeClass('active');
                $(this).addClass('active');
                $('.view-products-page .views-row-'+j+' .side-text .subbody2').removeClass('visiblebody');
                $('.view-products-page .views-row-'+j+' .side-text .subbody1').addClass('visiblebody');
            }
            else
            {     
                $('.view-products-page .views-row-'+j+' .side-text .subtitle1').removeClass('active');
                $('.view-products-page .views-row-'+j+' .side-text .subtitle2').addClass('active');
                $('.view-products-page .views-row-'+j+' .side-text .subbody1').removeClass('visiblebody');
                $('.view-products-page .views-row-'+j+' .side-text .subbody2').addClass('visiblebody');
            }
      	});
	}
	
	$('.item-list ul').slick({
		dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
   {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
  
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]});

});

})(jQuery);