(function($){

	$(function(){
	var j = 1;
	var active = [];
	var min = [];
	var max =[];
	$('.item-list li > a').swipebox();
	var max1 = $('.view-products-page .views-row').length;

	$('.view-products-page .views-row').each(function(index){
		console.log($(this).find('.subtitle p').text());
		if($(this).find('.subtitle p').text() == " "){
			$(this).find('.subtitle p').hide();
		}
	});
	

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
