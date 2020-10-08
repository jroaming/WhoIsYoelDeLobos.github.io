//change text on textarea field (helper)

//vars
var textarea = $('#textAreaHelper')[0];
var helpTextarea = [
    {
        code: '0',
        text: 'No entries found.',
    },
    {
        code: 'main-menu_home',
        text: 'Go to the welcome page, with the main menu in it.',
    },
    {
        code: "main-menu_profile",
        text: "This leads to my profile page.",
    },
    {
        code: "main-menu_projects",
        text: "Here you'll find my most \"emblematic\" projects.",
    },
    {
        code: "main-menu_tools",
        text: "Every software I've used on my projects.",
    },
    {
        code: "main-menu_contact",
        text: "Here you can find all ways of contacting me.",
    },
    {
        code: "home-face-img",
        text: "Yup! That's (almost) my face!",
    },
    {
        code: "home-name-img",
        text: "And that's me! Pleased to meet you!",
    },
    {
        code: "profile-joel-working-img",
        text: "Trust me, that photo was the best one..."
    }
];

    //function
function captionTextarea(code) {
    var msg = "I will explain everything you hover the cursor over.";
    if (code != 0) {
        $('#img-yoel-talking-face')[0].src="img/originals/joel-talking.gif";
        for (let i = 0; i < helpTextarea.length; i++) {
            if(!helpTextarea[i].code.localeCompare(code)) {
                msg = helpTextarea[i].text;
                break;
            }
        }
    } else {
        $('#img-yoel-talking-face')[0].src="img/originals/joel-quiet.png";
    }
    // now we change the caption
    textarea.value = msg;
    //writeCaption();   /* this blocks searcher */
}

function writeCaption() {
    var i = 0;
    if (i < msg.length) {
        textarea.value += textarea.value + msg.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
}