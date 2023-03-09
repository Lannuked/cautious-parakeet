// ==UserScript==
// @name         Roblox 2011
// @version      0.1
// @description  Reimplementation of the 2011 Roblox site!
// @author       Lannuked
// @match        *www.roblox.com/*
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/Base64.js
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/CSS.js
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/Essential.js
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/Footer.js
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/Header.js
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/Games.js
// @require      https://raw.githubusercontent.com/Lannuked/cautious-parakeet/main/external/Alert.js
// @grant        unsafeWindow
// @run-at 	     document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(async function() {
    'use strict';

    document.getElementsByTagName("title")[0].remove()
    document.getElementsByTagName("html")[0].style.visibility = "hidden";
    document.getElementsByTagName("html")[0].style.background = "#000444";

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
	var OldCSS = await RetCSS();
    var OldHeader = await RetOldHeader();
    var OldAlert = await RetOldAlert();
    var OldBody = await RetOldGamesBody();
    var OldFooter = await RetOldFooter();
    console.log(OldHeader);
    console.log(OldAlert);
    console.log(OldBody);
    console.log(OldFooter);
    loadPage(OldCSS + OldHeader + OldAlert + OldBody + OldFooter);

    document.getElementsByTagName("body")[0].style.display = "none";
})();