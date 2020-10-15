//swap between different pages
function switchTo(code) {
    //$('loading-screen').style.display == 'none';
    $('#main-cover')[0].style.display = 'none';
    $('#profile-page')[0].style.display = 'none';
    $('#projects-page')[0].style.display = 'none';
    $('#tools-page')[0].style.display = 'none';
    $('#contact-page')[0].style.display = 'none';

    $('#'+code)[0].style.display = 'block';
    document.getElementsByClassName('navbar-menu-active')[0].classList.remove('navbar-menu-active');
    $('#item-'+code)[0].classList.add('navbar-menu-active');
}

function switchMapAddress() {
    let elementShown = document.getElementsByClassName('contact-way-displayed')[0];
    let elementHidden = document.getElementsByClassName('contact-way-hidden')[0];
    
    fadeToAndFX(elementShown, elementHidden, "block");
    
    elementShown.classList.remove('contact-way-displayed');
    elementShown.classList.add('contact-way-hidden');
    elementHidden.classList.remove('contact-way-hidden');
    elementHidden.classList.add('contact-way-displayed');
}

