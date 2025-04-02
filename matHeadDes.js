//logo
var fav = document.createElement("link");
fav.rel="icon";
fav.type="image/x-icon";
fav.href="images/matfav.jpg";
{
document.head.appendChild(fav);
}
//Social image size
var ogWidth= document.createElement("meta");
ogWidth.property="og:image:width";
ogWidth.content="50%";
var ogRatio= document.createElement("meta");
ogRatio.property="og:image:aspect-ratio";
ogRatio.content="16/9";
{
document.head.append(ogWidth,ogRatio)
}
var author= document.createElement("link");
author.rel="author";
author.href="https://t.me/Sly_J7";
{
document.head.appendChild(author);
}

//Matesa text head font
var headFont = document.createElement("link");
headFont.rel="stylesheet";
headFont.href="https://fonts.googleapis.com/css?family=Sofia";
var blog = document.createElement("link");
blog.rel="stylesheet";
blog.href="https://fonts.googleapis.com/css?family=BodoniModa";
{
document.head.append(headFont,blog);
}