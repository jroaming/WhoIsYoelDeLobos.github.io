//swap between different pages
function switchTo(code) {
    //$('loading-screen').style.display == 'none';
    $('#main-cover')[0].style.display = 'none';
    $('#profile-page')[0].style.display = 'none';
    $('#projects-page')[0].style.display = 'none';
    $('#tools-page')[0].style.display = 'none';
    $('#contact-page')[0].style.display = 'none';

    $('#'+code)[0].style.display = 'block';
}