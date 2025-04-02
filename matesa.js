var headScript = document.createElement("script");
headScript.type="text/javascript";
headScript.src="matHeadDes.js";
{document.head.prepend(headScript)}

var pageHeader = document.createElement("script");
pageHeader.type="text/javascript";
pageHeader.src="header.js";
{document.head.appendChild(pageHeader)}



//unavalaible signal
function message()
{
  alert("Not available at the moment, coming soon.");
}
/* the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
 document.getElementById("mySidenav").style.width = "60vw";
  document.getElementById("main").style.marginLeft = "40vw";
document.getElementById("main").style.filter = "blur(5px)";
}

/*the width of the side navigation set to 0 and the left margin of the page content set to 0, and the background color of body to EBE9EB*/
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "#EBE9EB";
document.getElementById("main").style.filter = "blur(0)";
}
{
/* the close and open button div */
var acc = document.getElementsByClassName("officials");
var i;
}

var base = document.createElement("base");
base.href="index.html";
{
document.body.appendChild(base);
}
