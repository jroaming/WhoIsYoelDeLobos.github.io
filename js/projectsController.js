var iProject = 0;
var iProjectImage = 1;
var projInfoList = document.getElementsByClassName("project-item");
var projectImagesList = [
    document.getElementsByClassName("project1-img"),
    document.getElementsByClassName("project2-img"),
    document.getElementsByClassName("project3-img"),
    document.getElementsByClassName("project4-img"),
    document.getElementsByClassName("project5-img")
];

function swapToProject(togo) {
    iProject = togo;
    iProjectImage = 0;

    for (let aux = 0; aux < projInfoList.length; aux++) {
        projInfoList[aux].style.display = "none";
        $("#project-list-item"+(aux+1))[0].classList.remove("active-project-info");
    }
    projInfoList[togo-1].style.display = "flex";
    $("#project-list-item"+(togo))[0].classList.add("active-project-info");
    //console.log($("#project-list-item"+(togo))[0].classList);

    swapProjectImage(togo, 1);
}

function swapProjectImage(nProject, action) {
    if (iProject != 0 && (action == 1 || action == -1)) {   //checkers
        let maxImageIndex = projectImagesList[nProject-1].length;

        for (let iImage = 0; iImage < maxImageIndex; iImage++) {

            projectImagesList[nProject-1][iImage].style.display = "none";
            //projectImagesList[nProject][iImage].classList.remove("project-image-list-active");

        }
        //el primer (y unico) elemento que tenga la clase 'project-image-list-active' será del que haya que borrarlo.
        var activeItems = document.getElementsByClassName("project-image-list-active");
        for (let iImage = 0; iImage < activeItems.length; iImage++)
            activeItems[iImage].classList.remove("project-image-list-active");

        if (iProjectImage + action > maxImageIndex) iProjectImage = 1; //si damos a next y ya esta en la última imagen
        else {
            if (iProjectImage + action < 1) iProjectImage = maxImageIndex; //si damos a previous y ya estamos en la primera
            else {
                iProjectImage = iProjectImage + action;
            }
        }

        //console.log(iProjectImage);
        projectImagesList[nProject-1][iProjectImage-1].classList.add("project-image-list-active");
        projectImagesList[nProject-1][iProjectImage-1].style.display = "block";

        /*
        let shinnyIconsFullscreen = document.getElementsByClassName("shinny-icon");
        for (let iAux = 0; iAux < shinnyIconsFullscreen.length; iAux++) shinnyIconsFullscreen[iAux].classList.remove('shinny-icon');
        if(nProject == 3 && (iProjectImage == 1 || iProjectImage == 8)) {
            $('#proj3-full-icon')[0].classList.add('shinny-icon');
        }
        */

    }
}

function loadFullscreenImage(nProject) {
    let imgFormat = (nProject ==5? '.jpg' : '.png');
    
    let imgToOpen = document.getElementsByClassName('project-image-list-active')[0];
    var myWindow = window.open(imgToOpen.src, "fullscreen_image", "_blank", "toolbar=no,scrollbars=no,resizable=yes");

    return myWindow;
}