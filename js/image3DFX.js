$(document).mousemove(function(event) {
    if ($('#profile-page')[0].style.display == 'block') {
        console.log("("+mouseXpercentage+", "+mouseYpercentage+")");
        //$("#img-yoel-profile-working")[0].style.transform = "rotateY(" + mouseYpercentage/15 + "deg)";

    }
});