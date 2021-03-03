$('#contact-facebook').hide();
    $('#contact-youtube').hide();
    $('#contact-instagram').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-facebookClick').removeClass("active");
    $('#contact-youtubeClick').removeClass("active");
    $('#contact-instagramClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");

// contact page toogles
$("#contact-mapClick").click(function () {
    $('#contact-facebook').hide();
    $('#contact-youtube').hide();
    $('#contact-instagram').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-facebookClick').removeClass("active");
    $('#contactyoutubeClick').removeClass("active");
    $('#contact-instagramClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");
});
$("#contact-facebookClick").click(function () {
    $('#contact-map').hide();
    $('#contact-youtube').hide();
    $('#contact-instagram').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-youtubeClick').removeClass("active");
    $('#contact-instagramClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-facebook').show();
    $("#contact-facebookClick").addClass("active");
});
$("#contact-youtubeClick").click(function () {
    $('#contact-map').hide();
    $('#contact-facebook').hide();
    $('#contact-instagram').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-facebookClick').removeClass("active");
    $('#contact-instagramClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-youtube').show();
    $("#contact-youtubeClick").addClass("active");
});
$("#contact-instagramClick").click(function () {
    $('#contact-map').hide();
    $('#contact-facebook').hide();
    $('#contact-youtube').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-facebookClick').removeClass("active");
    $('#contact-youtubeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-instagram').show();
    $("#contact-instagramClick").addClass("active");
});
$("#contact-phoneClick").click(function () {
    $('#contact-map').hide();
    $('#contact-facebook').hide();
    $('#contact-youtube').hide();
    $('#contact-instagram').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-facebookClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-instagramClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-phone').show();
    $("#contact-phoneClick").addClass("active");
});



$("#contact-mailClick").click(function () {
    $('#contact-map').hide();
    $('#contact-facebook').hide();
    $('#contact-youtube').hide();
    $('#contact-instagram').hide();
    $('#contact-phone').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-facebookClick').removeClass("active");
    $('#contact-youtubeClick').removeClass("active");
    $('#contact-instagramClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");

    $('#contact-mail').show();
    $("#contact-mailClick").addClass("active");
});
//google map
var map;
  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(39.949910, 32.788134),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);