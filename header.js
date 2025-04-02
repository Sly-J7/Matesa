//page header
var header = document.createElement("div");
header.className="header";
//left header division
var leftDiv = document.createElement("div");
leftDiv.className="leftDiv";
//center header division
var centerDiv = document.createElement("div");
centerDiv.className="centerDiv";
//right header division
var rightDiv = document.createElement("div");
rightDiv.className="rightDiv";
//menu container
var menuIcon= document.createElement("div");
menuIcon.className="container";
menuIcon.type="button";
menuIcon.onclick=openNav;

var bar1= document.createElement("div");
bar1.className="bar1";
var bar2= document.createElement("div");
bar2.className="bar2";
var bar3= document.createElement("div");
bar3.className="bar3";
{
menuIcon.append(bar1,bar2,bar3);
rightDiv.appendChild(menuIcon);
}
//Matesa logo text
var headText = document.createElement("h1");
var textLink = document.createElement("a");//h1 link
textLink.textContent="MATESA";
textLink.href="index.html";
headText.appendChild(textLink);
centerDiv.appendChild(headText);
// Matesa logo
var mateLogo = document.createElement("img");
mateLogo.className="matLogo";
mateLogo.src="matpictures/mat.JPG";
mateLogo.alt="MATESA logo";
mateLogo.addEventListener("click", openLink);
leftDiv.appendChild(mateLogo);
function openLink()
  {
  window.open("index.html","_self");
  }
header.append(rightDiv,centerDiv,leftDiv);
{
document.getElementById("main").prepend(header)
}
{
var sideNav = document.getElementById("mySidenav")
gall = sideNav.children[4];
gall.textContent="Gallery";
gall.href="matgallery.html";
report = sideNav.children[8];
report.textContent="Reports";
report.href=message;
}
var cont =document.createElement("a");
cont.textContent="Contact";
cont.href="contact.html";
sideNav.appendChild(cont);