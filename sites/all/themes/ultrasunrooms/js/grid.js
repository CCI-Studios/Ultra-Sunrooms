(function($){
	
	$(function()
	{	
		var row = $('.page-products-page .view-products-page .views-row-1');
		var div = row.clone();
		row.addClass('original');
		div.addClass('duplicate');
		$(div).insertAfter(row);
		
	});

}(jQuery));