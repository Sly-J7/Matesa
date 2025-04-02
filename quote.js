var link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="matesa.css";
document.body.appendChild(link);
var content = document.getElementsByClassName("content");
var quoSection=document.getElementById("quote")
var r=Math.random();
       if (r<0.5)
{
var quote = document.createElement("h3");
quote.textContent="Man is a goal seeking animal. His life only has meaning if he is reaching out and striving for his goals.";
quote.style.display="block";
quote.style.position="relative";
quoSection.appendChild(quote);
var italic = document.createElement("i");
italic.textContent="\-Aristotle.";
quote.appendChild(document.createElement("br"));
quote.appendChild(document.createElement("br"));
quote.appendChild(italic);
}
       else if (r<1)
{
var quote = document.createElement("h3");
quote.textContent="If you think you can or if you think you can\'t either way you are right.";
quote.style.display="block";
quote.style.position="relative";
quoSection.appendChild(quote);
var italic = document.createElement("i");
italic.textContent="\-Henry Ford.";
quote.appendChild(document.createElement("br"));
quote.appendChild(document.createElement("br"));
quote.appendChild(italic);
}
      else
{
var quote = document.createElement("h3");
quote.textContent="That which we persist in doing becomes easier, not that the task itself has become easier, but that our ability to perform it has improved";
quote.style.display="block";
quote.style.position="relative";
quoSection.appendChild(quote);
var italic = document.createElement("i");
italic.textContent="\-Ralph Waldo Emerson.";
quote.appendChild(document.createElement("br"));
quote.appendChild(document.createElement("br"));
quote.appendChild(italic);
}
content.appendChild(quoSection);