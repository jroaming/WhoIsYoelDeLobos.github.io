var iProject = 1;

var projInfoList = document.getElementsByClassName("project-item");

function swapToProject(togo) {
    for (let aux = 0; aux < projInfoList.length; aux++) {
        projInfoList[aux].style.display = "none";
        $("#project-list-item"+(aux+1))[0].classList.remove("active-project-info");
    }
    projInfoList[togo-1].style.display = "block";
    $("#project-list-item"+(togo))[0].classList.add("active-project-info");
    //console.log($("#project-list-item"+(togo))[0].classList);
}