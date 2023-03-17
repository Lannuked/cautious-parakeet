var href = document.location.href;
    var url = href.split('://')[1];
    if (url.startsWith("www.roblox.com/discover")) {
GM_addStyle(`
html {
visibility: hidden;
background: #000444;
}

body {
display: none;
}
`);
}