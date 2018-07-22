// function showPic(whichpic) {
//     var source=whichpic.getAttribute("href");
//     var placeholder=document.getElementById("placeholder");
//     placeholder.setAttribute("src",source);
//     var text=whichpic.getAttribute("title");
//     var description=document.getElementById("des");
//     description.innerText=text;
// }

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if (document.getElementById("des")){
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("des");
        description.innerText=text;
    }
    return false;
}

var links=document.getElementsByTagName("a");
for (var i=0;i<links.length;i++){
    links[i].onclick=function () {
        showPic(this);
        return false;
    }
}


$(function () {

    function prepareGallery() {
        if (!document.getElementById) return false;
        if (!document.getElementsByTagName) return false;
        if (!document.getElementById("imagegallery")) return false;
        var gallery=document.getElementById("imagegallery");
        var links=gallery.getElementsByTagName("a");
        for (var i=0;i<links.length;i++){
            links[i].onclick=function () {
                showPic(this);
                return false;
            };
        }
    }

    // function prepareGallery() {
    //     if (!document.getElementsByTagName) return false;
    //     if (!document.getElementById) return false;
    //     if (!document.getElementById("imagegallery")) return false;
    //     var gallery=document.getElementById("imagegallery");
    //     var links=gallery.getElementsByTagName("a");
    //     for (var i=0;i<links.length;i++){
    //         links[i].onclick=function () {
    //             return !showPic(this);
    //         };
    //     }
    // }
});
