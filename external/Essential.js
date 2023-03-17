const TwentyElevenCSS = GM_getResourceText("OldCSS");

async function GetCount(countURL) {
const response = await fetch(countURL, { credentials: 'include' });
return response.json();
}

async function doneLoading(body2) {
    document.getElementsByTagName("html")[0].style.background = "";
    body2.style.display = "";


	var FriendCount = await GetCount("https://friends.roblox.com/v1/user/friend-requests/count");
	var MessagesCount = await GetCount("https://privatemessages.roblox.com/v1/messages/unread/count");
	var UserInfo = await GetCount("https://users.roblox.com/v1/users/authenticated");
	var UserID = UserInfo["id"];
	var Username = UserInfo["displayName"];
	var RobuxCount = await GetCount("https://economy.roblox.com/v1/users/" + UserID + "/currency");
	document.getElementById("ctl00_BannerOptionsLoginView_BannerOptions_Authenticated_lnLoginName").append(Username)
	document.getElementById("ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_MessageAlertCaptionHyperLink").append(MessagesCount["count"])
	document.getElementById("ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_FriendsAlertCaptionHyperLink").append(FriendCount["count"])
	document.getElementById("ctl00_BannerAlertsLoginView_BannerAlerts_Authenticated_rbxBannerAlert_rbxAlerts_RobuxAlertCaptionHyperLink").append(RobuxCount["robux"])
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