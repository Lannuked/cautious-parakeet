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

function unhideBody() {
    document.getElementsByTagName("body")[0].style.display = "none";
    document.getElementsByTagName("html")[0].style.visibility = "";
}

function loadPage(body2Content) {
	var body2 = document.createElement("oldbody");
	var head2 = document.createElement("oldhead");

	body2.style.display = "none"
	document.getElementsByTagName("html")[0].appendChild(body2);
	document.getElementsByTagName("html")[0].appendChild(head2);

	var ready = false;

	embedHTML('https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/CSS/AllCSS.css', head2, "<style>", "</style>");
    body2.innerHTML = body2Content;

    document.getElementsByTagName("html")[0].style.background = "";

	body2.style.display = ""
}