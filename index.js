// alert("hello");
// prompt("Enter email");


// Navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('.navIcon').attr("src", "images/icon_black.png");
          
        } else {
            $('.navbar').removeClass('active');
            $('.navIcon').attr("src", "images/icon1.png");
        }
    });
});
