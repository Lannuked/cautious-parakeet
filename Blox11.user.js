// ==UserScript==
// @name         Roblox 2011
// @version      0.1.7
// @description  Reimplementation of the 2011 Roblox site!
// @author       Lannuked
// @match        *://*www.roblox.com/*
// @run-at 	     document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @inject-into  auto
// @resource     OldCSS https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/CSS/AllCSS.css
// @require      https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/external/Prerun.js
// @require      https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/external/Essential.js
// @resource     OldHeader https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/HTML/Header.html
// @resource     OldAlert https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/HTML/Alert.html
// @resource     OldGames https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/HTML/Games.html
// @resource     OldFooter https://raw.githubusercontent.com/Lannuked/rerisen-sunrise/test/HTML/Footer.html
// ==/UserScript==

(async function() {
    'use strict';
    var href = document.location.href;
    var url = href.split('://')[1];
    if (!url.startsWith("www.roblox.com/discover")) {
        console.log(document.location.href);
        console.log("Not a supported page! Aborting...");
        /*kinda redundant now*/
        GM_addStyle(`
        html {
            visibility: visible;
            background: unset;
            }
            body {
            display: unset;
            }
            `);
        throw new Error();
    } else {
	      var body2 = document.createElement("oldbody");
	      var head2 = document.createElement("oldhead");
  	    document.getElementsByTagName("html")[0].appendChild(body2);
   	    document.getElementsByTagName("html")[0].appendChild(head2);

        var currentBody = GM_getResourceText("OldHeader") + GM_getResourceText("OldAlert") + GM_getResourceText("OldGames") + GM_getResourceText("OldFooter");
        body2.innerHTML = currentBody;
        doneLoading(body2);
        GM_addStyle(`
            :root:not(oldbody, oldhead, html) {
              all: unset;
            }
            html {
            background: #000444;
            visibility: visible;
            }
            body {
            display: none;
            }
            `);
        GM_addStyle(TwentyElevenCSS);
        history.pushState(null, null, "games.aspx");
    }
})();