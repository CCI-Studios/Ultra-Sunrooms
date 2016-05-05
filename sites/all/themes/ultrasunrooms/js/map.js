(function($) {
    $(function(){
       

        if($("#full-width").length > 0)
        {
            createMap();
        }

    });

    function createMap()
    {
        var location = new google.maps.LatLng(43.2195367,-81.8676802);
        var mapOptions = {
            zoom: 17,
            center: location,
            scrollwheel: false
        }


        var map = new google.maps.Map($("#block-block-5").get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: "Ultra Sunrooms"
        });

       marker.setMap(map);
    }
}(jQuery));