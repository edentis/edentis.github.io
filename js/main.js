(function ($) {
    if (!$) {
        return;
    }

    $(function () {
        if ($.fn.flexslider) {
            $('.flexslider').flexslider({
                animation: 'slide',
                start: function () {
                    $('body').removeClass('loading');
                }
            });
        }

        $('a[href^="#"]').on('click', function (event) {
            var targetId = $(this).attr('href');

            if (targetId === '#') {
                return;
            }

            var $target = $(targetId);

            if (!$target.length) {
                return;
            }

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $target.offset().top - 96
            }, 500);
        });
    });
})(window.jQuery);

(function () {
    var nav = document.getElementById('topnav');

    if (!nav) {
        return;
    }

    var button = nav.querySelector('.menu-toggle');
    var menu = nav.querySelector('.srt-menu');

    if (!button || !menu || !menu.children.length) {
        if (button) {
            button.style.display = 'none';
        }
        return;
    }

    button.onclick = function () {
        var isOpen = button.className.indexOf('toggled-on') !== -1;

        button.className = isOpen ? button.className.replace(' toggled-on', '') : button.className + ' toggled-on';
        menu.className = isOpen ? menu.className.replace(' toggled-on', '') : menu.className + ' toggled-on';
        button.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    };

    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (link) {
        link.addEventListener('click', function () {
            button.className = button.className.replace(' toggled-on', '');
            menu.className = menu.className.replace(' toggled-on', '');
            button.setAttribute('aria-expanded', 'false');
        });
    });
})();

window.initMap = function () {
    var mapNode = document.getElementById('map');

    if (!mapNode || !window.google) {
        return;
    }

    var myLatLng = {lat: 50.010793, lng: 36.229491};
    var map = new google.maps.Map(mapNode, {
        zoom: 17,
        center: myLatLng,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        label: 'ED'
    });

    mapNode.className += ' map-ready';
};
