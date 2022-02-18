/*progress bar plugins*/
/*skill slider object*/
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

/*owl-carousel slider banner slider bar*/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        loop:true,
        margin:10,
        nav:true,
        items:5,
        Responsive:{
            600: {
                items:3,
            },
            400: {
                items:3,
            },
            768: {
                items:4,
            }
        },
        
    });
    
    /*testimonial skill slider*/

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

/*owl-carousel blog section slider*/
$("#blog .owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    items:3,
    
});


/*testimonial slider*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}