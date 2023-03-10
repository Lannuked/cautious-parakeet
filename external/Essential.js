function doneLoading(body2) {
    document.getElementsByTagName("html")[0].style.background = "";
    body2.style.display = "";
}

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
  doneLoading(elm);
}

function waitForElm(selector, parent) {
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

        observer.observe(parent, {
            childList: true,
            subtree: true
        });
    });
    return selector;
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
    var body2 = prepareLoading();
    body2.innerHTML = body2Content;
    doneLoading(body2);
}