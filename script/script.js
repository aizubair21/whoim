
var object = [
    {
        "headline":"HTML & CSS",
        "value":8,
        "length":10,
        "description":"significant experience and knowlege of HTML[5] CSS and it functionality and use"
    },
    {
        "headline":"JavasCript & jQuery",
        "value":8,
        "length":10,
        "description":"Experience with Object Oriented JavasCript. Extended knowlage of DOM manipulation in aiging and extending the UI"
    },
    {
        "headline":"PHP & Larabel",
        "value":7,
        "length":10,
        "description":"Experience with Object Oriented PHP and MySQL. and Deep Learnign with Larabel Framework"
    },

];

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop:true,
        margin:10,
        nav:true,
        items:5,
        Responsive : {
            400: {
                items:3,
            }
        }
        
    });
    $("#skill_set").skillset({
        object:object,
        duration:100,
    });

    $(".small_nav").on("click", function () {
        $("#nav_link").css({"left":"0px","z-index":"9999"});
    })
    $(".close_button").on("click", function () {
        $("#nav_link").css({"left":"-100%"});
    })
  });

