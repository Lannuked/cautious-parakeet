// ==UserScript==
// @name         Roblox 2011
// @version      0.1
// @description  Reimplementation of the 2011 Roblox site!
// @author       Lannuked
// @match        *www.roblox.com/*
// @require      https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/external/Prerun.js
// @require      https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/external/Essential.js
// @grant        unsafeWindow
// @run-at 	     document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @resource     OldHeader https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/HTML/Header.html
// ==/UserScript==

(async function() {
    'use strict';

    document.getElementsByTagName("html")[0].style.visibility = "hidden";
    document.getElementsByTagName("html")[0].style.background = "#000444";
    waitForElm("title", document.head)
    document.getElementsByTagName("title")[0].remove()

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

    var body2 = prepareLoading();
    setInnerHTML(body2, GM_getResourceText("OldHeader"));
    doneLoading(body2)

    document.getElementsByTagName("body")[0].style.display = "none";
})();