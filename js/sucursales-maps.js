var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("sucursales-maps"), {
        center: { lat: 19.576712, lng: -99.203147 },
        zoom: 5
    });
        addMarker('Exel Mexicana | Oficina Central', 19.576712, -99.203147);
        addMarker('Exel Mexicana | Suc. Guadalajara', 20.6487195, -103.3350143);
        addMarker('Exel Mexicana | Suc. Mérida', 20.9662173, -89.640838);
        addMarker('Exel Mexicana | Suc. Puebla', 19.0684492, -98.2004235);
        addMarker('Exel Mexicana | Suc San Luís Potosí', 22.1692564, -100.9725704);
    function addMarker(title, lat, lon) {
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lon },
            title: title,
            icon: '../assets/img/map-marker.svg',
            animation: google.maps.Animation.DROP
        });
        marker.setMap(map);
    }
}

function zoomMarker(coords, title) {
    map = new google.maps.Map(document.getElementById("sucursales-maps"), {
        center: coords,
        zoom: 15
    });
    var zoomMark = new google.maps.Marker({
        position: coords,
        title: title,
        icon: '../assets/img/map-marker.svg',
        animation: google.maps.Animation.BOUNCE
    });
    zoomMark.setMap(map);
}