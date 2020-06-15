var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("maps"), {
        center: { lat: 19.576712, lng: -99.203147 },
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Exel Mexicana',
        icon: '../assets/img/map-marker.svg'
      });
}