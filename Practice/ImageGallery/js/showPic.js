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

function preparePlaceholder(){
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.png");
    var description=document.createElement("p");
    description.setAttribute("id","des");
    var text=document.createTextNode("Change a image") ;
    description.appendChild(text);

    // document.getElementsByTagName("body")[0].appendChild(placeholder);
    // document.getElementsByTagName("body")[0].appendChild(description);

    // var gallery=document.getElementById("imagegallery");
    // gallery.parentNode.insertBefore(placeholder,gallery);
    // gallery.parentNode.insertBefore(description,gallery);

    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if (parent.lastChild==targetElement){
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


preparePlaceholder();

var links=document.getElementsByTagName("a");
for (var i=0;i<links.length;i++){
    links[i].onclick=function () {
        showPic(this);
        return false;
    }
}





// $(function () {
//
//     function prepareGallery() {
//         if (!document.getElementById) return false;
//         if (!document.getElementsByTagName) return false;
//         if (!document.getElementById("imagegallery")) return false;
//         var gallery=document.getElementById("imagegallery");
//         var links=gallery.getElementsByTagName("a");
//         for (var i=0;i<links.length;i++){
//             links[i].onclick=function () {
//                 showPic(this);
//                 return false;
//             };
//         }
//     }

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
// });
