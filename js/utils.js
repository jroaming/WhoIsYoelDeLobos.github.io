function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function unfade(element, elementDisplay) {
    var op = 0.1;  // initial opacity
    element.style.opacity = op;
    element.style.display = elementDisplay;
    var timer1 = setInterval(function () {
        if (op >= 1){
            clearInterval(timer1);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeTo(fadingElement, unfadingElement, elementNewDisplay) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            fadingElement.style.display = 'none';
            op = 0.1;  // initial opacity
            unfade(unfadingElement, elementNewDisplay);
            clearInterval(timer);
        }
        fadingElement.style.opacity = op;
        fadingElement.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;

    }, 10);
}


function fadeAndFX(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function unfadeAndFX(element, elementDisplay) {
    var op = 0.1;  // initial opacity
    element.style.opacity = op;
    element.style.display = elementDisplay;
    var timer1 = setInterval(function () {
        if (op >= 1){
            clearInterval(timer1);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeToAndFX(fadingElement, unfadingElement, elementNewDisplay) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            fadingElement.style.display = 'none';
            op = 0.1;  // initial opacity
            unfade(unfadingElement, elementNewDisplay);
            clearInterval(timer);
        }
        fadingElement.style.opacity = op;
        fadingElement.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;

    }, 10);
}