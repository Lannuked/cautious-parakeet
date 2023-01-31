function setInnerHTML(elm, html) {
  elm.innerHTML = html;
  
  Array.from(elm.querySelectorAll("script"))
    .forEach( oldScriptEl => {
      const newScriptEl = document.createElement("script");
      
      Array.from(oldScriptEl.attributes).forEach( attr => {
        newScriptEl.setAttribute(attr.name, attr.value) 
      });
      
      const scriptText = document.createTextNode(oldScriptEl.innerHTML);
      newScriptEl.appendChild(scriptText);
      
      oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
  });
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(body2, {
            childList: true,
            subtree: true
        });
    });
}
async function GetCount(countURL) {
    const response = await fetch(countURL, { credentials: 'include' });
    return response.json();
}
function embedHTML(OpenURL, parent, prefixTag = "", postfixTag = ""){
    var client = new XMLHttpRequest();
    client.open('GET', OpenURL);
    client.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parent.innerHTML = prefixTag.concat(this.responseText, postfixTag);
        }
    }
    client.send();
}

document.getElementsByTagName("html")[0].style.visibility = "hidden";
document.getElementsByTagName("html")[0].style.background = "#000444";
document.getElementsByTagName("title")[0].remove()

function unhideBody() {
    document.getElementsByTagName("body")[0].style.display = "none";
    document.getElementsByTagName("html")[0].style.visibility = "";
}

function loadPage()
var href = document.location.href;
var url = href.split('://')[1];
if (!url.startsWith("www.roblox.com/discover")) {
    console.log(document.location.href);
    console.log("Not a supported page! Aborting...");
    document.getElementsByTagName("html")[0].style.visibility = "";
    document.getElementsByTagName("html")[0].style.background = "";
    throw new Error();
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove())
    unhideBody();
});

var body2 = document.createElement("oldbody");
var head2 = document.createElement("oldhead");

body2.style.display = "none"
document.getElementsByTagName("html")[0].appendChild(body2);
document.getElementsByTagName("html")[0].appendChild(head2);

var ready = false;

embedHTML('https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/CSS/AllCSS.css', head2, "<style>", "</style>");
embedHTML('https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/Games.html', body2);

document.getElementsByTagName("html")[0].style.background = "";