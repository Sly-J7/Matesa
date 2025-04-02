//footer 1
var html1 = document.createElement("html");
html1.style.backgroundColor="#EBE9EB";
html1.style.margin="0";
html1.style.padding="0";

var f1=document.createElement("div");
f1.style.padding="0";
f1.style.margin="1em";

var link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="matesa-gallery.css";


var Topic = document.createElement("h3");
Topic.textContent="THE DEPARTMENT";
Topic.style.fontSize="1em";


var Sub1=document.createElement("p");
Sub1.textContent="Kwame Nkrumah University of Science and Technology.";
Sub1.style.fontSize="0.9em";
Sub1.style.fontFamily="Helvetica, sans-serif	";

var Sub2=document.createElement("p");
Sub2.textContent="College of Engineering.";
Sub2.style.fontSize="0.9em";
Sub2.style.fontFamily="Helvetica, sans-serif	";

var Sub3=document.createElement("p");
Sub3.textContent="Faulty of Mechanical and Chemical Engineering.";
Sub3.style.fontSize="0.9em";
Sub3.style.fontFamily="Helvetica, sans-serif	";

var Sub4=document.createElement("p");
Sub4.textContent="Department of Materials Engineering.";
Sub4.style.fontSize="0.9em";
Sub4.style.fontFamily="Helvetica, sans-serif	";
{
f1.append(link);
f1.append(Topic,Sub1,Sub2,Sub3,Sub4);
document.body.appendChild(html1);
var space= document.createElement("br");
f1.appendChild(space);
}
//media
var Topic = document.createElement("h3");
Topic.textContent="FOLLOW US";
Topic.style.fontSize="1em";

var facebook= document.createElement("img");
facebook.src="matpictures/Facebook.jpg";
facebook.alt="social handle";
facebook.style.aspectRatio="4/4";
facebook.style.width="1.2em";
facebook.style.margin="1em";
var handle1 = document.createElement("a");
handle1.target="_blank";
handle1.href="https://m.facebook.com/matesaknust/";
handle1.appendChild(facebook);
f1.appendChild(handle1);

var Insta= document.createElement("img");
Insta.src="matpictures/Instagram.jpg";
Insta.alt="social handle";
Insta.style.aspectRatio="4/4";
Insta.style.width="1.2em";
Insta.style.margin="1em";
var handle2 = document.createElement("a");
handle2.target="_blank";
handle2.href="https://www.instagram.com/matesa_knust_official/";
handle2.appendChild(Insta);
f1.appendChild(handle2);

var X= document.createElement("img");
X.src="matpictures/X.jpg";
X.alt="social handle";
X.style.aspectRatio="4/4";
X.style.width="1.2em";
X.style.margin="1em";
var handle3 = document.createElement("a");
handle3.target="_blank";
handle3.href="https://x.com/matesaknust";
handle3.appendChild(X);
f1.appendChild(handle3);

var linkedin= document.createElement("img");
linkedin.src="matpictures/Linkedin.jpg";
linkedin.alt="social handle";
linkedin.style.aspectRatio="4/4";
linkedin.style.width="1.2em";
linkedin.style.margin="1em";
var handle4 = document.createElement("a");
handle4.target="_blank";
handle4.href="https://www.linkedin.com/company/matesa-knust";
handle4.appendChild(linkedin);
f1.appendChild(handle4);
{
html1.appendChild(f1);
document.body.appendChild(html1);
}

//footer 2
var html2 = document.createElement("html");
html2.style.backgroundColor="#white";
html2.style.margin="0";
html2.style.padding="0";

var f1=document.createElement("div");
f1.style.padding="0";
f1.style.margin="1em";

var link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="matesa-gallery.css";

var Subb1=document.createElement("p");
Subb1.textContent="Contact MATESA-KNUST:";
Subb1.style.fontSize="0.9em";
Subb1.style.fontFamily="Helvetica, sans-serif	";

var Subb2=document.createElement("p");
Subb2.textContent="Email: mateng@gmail.com";
Subb2.style.fontSize="0.9em";
Subb2.style.fontFamily="Helvetica, sans-serif	";

var Subb3=document.createElement("p");
Subb3.textContent="Telephone: +233 322 060 238";
Subb3.style.fontSize="0.9em";
Subb3.style.fontFamily="Helvetica, sans-serif	";

var Subb4=document.createElement("p");
Subb4.textContent="©Department of Materials Engineering,";
Subb4.style.fontSize="0.9em";
Subb4.style.fontFamily="Helvetica, sans-serif	";

var Subb5=document.createElement("p");
Subb5.textContent="KNUST, Kumasi, Ghana.";
Subb5.style.fontSize="0.9em";
Subb5.style.fontFamily="Helvetica, sans-serif	";

{
f1.append(link);
f1.append(Subb1,Subb2,Subb3,Subb4,Subb5);
html2.appendChild(f1);
document.body.appendChild(html2);
}