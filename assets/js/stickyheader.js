window.onscroll = function() {myFunction()};
    var header = document.getElementById("nameplate");
    var sticky = header.offsetTop;
    
    function myFunction() {
        if (window.pageYOffset > sticky) {
            console.log("sticky");
            header.style.backgroundColor = "rgb(33, 41, 49)";
            header.style.visibility = "visible";
        } else {
            console.log("Not sticky");
            header.style.backgroundColor = "transparent";
            header.style.visibility = "hidden";
        }
  }