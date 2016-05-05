(function($) {
	var active = 0;
	var min = 0;
	var max = 0;
	var timer;

	$(function()
	{
		init();	
		
	});

	function init()
	{
		
		$(".prev").click(clickPrevious);
		$(".next").click(clickNext);
		$(".view-gallery-images .views-row").click(clickThumbnail);

		$(".view-gallery-inner-page .views-row").click(stop);
		max = rows().length;

		var $first = rows().eq(0).clone();
		var $second = rows().eq(1).clone();
		var $third = rows().eq(2).clone();
		var $fourth = rows().eq(3).clone();
		var $fifth = rows().eq(4).clone();
		var $sixth = rows().eq(5).clone();
		var $seventh = rows().eq(6).clone();

		container().append($first);
		container().append($second);
		container().append($third);
		container().append($fourth);
		container().append($fifth);
		container().append($sixth);
		container().append($seventh);
		

		// hideArrows();
		setTimeout(layout, 50);
		$(window).resize(layout);

		start();
		
	}

	function clickThumbnail()
	{
		var i = $(this).index();
		gotoIndex(i);
		stop();
	}
	function createIndicators()
	{
		var $ul = $("<ul class='indicators' />");
		rows().each(function(i){
			if (i < max)
			{
				var $li = $("<li>"+i+"</li>");
				$li.click(clickIndicator);
				$ul.append($li);
			}
		});
		$ul.find(":first-child").addClass("active");
		$(".view-gallery-inner-page").append($ul);
	}

	function start()
	{
		timer = setInterval(timerNext, 8000);
	}

	function container()
	{
		return $(".view-gallery-inner-page .view-content");
	}
	function rows()
	{
		return container().find(".views-row");
	}
	function indicators()
	{
		return $(".view-gallery-inner-page .indicators li");
	}

	function layout()
	{
		var numRows = rows().length;
		var containerWidth = numRows * rowWidth();
		var width = 1/numRows*100;
		container().width(containerWidth+"%");
		rows().width(width+"%");
	}

	function moveContainer()
	{
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},1500);
		setActiveIndicator(active);
	}
	function jumpToEnd()
	{
		var active = rows().length-rowsPerPage();
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function jumpToBeginning()
	{
		var active = min;
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function rowWidth()
	{
		return 100/rowsPerPage();
	}
	function rowsPerPage()
	{
		if (isMobile())
		{
			return 1;
		}
		else if (isMobilePotrait())
		{
			return 2;
		}
		else if (isPotrait())
		{
			return 3;
		}
		else if (isTablet())
		{
			return 4;
		}
		else if (isWide1())
		{
			return 5;
		}
		else if (isWide2())
		{
			return 6;
		}
		else if (isWide3())
		{
			return 7;
		}
		
		return 7;
	}

	function isMobile()
	{
		return $(window).width() < 540;
	}
	function isMobilePotrait()
	{
		return $(window).width() < 750;
	}

	function isPotrait()
	{
		return $(window).width() < 960;
	}
	
	function isTablet()
	{
		return $(window).width() < 1160;
	}
	function isWide1()
	{
		return $(window).width() < 1420;
	}


	function isWide2()
	{
		return $(window).width() < 1620;
	}

	function isWide3()
	{
		return $(window).width() < 1720;
	}

	function previous()
	{
		active--;
		if (active < min)
		{
			jumpToEnd();
			active = max-1;
		}
		moveContainer();
	}

	function next()
	{
		active++;
		if (active > max)
		{
			jumpToBeginning();
			active = min+1;
		}
		moveContainer();
	}

	function gotoIndex(i)
	{
		active = i;
		moveContainer();
	}

	function clickPrevious()
	{
		previous();
		stop();
		return false;
	}

	function clickNext()
	{
		next();
		stop();
		return false;
	}

	function clickIndicator()
	{
		var i = $(this).index();
		setActiveIndicator(i);
		gotoIndex(i);
		stop();
	}

	function setActiveIndicator(i)
	{
		if (i >= max)
		{
			i = 0;
		}
		indicators().removeClass("active").eq(i).addClass("active");
	}

	function stop()
	{
		clearInterval(timer);
	}

	function timerNext()
	{
		next();
		layout();
	}

	 function minIndex()
    {
        return 0;
    }
    function maxIndex()
    {
        return rows().length - rowsPerPage();
    }

	 function hasPrevious()
    {
        if (active - 1 < minIndex())
            return false;
        return true;
    }
    function hasNext()
    {
        if (active + 1 > maxIndex())
            return false;
        return true;
    }
    function hideArrows()
    {
    	var $btnPrevious = $(".view-gallery-inner-page .prev");
    	var $btnNext = $(".view-gallery-inner-page .next");

        if (hasPrevious())
        {
            $btnPrevious.show();
        }
        else
        {
            $btnPrevious.hide();
        }

        if (hasNext())
        {
            $btnNext.show();
        }
        else
        {
            $btnNext.hide();
        }
    }




}(jQuery));
