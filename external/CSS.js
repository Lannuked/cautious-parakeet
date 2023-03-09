async function RetCSS() {
var AllCSS = `<style>
oldbody {
    font: normal 8pt/normal Verdana, sans-serif;
    margin: 0;
    text-transform: none;
    text-decoration: none;
    background: #F8FCFF url(` + bg_gradient + `) repeat-x;
}

html {
	
    background: url(` + bkg + `) top center repeat-x #000444;
}
a {
    text-decoration: none;
}
a img {
    border: none;
}
a:link,
a:visited,
a:active {
    color: #00F;
}
a:hover {
    text-decoration: underline;
}
abbr,
acronym {
    cursor: help;
    border-bottom: 1px dotted #000;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: inherit;
    display: inline-block;
    *display: inline;
}
pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap!important;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}
input.Text {
    border-color: #777;
    border-style: dashed;
}
.AdminPanel {
    border-color: Orange;
    border-style: dotted;
    padding: 10px;
}
.ImageButton {
    cursor: pointer;
    padding: 0;
    border: 0;
    text-decoration: none;
    margin: 0;
    display: inline-block;
}
.Button {
    cursor: pointer;
    background-color: #fff;
    border: solid 1px #333;
    color: #333;
    font-family: Verdana, Sans-Serif;
    font-size: .9em;
    padding: 3px 10px 3px 10px;
    text-decoration: none;
}
.Button:link,
.Button:visited {
    border: solid 1px #777;
    color: #777;
}
.Button:hover,
.Button:active {
    background-color: #6e99c9;
    border: solid 1px #000;
    color: #fff;
}
.Bullet {
    float: left;
    margin-right: 10px;
    margin-bottom: 4px;
}
.Ads_RightSidebar {
    border: solid 1px #000;
    float: right;
    text-align: right;
    width: 160px;
}
.Legalese {
    font-size: 7pt;
}
#Container {
    margin: 0 auto;
    padding: 0 10px;
    border-left: 5px solid #DDD;
    border-right: 5px solid #DDD;
    width: 900px;
    background: #e5f1fd;
}
#Header {
    margin: 0 auto;
    color: White;
    font: normal 12px/normal Verdana, sans-serif;
    font-weight: bold;
    width: 900px;
    text-align: center;
}
#Header a,
#Header a:visited,
#Header a:active {
    text-decoration: none;
}
#Header a:hover {
    text-decoration: underline;
}
#Banner {
    background-image: url(/images/WoodBanner.png);
    background-repeat: no-repeat;
    height: 72px;
    text-align: center;
}
#Banner #Options {
    float: left;
    height: 72px;
    position: relative;
    overflow: hidden;
    width: 200px;
}
#Banner #Authentication {
    top: 0;
    left: 0;
    padding: 4px;
    position: absolute;
    background: #6E99C9;
}
#Banner #Options #Settings {
    bottom: 0;
    left: 0;
    padding: 4px;
    position: absolute;
}
#Banner #Logo {
    float: left;
    margin: 7px 0;
    text-align: center;
    width: 293px;
    height: 58px;
}
#Banner #Alerts {
    float: right;
    border: 1px solid #6E99C9;
    background: #FFF;
    width: 203px;
}
#Header .Navigation {
    clear: both;
    background-color: #6e99c9;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12pt;
    font-weight: normal;
    line-height: 2em;
    text-decoration: none;
}
#AdvertisingLeaderboard {
    margin: 0 auto;
    margin-bottom: 5px;
    text-align: center;
    width: 898px;
}
#AdvertisingSkyscraper {
    border: solid 1px #000;
    float: right;
    text-align: right;
    width: 120px;
}
#RobloxLargeRectangleAd {
    padding: 10px 0 10px 0;
}
#MasterContainer {
    background: transparent url(../../../images/bg_clouds.jpg) no-repeat scroll center top;
    width: 100%;
    overflow: auto;
}
#Body {
    width: 900px;
}
#Footer {
    font: normal 8px/normal Verdana, sans-serif;
    padding: 3em 20px;
    width: 860px;
    text-align: center;
    font-size: 13px;
    margin: 0;
}
#Footer .SEOGenreLinks {
    padding: 1em 0 2em 0;
    font-size: 11px;
}
#Footer .Legalese {
    color: #555;
    font-size: 10px;
    margin-bottom: 1em;
}
.AdmiPanel {
    border: solid 1px #000;
    bottom: 20px;
    height: 200px;
    overflow: hidden;
    right: 10px;
    padding-top: 15px;
    position: fixed;
    width: 200px;
}
.AdmiPanel h4 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    margin: 0;
    text-align: center;
}
.AdmiPanelExpandCollapse {
    color: green;
    cursor: pointer;
    font-weight: bolder;
    position: absolute;
    right: 2px;
    top: 2px;
}
.Panel {
    border: solid 1px #000;
}
.Panel h4 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    margin: 0;
    text-align: center;
}
.MultilineTextBox {
    border: dashed 2px Gray;
    font-family: Verdana, Sans-Serif;
    font-size: 1.2em;
    line-height: 1.5em;
    padding: 5px 5px;
}
.TextBox {
    border: 1px solid #ccc;
    font-family: Verdana, Sans-Serif;
    font-size: 1.2em;
    padding: 5px;
}
.Label {
    font-weight: bold;
}
.BigButton {
    background-color: #F5CD2F;
    color: #000;
    height: 2.5em;
    font-family: Verdana, Helvetica, Sans-Serif;
    font-size: 20px;
    font-weight: bold;
}
.ErrorReporting,
.ErrorReportingThanks {
    width: 500px;
    margin: 16px auto 16px auto;
    padding: 10px;
}
.YesNoButtons {
    text-align: right;
}
.YesButton,
.NoButton {
    background-color: #F5CD2F;
    color: #000;
    margin-left: 10px;
}
.popupControl {
    background-color: #fff;
    border: 1px outset #fff;
    position: absolute;
    visibility: hidden;
}
.ColorPickerItem {
    border-color: #fff;
    border-style: solid;
    border-width: 2px;
}
.ColorPickerItem:hover {
    border-color: Blue;
    border-style: solid;
    border-width: 2px;
}
.modalBackground {
    background-color: Gray;
    filter: alpha(opacity=30);
    opacity: .3;
}
.modalPopup {
    background-color: #ffd;
    border-width: 3px;
    border-style: solid;
    border-color: Gray;
    padding: 3px;
}
.newModalPopup {
    padding: 3px;
}
.GuestModePromptText {
    font-size: 14px;
    color: #333;
    margin-left: 30px;
}
.GuestModePromptText li {
    font-weight: bolder;
}
.PopupMenu {
    background-color: #fff;
    border: solid 1px #666;
    padding: 10px;
    z-index: 1;
}
.PopupMenu .Button {
    line-height: 2.5em;
}
.PopupMenu .Button:hover {
    background-color: #6e99c9;
    color: #fff;
}
.Attention {
    color: Red;
}
.OKCancelButton {
    width: 80px;
}
.MenuItem {
    color: White;
    font-size: 18px;
    line-height: 2em;
}
a.MenuItem:link,
a.MenuItem:visited,
a.MenuItem:active {
    color: White;
    text-decoration: none;
}
a.MenuItem:hover {
    text-decoration: underline;
}
.Toolbox {
    background-color: ButtonFace;
    padding: 2px;
}
.ToolboxItem {
    border-color: Window;
    border-style: solid;
    border-width: 2px;
    width: 52px;
    height: 52px;
}
.Grid {
    background-color: White;
    border-color: #CCC;
    border-width: 1px;
    border-style: solid;
}
.GridHeader {
    color: White;
    background-color: #6E99C9;
}
.GridItem {
    color: #006;
}
.GridItemAlt {
    color: #006;
    background: #EEE;
}
.GridItem:hover {
    background-color: #DDD;
}
.GridItemAlt:hover {
    background-color: #DDD;
}
.GridFooter {
    color: White;
    background-color: #6E99C9;
}
.GridPager {
    color: White;
    background-color: #6E99C9;
    text-align: center;
    font-weight: bold;
}
.Title {
    font-size: 18px;
}
a.Title:link,
a.Title:visited,
a.Title:active {
    text-decoration: none;
}
a.Title:hover {
    text-decoration: underline;
}
.Header {
    font-size: 14px;
}
.Banner {
    padding: 8px;
}
.BannerText {
    font-weight: bold;
    color: white;
}
a.BannerText:link,
a.BannerText:visited,
a.BannerText:active {
    text-decoration: none;
    color: white;
}
a.BannerText:hover {
    text-decoration: underline;
    color: white;
}
.PageSelector {
    font-family: Verdana, Sans-Serif;
    margin: 0 0 0 10px;
}
.PageSelector label {
    font-weight: bold;
}
.DisplayFilters {
    margin-right: 3px;
    min-width: 0;
    position: relative;
}
.SearchBar {
    background-color: #eee;
    border: solid 1px #bbb;
    height: 30px;
    margin: -5px 0 5px 0;
    padding: 0;
    text-align: center;
}
.SearchBar .SearchBox,
.SearchBar .SearchButton {
    height: 30px;
    margin: 0;
    padding: 0;
}
.SearchBar .TextBox {
    border: solid 1px #000;
    height: 19px;
    margin: 2px 0 0 0;
    padding: 2px 3px 0 3px;
    width: 250px;
}
.SearchLinks {
    display: inline;
    font-family: Verdana, Sans-Serif;
    z-index: 9;
}
.SearchLinks a span {
    display: none;
}
.SearchLinks a:hover {
    border: none;
    text-decoration: none;
}
.SearchLinks a:hover span {
    background-color: #6e99c9;
    border-color: Gray;
    border-style: ridge;
    border-width: 1px;
    color: white;
    display: block;
    font: 11px Verdana, sans-serif;
    left: 15%;
    line-height: 1.4em;
    margin: 5px;
    padding: 5px;
    position: absolute;
    text-align: center;
    text-decoration: none;
    top: 20px;
    width: 60%;
    z-index: 10;
}
.SearchError {
    clear: both;
    margin: 2px;
    float: none;
    padding: 2px;
    text-align: center;
    color: Red;
}
.SystemAlert {
    background-color: #FFF;
    text-align: center;
    color: #FFF;
    border: 2px solid #000;
    padding: 1px;
}
.SystemAlertText {
    font-size: 16px;
    font-weight: bold;
    background-color: #F00;
    padding: 2px;
}
.SystemAlert a {
    color: White;
}
.Exclamation {
    background: url(` + exclamation + `) no-repeat;
    height: 16px;
    width: 16px;
    float: left;
}
.EmailTemplateTable {
    border-collapse: collapse;
}
.EmailTemplateH1 {
    font-size: 18px;
    color: #6E99C9;
}
.EmailTemplateLogoRow {
    padding: 3px;
    margin-bottom: 5px;
}
.EmailTemplateRow {
    padding: 3px;
    margin-bottom: 3px;
    font-size: 14px;
    font-family: Verdana, Helvetica, Sans-Serif;
}
.EmailTemplateRow input {
    font-size: 14px;
    padding: 2px;
    border: 1px solid #CCC;
}
.EmailTemplateRow input:hover {
    font-size: 14px;
    padding: 2px;
    border: 1px solid #CCC;
    background: #6E99C9;
}
.subMenu {
    background: #A3514F;
    background-repeat: repeat-x;
    color: White;
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 14px;
    height: 26px;
    position: relative;
    border-left: solid 3px #6E99C9;
    border-right: solid 3px #6E99C9;
    border-bottom: solid 3px #6E99C9;
    z-index: 5;
}
.subMenu ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.subMenu li {
    float: left;
    position: relative;
}
.subMenu a,
.subMenu a:visited {
    display: block;
    padding: 5px;
    border-right: 1px solid #FFF;
    font-size: 14px;
    color: #FFF;
}
.subMenu .subMenuItemselected {
    display: block;
    padding: 5px;
    border-right: 1px solid #FFF;
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
}
.subMenu ul ul a.subMenudrop,
.menu ul ul a.subMenudrop:visited {
    font-weight: bold;
    text-decoration: underline;
}
.subMenu ul ul ul a,
.subMenu ul ul ul a:visited {
    background: #A3514F;
}
.subMenu ul ul ul a:hover {
    text-decoration: underline;
}
.subMenu ul ul {
    visibility: hidden;
    position: absolute;
    height: 0;
    left: 0;
}
.subMenu ul ul ul {
    left: 141px;
    top: 0;
    width: 149px;
}
.subMenu ul ul ul.left {
    left: -149px;
}
.subMenu ul ul a,
.subMenu ul ul a:visited {
    background: #A3514F;
    color: #FFF;
    height: auto;
    padding: 4px 6px;
    line-height: 1em;
    width: 148px;
    margin-left: -1px;
    border-left: 1px solid #FFF;
    border-right: none;
}
.subMenu a:hover,
.subMenu ul ul a:hover {
    text-decoration: underline;
    background: #573333;
}
.subMenu :hover > a,
.subMenu ul ul :hover > a {
    text-decoration: underline;
}
.subMenu ul li:hover ul,
.subMenu ul a:hover ul {
    visibility: visible;
}
.subMenu ul :hover ul ul {
    visibility: hidden;
}
.subMenu ul :hover ul :hover ul {
    visibility: visible;
}
.subMenu table {
    position: absolute;
    top: 0;
    margin-top: 15px;
    left: 0;
    border-collapse: collapse;
    background: #A3514F;
    display: none;
}
.subMenu table a,
.subMenu table a:visited {
    border: none;
    width: 148px;
    padding-top: 8px;
}
#LeftGutterAdContainer {
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -850px;
}
#RightGutterAdContainer {
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: 450px;
}
.partnerLogo {
    margin-right: 30px;
    vertical-align: middle;
}
.errorMsg {
    font-weight: bold;
    text-align: center;
    display: block;
    font-size: 1.5em;
    margin: .83em 0;
    letter-spacing: 1px;
}
.facepile {
    min-height: 0;
}
oldbody {
    margin: 0;
    padding: 0;
    background: url(` + bkg + `) top center repeat-x #000444;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 12px;
}
a {
    text-decoration: none;
    color: #00f;
}
a:hover,
a:active {
    text-decoration: underline;
}
a.green {
    color: #080;
}
a.green:hover {
    color: #0c0;
}
a img {
    border: none;
}
#Header a:hover {
    text-decoration: none;
}
#MasterContainer {
    background-image: none;
}
#Container {
    background: Transparent;
    border: none;
}
#HeaderContainer {
    position: relative;
    margin: 0;
    padding: 0;
    width: 900px;
    height: 225px;
    background: url(` + head_03 + `) repeat scroll 0 0 transparent;
    background-position: 0 0;
    background-repeat: no-repeat;
    z-index: 6;
}
#Banner {
    height: 100px;
    background: none;
    position: relative;
    bottom: 0;
}
#Banner #Logo {
    height: 70px;
    left: 275px;
    position: absolute;
    top: 10px;
    width: 350px;
    margin: 0;
    float: none;
}
#Header .headLink {
    position: absolute;
    top: 4px;
    left: 278px;
    width: 348px;
    height: 88px;
}
#Banner #Authentication {
    position: relative;
    top: 0;
    margin: 0;
    height: 28px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: normal;
    color: Black;
    float: left;
    background: url(/images/cssspecific/rbx2/head_bkg_t1.png) no-repeat left top;
    padding: 0 0 0 2px;
}
#Banner #Authentication #AuthenticationBannerSpan {
    background: url(/images/cssspecific/rbx2/head_bkg_t2.png) no-repeat scroll right top transparent;
    display: block;
    height: 28px;
    padding: 6px 10px 0;
}
#Banner #Authentication a {
    height: 18px;
    background: url(/images/cssspecific/rbx2/btn_blue18h.png) repeat-x;
    background-position: 0 0;
    margin: 0 5px;
    font-weight: bold;
    font-size: 10px;
    padding: 2px 5px;
}
#Banner #Authentication a:hover {
    background-position: 0 -18px;
}
#Banner #Alerts {
    background: Transparent;
    border: none;
    position: absolute;
    width: 147px;
    height: 81px;
    bottom: 0;
    right: 3px;
    float: none;
}
#Body {
    margin: 0;
    padding: 5px;
    width: 890px;
    background: url(` + containerBkg_01 + `);
    _overflow: hidden;
}
.favorited,
.notFavorited {
    background: url(/images/cssspecific/rbx2/favoriteStar_20h.png) no-repeat 0 -20px;
    width: 21px;
    height: 20px;
    margin: 0;
    display: inline-block;
    position: relative;
    top: 3px;
    *display: inline;
    *zoom: 1;
}
.notFavorited {
    background-position: 0 0;
}
#Footer {
    background: #e6e6e6;
    text-align: center;
    font-size: 13px;
    color: #aaa;
    margin: 0;
    padding: 3em 20px;
    width: 860px;
}
#Footer .FooterNav {
    color: #bbb;
}
#Footer .SEOGenreLinks {
    padding: 1em 0 2em 0;
    font-size: 11px;
}
#Footer .Legalese {
    font-size: 10px;
    margin-bottom: 1em;
}
#Footer .Legalese p {
    margin: 0;
    padding: 0;
}
.blueAndWhite {
    border: 2px solid #6e99c9;
    background-color: #fff;
    color: #000;
}
.blueAndWhite .titleBar {
    background-color: #000;
    color: #FFF;
    font-weight: bold;
    padding: 2px 2px 2px 2px;
    margin-bottom: 5px;
    font-size: 13px;
}
#ResetPassword,
#ResetPassword input {
    font-size: 16px;
}
#ResetPassword #ResetPasswordTable td {
    padding: 5px;
}
.ParentsLearningContent {
    font-size: 14px;
}
.ParentsLearningContent .ParentsLearningHeader {
    text-decoration: none;
}
.StandardBoxLight {
    float: inherit;
    border: 1px solid #3B526B;
    padding: 10px 10px 10px 10px;
    margin-bottom: 10px;
    display: block;
}
.StandardBoxLightHeader {
    float: inherit;
    background-color: #3B526B;
    text-align: center;
    color: #FFF;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px 5px 20px;
    display: block;
}
.ParentsLearningContent .StandardBoxLightHeader {
    margin: 10px 0;
}
.LoginParentAccount {
    text-align: left;
}
.ParentsControlPanel,
.ParentsControlPanel input {
    font-size: 14px;
}
.ParentsControlPanelTable table {
    border-collapse: collapse;
    border-spacing: 0;
}
.ParentsControlPanelTable table td,
.ParentsControlPanelTable table th {
    border: 1px solid #EEE;
    padding: 5px;
}
.ParentsControlPanelTable table tr:first-child td,
.ParentsControlPanelTable table tr:first-child th {
    border-top: 0;
}
.ParentsControlPanelTable table tr:last-child td {
    border-bottom: 0;
}
.ParentsControlPanelTable table tr td:first-child,
.ParentsControlPanelTable table tr th:first-child {
    border-left: 0;
}
.ParentsControlPanelTable table tr td:last-child,
.ParentsControlPanelTable table tr th:last-child {
    border-right: 0;
}
.ContinueButtonFix {
    text-align: center;
}
.ParentCenterAlignedTable table {
    margin: 0 auto;
}
.JustWhiteBox {
    float: inherit;
    background-color: White;
    margin-bottom: 10px;
    display: block;
}
.MediumButton {
    background-color: #F5CD2F;
    color: #000;
    font-family: Verdana, Helvetica, Sans-Serif;
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
    display: inline-block;
    border: 1px solid #6E99C9;
    text-align: center;
    cursor: pointer;
}
.MediumButton:hover {
    background-color: #FF9D2F;
}
.MediumButtonSignup {
    background-color: #8CE16F;
    color: #000;
    height: 2.5em;
    font-family: Verdana, Helvetica, Sans-Serif;
    font-size: 15px;
    font-weight: bold;
}
.catalog_nav {
    color: White;
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 14px;
    position: relative;
    z-index: 5;
    float: right;
}
.catalog_nav ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.catalog_nav li {
    float: left;
    position: relative;
    text-align: center;
}
.catalog_nav a,
.catalog_nav a:visited {
    background: #b9cee5 url(/images/tabmiddle.png) repeat-x;
    display: block;
    padding: 5px;
    margin-right: 4px;
    font-size: 14px;
    color: #FFF;
    height: 18px;
    cursor: pointer;
}
.catalog_nav .catalog_navselected {
    display: block;
    background: #6E99C9 url(/images/tabmiddleselected.png) repeat-x;
    padding: 5px 10px;
    margin-right: 4px;
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    height: 18px;
}
.catalog_nav ul ul a.catalog_navdrop,
t.menu ul ul a.catalog_navdrop:visited {
    font-weight: bold;
    text-decoration: none;
}
.catalog_nav ul ul ul a:hover {
    text-decoration: underline;
}
.catalog_nav ul ul {
    visibility: hidden;
    position: absolute;
    height: 0;
    left: 0;
    z-index: 20;
}
.catalog_nav ul ul ul {
    left: 141px;
    top: 0;
    width: 89px;
}
.catalog_nav ul ul ul.left {
    left: -149px;
}
.catalog_nav ul ul a,
.catalog_nav ul ul a:visited {
    color: #FFF;
    background: #6E99C9;
    height: auto;
    padding: 4px 6px;
    line-height: 1em;
    width: 78px;
    margin-right: 4px;
    z-index: 20;
    height: 18px;
}
.catalog_nav img {
    border: 0;
    margin-right: 3px;
    vertical-align: middle;
}
.catalog_nav a:hover {
    text-decoration: none;
    background: #6E99C9 url(/images/tabmiddleselected.png) repeat-x;
}
.catalog_nav ul ul a:hover {
    text-decoration: none;
    background: #517194;
}
.catalog_nav :hover > a,
.catalog_nav ul ul :hover > a {
    text-decoration: none;
}
.catalog_nav ul li:hover ul,
.catalog_nav ul a:hover ul {
    visibility: visible;
}
.catalog_nav ul :hover ul ul {
    visibility: hidden;
}
.catalog_nav ul :hover ul :hover ul {
    visibility: visible;
}
.catalog_nav table {
    position: absolute;
    top: 0;
    margin-top: 15px;
    left: 0;
    border-collapse: collapse;
    background: #6E99C9;
    display: none;
}
.catalog_nav table a,
.catalog_nav table a:visited {
    border: none;
    width: 78px;
    padding-top: 8px;
}
.Step1 {
    float: left;
    font-size: 16px;
    font-weight: bold;
    background: url(/images/step1.png) no-repeat 0;
    line-height: 32px;
    padding-left: 32px;
}
.Step2 {
    float: left;
    font-size: 16px;
    font-weight: bold;
    background: url(/images/step2.png) no-repeat 0;
    line-height: 32px;
    padding-left: 32px;
}
.Step3 {
    float: left;
    font-size: 16px;
    font-weight: bold;
    background: url(/images/step3.png) no-repeat 0;
    line-height: 32px;
    padding-left: 32px;
}
.CatalogOptions {
    float: left;
    padding: 20px;
    background: #8bc2ff url(/images/catalog_options_back.png) repeat-x;
    border: 0;
    margin-bottom: 0;
    display: none;
    width: 176px;
    overflow: hidden;
}
#ApplyFilters input {
    font-size: 17px;
    cursor: pointer;
}
.CatalogOptionsSections {
    float: left;
    margin: 5px 20px 0 5px;
}
.CatalogOptionsHelp {
    margin-top: -5px;
    float: left;
}
.CatalogOptionsHelp ul {
    list-style: none;
}
.CatalogOptionsHelp ul li {
    margin-top: 3px;
}
.CatalogOptionsHelp ul li a {
    background: url(/images/smallmetallicbutton.png) repeat-x;
    border: 2px solid transparent;
    padding: 3px;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    display: block;
    width: 120px;
    text-align: center;
}
.CatalogOptionsHelp ul li a:hover {
    border-color: #333;
}
.bc_iconset,
#BuildersClubContainer div.icons {
    background-image: url(/images/bc_page_icon_sprites.png);
    background-repeat: no-repeat;
    width: 32px;
    display: inline-block;
    text-align: center;
}
#BuildersClubContainer div.maps_icon {
    background-position: 0 1px;
    height: 30px;
}
#BuildersClubContainer div.money_icon {
    background-position: 0 -28px;
    height: 28px;
}
#BuildersClubContainer div.shirt_icon {
    background-position: 0 -55px;
    height: 30px;
}
#BuildersClubContainer div.ads_icon {
    background-position: 0 -85px;
    height: 30px;
}
.bc_icon,
#BuildersClubContainer div.bc_icon {
    background-position: 0 -115px;
    height: 31px;
}
#BuildersClubContainer div.gear_icon {
    background-position: 0 -146px;
    height: 30px;
}
#BuildersClubContainer div.groups_icon {
    background-position: 0 -173px;
    height: 23px;
}
#BuildersClubContainer div.badges_icon {
    background-position: 0 -196px;
    height: 30px;
}
#BuildersClubContainer div.beta_icon {
    background-position: 0 -228px;
    height: 31px;
}
#BuildersClubContainer div.tbc_icon {
    background-position: 0 -263px;
    height: 31px;
}
#BuildersClubContainer div.obc_icon {
    background-position: 0 -297px;
    height: 31px;
}
#BuildersClubContainer div.upgrades_enabled {
    background-image: url(/images/buybc/bc_sprites_math_enabled.png);
    background-repeat: no-repeat;
    display: inline-block;
    height: 95px;
    width: 128px;
}
#BuildersClubContainer div.upgrades_disabled {
    background-image: url(/images/buybc/bc_sprites_math_disabled.png);
    background-repeat: no-repeat;
    display: inline-block;
    height: 95px;
    width: 128px;
}
#BuildersClubContainer div.bcmonthly {
    background-position: 0 0;
}
#BuildersClubContainer div.bc6 {
    background-position: -128px 0;
}
#BuildersClubContainer div.bc12 {
    background-position: -256px 0;
}
#BuildersClubContainer div.bclife {
    background-position: -384px 0;
}
#BuildersClubContainer div.tbcmonthly {
    background-position: 0 -95px;
}
#BuildersClubContainer div.tbc6 {
    background-position: -128px -95px;
}
#BuildersClubContainer div.tbc12 {
    background-position: -256px -95px;
}
#BuildersClubContainer div.tbclife {
    background-position: -384px -95px;
}
#BuildersClubContainer div.obcmonthly {
    background-position: 0 -191px;
}
#BuildersClubContainer div.obc6 {
    background-position: -128px -191px;
}
#BuildersClubContainer div.obc12 {
    background-position: -256px -191px;
}
#BuildersClubContainer div.obclife {
    background-position: -384px -191px;
}
#BuildersClubContainer .bctotbcconversion {
    background-image: url(/images/BuyBC/bc_lifetime_tbc_lifetime_discount.png);
    background-repeat: no-repeat;
    height: 95px;
    width: 128px;
}
#BuildersClubContainer .bctoobcconversion {
    background-image: url(/images/BuyBC/bc_lifetime_obc_lifetime_discount.png);
    background-repeat: no-repeat;
    height: 95px;
    width: 128px;
}
#BuildersClubContainer .tbctoobcconversion {
    background-image: url(/images/BuyBC/tbc_lifetime_obc_lifetime_discount.png);
    background-repeat: no-repeat;
    height: 95px;
    width: 128px;
}
#BuildersClubContainer upgrade_button {
    cursor: pointer;
}
.OBCSellSheet ul {
    list-style: armenian;
    width: 500px;
}
.OBCSellSheet ul li {
    padding: 10px;
    border-bottom: 1px solid #abc;
    position: relative;
}
.OBCSellSheet ul li em {
    -moz-background-clip: border;
    -moz-background-inline-policy: continuous;
    -moz-background-origin: padding;
    background: transparent url(/images/obctip.png) no-repeat scroll 0 0;
    display: none;
    font-style: normal;
    height: 45px;
    left: -10px;
    padding: 15px 0;
    position: absolute;
    text-align: center;
    top: -40px;
    width: 300px;
    z-index: 2;
    color: #FFF;
}
.hoverover {
    cursor: pointer;
}
.AlertSpace {
    color: #6e99c9;
    margin: 0 auto;
}
div.icons,
a.icons {
    background-image: url(/images/master_page_image_sprites.png?v=1202010);
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
}
div.message_icon {
    background-position: -65px 0;
    height: 11px;
    width: 13px;
    margin: 3px;
    float: left;
}
div.robux_icon {
    background-position: -33px 0;
    height: 12px;
    width: 16px;
    margin: 3px;
    float: left;
}
div.tickets_icon {
    background-position: -49px 0;
    height: 16px;
    width: 16px;
    margin: 3px;
    float: left;
}
div.friends_icon {
    background-position: -78px 0;
    height: 14px;
    width: 12px;
    margin: 3px;
    float: left;
}
a.rss_icon {
    background-position: 0 0;
    height: 14px;
    width: 14px;
}
a.twitter_icon {
    background-position: -14px 0;
    height: 16px;
    width: 19px;
}
div.MessageAlert {
    height: 17px;
    vertical-align: middle;
    width: 49%;
    float: left;
    height: 32px;
    overflow: hidden;
    background: #FFF;
}
div.MessageAlert a:hover {
    color: #1874CD;
}
div.RobuxAlert {
    padding-top: 2px;
    vertical-align: middle;
    width: 49%;
    float: left;
    overflow: hidden;
    border-top: 1px solid #6E99C9;
    background: #FFF;
    height: 29px;
}
div.RobuxAlert a {
    color: Green;
    vertical-align: middle;
}
div.RobuxAlert a:hover {
    color: #49b745;
}
div.TicketsAlert {
    padding-top: 2px;
    vertical-align: middle;
    width: 49%;
    float: left;
    overflow: hidden;
    border-left: 1px solid #6E99C9;
    border-top: 1px solid #6E99C9;
    background: #FFF;
    height: 29px;
}
div.TicketsAlert a:hover {
    color: #FF3000;
}
div.FriendsAlert {
    color: #883000;
    height: 20px;
    vertical-align: middle;
    width: 49%;
    float: left;
    height: 32px;
    overflow: hidden;
    border-left: 1px solid #6E99C9;
    background: #FFF;
}
div.FriendsAlert a {
    color: #883000;
    vertical-align: middle;
}
div.FriendsAlert a:hover {
    color: #00D;
}
a.MessageAlertCaption {
    color: #6e99c9;
    vertical-align: middle;
    font-weight: bold;
}
a.RobuxAlertCaption {
    color: Green;
    vertical-align: middle;
    font-weight: bold;
}
a.TicketsAlertCaption {
    color: #fbb117;
    vertical-align: middle;
    font-weight: bold;
}
a.FriendsAlertCaption {
    color: #883000;
    vertical-align: middle;
    font-weight: bold;
}
#Authentication span a {
    color: #FFF;
}
.MySetsDisplayInfo {
    padding: 10px 20px 10px 20px;
    background: #8bc2ff url(/images/catalog_options_back.png) repeat-x;
    border: 0;
    margin-bottom: 0;
    overflow: hidden;
    height: 125px;
}
.MySetsDisplayInfo h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    color: White;
    font-size: 16px;
    font-weight: bold;
}
.MySetsDisplayInfo h1 > a {
    cursor: pointer;
    color: Blue;
    font-size: 12px;
    font-style: italic;
    margin-left: 5px;
}
.CreateSetButton {
    cursor: pointer;
    text-decoration: none;
}
.SetAddButton {
    margin-bottom: 3px;
    cursor: pointer;
    height: 16px;
    display: block;
    font-size: 12px;
    overflow: hidden;
    width: 100px;
}
.CreateSetButton:hover,
.SetAddButton:hover {
    background-color: Gray;
}
.SetAddButtonAlreadyContainsItem {
    margin-bottom: 3px;
    height: 16px;
    display: block;
    width: 100%;
    cursor: default;
    color: #ddd;
    font-style: italic;
    font-size: 12px;
    background: url(/images/accept.png) no-repeat center left;
    background-position: 1px 0;
    padding-left: 18px;
    width: 92px;
    overflow: hidden;
}
.CantAddToSetLabel {
    float: left;
    width: 75px;
}
.CantAddToSetHelpImg {
    float: left;
    vertical-align: text-top;
    cursor: pointer;
}
.SetDescription {
    float: left;
    overflow-y: auto scroll;
    overflow-x: hidden;
}
.SetList {
    z-index: 10;
    height: 0;
    float: left;
    width: 0;
}
.friendBarDropDown {
    position: absolute;
    margin-top: 0;
    margin-left: 28px;
    z-index: 10;
}
.SetList > img {
    position: relative;
    float: left;
    z-index: 10;
    width: 20px;
    cursor: pointer;
    top: 5px;
    left: 5px;
}
.CantAddToSetLabel,
.SetListDropDownList {
    float: left;
    position: relative;
    top: -18px;
    left: 20px;
    z-index: 11;
    display: block;
}
.CantAddToSetLabel,
.SetListDropDownList {
    background: #6e99c9;
    width: 100px;
    border: 3px solid #C6D9FD;
    padding: 3px;
}
.SetListDropDown,
.friendBarDropDownList {
    display: none;
    float: left;
    z-index: 10;
    height: 0;
}
.friendBarDropDownList {
    position: relative;
    height: 100%;
    width: 120px;
    border: 1px solid black;
}
.friendBarDropDownList > ul {
    list-style: none outside none;
    margin: 0;
    padding-left: 0;
}
.friendBarDropDownList li {
    background-color: White;
    color: Black;
    cursor: default;
    float: left;
    position: relative;
    list-style: none;
    display: block;
    z-index: 11;
    height: 18px;
}
.friendBarDropDownList li > div {
    margin: 2px;
    width: 116px;
}
.friendBarDropDownList li:hover {
    background-color: Black;
    color: White;
}
.friend_dropdownbutton20 {
    background: url(/images/friendsbar/friend_dropdownBtn20h.jpg);
    float: left;
    cursor: pointer;
    height: 20px;
    width: 20px;
    background-position: top left;
}
.friend_dropdownbutton20:hover {
    background-position: bottom left;
}
.ContestButton {
    float: left;
    font-size: 20px;
    padding: 4px 10px;
    background: url(/images/Contests/contestbutton.png) repeat-x;
    color: #FFF;
    border: 2px solid #193441;
    cursor: pointer;
    text-align: center;
}
.ContestButton:hover {
    background: #5d90a6;
}
.ContestButtonSkip {
    font-size: 20px;
    padding: 4px 10px;
    background-color: #283d47;
    color: #FFF;
    border: 2px solid #193441;
    cursor: pointer;
    text-align: center;
}
.ContestButtonSkip:hover {
    background: #5d90a6;
}
ul.ContestPrizes {
    list-style: none;
    margin: 0;
    padding: 0;
}
a.slider_next {
    color: #444;
    font-size: 20px;
    font-weight: bold;
}
a.slider_prev {
    color: #444;
    font-size: 20px;
    font-weight: bold;
}
a.contesttab {
    float: left;
    background: #B2C1D2;
    padding: 3px 5px;
    color: #FFF;
    margin-right: 4px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    font-weight: bold;
}
a.contesttab:hover {
    background: #6E99C9;
}
a.contesttabselected {
    float: left;
    background: #6E99C9;
    padding: 3px 5px;
    color: #FFF;
    margin-right: 4px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    font-weight: bold;
}
div.ContestBox {
    border: 2px solid #6E99C9;
    background: url(/images/Contests/contestback.png?v=2) repeat-x;
    background-color: #c5d3e3;
    float: left;
    margin-bottom: 10px;
    padding: 10px;
}
.Contests {
    float: left;
    width: 900px;
    margin: 10px auto 0 auto;
}
.Contests h1 {
    margin: 0;
    color: #6E99C9;
    float: left;
    width: 100%;
}
.FullSubmissions {
    width: 300px;
    padding: 5px;
    float: left;
    margin-left: 3px;
    margin-bottom: 1px;
    border-bottom: 1px solid #FFF;
    color: #000;
}
.ContestShowcase {
    width: 90%;
    padding: 2px;
    border: 2px solid transparent;
    cursor: pointer;
    margin: 2px auto;
    background: #d5dec2;
}
.ContestShowcase:hover {
    border: 2px solid #AAA;
}
.VibModalBack {
    z-index: 665;
    position: fixed;
    width: 100%;
    height: 100%;
    background: gray;
    opacity: .5;
    filter: alpha(opacity=50);
    background-repeat: repeat;
    top: 0;
    left: 0;
}
.VibModal {
    z-index: 666;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.VibModalBox {
    z-index: 667;
    width: 500px;
    margin: 7% auto;
    background: #FFF;
    border: 5px solid #6E99C9;
}
.VibModalContents {
    padding: 10px;
}
.VibModalHeader {
    width: 96%;
    padding: 1% 2%;
    font-size: 20px;
    font-weight: bold;
    background: #6E99C9;
    text-align: center;
    color: #FFF;
}
.VibModalClose {
    font-size: 25px;
    color: #F00;
    font-weight: bold;
    float: right;
    line-height: 17px;
    cursor: pointer;
}
div.cannot_vote {
    height: 30px;
    width: 30px;
    background: url(/images/Contests/not_checked_box.png);
    vertical-align: text-top;
    margin-right: 7px;
    float: left;
}
div.can_vote {
    height: 30px;
    width: 30px;
    background: url(/images/Contests/checked_box.png);
    vertical-align: text-top;
    margin-right: 7px;
    float: left;
}
div.vote_text {
    font-size: 18px;
    float: left;
    color: #0F0;
}
div.no_vote_text {
    font-size: 18px;
    float: left;
    color: #F00;
}
.Contests .StatCounters {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    color: #444;
    text-align: left;
    margin-left: 10px;
    z-index: 4000;
}
.Contests .StatType {
    font-size: 14px;
    margin-left: 4px;
    margin-top: -7px;
    display: block;
}
.Contests .PlaceOpaqueName {
    width: 148px;
    font-weight: bold;
    text-align: center;
    padding: 3px 6px;
    font-size: 10px;
    color: #444;
    background: #FFF;
    opacity: .6;
    filter: alpha(opacity=60);
    margin: 1px auto 7px auto;
    height: 24px;
    overflow: hidden;
    word-wrap: none;
}
.Contests .FifthPlaceHolder {
    float: left;
    width: 20%;
    margin-top: 5px;
    margin: 0 auto;
    text-align: center;
}
div.friend_dock_chatbox {
    float: left;
    background-color: #E5E3E4;
    width: 200px;
    margin-right: 10px;
    border: solid 1px #7F7F7F;
    padding-bottom: 10px;
}
div.friend_dock_chatsettings {
    color: Black;
    background-color: #E5E5E5;
    border: solid 1px black;
    width: 150px;
    margin-right: 10px;
    position: fixed;
    bottom: 105px;
    font-size: 11px;
    z-index: 1200;
    right: 30px;
}
div.chat_settings_group_header {
    font-weight: bold;
    margin-bottom: 5px;
}
div#friend_dock_chatholder {
    position: fixed;
    bottom: 106px;
    z-index: 1022;
}
div#friend_dock_container {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 10px;
    font-family: Verdana;
    z-index: 1022;
}
div#friend_dock_titlebar ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
div#friend_dock_thumb_container {
    border: solid 1px #7F7F7F;
    background-color: White;
    height: 74px;
    padding: 5px;
    width: 100%;
    overflow: hidden;
}
div#friend_dock_thumbnails {
    float: left;
}
div#friend_dock_titlebar {
    height: 18px;
    position: relative;
}
div#friend_dock_titlebar a {
    color: Black;
}
div#friend_dock_minimized_container {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1022;
}
div#friend_dock_friendzone,
div#friend_dock_chatzone {
    float: left;
    height: 65px;
    margin-top: 5px;
    margin-right: 10px;
    margin-left: 10px;
}
div.friend_dock_chatbox_closebutton {
    float: right;
    padding-right: 5px;
    font-weight: bold;
    font-size: 14px;
}
div.friend_dock_chatbox_closebutton a.hover {
    color: #fff;
    text-decoration: none;
}
div.blinkoffheader,
div.blinkonheader {
    background-repeat: repeat-x;
    border: none;
    height: 16px;
    padding: 2px;
}
div.blinkoffheader {
    background-image: url('/images/chat/HeaderBarRepeat1x1.jpg');
}
div.blinkonheader {
    background-image: url('/images/chat/HeaderBarRepeat1x1_orange.jpg');
}
div.friend_dock_chatbox_username {
    width: 150px;
    float: left;
    font-size: 14px;
    color: White;
}
div.friend_dock_chatbox_chat {
    background-color: White;
    border: solid 1px black;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 176px;
    padding: 2px;
    height: 196px;
    overflow: auto;
}
textarea.friend_dock_chatbox_entry {
    margin-left: 10px;
    width: 176px;
    padding: 2px;
    overflow: auto;
    overflow-x: hidden;
}
span.friend_dock_onlinestatus {
    position: absolute;
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url(/images/online.png);
    background-repeat: no-repeat;
}
span.friend_dock_offlinestatus {
    position: absolute;
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url(/images/offline.png);
    background-repeat: no-repeat;
}
div.friend_dock_onlinestatus {
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
    width: 16px;
    height: 16px;
    background-image: url(/images/online.png);
    background-repeat: no-repeat;
}
div.friend_dock_offlinestatus {
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
    width: 16px;
    height: 16px;
    background-image: url(/images/offline.png);
    background-repeat: no-repeat;
}
div.friend_dock_newmessage {
    position: absolute;
    margin-top: -5px;
    margin-left: 42px;
    width: 16px;
    height: 16px;
    background-image: url(/images/newmessage.png);
    background-repeat: no-repeat;
}
div.friend_dock_friend {
    width: 50px;
    height: 70px;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
}
div.friend_dock_pager {
    width: 16px;
    height: 16px;
    margin-left: 0;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 25px;
}
.Navigation {
    height: 35px;
    z-index: 1022;
}
.Navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 890px;
    margin: 0 auto;
}
.Navigation ul li {
    float: left;
    position: relative;
}
.Navigation ul li a,
.Navigation ul li a:visited {
    display: inline-block;
    color: #FFF;
    padding: 0 9px;
    border-left: 1px solid #FFF;
    font-size: 18px;
}
.Navigation ul li a h1,
.Navigation ul li a h2 {
    cursor: pointer;
}
.Navigation ul li:first-child a {
    border-left: none;
}
.Navigation .dropdownnavcontainer {
    display: none;
    position: absolute;
    margin-left: 126px;
    margin-top: 27px;
    z-index: 1024;
}
.Navigation .dropdownmainnav {
    display: block;
    background: #6E99C9;
    border-left: 1px solid #FFF;
    border-right: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    padding: 10px;
    width: 250px;
    float: left;
    z-index: 1024;
    height: 225px;
}
.Navigation .dropdownmainnav a {
    color: White;
}
.Navigation .dropdownmainnav a:hover {
    text-decoration: underline;
}
.friend_dock_username {
    height: 15px;
    overflow: hidden;
    float: left;
    width: 55px;
}
.friend_dock_username_href {
    color: Black!important;
    font-size: 10px;
    font-family: Verdana;
}
div#chatbar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0;
    font-size: 11px;
    font-family: Verdana;
    margin: 0 1%;
    z-index: 1022;
}
div#statusbar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    background: url(chatbarback.jpg);
    border-left: 3px solid #E5E5E5;
    border-right: 3px solid #E5E5E5;
    font-size: 11px;
    font-family: Verdana;
    margin: 0 1%;
    z-index: 1022;
}
#chat {
    float: left;
}
.chat_box {
    border-left: 2px solid #6E99C9;
    border-right: 2px solid #6E99C9;
    width: 217px;
    float: left;
    height: 280px;
    overflow-y: scroll;
    overflow-x: none;
    background: #eee;
    font-size: 11px;
    font-family: Verdana;
}
.chat_text {
    width: 80%;
    padding: 4px;
    float: left;
    font-size: 11px;
    font-family: Verdana;
}
.chat_name {
    color: #88a9bf;
    border-bottom: 1px solid #CCC;
    font-weight: bold;
    padding: 3px;
    float: left;
    font-size: 11px;
    font-family: Verdana;
    width: 75%;
}
.chat_header {
    width: 211px;
    float: left;
    color: #03C;
    background: #6E99C9;
    color: #000;
    font-weight: bold;
    font-size: 12px;
    margin: 0;
    padding: 5px;
    font-family: Verdana;
}
.chat_options {
    width: 219px;
    float: left;
    color: #03C;
    background: #6E99C9;
    color: #000;
    font-weight: bold;
    font-size: 12px;
    margin: 0;
    padding: 1px;
    font-family: Verdana;
}
#chat_close {
    background: url(close.png);
    height: 10px;
    width: 10px;
    float: right;
    cursor: pointer;
    margin-right: 1px;
}
#chat_mini {
    background: url(mini.png);
    height: 10px;
    width: 10px;
    float: right;
    cursor: pointer;
    margin-right: 5px;
}
.chat_abuse {
    color: #FFF;
    background: yellow;
    color: #000;
    font-weight: bold;
    padding: 1px;
    cursor: pointer;
    font-family: Verdana;
    font-size: 7px;
    float: left;
}
.chat_abuse:hover {
    color: #FFF;
    background: red;
    color: #000;
    font-weight: bold;
    padding: 1px;
    cursor: pointer;
    font-family: Verdana;
    font-size: 7px;
    float: left;
}
.chat_wrapper {
    width: 221px;
    background: #eee;
    position: absolute;
    bottom: 0;
    float: left;
    z-index: 1022;
    margin-left: 3px;
}
#chatfix {
    position: fixed;
    bottom: 0;
    left: 176px;
    z-index: 1337;
}
.chat_input {
    float: left;
    background: #eee;
    border-right: 2px solid #6E99C9;
    border-left: 2px solid #6E99C9;
    border-bottom: 2px solid #6E99C9;
    border-top: 1px solid #6E99C9;
    width: 217px;
}
.chat_contents {
    bottom: 27px;
    display: none;
}
.roster_box {
    border-bottom: 2px solid #bcbcbc;
    float: left;
    cursor: pointer;
    padding: 4px;
    width: 125px;
}
.roster_box:hover {
    border-bottom: 2px solid #bcbcbc;
    float: left;
    cursor: pointer;
    background: #eee;
    padding: 4px;
    width: 125px;
}
.roster_name {
    margin-left: 5px;
}
.roster_alert {
    margin: 1px;
    padding: 1px;
    font-size: 11px;
    font-family: Verdana;
}
#roster {
    float: left;
    font-size: 11px;
    font-family: Verdana;
    display: none;
    height: 331px;
    overflow-y: scroll;
    background: #d8e0e9;
    margin: 5px;
    width: 150px;
    position: absolute;
    left: 0;
    bottom: 25px;
    z-index: 1022;
}
#roster-wrapper {
    float: left;
    height: 1px;
    width: 170px;
}
#chat_friends {
    float: left;
    height: 20px;
    color: #000;
    font-weight: bold;
    padding-left: 33px;
    padding-top: 7px;
    width: 119px;
    cursor: pointer;
}
#chat_friends:hover {
    float: left;
    height: 20px;
    background: #d8e0e9;
    color: #000;
    font-weight: bold;
    padding-left: 33px;
    padding-top: 7px;
    width: 119px;
    cursor: pointer;
}
#statusbar_wrapper {
    padding-top: 3px;
    float: left;
}
#long-wrapper {
    float: left;
}
#chatlog {
    float: left;
    padding: 3px;
    color: Green;
}
.chat-unavailable {
    background: url(unavailable.png);
    height: 15px;
    width: 15px;
    float: left;
}
.chat-available {
    background: url(available.png);
    height: 15px;
    width: 15px;
    float: left;
}
.chat-default {
    height: 15px;
    width: 15px;
    float: left;
}
.chat_send_button {
    background: #eee;
    border: 0 solid #FFF;
    float: left;
    line-height: 17px;
    height: 18px;
    border-left: 2px solid #CCC;
    border-bottom: 0;
    border-right: 0;
    border-top: 0;
    padding: 3px;
    cursor: pointer;
}
.chat_send_button:hover {
    background: #D8E0E9;
    border: 0 solid #FFF;
    float: left;
    line-height: 17px;
    height: 18px;
    border-left: 2px solid #CCC;
    border-bottom: 0;
    border-right: 0;
    border-top: 0;
    padding: 3px;
    cursor: pointer;
}
.chat_send_input {
    border: 0 solid #FFF;
    float: left;
    height: 22px;
    font-size: 12px;
    padding: 2px;
}
.chat_close {
    cursor: pointer;
    color: #FFF;
    font-size: 16px;
    line-height: 11px;
    padding-right: 8px;
    float: left;
    padding-top: 6px;
}
.chat_close:hover {
    cursor: pointer;
    color: #000;
    font-size: 16px;
    line-height: 11px;
    padding-right: 8px;
    float: left;
    padding-top: 6px;
}
.chat_entry_click {
    cursor: pointer;
    padding-right: 10px;
    padding-top: 7px;
    padding-left: 10px;
    padding-bottom: 7px;
    padding-top: 6px;
}
.chat_entry {
    float: left;
    background: #d8e0e9;
    height: 27px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    width: 221px;
}
#chat_login {
    margin-top: 1px;
    margin-left: 2px;
    float: left;
}
#chat_logout {
    margin-top: 1px;
}
#chat-availability {
    float: left;
}
#partycontainer {
    position: fixed;
    bottom: 91px;
    z-index: 1022;
}
.ActiveChatThumb {
    z-index: 10;
    cursor: pointer;
}
.RemoveActiveChat {
    position: absolute;
    z-index: 10;
    cursor: pointer;
    margin-left: 40px;
}
.clear {
    overflow: hidden;
    width: 100%;
}
.followme_green19h {
    background-image: url('/images/Buttons/followme_19h.png');
    background-repeat: no-repeat;
    background-position: left top;
    height: 19px;
    cursor: pointer;
    width: 65px;
    float: left;
    text-align: center;
}
.followme_green19h:hover {
    background-position: left bottom;
}
.followme_gray19h {
    background-image: url('/images/Buttons/followme_19h-gray.png');
    background-repeat: no-repeat;
    background-position: left top;
    height: 19px;
    cursor: pointer;
    width: 65px;
    float: left;
    text-align: center;
}
.followme_gray19h:hover {
    background-position: left bottom;
}
.tab_white19h,
.tab_white19hselected {
    background: transparent url(` + tab_white19h_l2 + `) no-repeat left top;
    color: #444;
    display: block;
    float: left;
    font: normal 12px verdana, sans-serif;
    text-decoration: none;
    padding-left: 2px;
    height: 19px;
    outline: none;
    cursor: pointer;
}
.tab_white19h span,
.tab_white19hselected span {
    background: transparent url(` + tab_white19h_r2 + `) no-repeat right top;
    display: block;
    height: 15px;
    padding: 2px 15px 2px 7px;
    text-decoration: none;
}
.tab_white19h:hover,
.tab_white19hselected {
    background-position: left bottom;
    color: #000;
    outline: none;
    text-decoration: none;
}
.tab_white19h a,
.tab_white19hselected a {
    text-decoration: none;
    outline: none;
}
.tab_white19h:hover span,
.tab_white19hselected span {
    background-position: right bottom;
    padding: 3px 15px 1px 7px;
    text-decoration: none;
}
.tab_white19h_flash {
    background: transparent url('/images/friendsbar/tab_blue19h_l.gif') no-repeat left top;
}
.tab_white19h_flash span {
    background: transparent url('/images/friendsbar/tab_blue19h_r.gif') no-repeat right top;
    color: White;
}
.bold {
    font-weight: bold;
}
.clear {
    clear: both;
}
.alignCenter {
    text-align: center;
}
.InGamePopup {
    background: url(` + containerBkg_01 + `);
    _overflow: hidden;
}
.voteYes {
    background: url(/images/cssspecific/rbx2/button_vote.jpg);
    width: 24px;
    height: 23px;
    background-position: top left;
}
.voteYes:hover {
    background-position: bottom left;
}
.voteNo {
    background: url(/images/cssspecific/rbx2/button_vote.jpg);
    width: 24px;
    height: 23px;
    background-position: top right;
}
.voteNo:hover {
    background-position: bottom right;
}
#MyAccountBalanceContainer {
    font-family: Verdana, Helvetica, Sans-Serif;
}
#MyAccountBalanceContainer h2 {
    font-family: Verdana, Helvetica, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    letter-spacing: .4em;
    line-height: 1em;
    margin: 10px 0 0 -2px;
    padding: 0;
}
#MyAccountBalanceContainer h3 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    font-family: Verdana, Helvetica, Sans-Serif;
    font-size: 1.7em;
    font-weight: normal;
    letter-spacing: .1em;
    line-height: 1em;
    margin: 0;
    padding: 5px;
    text-align: center;
}
#MyAccountBalanceContainer h4 {
    font-family: Verdana, Sans-Serif;
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0;
    padding: 5px 5px 5px 15px;
    color: #900;
}
#MyAccountBalanceContainer #AboutRobux {
    border-bottom: solid 1px #000;
    border-left: solid 1px #000;
    border-right: solid 1px #000;
    float: right;
    margin-top: 20px;
    width: 275px;
}
#MyAccountBalanceContainer #AboutRobux h3 {
    border-top: solid 1px #000;
}
#MyAccountBalanceContainer #AboutRobux p {
    margin: 0;
    padding: 10px 15px;
}
#MyAccountBalanceContainer #Earnings {
    border: solid 1px #000;
    margin-top: 20px;
    padding-bottom: 10px;
    width: 600px;
}
#MyAccountBalanceContainer .Earnings_Period {
    margin-bottom: 20px;
}
#MyAccountBalanceContainer .Earnings_LoginAward,
#MyAccountBalanceContainer .Earnings_PlaceTrafficAward,
#MyAccountBalanceContainer .Earnings_Ambassador {
    padding: 0 0 0 50px;
    height: 16px;
    background-color: #eee;
}
#MyAccountBalanceContainer .Earnings_SaleOfGoods,
#MyAccountBalanceContainer .Earnings_PeriodTotal,
#MyAccountBalanceContainer .Earnings_LoginAwardBC,
#MyAccountBalanceContainer .Earnings_Currency {
    padding: 0 0 0 50px;
    height: 16px;
}
#MyAccountBalanceContainer .Earnings_LoginAward .Label,
#MyAccountBalanceContainer .Earnings_LoginAwardBC .Label,
#MyAccountBalanceContainer .Earnings_PlaceTrafficAward .Label,
#MyAccountBalanceContainer .Earnings_SaleOfGoods .Label,
#MyAccountBalanceContainer .Earnings_Ambassador .Label,
#MyAccountBalanceContainer .Earnings_Currency .Label {
    float: left;
    width: 380px;
}
#MyAccountBalanceContainer .Earnings_PeriodTotal .Label {
    float: left;
    padding-right: 10px;
    text-align: right;
    width: 370px;
}
#MyAccountBalanceContainer .Earnings_PeriodTotal .Field {
    color: Blue;
    font-weight: bold;
}
#MyAccountBalanceContainer .Field {
    float: right;
    width: 75px;
}
#MyAccountBalanceContainer .Zebra {
    background-color: #eee;
}
table.stats {
    text-align: center;
    font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 11px;
    color: #fff;
    width: 280px;
    background-color: #666;
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
}
table.stats td {
    background-color: #CCC;
    color: #000;
    padding: 4px;
    text-align: left;
    border: 1px #fff solid;
}
table.stats td.hed {
    background-color: #666;
    color: #fff;
    padding: 4px;
    text-align: left;
    border-bottom: 2px #fff solid;
    font-size: 12px;
    font-weight: bold;
}
#AssetContainer {
    margin: 0 auto;
    width: 620px;
}
#AssetContainer h2 {
    color: #333;
    font-size: x-large;
    margin-bottom: 5px;
}
#AssetContainer #Asset {
    background-color: #eee;
    border: solid 1px #000;
    color: #555;
}
#BadgesContainer {
    border: solid 1px #000;
}
#BadgesContainer .Legend .BadgesList {
    color: #666;
    float: left;
    list-style: none;
    margin: 0;
    padding: 0;
}
#BadgesContainer .Legend .BadgesList li {
    background-color: #fff;
    background-position: 0 5px;
    background-repeat: no-repeat;
    margin: 10px 0 20px 0;
    padding: 0 0 7px 80px;
    border: solid 1px #000;
}
#CommunityBadges .Legend,
#FriendshipBadges .Legend,
#CombatBadges .Legend,
#VisitsBadges .Legend {
    float: left;
    padding: 5px 15px 5px 5px;
    width: 500px;
}
#StatisticsRankingsPane_Friendship,
#StatisticsRankingsPane_Combat,
#StatisticsRankingsPane_Visits,
#FeaturedBadge_Community {
    float: right;
    margin: 15px;
    width: 300px;
}
#FeaturedBadge_Community {
    border: solid 1px #000;
    margin-top: 20px;
    width: 325px;
    background-color: White;
}
#TurboBuildersClubBadge_Community {
    border: solid 1px #000;
    margin: 15px 15px 15px 15px;
    background-color: White;
    float: left;
}
#OutrageousBuildersClubBadge_Community {
    border: solid 1px #000;
    margin: 15px 15px 15px 15px;
    background-color: White;
    float: left;
}
#FeaturedBadge_Community h4,
#OutrageousBuildersClubBadge_Community h4 {
    background-color: #6e99c9;
    border-bottom: solid 1px #000;
    color: #fff;
    font-size: 1.4em;
    font-weight: bold;
    letter-spacing: .2em;
    margin: 0;
    padding: 3px;
    text-align: center;
}
#OutrageousBuildersClubBadge_Community h4 {
    background-color: #000;
    color: #FFF;
    border-bottom: solid 1px #000;
}
#OutrageousBuildersClubBadge_Community h4 .OutrageousSpan {
    color: White;
}
.FeaturedOBCContent .FeaturedOBCDescription {
    color: #222;
    margin: 10px 10px 10px 10px;
    font-size: 14px;
}
.FeaturedOBCIcon {
    margin: 10px 10px 10px 10px;
    float: left;
    vertical-align: text-top;
    width: 150px;
}
#OutrageousBuildersClubBadge_Community {
    margin: 10px 10px 10px;
}
#FeaturedBadge_Community h4,
#TurboBuildersClubBadge_Community h4 {
    background-color: #6e99c9;
    border-bottom: solid 1px #000;
    color: #fff;
    font-size: 1.4em;
    font-weight: bold;
    letter-spacing: .2em;
    margin: 0;
    padding: 3px;
    text-align: center;
}
#TurboBuildersClubBadge_Community h4 {
    background-color: #B94542;
    color: #6e99FF;
    border-bottom: solid 1px #000;
}
#TurboBuildersClubBadge_Community h4 .TurboSpan {
    color: White;
}
.BadgeHint {
    border: dashed 1px #000;
    padding: 5px 5px 5px 5px;
    background-color: #E8EDFF;
}
.FeaturedBadgeContent {
    margin: 0;
    padding: 0 15px 10px 15px;
}
.FeaturedBadgeContent p {
    color: #222;
    font-family: Verdana, Sans-Serif;
    margin-top: 10px;
}
.FeaturedBadgeIcon {
    float: left;
    margin: auto 10px auto 10px;
    vertical-align: text-top;
    width: 125px;
}
.FeaturedTBCContent .FeaturedTBCDescription {
    color: #222;
    font-size: 14px;
    margin: 10px 10px 10px 10px;
}
.FeaturedTBCIcon {
    margin: 10px 10px 10px 10px;
    float: left;
    vertical-align: text-top;
    width: 150px;
}
#TurboBuildersClubBadge_Community {
    margin: 10px 10px 10px;
}
#StatisticsRankingsPane_Community {
    border: none;
}
#BadgesContainer .Legend h4 {
    background-color: #fff;
    font-size: 1.4em;
    font-weight: bold;
    margin: 5px 0 5px 0;
}
#BadgesContainer #CommunityBadges .Legend #Administrator {
    background-image: url(../../../images/Badges/Administrator-75x75.png?v=2);
}
#BadgesContainer #CommunityBadges .Legend #ForumModerator {
    background-image: url(../../../images/Badges/ForumModerator-75x75.png?v=2);
}
#BadgesContainer #CommunityBadges .Legend #ImageModerator {
    background-image: url(../../../images/Badges/ImageModerator-75x75.png?v=2);
}
#BadgesContainer #FriendshipBadges .Legend #Friendship {
    background-image: url(../../../images/Badges/Friendship-75x75.png?v=2);
}
#BadgesContainer #FriendshipBadges .Legend #Inviter {
    background-image: url(../../../images/Badges/Inviter-75x75.png?v=2);
}
#BadgesContainer #CombatBadges .Legend #CombatInitiation {
    background-image: url(../../../images/Badges/CombatInitiation-75x75.png?v=2);
}
#BadgesContainer #CombatBadges .Legend #Warrior {
    background-image: url(../../../images/Badges/Warrior-75x75.png?v=2);
}
#BadgesContainer #CombatBadges .Legend #Bloxxer {
    background-image: url(../../../images/Badges/Bloxxer-75x75.png?v=2);
}
#BadgesContainer #VisitsBadges .Legend #Homestead {
    background-image: url(../../../images/Badges/Homestead-70x75.png?v=2);
}
#BadgesContainer #VisitsBadges .Legend #Bricksmith {
    background-image: url(../../../images/Badges/Bricksmith-54x75.png?v=2);
}
#BadgesContainer .AccordionHeader,
#BadgesContainer .TopAccordionHeader,
#BadgesContainer .BottomAccordionHeader {
    background-color: #ccc;
    cursor: pointer;
    font-size: 1.4em;
    margin: 0 0 1px 0;
    padding: 5px;
    text-align: center;
}
#BadgesContainer .AccordionHeader,
#BadgesContainer .BottomAccordionHeader {
    border-bottom: solid 1px #000;
    border-top: solid 1px #000;
}
#BadgesContainer .TopAccordionHeader {
    border-bottom: solid 1px #000;
    border-top: none;
}
#BadgesContainer .AccordionHeader:hover,
#BadgesContainer .TopAccordionHeader:hover,
#BadgesContainer .BottomAccordionHeader:hover {
    background-color: #6e99c9;
    color: #fff;
}
.StatisticsRankings {
    background-color: #eee;
}
.StatisticsRankings h4 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-size: 1.2em;
    margin: 0;
    text-align: center;
}
.StatisticsRankingsHeader_Rank,
.StatisticsRankingsHeader_Item,
.StatisticsRankingsHeader_Score {
    border: solid 1px #000;
    float: left;
    font-weight: bold;
    padding: 2px 0 2px 0;
    text-align: center;
}
.StatisticsRankingsHeader_Rank {
    margin-right: 1px;
    width: 45px;
}
.StatisticsRankingsHeader_Item {
    margin-right: 1px;
    width: 150px;
}
.StatisticsRankingsHeader_Score {
    width: 95px;
}
.StatisticsRanking,
.StatisticsRanking_AlternatingRow,
.StatisticsRanking_UserCentric,
.StatisticsRanking_UserCentric_AlternatingRow {
    font: normal .9em/normal Verdana, sans-serif;
}
.StatisticsRanking_UserCentric a,
.StatisticsRanking_UserCentric a:link,
.StatisticsRanking_UserCentric a:visited,
.StatisticsRanking_UserCentric a:active,
.StatisticsRanking_UserCentric_AlternatingRow a,
.StatisticsRanking_UserCentric_AlternatingRow a:link,
.StatisticsRanking_UserCentric_AlternatingRow a:visited,
.StatisticsRanking_UserCentric_AlternatingRow a:active {
    color: #fff;
}
.StatisticsRanking .StatisticsRanking_Rank,
.StatisticsRanking .StatisticsRanking_Item,
.StatisticsRanking .StatisticsRanking_Score,
.StatisticsRanking_AlternatingRow .StatisticsRanking_Rank,
.StatisticsRanking_AlternatingRow .StatisticsRanking_Item,
.StatisticsRanking_AlternatingRow .StatisticsRanking_Score {
    border: solid 1px #000;
    float: left;
    padding: 2px 0 2px 0;
    text-align: center;
}
.StatisticsRanking .StatisticsRanking_Rank,
.StatisticsRanking_AlternatingRow .StatisticsRanking_Rank {
    margin-right: 1px;
    width: 45px;
}
.StatisticsRanking .StatisticsRanking_Item,
.StatisticsRanking_AlternatingRow .StatisticsRanking_Item {
    margin-right: 1px;
    width: 150px;
}
.StatisticsRanking .StatisticsRanking_Score,
.StatisticsRanking_AlternatingRow .StatisticsRanking_Score {
    width: 95px;
}
.StatisticsRanking_UserCentric .StatisticsRanking_Rank,
.StatisticsRanking_UserCentric .StatisticsRanking_Item,
.StatisticsRanking_UserCentric .StatisticsRanking_Score,
.StatisticsRanking_UserCentric_AlternatingRow .StatisticsRanking_Rank,
.StatisticsRanking_UserCentric_AlternatingRow .StatisticsRanking_Item,
.StatisticsRanking_UserCentric_AlternatingRow .StatisticsRanking_Score {
    background-color: #6e99c9;
    border: solid 1px #000;
    color: #fff;
    float: left;
    font-weight: bold;
    padding: 2px 0 2px 0;
    text-align: center;
}
.StatisticsRanking_UserCentric .StatisticsRanking_Rank,
.StatisticsRanking_UserCentric_AlternatingRow .StatisticsRanking_Rank {
    margin-right: 1px;
    width: 45px;
}
.StatisticsRanking_UserCentric .StatisticsRanking_Item,
.StatisticsRanking_UserCentric_AlternatingRow .StatisticsRanking_Item {
    margin-right: 1px;
    width: 150px;
}
.StatisticsRanking_UserCentric .StatisticsRanking_Score,
.StatisticsRanking_UserCentric_AlternatingRow .StatisticsRanking_Score {
    width: 95px;
}
.StatisticsRankingsFooter {
    border-top: solid 1px #000;
    padding: 2px 1px 2px 1px;
}
.RankingsPeriodSelector {
    font-family: Verdana, Sans-Serif;
    font-size: xx-small;
    width: 100%;
}
.TileBadges {
    float: left;
    margin: 10px 10px;
    text-align: center;
}
#CatalogContainer {
    font-family: Verdana, Sans-Serif;
    min-width: 0;
    position: relative;
}
#CatalogContainer h2 {
    font-family: Verdana, Sans-Serif;
    font-weight: normal;
    letter-spacing: .1em;
    line-height: 24px;
    padding: 0;
    color: #555;
    font-size: 14px;
    margin-left: 10px;
}
#BrowseMode ul li h3 a {
    font-weight: normal;
    font-size: 14px;
}
#CatalogContainer ul {
    font-family: Verdana, Sans-Serif;
    list-style: none;
    margin: 0 0 20px 0;
    padding-left: 0;
}
#CatalogContainer ul li {
    margin: 5px 0 5px 10px;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 20px;
    font-size: 14px;
}
#CatalogContainer .Selected {
    background: url('/images/gamesPage_filterArrow.png') no-repeat scroll 0 1px transparent;
}
#CatalogContainer .DisplayFilters {
    width: 185px;
    background-color: White;
    border: solid 2px #6e99c9;
}
#CatalogContainer .Assets {
    float: left;
    min-width: 0;
    overflow: hidden;
    padding-bottom: 10px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    width: 680px;
}
#CatalogContainer .SearchBar {
    background-color: #eee;
    border: solid 1px #bbb;
    height: 30px;
    margin: -5px 0 5px 0;
    padding: 0;
    text-align: center;
}
#CatalogContainer .SearchBar .SearchBox,
#CatalogContainer .SearchBar .SearchButton {
    height: 30px;
    margin: 0;
    padding: 0;
}
#CatalogContainer .SearchBar .TextBox {
    border: solid 1px #000;
    height: 19px;
    margin: 2px 0 0 0;
    padding: 2px 3px 0 3px;
    width: 250px;
}
#CatalogContainer .SearchLinks {
    z-index: 9;
    display: inline;
}
#CatalogContainer .SearchLinks a span {
    display: none;
}
#CatalogContainer .SearchLinks a:hover {
    text-decoration: none;
    border: none;
}
#CatalogContainer .SearchLinks a:hover span {
    display: block;
    position: absolute;
    top: 20px;
    left: 15%;
    width: 60%;
    padding: 5px;
    margin: 5px;
    z-index: 10;
    color: white;
    background-color: #6e99c9;
    border-width: 1px;
    border-color: Gray;
    border-style: ridge;
    text-decoration: none;
    line-height: 1.4em;
    font: 11px Verdana, sans-serif;
    text-align: center;
}
#CatalogContainer .SearchError {
    clear: both;
    margin: 2px;
    float: none;
    padding: 2px;
    text-align: center;
    color: Red;
}
#CatalogContainer .Assets .HeaderPager,
#CatalogContainer .Assets .FooterPager {
    padding: 2px 0;
    text-align: right;
}
#CatalogContainer .Assets .HeaderPager {
    margin-bottom: 10px;
}
#CatalogContainer .Assets .HeaderPager .Label,
#CatalogContainer .Assets .FooterPager .Label {
    font-size: 1em;
    vertical-align: middle;
}
#CatalogContainer .Asset {
    margin: -1px 0 15px -1px;
    vertical-align: top;
    width: 122px;
}
#CatalogContainer .Asset .AssetThumbnail {
    border: solid 1px #EEE;
    height: 110px;
    text-align: center;
    width: 110px;
    background-color: #FFF;
}
#CatalogContainer .Asset .AssetDetails {
    font-family: Verdana, Sans-Serif;
    overflow: hidden;
    padding: 2px 0 6px 0;
    width: 110px;
}
#CatalogContainer .AssetName a {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5em;
    vertical-align: top;
}
.AssetsBullet {
    padding-right: 3px;
}
#CatalogContainer .Label,
#CatalogContainer .Detail,
#CatalogContainer .DetailHighlighted,
#CatalogContainer .PriceInRobux,
#CatalogContainer .PriceInTickets {
    font-size: .8em;
}
#CatalogContainer .PriceInRobux {
    color: Green;
    font-weight: bold;
}
#CatalogContainer .PriceInTickets {
    color: #fbb117;
    font-weight: bold;
}
#CatalogContainer .AssetsDisplaySet {
    float: left;
    font-family: Comic Sans MS, Arial, Sans-Serif;
    font-size: 1.5em;
}
.Assets .StandardBoxHeader {
    width: 660px;
}
.Assets .StandardBox {
    width: 660px;
}
.CustomizeCharacterContainer {
    font-family: Verdana, Sans-Serif;
    margin: 0;
}
.CustomizeCharacterContainer h4 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-family: Comic Sans MS, Verdana, Sans-Serif;
    margin: 0;
    text-align: center;
}
.CustomizeCharacterContainer .NoResults {
    padding: 15px;
    text-align: center;
}
.CustomizeCharacterContainer .TileGroup {
    clear: left;
    text-align: center;
}
.CustomizeCharacterContainer .Asset {
    float: left;
    margin: 5px 7px 5px 0;
    text-align: left;
    vertical-align: top;
    width: 112px;
}
.CustomizeCharacterContainer .Asset .AssetThumbnail {
    height: 110px;
    position: relative;
    text-align: center;
    width: 110px;
}
.CustomizeCharacterContainer .Asset .AssetDetails {
    overflow: hidden;
    padding: 2px 0 6px 0;
    text-align: left;
    width: 110px;
}
.CustomizeCharacterContainer .AssetName a {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5em;
    vertical-align: top;
}
.CustomizeCharacterContainer .Label,
.CustomizeCharacterContainer .Detail,
.CustomizeCharacterContainer .DetailHighlighted {
    font-size: .8em;
}
.CustomizeCharacterContainer .FooterPager {
    border-top: solid 1px #000;
    clear: left;
    margin: 10px 0 0 0;
    padding: 3px 0;
    text-align: center;
}
.AttireChooser {
    border: solid 1px #000;
    float: left;
    margin: 0;
    min-width: 0;
    padding: 0;
    position: relative;
    text-align: left;
    width: 530px;
}
.Accoutrements {
    border: solid 1px #000;
    clear: left;
    margin-top: 10px;
    min-width: 0;
    padding: 0;
    position: relative;
    text-align: left;
    width: 530px;
}
.AttireChooser .AttireCategory {
    border-bottom: solid 1px #000;
    margin: 0 0 10px 0;
    padding: 3px 0;
    text-align: center;
}
.AttireChooser .AttireOptions {
    margin: 5px;
}
.AttireCategory .AttireCategorySelector_Selected {
    font-weight: bold;
}
.AttireChooser .HeaderPager,
.AttireChooser .HeaderPager {
    margin-bottom: 10px;
}
.AttireChooser .HeaderPager .Label,
.AttireChooser .FooterPager .Label {
    font-size: 1em;
    vertical-align: middle;
}
.CharacterViewer {
    border: solid 1px #000;
    float: right;
    width: 354px;
}
.CharacterViewer .ReDrawAvatar {
    font-size: 1em;
    vertical-align: bottom;
    text-align: center;
}
.Mannequin {
    clear: right;
    margin-top: 10px;
    text-align: center;
    width: 354px;
}
.Mannequin .ColorChooserFrame {
    margin: 0 auto;
}
.TeeShirtBuilder {
    border: solid 1px #000;
    clear: both;
    margin-top: 10px;
}
div.AspNet-DetailsView-Data ul {
    margin: 0;
    padding: 0;
}
div.AspNet-DetailsView-Data li {
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: relative;
}
ul.AspNet-Menu {
    position: relative;
}
ul.AspNet-Menu,
ul.AspNet-Menu ul {
    margin: 0;
    padding: 0;
    display: block;
}
ul.AspNet-Menu li {
    position: relative;
    list-style: none;
}
ul.AspNet-Menu li a,
ul.AspNet-Menu li span {
    display: block;
    text-decoration: none;
}
ul.AspNet-Menu ul {
    position: absolute;
    display: none;
}
ul.AspNet-Menu li:hover ul ul,
ul.AspNet-Menu li:hover ul ul ul,
ul.AspNet-Menu li.AspNet-Menu-Hover ul ul,
ul.AspNet-Menu li.AspNet-Menu-Hover ul ul ul {
    display: none;
}
ul.AspNet-Menu li:hover ul,
ul.AspNet-Menu li li:hover ul,
ul.AspNet-Menu li li li:hover ul,
ul.AspNet-Menu li.AspNet-Menu-Hover ul,
ul.AspNet-Menu li li.AspNet-Menu-Hover ul,
ul.AspNet-Menu li li li.AspNet-Menu-Hover ul {
    display: block;
}
.AspNet-Menu-Horizontal ul.AspNet-Menu li {
    float: left;
}
.AspNet-Menu-Horizontal ul.AspNet-Menu li li {
    float: none;
}
div.AspNet-TreeView {
    margin: 0;
    padding: 0;
}
div.AspNet-TreeView ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.AspNet-TreeView-Hide {
    display: none;
}
#ContentBuilderContainer {
    margin-top: 10px;
}
#ContentBuilderContainer h2 {
    font-family: Verdana, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1em;
    margin: 0;
    padding: 0;
}
#ContentBuilderContainer h3 {
    background-color: #ccc;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    text-align: center;
}
#ContentBuilderContainer blockquote {
    margin: 0 auto;
}
#ContentBuilderContainer .UploaderPanel,
#ContentBuilderContainer .UpsellPanel {
    text-align: center;
}
#ContentBuilderContainer .SelectorArea {
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
}
#ContentBuilderContainer .DisclaimerLink {
    z-index: 9;
    display: inline;
    font-size: 1.2em;
}
#ContentBuilderContainer .DisclaimerLink a span {
    display: none;
}
#ContentBuilderContainer .DisclaimerLink a:hover {
    text-decoration: none;
    border: none;
}
#ContentBuilderContainer .DisclaimerLink a:hover span {
    display: block;
    position: absolute;
    top: 50%;
    left: 12%;
    width: 75%;
    padding: 5px;
    margin: 5px;
    z-index: 10;
    color: white;
    background-color: #6e99c9;
    border-width: 1px;
    border-color: Gray;
    border-style: ridge;
    text-decoration: none;
    line-height: 1.4em;
    font: 12px Verdana, sans-serif;
    text-align: left;
}
#TradeCurrencyContainer {
    margin-top: 10px;
}
#TradeCurrencyContainer .TradeBox {
    width: 100px;
}
#TradeCurrencyContainer h2 {
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1em;
    margin: 0 0 15px 0;
    padding: 0;
    text-align: center;
}
#TradeCurrencyContainer .LeftColumn {
    float: left;
    width: 230px;
}
#TradeCurrencyContainer .CenterColumn {
    float: left;
    width: 410px;
}
#TradeCurrencyContainer .RightColumn {
    float: left;
    width: 230px;
}
#TradeCurrencyContainer h4 {
    border-bottom: solid 1px #000;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    padding: 5px;
    text-align: center;
    display: block;
}
#TradeCurrencyContainer .AccordionHeader {
    background-color: #ccc;
    border: solid 1px #000;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: .1em;
    margin: 1px 0;
    padding: 1px 1em;
    text-align: center;
}
#TradeCurrencyContainer .AccordionHeader:hover {
    background-color: #6e99c9;
    color: #fff;
}
#CurrencyOffersPane {
    float: right;
}
.TradingDashboard {
    margin-bottom: 10px;
}
.CurrencyQuote,
.CurrencyTrade,
.CurrencyOffers,
.CurrencyBids,
.TradingDashboard {
    width: 350px;
}
.CurrencyQuote,
.CurrencyTrade,
.CurrencyOffers,
.CurrencyBids,
.OpenBids,
.OpenOffers,
.TradeHistory {
    border: solid 1px #000;
    padding: 0;
}
.CurrencyQuote,
.CurrencyTrade,
.TradingDashboard,
.OpenBids,
.OpenOffers,
.TradeHistory,
.TradingDashboard .FooterPager {
    margin: 0 auto;
}
.CurrencyTrade,
.TradingDashboard {
    margin-top: 20px;
}
.CurrencyTradeDetails {
    padding: 5px;
}
.CurrencyTradeDetail,
.TradingDashboard .FooterPager {
    padding-top: 5px;
    text-align: center;
}
.CurrencyOffers,
.CurrencyBids {
    width: 200px;
}
.CurrencyOffer,
.AlternatingCurrencyOffer,
.CurrencyBid,
.AlternatingCurrencyBid {
    padding: 5px;
    text-align: center;
}
.CurrencyQuote .TableHeader,
.CurrencyOffers .TableHeader,
.CurrencyBids .TableHeader {
    font-weight: bold;
}
.CurrencyQuote .TableRow,
.CurrencyOffers .TableRow,
.CurrencyBids .TableRow {
    border-top: solid 1px #000;
}
.CurrencyQuote .Pair,
.CurrencyQuote .Rate,
.CurrencyQuote .Spread,
.CurrencyQuote .HighLow {
    float: left;
    padding: 5px;
    text-align: center;
    width: 77px;
}
.DarkGradientBox {
    background: url(../../../images/DarkGradientW150.png) repeat-y top left;
    width: 150px;
    color: White;
    position: relative;
    border: solid 2px #7DADE0;
}
.DarkGradientBox .DGB_Header {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 0;
    border-bottom: solid 2px #6e99c9;
}
.DarkGradientBox .DGB_TextBox {
    border: solid 2px #6e99c9;
}
.DarkGradientBox .DGB_Label {
    color: White;
    font-size: 10px;
    font-weight: bold;
    text-align: left;
}
.DarkGradientBox .DGB_Button {
    cursor: pointer;
    background-color: #435D77;
    color: White;
    text-decoration: none;
    border: solid 1px #777;
    padding: 6px 10px 6px 10px;
    font-family: Verdana, Sans-Serif;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
}
.DarkGradientBox .DGB_Button:link,
.DarkGradientBox .DGB_Button:visited {
    background-color: #435D77;
    color: White;
    text-decoration: none;
}
.DarkGradientBox .DGB_Button:hover,
.DarkGradientBox .DGB_Button:active {
    background-color: #B6CCE4;
    color: #435D77;
    text-decoration: none;
}
#FriendliestFolkPane {
    border-color: #000;
    border-style: solid;
    border-width: 1px;
    height: 184px;
    margin-top: 10px;
    overflow: auto;
    width: 770px;
}
#FriendliestFolk h4 {
    font-size: 10pt;
    font-weight: bold;
    line-height: 1em;
    margin-bottom: 5px;
    margin-top: 5px;
}
#GamesContainer {
    font-family: Verdana, Sans-Serif;
}
#GamesContainer h2 {
    font-family: Verdana, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1em;
    margin: 0;
    padding: 0;
}
#GamesContainer h4 {
    font-family: Verdana, Sans-Serif;
    font-size: 1.3em;
    font-weight: normal;
    letter-spacing: .1em;
    line-height: 1em;
    margin: 15px 0;
    padding: 0;
}
#GamesContainer ul {
    font-family: Verdana, Sans-Serif;
    list-style: none;
    margin: 10px 0 30px 0;
    padding-left: 0;
}
#GamesContainer ul li {
    font-family: Verdana, Sans-Serif;
    margin-bottom: .5em;
}
#GamesContainer ul a {
    font-size: 1.1em;
}
#GamesContainer .DisplayFilters {
    width: 170px;
}
#GamesContainer #Games {
    float: left;
    padding-bottom: 10px;
    padding-left: 0;
    padding-right: 0;
    width: 720px;
    overflow: visible;
}
.GameList {
    overflow: visible;
}
#GamesContainer .Ads_WideSkyscraper {
    border: solid 1px #000;
    float: right;
    text-align: right;
    width: 160px;
}
#GamesContainer #Games .FooterPager {
    margin: 20px 24px 0 0;
    padding: 2px 0;
    text-align: right;
}
#GamesContainer #Games .HeaderPager {
    margin: 0 24px 0 100px;
    padding: 30px 0;
    text-align: left;
}
#GamesContainer #Games .HeaderPager .Label,
#GamesContainer #Games .FooterPager .Label {
    font-size: 1em;
    vertical-align: middle;
}
#GamesContainer .Game {
    margin: 0 10px 15px 10px;
    vertical-align: top;
    width: 162px;
}
#GamesContainer .Game .GameThumbnail {
    border: solid 1px #000;
    width: 160px;
    height: 100px;
    text-align: center;
}
#GamesContainer .Game .GameDetails {
    font-family: Verdana, Sans-Serif;
    overflow: hidden;
    padding: 2px 0 6px 0;
    width: 152px;
}
.GameDetails12 > GameName {
    font-weight: bold;
}
.GameName {
    font-weight: bold;
    font-size: 12px;
}
#GamesContainer .GameName a {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5em;
    vertical-align: top;
}
.GamesBullet {
    padding-right: 3px;
}
#GamesContainer .Label,
#GamesContainer .Detail,
#GamesContainer .DetailHighlighted {
    font-size: .8em;
}
#GamesContainer .DetailHighlighted {
    color: Red;
    font-weight: bold;
}
#GamesContainer .GamesDisplaySet {
    float: left;
    font-family: Comic Sans MS, Arial, Sans-Serif;
    font-size: 1.5em;
}
.GamesInfoIcon,
.GenreIcon,
.GearIcon {
    margin-top: 1px;
    margin-right: 1px;
    position: relative;
    top: 3px;
}
.SearchBoxBack .StandardBox {
    background: #6e99c9;
}
.GameFilter {
    color: #555;
    margin-left: 10px;
    font-size: 14px;
}
.GameFilter ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}
.GameFilter ul li {
    margin: 5px 0;
}
.GameFilter .SelectedFilter,
.GameFilter .SelectedGenre {
    background: url(/images/gamesPage_filterArrow.png) no-repeat 0 1px;
    cursor: pointer;
    padding-left: 20px;
    font-weight: normal;
}
.GameFilter .GamesFilter,
.GameFilter .GamesGenre {
    padding-left: 20px;
    display: inline-block;
}
.GamesGenre h3 {
    display: inline-block;
    cursor: pointer;
    font-weight: normal;
}
#PlayTabs a {
    text-decoration: none;
}
.SelectedFilter,
.SelectedGenre {
    font-weight: normal;
}
a.DisabledFilter,
a.DisabledFilter:hover {
    color: gray;
    text-decoration: none;
    cursor: default;
}
a.GamesGenre.DisabledFilter h3,
a.GamesGenre.DisabledFilter:hover h3 {
    cursor: default;
}
#BCOnlyPlaces {
    position: relative;
    width: 410px;
    text-align: center;
    float: left;
    margin-top: 8px;
    margin-bottom: 6px;
}
#BCOnlyPlaces .StandardBoxHeaderGray {
    width: 410px;
    height: 27px;
    padding: 9px 2px 0 2px;
    *padding: 5px 2px 0 2px;
}
#BCOnlyPlaces .StandardBox {
    height: 188px;
    padding: 2px 0;
}
#BCOnlyPlacesTitle {
    display: inline;
    font-weight: bold;
    font-size: 19px;
    position: relative;
    *margin-left: 5px;
}
#BCOnlyGamesContent {
    width: 370px;
    margin: 0 auto;
}
#BCOnlyGamesContentPrevNavButton {
    position: absolute;
    top: 105px;
    left: 10px;
    visibility: hidden;
}
#BCOnlyGamesContentNextNavButton {
    position: absolute;
    top: 105px;
    right: 10px;
}
#GenreDescriptionPanel {
    float: left;
    width: 695px;
    font-size: .9em;
    padding: 10px;
    border-top: 1px solid #AAA;
}
.SearchIconButton {
    background: url(/images/searchIcon.png) no-repeat;
    cursor: pointer;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 5px;
    right: 4px;
}
.GameItem {
    padding: 6px;
    margin-left: 8px;
    margin-bottom: 8px;
    position: relative;
    text-align: left;
}
.GameItem:hover {
    display: block;
    z-index: 99;
}
.GameItem .AlwaysShown {
    position: relative;
    width: 160px;
    height: 130px;
}
.GameItem:hover .AlwaysShown {
    z-index: 999;
}
.GameItem .HoverShown {
    display: none;
    position: absolute;
    width: 160px;
    padding: 158px 15px 15px;
    top: -10px;
    left: -10px;
    border: solid 1px #888;
    background: #fff;
    font-size: 11px;
    text-align: left;
    color: #888;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
.GameItem .CreatorName {
    position: relative;
    top: -5px;
    font-size: 11px;
    color: #888;
}
.GameItem .BCOverlay {
    position: absolute;
    top: 81px;
    left: 0;
}
.GameItem .GenreIcon,
.GameItem .GearIcon {
    position: static;
    top: 0;
    margin-top: 0;
    margin-right: 0;
}
#GamesLeftColumn {
    width: 136px;
}
.groupEmblemThumbnail {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 8px;
    margin-right: 8px;
    text-align: center;
    width: 105px;
    overflow: hidden;
}
#GroupThumbnails {
    text-align: center;
    margin-bottom: 10px;
}
.GroupDescriptionThumbnail {
    float: left;
    clear: none;
    margin: 0 10px 10px 0;
}
.GroupMembers {
    width: 100%;
}
.GroupMembers tr {
    padding-bottom: 10px;
}
.GroupMembers td {
    padding: 0 5px 10px 5px;
    text-align: center;
}
.IncompleteFormField {
    color: red;
}
.GroupWallPostButton {
    width: 69px;
    height: 53px;
    margin: 3px 0 4px 0;
    float: right;
}
.GroupWallPostText {
    width: 375px;
    height: 53px;
    float: left;
}
.GroupDescriptionEdit {
    border: none;
    border-style: none;
}
.EmblemAdminImage {
    margin: 0x;
}
.CreateNewGroup {
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: block;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
}
.CreateNewGroupError {
    color: Red;
}
.GroupMembersAdminTable tr {
    text-align: left;
}
.GroupMembersAdminTable td {
    width: 85px;
    margin: 2px;
}
#GroupSearchResults thead tr {
    background-color: #B0C4DE;
    color: Black;
}
#GroupSearchResults .GroupEmblemImg {
    border: solid 2px #B0C4DE;
    padding: 2px;
}
.selectedSmallThumb {
    border: solid 2px #FFE390;
}
.nonSelectedSmallThumb {
    border: solid 2px transparent;
}
#Help {
    border-style: ridge;
    border-color: #ddd;
    border-width: 5px;
    background-color: #eee;
    height: 600px;
    padding: 1px;
}
#Help h1 {
    text-indent: 10px;
}
#Help .salesForce,
#Help .salesForce iframe {
    margin-left: 5px;
    margin-bottom: 10px;
    float: left;
    width: 625px;
    height: 500px;
}
#Help .avatar {
    text-align: center;
    display: block;
    float: right;
    clear: right;
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
}
#Help .descriptionPanels {
    background-color: Transparent;
    background-image: url('../../../images/Speech Bubble 225.gif');
    width: 225px;
    height: 235px;
    background-repeat: no-repeat;
    margin-top: 40px;
}
#Help .descriptionPanels p {
    font-family: Comic Sans MS;
    padding-top: 20px;
    padding-right: 40px;
    padding-left: 25px;
    text-align: left;
    color: Navy;
    font-size: 9pt;
}
#Help .navigation {
    clear: left;
    color: #6e99c9;
    border: none;
    background-color: Transparent;
    font-family: 'Comic Sans MS', Verdana, sans-serif;
    font-size: 10pt;
    font-weight: normal;
    text-decoration: none;
    text-align: center;
}
#Help .navigation .MenuItem {
    color: #6e99c9;
    font-size: 16px;
    line-height: 2em;
}
#Help .navigation a.MenuItem:link,
#Help .navigation a.MenuItem:visited,
#Help .navigation a.MenuItem:active {
    color: #6e99c9;
    text-decoration: none;
}
#Help .navigation a.MenuItem:hover {
    text-decoration: underline;
}
#Help .forumLinks {
    font-family: Sans-Serif;
    border-width: 3px;
    border-color: #ddd;
    border-style: groove;
    visibility: hidden;
    display: none;
    filter: alpha(opacity=93);
    opacity: .93;
    background-color: #eee;
    background-image: url('../../../images/help_gradient.png');
    background-repeat: repeat-y;
    background-position: left top;
    width: 150px;
    font-size: 10pt;
    text-align: center;
    padding: 5px;
    line-height: 2em;
}
#InboxContainer {
    margin-top: 10px;
}
#InboxContainer #InboxPane {
    float: left;
    position: relative;
    top: -2px;
    width: 700px;
}
.InboxDateField {
    text-align: right;
}
#InboxContainer h2 {
    font-family: Verdana, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    letter-spacing: .5em;
    line-height: 1em;
    margin: 0 0 10px 0;
    padding: 0;
}
#InboxContainer .Ads_WideSkyscraper {
    border: solid 1px #000;
    float: right;
    text-align: right;
    width: 160px;
}
#InboxContainer #Inbox {
    border: solid 1px #000;
}
#InboxContainer .Buttons {
    margin: 10px 0;
    text-align: center;
}
#InboxContainer .InboxHeader {
    background: url(/images/topNav_black.png);
    border: none;
    color: #fff;
    font: 1.2em/normal Verdana, sans-serif;
    font-weight: lighter;
    letter-spacing: .15em;
    text-align: center;
}
#InboxContainer .InboxRow {
    cursor: pointer;
    font: normal 1em/normal Verdana, sans-serif;
}
#InboxContainer .InboxRow_Unread {
    cursor: pointer;
    font: bold 1em/normal Verdana, sans-serif;
}
#InboxContainer .InboxRow:hover,
#InboxContainer .InboxRow_Unread:hover,
#InboxContainer .SystemAlertMessage:hover {
    background-color: #6e99c9;
    color: #fff;
}
#InboxContainer .InboxHeader a,
#InboxContainer .InboxPager a,
#InboxContainer .InboxRow:hover a,
#InboxContainer .InboxRow_Unread:hover a,
#InboxContainer .SystemAlertMessage:hover a {
    color: #fff;
}
#InboxContainer .InboxPager {
    background-color: #999;
    font: bold 1.2em/normal Verdana, sans-serif;
    letter-spacing: .15em;
    text-align: center;
}
#InboxContainer .SystemAlertMessage {
    cursor: pointer;
    font: normal 1em/normal Verdana, sans-serif;
    color: #F00;
}
#InboxContainer .SystemAlertMessage a {
    color: #F00;
}
#InfoContainer {
    background-color: #eee;
    border: solid 1px #000;
    color: #555;
    margin: 0 auto;
    width: 620px;
}
#InfoContainer h2 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-size: x-large;
    margin: 0;
    text-align: center;
}
#InfoContainer #Content {
    font: normal 1em/normal Verdana, sans-serif;
    line-height: 1.5em;
    padding: 10px 20px 10px 20px;
}
#AlreadyInstalled {
    font-size: large;
    margin: 44px 44px 44px 44px;
}
#AlreadyInstalled a {
    text-decoration: underline;
}
#ItemContainer {
    margin-top: 10px;
}
#ItemContainer h2 {
    background-color: #036;
    border-bottom: solid 1px #555;
    color: #fff;
    font-family: Verdana, Helvetica, Sans-Serif;
    font-size: x-large;
    margin: 0;
    text-align: center;
}
#ItemContainer h3 {
    font-size: 1.5em;
    font-weight: normal;
    letter-spacing: .15em;
    line-height: 1em;
    margin: 0 0 .5em 0;
    padding: 0;
}
#ItemContainer #Item {
    color: #555;
    float: left;
    font-family: Verdana, Sans-Serif;
    width: 705px;
}
#ItemContainer #Details {
    margin: 10px;
}
#ItemContainer #Thumbnail,
#ItemContainer #Thumbnail_Place {
    border: solid 1px #eee;
    padding: 0;
    text-align: left;
    min-width: 0;
}
#ItemContainer #Thumbnail {
    height: 420px;
    width: 420px;
}
#ItemContainer #Thumbnail_Place {
    height: 230px;
    width: 420px;
}
#ItemContainer #Actions,
#ItemContainer #Actions_Place {
    width: 408px;
    background-color: #fff;
    padding: 5px;
    text-align: left;
    min-width: 0;
    overflow: hidden;
    top: 420px;
}
.AddRemoveFavorite {
    background: url(/images/cssspecific/rbx2/favoriteStar_20h.png) no-repeat 0 -20px;
    margin: 0;
    display: inline-block;
    position: relative;
    top: 3px;
    *display: inline;
    *zoom: 1;
    padding-top: 4px;
    padding-left: 25px;
    width: 200px;
    height: 18px;
}
.AddRemoveFavorite:hover {
    background-position: 0 0;
}
#ItemContainer #Summary {
    background-color: #fff;
    border: dashed 1px #555;
    display: inline;
    float: right;
    padding: 7px;
    width: 235px;
}
#ItemContainer #Summary #Creator {
    clear: left;
}
#ItemContainer #Summary #DescriptionLabel {
    margin-bottom: .4em;
    margin-top: .7em;
}
.label {
    margin-bottom: .5em;
}
#ItemContainer #Summary .Description {
    border: solid 1px #555;
    font: normal 1em/normal Verdana, sans-serif;
    max-height: 136px;
    line-height: 1.5em;
    padding: 4px;
    overflow: auto;
    text-align: left;
}
#ItemContainer #Summary #ReportAbuse {
    margin: 0 auto;
    padding: 4px;
    text-align: center;
}
#ItemContainer #Summary #PublicDomainPurchase {
    float: left;
}
#ItemContainer #Summary #PublicDomainPurchase #PricePublicDomain {
    color: Blue;
    float: left;
    font-weight: bold;
    line-height: 2em;
    width: 100px;
}
#ItemContainer #Summary #PublicDomainPurchase #BuyForFree {
    float: left;
    line-height: 2em;
    width: 100px;
}
#ItemContainer #Summary #PublicDomainPurchase #BuyForFree .Button:hover {
    background-color: #6e99c9;
    border: solid 1px #000;
}
#ItemContainer #Summary #PublicDomainPurchase #BuyForFree a:hover {
    color: #fff;
}
#ItemContainer #Summary #RobuxPurchase #PriceInRobux {
    color: Green;
    float: left;
    font-weight: bold;
    line-height: 2em;
    width: 100px;
}
#ItemContainer #Summary #RobuxPurchase #BuyWithRobux {
    float: left;
    line-height: 2em;
    width: 100px;
}
#ItemContainer #Summary #RobuxPurchase #BuyWithRobux .Button:hover {
    background-color: #49b745;
    border: solid 1px #000;
}
#ItemContainer #Summary #RobuxPurchase #BuyWithRobux a:hover {
    color: #fff;
}
#ItemContainer #Summary #TicketsPurchase {
    clear: left;
}
#ItemContainer #Summary #TicketsPurchase #PriceInTickets {
    color: #fbb117;
    float: left;
    font-weight: bold;
    line-height: 2em;
    width: 100px;
}
#ItemContainer #Summary #TicketsPurchase #BuyWithTickets {
    float: left;
    line-height: 2em;
    width: 100px;
}
#ItemContainer #Summary #TicketsPurchase #BuyWithTickets .Button:hover {
    background-color: #fdd017;
    border: solid 1px #000;
}
#ItemContainer #Summary #TicketsPurchase #BuyWithTickets a:hover {
    color: #fff;
}
#ItemContainer #Configuration {
    background-color: #fff;
    border-bottom: dashed 1px #555;
    border-left: dashed 1px #555;
    border-right: dashed 1px #555;
    clear: right;
    float: right;
    margin-left: 10px;
    margin-top: -10px;
    padding: 5px 10px;
    text-align: center;
    width: 249px;
}
.ItemVerb {
    background-color: #fff;
    border: dashed 1px #555;
    text-align: center;
    height: 20px;
    margin-top: 5px;
}
#ItemContainer .Ownership {
    background-color: #ccc;
    border: dashed 1px #f00;
    clear: right;
    color: #f00;
    float: right;
    margin-left: 10px;
    margin-top: 0;
    padding: 10px 10px;
    text-align: center;
    width: 230px;
}
#ItemContainer .PlayGames {
    background-color: #ccc;
    border: dashed 1px Green;
    color: Green;
    margin-top: 10px;
    padding: 10px 5px;
    text-align: center;
    width: 408px;
}
#ItemContainer .BadgeStats {
    width: 408px;
    padding: 10px 5px;
}
#ItemContainer .RunningGames {
    background-color: #ccc;
    border: dashed 1px #555;
    color: #555;
    margin-top: 10px;
    padding: 10px 5px;
    text-align: center;
    width: 408px;
}
#ItemContainer .GameInstances {
    background-color: #fff;
    border: solid 1px #000;
    color: #555;
    width: 408px;
}
#ItemContainer .RefreshRunningGames {
    margin: 10px 0;
    text-align: center;
}
#ItemContainer #Ownership .Button,
#ItemContainer .PlayGames .Button {
    background-color: #fff;
}
#ItemContainer #Ownership .Button:Hover {
    background-color: #fff;
    border: solid 1px #f00;
    color: #f00;
}
#ItemContainer .PlayGames .Button:Hover {
    background-color: #fff;
    border: solid 1px Green;
    color: Green;
}
#ItemContainer .CommentsContainer,
#ItemContainer .TabbedInfoContainer {
    margin: 10px;
    margin-top: 0;
    width: 665px;
}
#ItemContainer .TabbedInfoContainer h3 {
    padding: 5px;
}
#ItemContainer .CommentsContainer .HeaderPager,
#ItemContainer .CommentsContainer .FooterPager {
    padding: 5px 0;
    text-align: right;
}
#ItemContainer .CommentsContainer .Comments {
    border: dashed 1px #555;
    overflow: hidden;
    width: 663px;
}
#ItemContainer .CommentsContainer .Comment,
#ItemContainer .CommentsContainer .AlternateComment {
    padding: 7px 10px;
}
#ItemContainer .CommentsContainer .Comment {
    background-color: #fff;
}
#ItemContainer .CommentsContainer .AlternateComment {
    background-color: #eee;
}
#ItemContainer .CommentsContainer .Commenter {
    float: left;
    width: 110px;
}
#ItemContainer .CommentsContainer .Avatar {
    border: solid 1px #555;
    height: 100px;
    width: 100px;
}
.Avatar {
    padding: 0 0 8px 0;
}
#ItemContainer .CommentsContainer .Post {
    float: left;
    width: 80%;
}
#ItemContainer .CommentsContainer .Content {
    margin: 10px 0;
    overflow: hidden;
}
#ItemContainer .CommentsContainer .PostAComment {
    margin: 10px 0 0 0;
}
#ItemContainer .CommentsContainer .PostAComment .Buttons {
    margin: 10px 0 0 0;
}
#ItemContainer .CommentsContainer .MultilineTextBox,
#ItemContainer .CommentsContainer textarea {
    min-height: 0;
    width: 400px;
}
#EditItem {
    color: #555;
    float: left;
    font-family: Verdana, Sans-Serif;
    margin: 0;
}
#EditItemContainer h2 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-family: Comic Sans MS, Sans-Serif;
    font-size: x-large;
    margin: 0;
    text-align: center;
}
#EditItemContainer fieldset {
    font-size: 1.2em;
    margin: 0;
    color: #000;
}
#EditItemContainer #Confirmation {
    border: dashed 1px #f00;
    background-color: #ccc;
    color: #f00;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px 5px;
    width: 410px;
}
#EditItemContainer #ItemName {
    margin: 0 auto;
    margin-top: 10px;
    padding: 0;
    text-align: left;
    width: 420px;
}
#EditItemContainer #ItemThumbnail {
    border: solid 1px #555;
    height: 230px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 0;
    text-align: left;
    width: 420px;
}
#EditItemContainer #ItemDescription {
    margin: 0 auto;
    margin-top: 10px;
    padding: 0;
    text-align: left;
    width: 420px;
}
#EditItemContainer #Comments,
#EditItemContainer #PlaceAccess,
#EditItemContainer #PlaceCopyProtection,
#EditItemContainer #AllowGear,
#EditItemContainer #SetGenres,
#EditItemContainer #VersionHistory,
#EditItemContainer #PublicDomain,
#EditItemContainer #SellThisItem,
#EditItemContainer #PlaceReset,
#EditItemContainer #PlaceBuildAccess,
.MyItemOptions {
    margin: 0 auto;
    margin-top: 10px;
    width: 420px;
}
#EditItemContainer #SellThisItem #Pricing {
    background-color: #fff;
    border: dashed 1px #000;
    margin: 15px 5px 5px 5px;
    padding: 5px;
}
#EditItemContainer #SellThisItem #Price {
    margin-top: 10px;
}
#EditItemContainer #SellThisItem #Price .TextBox {
    padding: 2px 4px;
    width: 75px;
}
#EditItemContainer .CopyProtectionRow,
#EditItemContainer .EnableCommentsRow,
#EditItemContainer .PlaceAccessRow,
#EditItemContainer .PublicDomainRow,
#EditItemContainer .SellThisItemRow,
#EditItemContainer .ResetPlaceRow {
    font-size: .9em;
    margin: 10px 0;
    text-align: center;
}
#EditItemContainer .PlaceAccessRow {
    margin: 10px 0 10px 100px;
    text-align: left;
}
#ConfigurePlaceContainer .ResetPlaceRow .Button {
    margin: 0 auto;
}
#EditItemContainer .PricingLabel {
    float: left;
    font-weight: bold;
    margin-right: 5px;
    text-align: right;
    width: 155px;
}
#EditItemContainer .PricingField_Robux {
    float: left;
    margin-left: 5px;
    text-align: left;
    width: 110px;
}
#EditItemContainer .PricingField_Tickets {
    float: left;
    margin-left: 5px;
    text-align: left;
    width: 110px;
}
#EditItemContainer .Buttons {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}
#EditItemContainer .Button {
    border-color: #555;
    color: #555;
    cursor: pointer;
}
#EditItemContainer .Button:hover {
    background-color: #6e99c9;
    color: #fff;
}
#EditItemContainer .Label {
    font-size: 1.2em;
    margin: 0;
    padding: 0;
}
#EditItemContainer .TextBox {
    border: dashed 1px #555;
    margin: 0;
    padding: 5px 10px;
    width: 400px;
}
#EditItemContainer .Multiline {
    border: dashed 1px #555;
    margin: 0;
    padding: 5px 10px;
    width: 400px;
}
#EditItemContainer .Suggestion {
    font: normal .8em/normal Verdana, sans-serif;
    padding-left: 9px;
}
#ItemContainer .Ads_WideSkyscraper,
#EditItemContainer .Ads_WideSkyscraper {
    border: solid 1px #000;
    float: right;
    text-align: right;
    width: 160px;
}
.GroupBuildRunningGameItem {
    border: solid 2px #50F;
}
.MultiplayerVisit {
    background: url(/images/Play.png);
    width: 250px;
    height: 48px;
}
.SoloVisit {
    background: url(/images/PlaySolo.png);
    width: 143px;
    height: 48px;
}
.SoloVisitText {
    display: none;
}
.BuildSolo {
    background: url(/images/BuildSolo2.png);
    width: 143px;
    height: 48px;
}
.EditButton {
    background: url(/images/EditMode2.png);
    width: 143px;
    height: 48px;
}
.PlaceInfoIcons {
    text-align: center;
    margin: 1em 5px;
}
.iPublic {
    background: url(/images/public.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.iLocked {
    background: url(/images/locked.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.iUnlocked {
    background: url(/images/unlocked.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.SharedIcon {
    background: url(/images/Shared.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.CopyLockedIcon {
    background: url(/images/CopyLocked.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.AllGearIcon {
    background: url(/images/Suitcase16x16.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.GenreGearIcon {
    background: url(/images/GenreSuitcase16x16.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
.NoGearIcon {
    background: url(/images/NoSuitcase16x16.png);
    display: inline-block;
    width: 16px;
    height: 16px;
}
#BadgeStatsHeader {
    width: 388px;
}
.item-header h1 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-style: inherit;
    display: inline;
}
.section {
    padding: 8px 0 0 0;
}
.expires-div {
    margin: 16px 0 8px 0;
}
#timer {
    color: Red;
    margin: 8px 0;
}
.item-detail div,
.creator-name {
    line-height: 1.5em;
}
#assetContainer,
#placeContainer {
    float: left;
    width: 420px;
    overflow: hidden;
}
.updateSetsDiv {
    float: right;
    width: 248px;
    border: 2px dashed maroon;
    margin-top: 5px;
}
.newVersionMsg {
    padding: 5px 0 5px 0;
    text-align: center;
    color: Yellow;
    background-color: Maroon;
    float: right;
    width: 100%;
}
#updateSetContainer {
    padding: 5px;
    float: right;
    width: 100%;
}
#updateSetContainer p {
    cursor: pointer;
    font-size: 12px;
    float: right;
    width: 100%;
}
.resaleError {
    padding: 5px;
    background-color: #F00;
}
.resaleConfirmation {
    padding: 5px;
    background-color: #0F0;
}
.sellCollectibleMsg {
    font-family: Verdana, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 14px;
}
.groupBuildingGameText {
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    line-height: 24px;
}
#ProcessPurchase_Free,
#ProcessPurchase_Robux,
#ProcessPurchase_Tickets,
#ProcessRenew_Free,
#ProcessRenew_Robux,
#ProcessRenew_Tickets,
#ProcessROBLOXPurchase {
    margin: 2.5em auto;
    display: none;
}
#Processing_Free,
#Processing_Robux,
#Processing_Tickets,
#Processing_FreeRenew,
#Processing_RobuxRenew,
#Processing_TicketsRenew,
.processingMsg {
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
}
.createSetPanelPopup {
    width: 400px;
    height: 100%;
    padding: 0;
    float: left;
    display: none;
}
.GetAFreeAccount:hover {
    background-position: 0 56px;
}
.GetAFreeAccount {
    width: 316px;
    height: 56px;
    background: url(/images/Buttons/getAFreeAccount.png);
}
.PlayAsGuest:hover {
    background-position: 0 56px;
}
.PlayAsGuest {
    width: 316px;
    height: 56px;
    background: url(/images/Buttons/playAsGuest.png);
}
.closeBtnCircle_35h:hover {
    background-position: 0 35px;
}
.closeBtnCircle_35h {
    width: 35px;
    height: 35px;
    background: url(/images/Buttons/closeBtnCircle_35h.png);
}
.fblike {
    display: inline-block;
    float: left;
    background-color: White;
}
.LinkCountContainer {
    width: 200px;
    margin: 0;
    padding: 5px;
}
.LinkStatusImage {
    float: left;
}
#ManageAccountButton img,
#CancelButtonImg,
#ChangeCreditCardInfoImg {
    border: none;
}
#ManageAccountButton {
    text-align: center;
}
#GoTurboPopupPanel,
#TurnOffTurboPopupPanel {
    width: 550px;
    text-align: center;
}
#CurrentAccountUpgrades {
    width: 90%;
    margin: auto;
    text-align: center;
}
#CurrentAccountUpgrades table {
    border-collapse: collapse;
    margin-bottom: 15px;
    text-align: center;
    background-color: #d0d6e0;
    width: 225px;
    margin-left: auto;
    margin-right: auto;
}
#CurrentAccountUpgrades th {
    border-bottom: solid 1px #999;
    text-align: center;
}
.rightCellWall {
    border: 1px solid #999;
}
.CancelBuildersClubMembership,
.ChangeCreditCardInfo {
    text-align: center;
    margin-top: 5px;
}
#BCCompareModal {
    background-color: White;
    border: solid 2px #6e99c9;
    margin: 5px;
    padding: 10px;
}
#BuyBCComparePanelTopInfo {
    text-align: center;
    padding: 10px 40px 10px 40px;
    width: 340px;
}
.BuyBCComparePanelTable {
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 12px;
    background: #fff;
    width: 340px;
    margin: 0 40px 0 40px;
    border-collapse: collapse;
    margin-bottom: 15px;
}
.BCCompareHeaderRow {
    color: #2163A5;
    padding: 10px 8px;
    border-bottom: 1px solid #D3D3D3;
    text-align: left;
}
.BuyBCComparePanelTable tr:hover td,
.BuyBCComparePanelTable tr:hover td {
    color: Maroon;
}
.BCCompareRowOdd td,
.BCCompareRowEven td {
    color: #2163A5;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
}
.BCCompareRowOdd {
    background: #e8edff;
}
#BCCompareButtons {
    text-align: center;
    width: 340px;
    margin: 0 40px 0 40px;
}
#upgrades-membership-options .leftBorder {
    border-left: 1px solid #D3D3D3;
}
#upgrades-membership-options .odd #upgrades-membership-options .LeftText {
    text-align: left;
}
.daysConversion {
    color: Red;
}
.AspNet-Login input {
    font-size: 1em;
}
.AspNet-Login label em {
    text-decoration: underline;
    font-style: normal;
}
.AspNet-Login .AspNet-Login-FailurePanel {
    color: #F00;
}
.AspNet-Login .AspNet-Login-UserPanel,
.AspNet-Login .AspNet-Login-PasswordPanel,
.AspNet-Login .AspNet-Login-RememberMePanel,
.AspNet-Login .AspNet-Login-SubmitPanel {
    padding: .25em .1em 0 0;
}
.AspNet-Login .AspNet-Login-UserPanel,
.AspNet-Login .AspNet-Login-PasswordPanel,
.AspNet-Login .AspNet-Login-SubmitPanel {
    text-align: left;
}
.AspNet-Login .AspNet-Login-UserPanel label,
.AspNet-Login .AspNet-Login-PasswordPanel label,
#PaneLogin .TextboxLabel {
    font-weight: bold;
}
.AspNet-Login .AspNet-Login-UserPanel input,
.AspNet-Login .AspNet-Login-PasswordPanel input {
    width: 9em;
}
#PaneNewUser {
    float: right;
    width: 170px;
    background-color: #dcdcdc;
    padding: 0 22px 22px;
}
#PaneLogin {
    width: 18em;
    padding: 0;
}
#PaneLogin .AspNet-Login div {
    margin: 10px;
}
#LoginView {
    border: solid 1px Black;
    width: 150px;
    height: 250px;
}
#LoginView h5 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    margin: 0;
}
#LoginView #AlreadySignedIn {
    background-color: #eee;
}
#LoginView .Label {
    font-weight: bold;
}
#LoginView .Text {
    width: 133px;
}
#LoginView .AspNet-Login {
    height: 225px;
    background-color: #eee;
}
#LoginView .AspNet-Login .AspNet-Login-InstructionPanel,
#LoginView .AspNet-Login .AspNet-Login-HelpPanel,
#LoginView .AspNet-Login .AspNet-Login-UserPanel,
#LoginView .AspNet-Login .AspNet-Login-PasswordPanel,
#LoginView .AspNet-Login .AspNet-Login-RememberMePanel {
    padding: 3px 5px 3px 5px;
    text-align: left;
}
#LoginView .AspNet-Login .AspNet-Login-SubmitPanel,
#LoginView .AspNet-Login .AspNet-Create-Account {
    padding: 10px 5px 5px 10px;
    text-align: center;
}
#LoginView .AspNet-Login .AspNet-Login-PasswordRecoveryPanel {
    padding: 5px 5px 5px 5px;
    text-align: center;
}
#LoginView .AspNet-Login .AspNet-Login-PasswordRecoveryPanel a {
    color: #999;
    font: normal 9px/normal Verdana, sans-serif;
    padding: 5px 5px 5px 5px;
    text-align: center;
}
#LoginView .AspNet-Login .AspNet-Login-PasswordRecoveryPanel a:hover {
    color: Blue;
}
#Sidebars {
    float: right;
    width: 250px;
}
#AlreadyRegistered,
#TermsAndConditions {
    background-color: #eee;
    border: solid 1px #000;
    color: #555;
    font: normal 12px/normal Verdana, sans-serif;
    margin-top: 10px;
    padding: 0 20px 10px 20px;
}
#AlreadyRegistered h3,
#TermsAndConditions h3 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-weight: bold;
    margin: 0 -20px 0 -20px;
    padding: 4px;
    text-align: center;
}
#TermsAndConditions {
    margin-top: 20px;
}
.Registration {
    background-color: #eee;
    border: solid 1px #000;
    color: #555;
    float: left;
    margin-top: 10px;
    width: 620px;
}
.Registration h2 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-size: x-large;
    margin: 0;
    text-align: center;
}
.Registration h3 {
    margin: 10px 0 0 0;
    text-align: center;
}
.Registration fieldset {
    font-size: 1.2em;
    margin: 15px 0 0 0;
}
.Registration .TextBox {
    vertical-align: middle;
    width: 150px;
}
.Registration .Label {
    vertical-align: middle;
}
.Registration #EnterUsername,
.Registration #EnterPassword,
.Registration #EnterEmail,
.Registration #EnterAgeGroup,
.Registration #EnterChatMode {
    margin: 0 auto;
    width: 60%;
}
.Registration .UsernameRow,
.Registration .PasswordRow,
.Registration .ConfirmPasswordRow,
.Registration .EmailRow {
    height: 5em;
    line-height: 5em;
    padding: 3px;
    text-align: right;
}
.Registration .PasswordRow,
.Registration .ConfirmPasswordRow {
    height: 3em;
    line-height: 3em;
}
.Registration .AgeGroupRow,
.Registration .ChatModeRow {
    font-size: .9em;
    margin: 10px 0 10px 100px;
}
.Registration .Confirm {
    margin: 20px 0 20px 0;
    text-align: center;
}
.Registration .Validators {
    margin-left: 9px;
}
.Registration .Legend {
    color: Blue;
    margin-left: 9px;
}
.Registration .Suggestion {
    font: normal .8em/normal Verdana, sans-serif;
    padding-left: 9px;
}
.Registration label {
    margin-right: 5px;
}
.Registration input {
    width: 9em;
}
.AgeOptions {
    margin: 0 auto;
    margin-top: 20px;
    width: 490px;
}
.AgeOptions #Under13,
.AgeOptions #Over12 {
    margin: 0;
    padding: 0 20px;
    width: 200px;
    text-align: center;
}
.AgeOptions #ParentAccount {
    margin: 0;
    padding: 0 0 0 40px;
    width: 400px;
    text-align: center;
}
#AgeOptions .Label {
    text-align: center;
}
.MessageContainer .MultilineTextBox {
    min-height: 50px;
}
.MessageContainer #AdsPane {
    border: solid 1px #000;
    float: left;
    width: 160px;
}
.MessageContainer #MessagePane {
    float: left;
    margin: 0 0 0 60px;
    width: 650px;
}
.MessageContainer h3 {
    text-align: left;
    width: 622px;
}
.MessageContainer #MessagePane .Buttons {
    width: 622px;
}
.MessageContainer #MessagePane .Buttons .Button {
    margin: 10px 0 0 10px;
}
.MessageContainer .Label {
    font-weight: bold;
    padding: 6px 0 3px 0;
}
.MessageContainer .MessageReaderContainer {
    border: solid 1px #000;
    padding: 10px;
    width: 95%;
}
.MessageReaderContainer #Message {
    text-align: left;
}
#Message #DateSent {
    text-align: left;
}
#Message #Author {
    margin: 0;
    text-align: left;
}
#Message #Subject {
    display: inline-block;
    *display: inline;
    font-weight: bold;
    margin: 0;
    text-align: center;
    width: 350px;
    *zoom: 1;
}
#Message .Body {
    text-align: left;
    vertical-align: top;
}
#MessageEditorContainer {
    border: solid 1px #000;
    padding: 10px;
    width: 95%;
}
.EmptyInbox {
    text-align: center;
    margin: 20px 0;
}
.MessageEditor {
    text-align: left;
}
.MessageEditor #From {
    text-align: left;
    width: 39%;
}
.MessageEditor #To {
    margin: 5px 0 0 0;
    text-align: left;
    width: 39%;
}
.MessageEditor .CannedResponsesPanel {
    background-color: #eee;
    border: solid 1px #000;
    margin: 30px 0;
    width: 200px;
}
.MessageEditor .CannedResponsesPanel h4 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    font-size: 1.3em;
    margin: 0;
    text-align: center;
    display: block;
}
.MessageEditor #CannedResponses {
    margin: 0;
    padding: 5px 0;
    width: 200px;
}
.MessageEditor .CannedResponse {
    margin: 0;
    padding: 7px 5px;
    text-align: center;
    width: 190px;
}
.MessageEditor #CannedResponses .Button {
    padding: 3px 5px;
}
.MessageEditor .Body {
    text-align: left;
    vertical-align: top;
}
.MessageContainer #Confirmation h3 {
    text-align: left;
    width: 422px;
}
.MessageContainer #Confirmation .Buttons {
    width: 422px;
}
.MessageContainer #Confirmation #Message {
    border: solid 1px #000;
    padding: 10px;
    width: 95%;
}
#InvitationContainer #AdsPane {
    border: solid 1px #000;
    float: left;
    width: 160px;
}
#InvitationContainer #InvitationPane {
    float: left;
    margin: 0 0 0 60px;
    width: 650px;
}
#InvitationContainer h3 {
    text-align: left;
    width: 622px;
}
#InvitationContainer .Buttons {
    width: 622px;
}
#InvitationContainer .Button {
    float: right;
    font-family: Verdana, Sans-Serif;
    padding: 3px 10px 3px 10px;
    text-decoration: none;
}
#InvitationContainer .TextBox {
    border-color: Gray;
    border-style: dashed;
    padding: 5px;
    width: 98%;
}
#InvitationContainer .Label {
    font-weight: bold;
}
#InvitationContainer .MessageReaderContainer {
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    padding: 10px;
    width: 95%;
}
.MessageReaderContainer #Message {
    float: left;
    text-align: left;
}
#InvitationContainer #MessageEditorContainer .MessageEditor .CannedResponsesPanel {
    display: none;
}
#InvitationContainer #Confirmation h3 {
    text-align: left;
    width: 422px;
}
#InvitationContainer #Confirmation .Buttons {
    width: 422px;
}
#InvitationContainer #Confirmation #Message {
    border: solid 1px #000;
    margin: 10px;
    padding: 10px;
    width: 95%;
}
.ReportAbuse {
    position: relative;
    text-align: left;
}
.ReportAbuse .AbuseButton a {
    color: #F99;
    background: none;
    padding-left: 16px;
    padding-bottom: 2px;
}
.ReportAbuse .AbuseButton a:hover {
    background: url("/images/cssspecific/rbx2/abuse.png") no-repeat scroll 0 2px transparent;
    color: #F00;
}
.ReportAbuse img {
    display: none;
}
#ParentsContainer #BreadcrumbsContainer {
    margin-bottom: 20px;
}
#ParentsContainer h2 {
    font-family: Verdana, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1em;
    margin: 0 0 20px 0;
}
#ParentsContainer #LeftColumn {
    float: left;
    padding: 0 15px 0 0;
    width: 400px;
}
#ParentsContainer #RightColumn {
    float: right;
    padding: 0 0 0 15px;
    width: 400px;
}
#ParentsContainer .ParentsSection {
    background-color: #fff;
    border: solid 1px #ccc;
    height: 120px;
    margin-bottom: 20px;
    padding: 15px 15px;
    width: 370px;
}
#ParentsContainer h3,
dt {
    color: Blue;
    font-family: Verdana, Sans-Serif;
    font-size: 1.3em;
    font-weight: normal;
    letter-spacing: .1em;
    line-height: 1em;
}
#ParentsContainer .SectionIcon {
    float: left;
    margin-right: 20px;
}
#ParentsContainer .PageImage {
    float: right;
}
#partycontainer {
    bottom: 110px;
    right: 10px;
}
.partyWindow {
    color: #666;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 11px;
    width: 250px;
}
.partyWindow .title {
    background: transparent url('/images/friendsbar/tab_blue19h_l.gif') no-repeat left top;
    display: block;
    text-decoration: none;
    padding-left: 2px;
    height: 19px;
    width: 248px;
    cursor: pointer;
}
.partyWindow .title span {
    background: transparent url('/images/friendsbar/tab_blue19h_r.gif') no-repeat right top;
    display: block;
    height: 15px;
    padding: 2px 15px 2px 7px;
    text-decoration: none;
    color: #fff;
}
.partyWindow .title_flash {
    background: transparent url('/images/friendsbar/tab_white19h_l2.gif') no-repeat left top;
}
.partyWindow .title_flash span {
    background: transparent url('/images/friendsbar/tab_white19h_r2.gif') no-repeat right top;
    color: #444;
}
.partyWindow .title strong {
    display: block;
    padding: 2px 15px 4px 6px;
    background: url("/images/chat/tab_blue21h_r.png") no-repeat right top;
    color: #fff;
    width: 227px;
    font-weight: bold;
}
.partyWindow .closeparty {
    width: 10px;
    height: 9px;
    margin: 5px 9px 0 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
}
.partyWindow .main {
    clear: both;
    width: 248px;
    height: auto;
    margin: 0;
    background: #f2f2f2;
    border: 1px solid #a6a6a6;
    border-top: 0 none;
    overflow: auto;
}
.partyWindow .kickuser {
    float: right;
    padding-right: 5px;
    color: Red;
    cursor: pointer;
}
#new_party p {
    text-align: center;
    padding: 40px 0 0 0;
}
#party_none .main .btn_green21h {
    margin: 15px 0 0 77px;
}
.clear {
    clear: both;
}
.main #new_party_clear {
    padding: 40px 0 0 0;
}
.btn_green21h {
    float: left;
    background: url("/images/chat/btn_green21h_l.png") no-repeat left top;
    padding: 0 0 0 2px;
}
.btn_green21h a {
    display: block;
    padding: 2px 14px 4px 10px;
    background: url("/images/chat/btn_green21h_r.png") no-repeat right top;
    color: White;
    font-family: verdana;
    font-weight: bold;
    text-decoration: none;
}
.btn_green21h:hover {
    background: url("/images/chat/btn_green21h_over_l.png") no-repeat left top;
}
.btn_green21h:hover a {
    background: url("/images/chat/btn_green21h_over_r.png") no-repeat right top;
}
.btn_red21h {
    float: left;
    background: url("/images/chat/btn_red21h_l.png") no-repeat left top;
    padding: 0 0 0 2px;
}
.btn_red21h a {
    display: block;
    padding: 2px 14px 4px 10px;
    background: url("/images/chat/btn_red21h_r.png") no-repeat right top;
    color: White;
    font-family: verdana;
    font-weight: bold;
    text-decoration: none;
}
.btn_red21h:hover {
    background: url("/images/chat/btn_red21h_over_l.png") no-repeat left top;
}
.btn_red21h:hover a {
    background: url("/images/chat/btn_red21h_over_r.png") no-repeat right top;
}
.btn_black21h {
    float: left;
    background: url("/images/chat/btn_black21h_l.png") no-repeat left top;
    padding: 0 0 0 2px;
    color: White;
}
.btn_black21h a {
    display: block;
    padding: 2px 14px 4px 10px;
    background: url("/images/chat/btn_black21h_r.png") no-repeat right top;
    color: #FFF;
    font-family: verdana;
    font-weight: bold;
    text-decoration: none;
}
.btn_black21h:hover {
    background: url("/images/chat/btn_black21h_over_l.png") no-repeat left top;
}
.btn_black21h:hover a {
    background: url("/images/chat/btn_black21h_over_r.png") no-repeat right top;
}
.main h1 {
    padding: 15px 20px 15px 20px;
    font-size: 130%;
    text-align: center;
}
.main #invite_status {
    padding: 10px 0 10px 0;
}
.main p {
    padding: 0 0 7px 0;
}
.main .btn_green21h {
    float: left;
    margin: 0 0 0 35px;
}
.main .btn_black21h {
    float: right;
    margin: 0 35px 0 0;
}
.main #invite_clear {
    padding: 15px 0 0 0;
}
dt {
    float: left;
}
dd {
    margin-left: 30px;
}
.grey9 {
    color: gray;
    font-size: 9px;
}
.status {
    color: gray;
    font-size: 11px;
}
.name_me {
    font-weight: bold;
    color: #06c;
}
.name_other {
    font-weight: bold;
    color: #007b00;
}
.name_status {
    font-weight: bold;
}
.partyWindow {
    color: black;
    font-size: 11px;
    height: auto;
}
.members dl {
    padding: 0 0 0 5px;
}
.members dt {
    padding: 4px 0 0 0;
}
.members dd {
    padding: 4px 0 1px 0;
}
.main p {
    padding: 10px 0 5px 0;
    text-align: center;
}
#chat_messages {
    padding: 0 3px 3px 3px;
    margin: 5px 5px 0 5px;
    height: 217px;
    overflow: auto;
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: #aaa;
}
#chat_messages li {
    padding: 6px 0 0 0;
    list-style-type: none;
}
#party_game_thumb {
    width: 75px;
    margin-right: 5px;
    float: left;
}
#party_current_game {
    margin: 5px;
}
#party_game_name {
    width: 140px;
    float: left;
}
#party_game_follow_me {
    margin-top: 5px;
}
#chat_input {
    margin: 5px 5px 0 5px;
    padding-right: 2px;
}
#chat_input input {
    border: 1px solid #ccc;
    width: 236px;
    height: 40px;
}
#chat_input textarea {
    border: 1px solid #aaa;
    overflow: auto;
    width: 100%;
    height: 50px;
}
.main #leader_clear {
    padding: 15px 0 0 0;
}
#party_my .main .btn_black21h {
    margin: 15px 70px 0 0;
}
.GuestPlayAvatarImage {
    border: solid 3px green;
}
.GuestPlayAvatarImage:Hover {
    border: solid 3px #0C0;
}
#ConfigurePlaceContainer {
    background-color: #eee;
    border: solid 1px #000;
    color: #555;
    margin: 0 auto;
    width: 620px;
}
#ConfigurePlaceContainer h2 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-size: x-large;
    margin: 0;
    text-align: center;
}
#ConfigurePlaceContainer fieldset {
    font-size: 1.2em;
    margin: 0;
}
#ConfigurePlaceContainer #PlaceName {
    margin: 0 auto;
    margin-top: 10px;
    padding: 0;
    text-align: left;
    width: 420px;
}
#ConfigurePlaceContainer #PlaceThumbnail {
    border: solid 1px #555;
    height: 230px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 0;
    text-align: left;
    width: 420px;
}
#ConfigurePlaceContainer #PlaceDescription {
    margin: 0 auto;
    margin-top: 10px;
    padding: 0;
    text-align: left;
    width: 420px;
}
#ConfigurePlaceContainer #PlaceAccess,
#ConfigurePlaceContainer #PlaceCopyProtection,
#ConfigurePlaceContainer #Comments,
#ConfigurePlaceContainer #PlaceIsDefault,
#ConfigurePlaceContainer #PlaceReset,
#ConfigurePlaceContainer #AllowGear,
#ConfigurePlaceContainer #SetGenres,
#ConfigurePlaceContainer #PlaceBuildAccess {
    margin: 0 auto;
    margin-top: 10px;
    width: 420px;
}
#ConfigurePlaceContainer .PlaceAccessRow,
#ConfigurePlaceContainer .CopyProtectionRow,
#ConfigurePlaceContainer .EnableCommentsRow,
#ConfigurePlaceContainer .PlaceIsDefaultRow,
.MyItemIndentedOption {
    font-size: .9em;
    margin: 10px 0 10px 100px;
}
#ConfigurePlaceContainer .ResetPlaceRow {
    font-size: .9em;
    margin: 10px 0;
    text-align: center;
}
#ConfigurePlaceContainer .ResetPlaceRow .Button {
    margin: 0 auto;
}
#ConfigurePlaceContainer .Buttons {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}
#ConfigurePlaceContainer .Button {
    border-color: #555;
    color: #555;
    cursor: pointer;
}
#ConfigurePlaceContainer .Button:hover {
    background-color: #6e99c9;
    color: #fff;
}
#ConfigurePlaceContainer .Label {
    font-size: 1.2em;
    margin: 0;
    padding: 0;
}
#ConfigurePlaceContainer .TextBox {
    border: dashed 1px #555;
    margin: 0;
    padding: 5px 10px;
    width: 400px;
}
#ConfigurePlaceContainer .MultilineTextBox {
    border: dashed 1px #555;
    margin: 0;
    padding: 5px 10px;
    width: 400px;
}
#ConfigurePlaceContainer .Suggestion {
    font: normal .8em/normal Verdana, sans-serif;
    padding-left: 9px;
}
#ConfigurePlaceContainer .popupControl {
    border-color: #000;
}
#ConfigurePlaceContainer .PopUpOption {
    font: normal .8em/normal Verdana, sans-serif;
    padding: 4px;
}
#ConfigurePlaceContainer .PopUpInstruction {
    font: normal 1.1em/normal Verdana, sans-serif;
    padding: 4px;
    text-align: center;
}
#Place_PlacePanel {
    float: left;
    width: 490px;
    margin-right: 10px;
}
#Place_AuthorPanel {
    float: left;
    width: 200px;
}
#Place_GamesPanel {
    margin-top: 10px;
    width: 700px;
    clear: left;
}
#ConfigureShowcase {
    font-family: Verdana, sans-serif;
}
#ConfigureShowcase h2 {
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1em;
    margin: 0;
    padding: 0;
}
#ConfigureShowcase .CallbackStyle {
    border: thin blue inset;
}
#ConfigureShowcase .DragHandle {
    width: 161px;
    height: 101px;
    cursor: move;
    border: outset 1px white;
}
#ConfigureShowcase .ItemArea {
    float: left;
    font-size: 1.2em;
    height: 82px;
    padding: 10px;
    text-align: left;
    width: 500px;
}
#ConfigureShowcase .ActionsArea {
    float: left;
    font-weight: bold;
    height: 82px;
    padding: 10px;
    text-align: right;
    width: 155px;
}
#ConfigureShowcase .ReorderCue {
    border: dashed thin black;
    width: 100%;
    height: 101px;
}
#ConfigureShowcase ul,
#ConfigureShowcase ol {
    margin: 0;
}
#ConfigureShowcase li {
    background: #EEE;
    border: solid 1px #000;
    color: #000;
    list-style: none;
    margin: 3px 0;
    width: 100%;
}
#ConfigureShowcase blockquote li {
    border-style: none;
    list-style-type: circle;
    margin-left: 20px;
}
.PlaceLauncherStatus {
    color: #333;
    display: none;
    font-size: 16px;
    font-weight: bolder;
    line-height: 19px;
}
.PlaceLauncherStatusBackBuffer {
    position: relative;
    display: none;
}
.CancelPlaceLauncherButton {
    background-color: White;
    border: none;
    color: Blue;
    cursor: pointer;
    font-size: 12px;
}
.CancelPlaceLauncherButton:Hover,
.CancelPlaceLauncherButton:Active {
    background-color: White;
    border: none;
    color: Blue;
    cursor: pointer;
    text-decoration: underline;
}
.PlaceLauncherModal {
    border: none;
    color: Black;
    height: 125px;
    margin: 1.5em;
    padding: 10px;
    text-align: center;
    width: 360px;
}
#FeaturedGameButtonContainer {
    border: none;
    width: 330px;
    height: 267px;
}
.FeaturedGameButton {
    cursor: pointer;
    position: absolute;
    right: 60px;
    top: 28px;
}
.VisitButtonsGuestCharacter {
    display: inline-block;
    *display: inline;
    padding: 10px 5px;
}
legend span {
    color: #777;
    line-height: 6px;
}
#EditProfileContainer {
    background-color: #eee;
    border: solid 1px #000;
    color: #555;
    margin: 0 auto;
    width: 620px;
}
#EditProfileContainer h2 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-size: x-large;
    margin: 0;
    text-align: center;
}
#EditProfileContainer h3 {
    text-align: center;
}
#EditProfileContainer fieldset {
    font-size: 1.2em;
    margin: 15px 0 0 0;
}
#EditProfileContainer .MultilineTextBox {
    width: 250px;
}
#EditProfileContainer .TextBox {
    vertical-align: middle;
    width: 150px;
}
#EditProfileContainer .Label {
    vertical-align: middle;
}
#EditProfileContainer #Confirmation {
    border: dashed 1px #f00;
    background-color: #ccc;
    color: #f00;
    font-family: Verdana, Sans-Serif;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px 5px;
    text-align: center;
    width: 410px;
}
#EditProfileContainer #AgeGroup,
#EditProfileContainer #ChatMode,
#EditProfileContainer #PrivacyMode,
#EditProfileContainer #ResetPassword,
#EditProfileContainer #Blurb {
    margin: 0 auto;
    width: 60%;
}
#EditProfileContainer #EnterEmail {
    margin: 0 auto;
    width: 60%;
    text-align: left;
}
#EditProfileContainer .Buttons {
    margin: 20px 0 20px 0;
    text-align: center;
}
#EditProfileContainer .AgeGroupRow,
#EditProfileContainer .ChatModeRow {
    font-size: .9em;
    margin: 10px 0 10px 100px;
}
#EditProfileContainer .ResetPasswordRow {
    margin: 10px 0;
    text-align: center;
}
#EditProfileContainer .BlurbRow {
    padding: 10px 4px 10px 4px;
    text-align: right;
}
#EditProfileContainer .Legend {
    color: Blue;
    margin-left: 9px;
}
#EditProfileContainer .Suggestion {
    font: normal .8em/normal Verdana, sans-serif;
    padding-left: 9px;
}
#EditProfileContainer .Validators {
    margin-left: 9px;
}
.FrontPagePanel {
    float: left;
    border: solid 1px black;
    margin: 5px;
    background-color: White;
}
#SignInPane {
    border: none;
    margin-left: 0;
    width: 152px;
    height: 250px;
}
#Movie {
    width: 424px;
    height: 250px;
}
#FrontPageRectangleAd {
    margin: 5px 0 5px 5px;
    width: 300px;
    height: 250px;
    background-color: Transparent;
}
#SalesPitch {
    margin-left: 0;
    width: 586px;
    height: 90px;
}
#WhatsNew {
    margin-left: 0;
    width: 586px;
    height: 280px;
}
#RandomFacts {
    float: right;
    margin-right: 0;
    width: 300px;
    height: 150px;
}
.RandomFactoid {
    text-align: center;
    height: 32px;
    width: 290px;
    padding: 2px;
    overflow: hidden;
}
#marqueecontainer {
    position: relative;
    width: 300px;
    height: 100px;
    background-color: white;
    overflow: hidden;
}
.RandomFactoid img {
    float: left;
}
#ParentsCorner {
    margin-right: 0;
    width: 300px;
    height: 220px;
    _height: 240px;
}
#ParentsCorner #Inside {
    padding: 10px;
}
.ShieldImage {
    float: left;
    padding: 5px;
}
.TrusteeSeal {
    float: left;
    width: 140px;
    padding: 5px;
}
#NewsFeeder {
    margin-right: 0;
    width: 158px;
}
#FrontPageBannerAd {
    margin-left: 0;
    width: 728px;
    height: 90px;
    background-color: Transparent;
}
.BadAdButton {
    background-color: Transparent;
    border: 0;
    font-size: .8em;
    font-family: Verdana;
    padding: 0;
    position: relative;
    text-align: center;
    height: 8px;
    top: -2px;
    right: 0;
}
.BadAdButton:hover {
    background-color: #fff;
    border: solid 1px #000;
    text-decoration: none;
}
.Centered {
    margin-left: auto;
    margin-right: auto;
}
.ShadowedStandardBox {
    position: relative;
    z-index: 0;
    _padding-bottom: 6px;
    _overflow-y: hidden;
    margin-bottom: 10px;
}
.ShadowedStandardBox .Header {
    background: url(../../../images/HeaderGradientW800.png) repeat-y top left;
    text-align: center;
    color: White;
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    font-weight: bold;
    display: block;
    position: relative;
    z-index: 0;
    white-space: nowrap;
}
.ShadowedStandardBox .Content {
    position: relative;
    z-index: 0;
    border: 2px solid #6e99c9;
    background-color: White;
    height: 100%;
    _height: 3000px;
    padding: 10px 10px 10px 10px;
}
.Shadow {
    display: block;
    background: url(../../../images/ShadowAlpha.png) no-repeat bottom right!important;
    background: #D3DEFF;
    height: 100%;
    _height: 3000px;
    width: 100%;
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: -1;
}
.ShadowedStandardBox .Button {
    cursor: pointer;
    background-color: #B6CCE4;
    color: #435D77;
    text-decoration: none;
    border: solid 1px #ccc;
    padding: 3px 10px 3px 10px;
    font-family: Verdana;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
}
.ShadowedStandardBox .Button:link,
.ShadowedStandardBox .Button:visited {
    background-color: #B6CCE4;
    color: #435D77;
    text-decoration: none;
}
.ShadowedStandardBox .Button:hover,
.ShadowedStandardBox .Button:active {
    background-color: #5F84A8;
    color: White;
    text-decoration: none;
}
.OutlineBox {
    z-index: 0;
    position: relative;
    margin-top: 16px;
    padding-top: 14px;
    margin-bottom: 10px;
    border: solid 2px #B6CCE4;
}
.OutlineBox .OB_HeaderPositioner {
    z-index: 1;
    position: absolute;
    top: -16px;
    left: 0;
    width: 100%;
}
.OutlineBox .OB_Header {
    z-index: 1;
    display: block;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: White;
    border: solid 2px #B6CCE4;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 2px 2px 2px 2px;
}
.OutlineBox .OB_Content {
    padding-top: 5px;
}
#InviteAFriendContainer {
    margin-top: 10px;
}
#InviteAFriendContainer h3 {
    margin: 0 auto;
    padding: 0 0 10px 0;
    text-align: left;
    width: 700px;
}
#InviteAFriendContainer #Exposition {
    margin: 0 auto;
    padding: 0 0 10px 0;
    width: 700px;
}
#InviteAFriendContainer .Button {
    border: solid 1px #000;
    color: #000;
    font-family: Verdana, Sans-Serif;
    margin: 0 0 0 10px;
    padding: 3px 10px 3px 10px;
    text-decoration: none;
}
#InviteAFriendContainer .MultilineTextBox {
    border: 2px solid #CCC;
    font-family: Arial, Sans-Serif;
    line-height: 1.5em;
    padding: 5px 5px 5px 5px;
    width: 92%;
}
#InviteAFriendContainer .TextBox {
    border: 2px solid #CCC;
    font-family: Arial, Sans-Serif;
    padding: 5px 5px 5px 5px;
    width: 92%;
}
#InviteAFriendContainer .Label {
    font-weight: bold;
}
#InviteAFriendContainer #InvitationElements {
    margin: 0 auto;
    padding: 5px 5px 5px 5px;
    width: 688px;
}
#InviteAFriendContainer #Name,
#InviteAFriendContainer #Recipients,
#InviteAFriendContainer #Message {
    margin: 15px 0 0 0;
}
#InviteAFriendContainer .FormLabel {
    float: left;
    width: 94px;
}
#InviteAFriendContainer .FormField {
    float: left;
    width: 317px;
}
#InviteAFriendContainer .FormNotes {
    float: right;
    font-family: Verdana;
    font-size: xx-small;
    width: 277px;
    text-align: left;
}
#InviteAFriendContainer #Confirmation h3 {
    margin: 0 auto;
    text-align: left;
    width: 400px;
}
#InviteAFriendContainer #Confirmation #Message {
    border: solid 1px #000;
    margin: 0 auto;
    padding: 10px 10px 10px 10px;
    width: 380px;
}
#InviteAFriendContainer #Confirmation .Buttons {
    margin: 0 auto;
    width: 400px;
}
#ShareRobloxRibbon {
    margin: 15px 0;
    padding: 3px;
    text-align: center;
}
#ShareRobloxRibbon a {
    text-decoration: none;
    color: #000;
}
.ShareRobloxButton {
    padding: 4px;
    margin: 4px 6px;
    border: 3px solid #B2C1D2;
    background: #A5D0FF;
    color: #000;
    cursor: pointer;
    font-size: 16px;
}
.ShareRobloxButtonCurrent {
    padding: 4px;
    margin: 4px 6px;
    border: 3px solid #B2C1D2;
    background: #527396;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
}
.ShareRobloxButton:hover {
    background: #527396;
    color: #FFF;
}
.clearing {
    clear: both;
}
#PleaseUpgradeMeContainer {
    margin-top: 10px;
}
#StoreContainer {
    font-family: Verdana, Sans-Serif;
}
#StoreContainer h2 {
    font-family: Verdana, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    letter-spacing: .5em;
    line-height: 1em;
    margin: 0;
    padding: 0;
}
#StoreContainer h3 {
    font-family: Verdana, Sans-Serif;
    font-size: 1.5em;
    font-weight: normal;
    letter-spacing: .1em;
    line-height: 1em;
    margin: 5px 0;
    padding: 0;
}
#StoreContainer ul {
    list-style: none;
    margin: 10px 0 30px 0;
}
#StoreContainer ul li {
    margin-bottom: .5em;
}
#StoreContainer ul a {
    font-size: 1.1em;
}
#StoreContainer .DisplayFilters {
    width: 150px;
}
#StoreContainer #Products {
    float: left;
    padding-bottom: 10px;
    padding-left: 0;
    padding-right: 0;
    width: 585px;
}
#StoreContainer #Products #HeaderPager,
#StoreContainer #Products #FooterPager {
    margin: 0 24px 0 10px;
    padding: 2px 0;
    text-align: right;
}
#StoreContainer #Products #HeaderPager {
    margin-bottom: 10px;
}
#StoreContainer #Products #HeaderPager .Label,
#StoreContainer #Products #FooterPager .Label {
    font-size: 1em;
    vertical-align: middle;
}
#StoreContainer #Products #AdditionalPlace {
    margin: 0 auto;
    width: 420px;
}
#StoreContainer #AdsPane {
    border: solid 1px #000;
    float: right;
    text-align: right;
    width: 160px;
}
#StoreContainer .Label,
#StoreContainer .Detail,
#StoreContainer .DetailHighlighted {
    font-size: .8em;
}
#StoreContainer .DetailHighlighted {
    color: Red;
    font-weight: bold;
}
#StoreContainer .Thumbnail {
    border: solid 1px #000;
    height: 230px;
    width: 420px;
}
#StoreContainer .Price {
    font-weight: bold;
    margin: 5px 0;
}
#StoreContainer .InsufficientFunds {
    color: Red;
}
.tipsy {
    padding: 5px;
    font-size: 10px;
    opacity: .8;
    filter: alpha(opacity=80);
    background-repeat: no-repeat;
    background-image: url(/images/cssspecific/rbx2/tipsy.gif);
}
.tipsy-inner {
    padding: 5px 8px 4px 8px;
    background-color: black;
    color: white;
    max-width: 200px;
    text-align: center;
}
.tipsy-inner {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
}
.tipsy-north {
    background-position: top center;
}
.tipsy-south {
    background-position: bottom center;
}
.tipsy-east {
    background-position: right center;
}
.tipsy-west {
    background-position: left center;
}
#CancelBuildersClubContainer,
#PaymentMethodsContainer,
#PaymentContainer,
#PayPalContainer,
#CashContainer {
    background-color: #fff;
    font-family: Arial, Sans-Serif;
    margin: 0 auto;
    padding: 20px 80px;
}
#UpgradeCompleteContainer,
#CancelAccountUpgradeContainer,
#ManageAccountUpgradesContainer,
#AccountUpgradesConfirmationContainer {
    background-color: #fff;
    font-family: Arial, Sans-Serif;
    margin: 0 auto;
}
#AccountUpgradesConfirmationContainer,
#CancelAccountUpgradeContainer {
    border: solid 2px #6e99c9;
    padding: 10px 10px 20px 10px;
}
#CancelBuildersClubContainer h2,
#PaymentMethodsContainer h2,
#PaymentContainer h2,
#PayPalContainer h2,
#CashContainer h2,
#UpgradeCompleteContainer h2,
#ManageAccountUpgradesContainer h2,
#CancelAccountUpgradeContainer h2,
#AccountUpgradesConfirmationContainer h2 {
    font-family: Arial, Sans-Serif;
    font-size: 2.5em;
    font-weight: normal;
    line-height: 1em;
    margin: 0;
    padding: 0;
}
#UpgradeCompleteContainer h2,
#CancelAccountUpgradeContainer h2,
#ManageAccountUpgradesContainer h2,
#AccountUpgradesConfirmationContainer h2 {
    font-size: 2em;
    letter-spacing: .1em;
    line-height: 1.5em;
    margin: 0 auto;
    margin-top: 10px;
    width: 600px;
}
#UpgradeCompleteContainer p,
#ManageAccountUpgradesContainer p,
#AccountUpgradesConfirmationContainer p {
    line-height: 1.6em;
}
#RobloxCentralBank {
    border-bottom: solid 1px #000;
}
#MembershipOptions .Label,
#SpecialMembershipOption .Label {
    text-align: center;
}
#WhyJoin {
    display: inline;
    float: left;
    margin: 30px 10px 20px 90px;
    padding: 0;
    width: 375px;
}
#WhyJoin h3 {
    font-size: 15pt;
    font-weight: normal;
    letter-spacing: .2em;
    margin: 0 0 15px 0;
    padding: 0;
}
#WhyJoin #MembershipBenefits {
    list-style: none;
    margin: 0;
    padding: 0;
}
#WhyJoin #MembershipBenefits li {
    background-position: 0 0;
    background-repeat: no-repeat;
    font-family: Arial, Sans-Serif;
    font-size: 11pt;
    margin: 0 0 10px 10px;
    min-height: 32px;
    padding: 0 0 0 40px;
}
#WhyJoin .MembershipBenefits {
    list-style: none;
    margin: 0;
    padding: 0;
}
#WhyJoin .MembershipBenefits li {
    background-position: 0 0;
    background-repeat: no-repeat;
    font-family: Arial, Sans-Serif;
    font-size: 11pt;
    margin: 0 0 10px 10px;
    min-height: 32px;
    padding: 0 0 0 40px;
}
#WhyJoin .MembershipBenefits .Benefit_MultiplePlaces {
    background-image: url(../../../images/MultiplePlacesBullet.png);
}
#WhyJoin .MembershipBenefits .Benefit_RobuxAllowance {
    background-image: url(../../../images/AllowanceBullet.png);
}
#WhyJoin .MembershipBenefits .Benefit_SellContent {
    background-image: url(../../../images/SellBullet.png);
}
#WhyJoin .MembershipBenefits .Benefit_SuppressAds {
    background-image: url(../../../images/AdSuppressionBullet.png);
}
#WhyJoin .MembershipBenefits .Benefit_ExclusiveHat {
    background-image: url(../../../images/HardHatBullet.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_OwnPlace {
    background-image: url(../../../images/JoinBulletHouse.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_GetTix {
    background-image: url(../../../images/JoinBulletTreasure.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_BuyStuff {
    background-image: url(../../../images/JoinBulletShoppingBag.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_CustomizeGuy {
    background-image: url(../../../images/JoinBulletWizardHat.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_Username {
    background-image: url(../../../images/JoinBulletStar.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_Forums {
    background-image: url(../../../images/JoinBulletScript.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_Stats {
    background-image: url(../../../images/JoinBulletStats.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_Comments {
    background-image: url(../../../images/JoinBulletPencil.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_Badges {
    background-image: url(../../../images/JoinBulletBadges.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_Friends {
    background-image: url(../../../images/JoinBulletFriends.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_WeRock {
    background-image: url(../../../images/JoinBulletCreative.png);
}
#WhyJoin #MembershipBenefits #SignupBenefit_OhYeahItsFree {
    background-image: url(../../../images/JoinBulletHappy.png);
}
#SpecialMembershipOption {
    display: inline;
    float: right;
    margin: 30px 69px 0 10px;
    padding: 0;
    width: 254px;
}
#PaymentMethodsContainer .PaymentMethods {
    border: none;
    margin: 20px auto;
    padding: 10px;
    width: 600px;
}
#PaymentMethodsHeader {
    margin: 0 auto;
    padding-left: 60px;
    width: 600px;
}
.PaymentMethodRow {
    font-family: Arial, Helvetica, Sans-Serif;
    background-color: transparent;
    color: #090;
}
.PaymentMethodRow:hover {
    background-color: #f2f2f2;
    cursor: pointer;
    color: #00d900;
}
.PaymentMethodRowUnavailable a {
    color: #090;
}
.PaymentMethodRow td,
.PaymentMethodRowUnavailable td {
    border: none;
    padding: 20px;
}
#PaymentMethodsContainer .PaymentMethodName {
    color: #333;
    font-weight: bold;
    font-size: medium;
}
#Legend {
    margin-top: 10px;
}
#CurrentBalance {
    color: #333;
}
#PaymentContainer #Account,
#PaymentContainer #BillingInfo,
#PaymentContainer #ProductAndPricing,
#PaymentContainer #ProductAndPricing1,
#PaymentContainer #CreditCard,
#PayPalContainer #ConfirmDetails,
#CashContainer #ConfirmDetails,
#PayPalContainer #Notes,
#CashContainer #Notes {
    margin-bottom: 20px;
}
#PaymentContainer #Pay,
#PayPalContainer #Continue {
    margin: 0 auto;
    text-align: center;
}
.PaymentDropDownList {
    padding: 5px;
    width: 95%;
}
#PaymentContainer .Label,
#PayPalContainer .Label,
#CashContainer .Label {
    float: left;
    font-size: 1.25em;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    width: 250px;
}
#ConfirmDetails .Detail {
    background-color: #EEE;
    border-bottom: solid 1px #CCC;
    border-top: solid 1px #CCC;
    height: 40px;
    line-height: 40px;
}
#PaymentContainer .Field,
#PayPalContainer .Field,
#CashContainer .Field {
    float: left;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    width: 400px;
}
#PaymentContainer .Button,
#PayPalContainer .Button {
    font-size: 16px;
    margin: 0 3px;
}
#PaymentMethodsContainer .ExistingSubscription {
    font-size: 16px;
    color: Blue;
    width: 50%;
    text-align: center;
}
#PayPalContainer .PayPalDisallowedMessage {
    font-size: 16px;
    padding-bottom: 12px;
    color: Blue;
    width: 90%;
}
#ProductAndPricing,
#ProductAndPricing1 {
    float: left;
    width: 865px;
}
#ProductAndPricing .TotalRowName,
#ProductAndPricing .TotalRowPrice {
    font-size: 14px;
    font-weight: bold;
    padding-top: 10px;
}
.TotalRowName,
.TotalRowPrice,
.ProductName,
.SuperchargeProductName,
.ProductPrice,
.SuperchargeProductPrice {
    float: left;
    font-weight: bold;
}
.ProductName,
.TotalRowName,
.SuperchargeProductName {
    width: 600px;
}
.ProductPrice,
.TotalRowPrice,
.SuperchargeProductPrice {
    width: 200px;
}
.SuperchargeProductName,
.SuperchargeProductPrice {
    color: #E6B800;
}
#PaymentDetails #Account .Field,
#PaymentDetails #ProductAndPricing .Field,
#PayPalContainer #ConfirmDetails .Field,
#CashContainer #ConfirmDetails .Field {
    font-size: 1.25em;
    font-weight: bold;
}
#PaymentDetailsTable {
    width: 400px;
}
#UpgradeCompleteContainer #Message,
#CancelAccountUpgradeContainer #Message,
#ManageAccountUpgradesContainer #CurrentAccountUpgrades,
#AccountUpgradesConfirmationContainer #Message {
    background-color: #eee;
    border: solid 1px #ccc;
    margin: 0 auto;
    margin-top: 15px;
    padding: 10px;
    width: 580px;
}
#ManageAccountUpgradesContainer #CurrentAccountUpgrades {
    margin-top: 25px;
    font-family: Arial, Helvetica, Sans-Serif;
}
.ExtensionNote {
    margin: 10px 0;
}
.UpgradeStatus {
    font-weight: bold;
    margin: 20px;
    text-align: center;
}
#BuildersClubContainer {
    font-family: Arial, Sans-Serif;
    margin: 0 auto;
    width: 900px;
}
#BuildersClubContainer #LeftColumn {
    background-color: #fff;
    width: 575px;
    float: left;
    margin-top: 10px;
}
#BuildersClubContainer #LeftColumn #MembershipOptions {
    margin-bottom: 50px;
    padding: 10px 10px 0 10px;
}
#BuildersClubContainer #LeftColumn #MembershipOptions .MembershipButton {
    margin: 0 4px 0 4px;
    float: left;
    width: 130px;
}
#BuildersClubContainer #LeftColumn #MembershipOptions .BCButtonLabel {
    color: #6e99c9;
    margin-top: 4px;
    text-align: center;
}
#BuildersClubContainer #LeftColumn h1 {
    font-size: 20px;
    color: #6e99c9;
    font-style: italic;
    font-weight: bold;
}
#MembershipOptionsTable {
    width: 500px;
    margin: auto;
}
#MembershipOptionsTable tr {
    text-align: center;
}
#MembershipOptionsTable td {
    width: 100px;
    margin: 38px;
}
#MembershipOptionsTable td .BCButton {
    padding-left: 35px;
    padding-right: 0;
}
#MembershipOptionsTable .BCText {
    padding-right: 20px;
    width: 150px;
    text-align: left;
}
.TurboSpan {
    color: #72942E;
}
#upgrades-membership-options {
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 13px;
    background: #fff;
    padding-top: 10px;
    clear: left;
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}
#upgrades-membership-options th {
    font-size: 15px;
    font-weight: normal;
    color: #2163A5;
    padding: 5px 8px;
    border-bottom: 1px solid #D3D3D3;
    line-height: 32px;
}
#upgrades-membership-options th img {
    float: left;
}
#upgrades-membership-options td {
    color: #2163A5;
    padding: 5px 10px;
}
#upgrades-membership-options tbody tr:hover td {
    color: Maroon;
}
#upgrades-membership-options .leftBorder {
    border-left: 1px solid #D3D3D3;
    width: 150px;
}
#upgrades-membership-options .odd {
    background: #e8edff;
}
#upgrades-membership-options .LeftText {
    text-align: left;
}
#BuildersClubContainer #LeftColumn #WindowsOnlyWarning {
    padding-left: 10px;
    padding-bottom: 1px;
}
#BuildersClubContainer #RightColumn {
    margin: 10px 0 10px 5px;
    width: 290px;
    float: right;
}
.RightColumnBox,
#UpgradeCompleteContainer {
    border: 2px solid #6e99c9;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
}
.RightColumnBox a {
    text-decoration: underline;
}
.RightColumnBox h2 {
    float: left;
    font-size: 14px;
    color: Maroon;
}
.RightColumnBox h3 {
    text-align: left;
    font-size: 11px;
    clear: both;
}
.RightColumnBox h1 {
    float: left;
    font-size: 16px;
    color: Maroon;
    padding-left: 10px;
    font-weight: bold;
}
.RightColumnManageAccount {
    border-left: 2px solid #6e99c9;
    border-bottom: 2px solid #6e99c9;
    border-right: 2px solid #6e99c9;
    background-color: #fff;
    margin-bottom: 20px;
}
#CancelMembership {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
}
#RightColumn #ManageAccountBody {
    padding: 10px;
}
#RightColumn #ManageAccount #CancelMembershipButton,
#RedirectToLoginLink {
    text-align: center;
}
.OBCSellButton {
    border: 0;
    cursor: pointer;
    top: 218px;
    position: absolute;
}
.BuyRobuxBtn {
    display: inline-block;
    width: 205px;
    height: 44px;
    background: url(/images/buildersClubPage_buyRobux_44px.png) no-repeat;
}
.BuyRobuxBtn:hover {
    background-position: 0 -44px;
    cursor: pointer;
}
.cardPanelLeft {
    margin-left: 12px;
    margin-top: 25px;
    float: left;
}
.cardPanelRight {
    margin-right: 12px;
    margin-top: 10px;
    float: right;
}
.centeredImage {
    margin-bottom: 10px;
}
#GameCardButtonContainer {
    clear: both;
    margin: 15px 0;
}
.WhereToBuyTableCell,
WhereToBuyTableCellRight {
    width: 320px;
    padding: 10px 0;
}
.WhereToBuyTableCellRight {
    text-align: left;
}
.AwardAssetDisplayList {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: top;
    width: 100px;
    height: 100px;
}
.PaymentTextBox {
    padding: 5px;
    width: 90%;
}
.PaymentLabel {
    width: 120px;
    font-weight: bold;
}
.PaymentPadding {
    padding: 5px;
}
.AutoRecurText {
    color: Red;
    display: none;
}
#post-image-main,
#upload-video-main {
    font-size: 16pt;
    font-weight: bold;
    text-align: center;
}
#post-image-main a,
#post-image-main a:hover,
#upload-video-main a,
#upload-video-main a:hover {
    text-decoration: none;
}
#post-image-ul,
#upload-video-ul {
    text-align: left;
    font-weight: normal;
    font-size: 12pt;
}
#post-image-small,
#upload-video-small {
    font-weight: normal;
    font-size: 12pt;
}
#post-image-footer,
#upload-video-footer {
    text-align: right;
}
#post-image-footer a,
#upload-video-footer a {
    font-size: 12pt;
    font-weight: bold;
    text-decoration: none;
}
#post-image-footer a:hover,
#upload-video-footer a:hover {
    text-decoration: none;
}
#UserContainer {
    font-family: Verdana, Sans-Serif;
}
#UserContainer #LeftBank {
    float: left;
    text-align: center;
    width: 444px;
}
#UserContainer #RightBank {
    float: right;
    text-align: center;
    width: 444px;
}
#UserContainer #LeftBank #UserPageLargeRectangleAd {
    border: none;
}
#UserPlacesPane {
    clear: both;
    background-color: #FFF;
}
#UserPlacesPane {
    clear: both;
    background-color: #FFF;
}
.FriendRequestsPane,
#UserModelsContainer,
#UserAssetsPane {
    clear: both;
    margin: 10px 0 0 0;
    text-align: center;
}
#UserBadgesPane,
#UserStatisticsPane {
    margin: 10px 0 0 0;
}
#UserStatisticsPane {
    text-align: left;
}
#FriendsPane,
#FavoritesPane {
    clear: right;
    margin: 10px 0 0 0;
}
#UserAssetsPane {
    margin-bottom: 10px;
}
#UserBadgesPane #UserBadges {
    background-color: #fff;
    text-align: center;
}
#ProfilePane h4 {
    background-color: #ccc;
    border-top: solid 1px #000;
    color: #333;
    font-family: Comic Sans MS, Verdana, Sans-Serif;
    font-size: 1.3em;
    margin: 0;
    text-align: center;
}
#ProfilePane p {
    margin: .9em 0;
    line-height: 1.6em;
}
#UserAssetsPane #UserAssets h4,
#UserBadgesPane #UserBadges h4,
#UserPlacesPane #UserPlaces h4,
#UserStatisticsPane #UserStatistics h4,
#FavoritesPane #Favorites h4 {
    background-color: #ccc;
    border-bottom: solid 1px #000;
    color: #333;
    font-family: Comic Sans MS, Verdana, Sans-Serif;
    margin: 0;
    text-align: center;
}
#UserPlacesPane #UserPlaces h4 {
    background-color: #6e99c9;
    color: #fff;
    font-family: Verdana, Sans-Serif;
    font-size: 1.4em;
    font-weight: normal;
    letter-spacing: .1em;
    line-height: 1.5em;
}
#UserStatisticsPane #UserStatistics {
    background-color: #eee;
    padding-bottom: 10px;
}
#UserStatisticsPane #UserStatistics h4 {
    margin-bottom: 5px;
}
#UserStatisticsPane #UserStatistics .Statistic {
    line-height: 1.8em;
    margin: 0 auto;
    width: 385px;
}
#UserStatisticsPane #UserStatistics .Label {
    float: left;
    text-align: right;
    width: 178px;
}
#UserStatisticsPane #UserStatistics .Value {
    float: right;
    width: 177px;
}
#UserModelsContainer {
    text-align: left;
}
#Friends {
    margin-top: 10px;
}
#Friends h4,
#FriendRequests h4 {
    font-size: 10pt;
    font-weight: bold;
    line-height: 1em;
    margin-bottom: 5px;
    margin-top: 5px;
}
.NoResults {
    line-height: 1.3em;
    padding: 10px;
    text-align: center;
}
.Badge {
    margin: 10px 10px;
    text-align: center;
}
.Friend {
    margin: 10px;
}
.Friend .Avatar {
    text-align: center;
}
.Friend .Summary,
.Friend .Options {
    margin-top: 5px;
    text-align: center;
}
#UserContainer .CollapsiblePanelHint {
    color: #999;
    padding: 5px;
    text-align: center;
}
#UserContainer #AssetsMenu {
    float: left;
    width: 158px;
}
#UserContainer #AssetSearchOption {
    float: left;
}
#UserContainer #AssetUploadOption {
    float: right;
}
#UserContainer #AssetsList {
    clear: both;
}
#UserAssetsPane .AssetsMenuItem {
    border: solid 1px #777;
    margin: 15px;
    padding: 3px 10px;
    width: 100px;
}
#UserAssetsPane .AssetsMenuItem:hover {
    border: solid 1px #000;
    cursor: pointer;
    margin: 15px;
    width: 100px;
}
#UserAssetsPane .AssetsMenuItem_Selected {
    background-color: #6e99c9;
    border: solid 1px #000;
    margin: 15px;
    padding: 3px 10px;
    width: 100px;
}
#UserAssetsPane .AssetsMenuButton {
    color: #777;
    font: normal 14px/normal Verdana, sans-serif;
}
#UserAssetsPane .AssetsMenuButton:hover {
    color: #000;
    text-decoration: none;
}
#UserAssetsPane .AssetsMenuButton_Selected {
    color: #fff;
    font: normal 14px/normal Verdana, sans-serif;
    text-decoration: none;
}
#UserPlaces .PanelFooter,
#GroupPlaces .PanelFooter,
#Favorites .PanelFooter {
    background-color: #fff;
    color: #333;
    font-family: Verdana, Sans-Serif;
    margin: 0;
    padding: 3px;
    text-align: center;
}
#UserPlaces .AccordionHeader {
    background-color: #ccc;
    border: solid 1px #000;
    cursor: pointer;
    font: bold 1em/normal Verdana, sans-serif;
    letter-spacing: .1em;
    margin: 1px 0;
    padding: 1px 1em;
    text-align: left;
}
#UserPlaces .AccordionHeader:hover {
    background-color: #6e99c9;
    color: #fff;
}
#UserPlaces .Place .PlayStatus {
    margin: 5px 0 0 0;
    display: inline;
}
#UserPlaces .Place .PlayOptions {
    margin: 5px 0 0 0;
    display: inline;
}
#UserPlaces .Place .PlayOptions .Button {
    border-color: #333;
    color: #333;
    margin: 0 3px;
}
#UserPlaces .Place .PlayOptions .Button:hover {
    background-color: #6e99c9;
    color: #fff;
}
#UserPlaces .Place .Statistics {
    border-top: dashed 1px #555;
    border-left: dashed 1px #555;
    border-right: dashed 1px #555;
    color: #555;
    font: normal 1em/normal Verdana, sans-serif;
    letter-spacing: .1em;
    line-height: 1.7em;
    margin: 0;
    margin-top: 10px;
}
#UserPlaces .Place .Thumbnail {
    border: solid 1px #555;
    margin: 0;
}
#UserPlaces .Place .Description {
    border: dashed 1px #555;
    color: #555;
    font: normal 1em/normal Verdana, sans-serif;
    max-height: 75px;
    line-height: 1.7em;
    margin: 5px 0 0 0;
    padding: 5px 10px;
    overflow: auto;
    text-align: left;
}
#UserPlaces .Place .Configuration {
    border-bottom: dashed 1px #555;
    border-left: dashed 1px #555;
    border-right: dashed 1px #555;
    font: normal 1em/normal Verdana, sans-serif;
    line-height: 1.7em;
    padding: 5px 10px;
}
#UserContainer #AssetsContent {
    float: left;
    font-family: Verdana, Sans-Serif;
    margin: 0 auto;
    margin-left: 28px;
    margin-right: 28px;
    min-width: 0;
    padding-bottom: 10px;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    text-align: left;
    width: 662px;
}
#UserContainer #AssetsContent .HeaderPager,
#UserContainer #FavoritesContent .HeaderPager,
#UserContainer #AssetsContent .FooterPager,
#UserContainer #FavoritesContent .FooterPager {
    clear: both;
    margin: 0 12px 0 10px;
    padding: 2px 0;
    text-align: center;
}
#UserContainer #AssetsContent .HeaderPager,
#UserContainer #FavoritesContent .HeaderPager {
    margin-bottom: 10px;
}
#UserContainer #AssetsContent .HeaderPager .Label,
#UserContainer #FavoritesContent .HeaderPager .Label,
#UserContainer #AssetsContent .FooterPager .Label,
#UserContainer #FavoritesContent .FooterPager .Label {
    font-size: 1em;
    vertical-align: middle;
}
#UserContainer .Asset {
    margin: 0 10px 15px 10px;
    vertical-align: top;
    width: 112px;
}
#UserContainer .Asset .AssetThumbnail {
    border: solid 1px #000;
    height: 110px;
    position: relative;
    text-align: center;
    width: 110px;
}
#UserContainer .Asset .AssetDetails {
    overflow: hidden;
    padding: 2px 0 6px 0;
    text-align: left;
    width: 110px;
}
#UserContainer .AssetName a {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5em;
    vertical-align: top;
}
.AssetsBullet {
    padding-right: 3px;
}
#UserContainer .Label,
#UserContainer .Detail,
#UserContainer .DetailHighlighted,
#UserContainer .PriceInRobux,
#UserContainer .PriceInTickets {
    font-size: .8em;
}
#UserContainer .DetailHighlighted {
    color: Red;
    font-weight: bold;
}
#UserContainer .PriceInRobux {
    color: Green;
    font-weight: bold;
}
#UserContainer .PriceInTickets {
    color: #fbb117;
    font-weight: bold;
}
.UserOnlineMessage {
    font-family: Verdana;
    font-size: 8pt;
    color: Red;
}
.UserOfflineMessage {
    font-family: Verdana;
    font-size: 8pt;
    color: Gray;
}
.AdPanel {
    position: relative;
    margin: 0 auto;
}
.BanishButtonOverlay {
    background-color: #eee;
    border: solid 1px #444;
    font-size: .8em;
    padding: 1px 3px 2px 3px;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0;
}
.BanishButtonOverlay:hover {
    background-color: #fff;
    border: solid 1px #000;
    text-decoration: none;
}
.DeleteButtonOverlay {
    background-color: #eee;
    border: solid 1px #444;
    font-size: .8em;
    padding: 1px 3px 2px 3px;
    position: absolute;
    right: 2px;
    text-align: center;
    top: 2px;
}
.DeleteFavoriteOverlay {
    background-color: #eee;
    border: solid 1px #444;
    font-size: .8em;
    padding: 1px 3px 2px 3px;
    position: relative;
    left: -57px;
    text-align: center;
    top: -97px;
}
.DeleteButtonOverlay:hover {
    background-color: #fff;
    border: solid 1px #000;
    text-decoration: none;
}
.PlaceAccessIndicator {
    color: #000;
}
.SubscriptionStatusPanel {
    width: 348px;
    font-weight: bold;
    margin-top: 5px;
    padding: 5px 5px 5px 5px;
    border: solid 1px black;
    background-color: #ccc;
}
.ProfileAlertPanel {
    width: 348px;
    padding: 5px 5px 5px 5px;
    background-color: #FFF;
    border: solid 1px black;
    height: 64px;
}
.UserBlurb {
    overflow: hidden;
    width: 348px;
    padding: 5px 5px 5px 5px;
    line-height: 20px;
    background-color: #FFF;
    border: solid 1px #000;
}
#AccountSettingsForm {
    font-size: 11px;
    line-height: 18px;
}
#AccountSettingsForm fieldset {
    border: 1px solid #ddd;
    padding: 5px 5px 5px 5px;
}
.MyRobloxContainer {
    font-family: Verdana, Sans-Serif;
    margin: 0 auto;
    width: 900px;
}
.ThemeStandardColorBackground {
    background: #6e99c9;
}
.StandardBox,
.StandardBoxWhite,
.StandardBoxGray {
    float: none;
    border: 2px solid #6e99c9;
    background-color: White;
    padding: 10px 10px 10px 10px;
    margin-bottom: 10px;
    display: block;
}
.StandardBoxWhite {
    *zoom: 1;
}
.StandardBoxGrey {
    float: inherit;
    border: 2px solid #6e99c9;
    background-color: #A6A6A6;
    padding: 10px 10px 10px 10px;
    margin-bottom: 10px;
    display: block;
}
.StandardBoxHeader,
.StandardBoxHeaderGray,
.StandardTabWhite,
.StandardTabGray,
.StandardTabGrayActive {
    float: none;
    background-color: #6e99c9;
    text-align: center;
    color: White;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 12px 5px 12px;
    display: block;
    *display: inline;
    *zoom: 1;
    cursor: pointer;
}
.StandardBoxHeaderGray {
    background-color: #A6A6A6;
}
.StandardTabWhite,
.StandardTabGrayActive,
.StandardTabGray {
    display: inline-block;
    height: 26px;
    z-index: 2;
    position: relative;
    *display: inline;
    *zoom: 1;
}
.StandardTabWhite span {
    *padding-right: 14px;
}
.StandardTabGray {
    background-color: #b4cde9;
    margin-right: 4px;
}
.StandardTabGrayActive {
    margin-right: 4px;
}
.StandardTabGray a,
.StandardTabGrayActive a {
    color: White;
}
.StandardTabGray:hover,
.StandardTabGrayActive {
    background-color: #6c98cb;
    color: White;
}
.Column1a {
    width: 290px;
    float: left;
    margin-top: 10px;
}
.Column2a {
    margin-top: 10px;
    width: 600px;
    float: right;
}
.Column1a .StandardBox {
    width: 266px;
}
.Column1a .StandardBoxHeader,
.Column1a .StandardBoxHeaderGray {
    width: 266px;
}
.Column2a .StandardBox {
    width: 576px;
}
.Column2a .StandardBoxHeader,
.Column2a .StandardBoxHeaderGray {
    width: 576px;
}
.Column1b {
    margin-top: 10px;
    width: 190px;
    float: left;
    margin-right: 15px;
}
.Column2b {
    margin-top: 10px;
    width: 490px;
    float: left;
}
.Column3b {
    margin-top: 10px;
    width: 190px;
    float: right;
}
.Column1b .StandardBox {
    width: 166px;
}
.Column1b .StandardBoxHeader,
.Column1b .StandardBoxHeaderGray {
    width: 166px;
}
.Column2b .StandardBox {
    width: 466px;
}
.Column2b .StandardBoxHeader,
.Column2b .StandardBoxHeaderGray {
    width: 466px;
}
.Column3b .StandardBox {
    width: 166px;
}
.Column3b .StandardBoxHeader,
.Column3b .StandardBoxHeaderGray {
    width: 166px;
}
.Column1c {
    margin-top: 10px;
    width: 590px;
    float: left;
}
.Column2c {
    margin-top: 10px;
    width: 290px;
    float: right;
}
.Column1c .StandardBox {
    width: 556px;
}
.Column1c .StandardBoxHeader,
.Column1c .StandardBoxHeaderGray {
    width: 556px;
}
.Column2c .StandardBox {
    width: 266px;
}
.Column2c .StandardBoxHeader,
.Column2c .StandardBoxHeaderGray {
    width: 266px;
}
.Column1d {
    margin-top: 10px;
    width: 440px;
    float: left;
}
.Column2d {
    margin-top: 10px;
    width: 440px;
    float: right;
}
.Column1d .StandardBox,
.Column1d .StandardBoxWhite {
    width: 416px;
}
.Column1d .StandardBoxHeader,
.Column1d .StandardBoxHeaderGray,
.Column1d .StandardTabWhite {
    width: 416px;
}
.Column2d .StandardBox,
.Column2d .StandardBoxWhite {
    width: 416px;
}
.Column2d .StandardBoxHeader,
.Column2d .StandardBoxHeaderGray,
.Column2d .StandardTabWhite {
    width: 416px;
}
.Column1e {
    margin-top: 10px;
    width: 150px;
    float: left;
}
.Column2e {
    margin-top: 10px;
    width: 740px;
    margin-left: 10px;
    float: left;
}
.Column1e .StandardBox {
    width: 136px;
}
.Column1e .StandardBoxHeader,
.Column1e .StandardBoxHeaderGray {
    width: 126px;
}
.Column2e .StandardBoxGray {
    width: 726px;
    padding: 5px;
}
.Column2e .StandardBoxHeader,
.Column2e .StandardBoxHeaderGray {
    width: 356px;
}
.Column1f {
    margin-top: 10px;
    width: 380px;
    float: left;
}
.Column2f {
    margin-top: 10px;
    width: 500px;
    float: right;
}
.Column1f .StandardBox {
    width: 356px;
}
.Column1f .StandardBoxHeader,
.Column1f .StandardBoxHeaderGray {
    width: 356px;
}
.Column2f .StandardBox {
    width: 476px;
}
.Column2f .StandardBoxHeader,
.Column2f .StandardBoxHeaderGray {
    width: 476px;
}
.Repeater {
    border: 0;
    width: 100%;
}
.Repeater .AlternatingItemTemplateOdd {
    background-color: #eee;
    padding: 5px 5px 5px 5px;
}
.Repeater .AlternatingItemTemplateEven {
    background-color: #fff;
    padding: 5px 5px 5px 5px;
}
.Repeater .RepeaterImage {
    float: left;
    vertical-align: top;
    margin: 5px 5px 5px 5px;
}
.Repeater .RepeaterText {
    float: left;
    vertical-align: top;
    margin: 5px 5px 5px 5px;
}
.Repeater .RepeaterImageNoFloat {
    text-align: left;
    vertical-align: middle;
    padding-left: 5px;
}
.Repeater .RepeaterTextNoFloat {
    text-align: left;
    vertical-align: top;
    padding: 5px;
}
.Repeater thead {
    font-size: 15px;
    font-weight: normal;
    color: #2163A5;
    border-bottom: 1px solid #D3D3D3;
}
.Column2b .Repeater .AlternatingItemTemplateOdd,
.Column2b .Repeater .AlternatingItemTemplateEven {
    width: 466;
    height: 50px;
}
.GreySearchBar {
    background-color: #7F7F7F;
    border-color: #385D8A;
    width: 150px;
    color: White;
    cursor: default;
}
.GreySearchButton {
    background-color: #7F7F7F;
    border-color: #385D8A;
    width: 50px;
    color: White;
}
.DescriptionText {
    font-size: 14px;
    padding: 10px;
    background: #D2E3F7;
}
.tab_white_31h_container .ajax__tab_header {
    font-family: verdana, tahoma, helvetica;
    font-size: 11px;
    background: url(/images/tab-line.gif) repeat-x bottom;
}
.tab_white_31h_container .ajax__tab_outer {
    margin: 0;
    background: url(/images/tab-right.gif) no-repeat right;
    height: 21px;
}
.tab_white_31h_container .ajax__tab_inner {
    padding-left: 3px;
    background: url(/images/tab-left.gif) no-repeat;
}
.tab_white_31h_container .ajax__tab_tab {
    height: 13px;
    padding: 4px;
    margin: 0;
    background: url(/images/tab.gif) repeat-x;
}
.tab_white_31h_container .ajax__tab_hover .ajax__tab_outer {
    background: url(/images/tab-hover-right.gif) no-repeat right;
}
.tab_white_31h_container .ajax__tab_hover .ajax__tab_inner {
    background: url(/images/tab-hover-left.gif) no-repeat;
}
.tab_white_31h_container .ajax__tab_hover .ajax__tab_tab {
    background: url(/images/tab-hover.gif) repeat-x;
}
.tab_white_31h_container .ajax__tab_active .ajax__tab_outer {
    background: url(/images/tab-active-right.gif) no-repeat right;
}
.tab_white_31h_container .ajax__tab_active .ajax__tab_inner {
    background: url(/images/tab-active-left.gif) no-repeat;
}
.tab_white_31h_container .ajax__tab_active .ajax__tab_tab {
    background: url(/images/tab-active.gif) repeat-x;
}
.tab_white_31h_container .ajax__tab_body {
    font-family: verdana, tahoma, helvetica;
    font-size: 10pt;
    border: 1px solid #999;
    border-top: 0;
    padding: 8px;
    background-color: #fff;
}
.rbx2only {
    display: none;
}
.GreenButton {
    height: 30px;
    background: url(/images/btn_green_30h_t1.png) no-repeat;
    display: inline-block;
    font-family: Arial, Helvetica, Sans-Serif;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    *display: inline;
    *zoom: 1;
}
.GreenButton span {
    height: 23px;
    background: url(/images/btn_green_30h_t2.png) no-repeat top right;
    margin: 0 0 0 4px;
    display: block;
    padding: 7px 12px 0 5px;
    cursor: pointer;
    color: White;
}
.GreenButton span a {
    color: White;
    text-decoration: none;
}
.GreenButton:hover {
    background-position: 0 -30px;
    cursor: pointer;
    text-decoration: none;
}
.GreenButton span:hover {
    background-position: right -30px;
    cursor: pointer;
}
.RedButton {
    height: 30px;
    background: url(/images/btn_red_30h_t1.png) no-repeat;
    display: inline-block;
    font-family: Arial, Helvetica, Sans-Serif;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    *display: inline;
    *zoom: 1;
}
.RedButton span {
    height: 23px;
    background: url(/images/btn_red_30h_t2.png) no-repeat top right;
    margin: 0 0 0 4px;
    display: block;
    padding: 7px 12px 0 5px;
    cursor: pointer;
    color: White;
}
.RedButton span a {
    color: White;
    text-decoration: none;
}
.RedButton:hover {
    background-position: 0 -30px;
    cursor: pointer;
    text-decoration: none;
}
.RedButton span:hover {
    background-position: right -30px;
    cursor: pointer;
}
.Money {
    color: #090;
}
.SuccessBox {
    border: solid 2px #a6dba6;
    color: #090;
    font-weight: bold;
    padding: 5px;
    margin: 20px 0;
}
.ErrorBox,
.MessageBox {
    border: solid 2px #ffa6a6;
    color: #f00;
    font-weight: bold;
    padding: 5px;
    margin: 20px 0;
}
.MessageBox {
    height: 65px;
}
.GameCardMessageBox {
    border: solid 2px #ffa6a6;
    color: #f00;
    font-weight: bold;
    height: 56px;
    padding: 5px;
    *height: 66px;
    margin: 20px 0;
}
.GameCardSpecialOffer {
    left: 73px;
    position: relative;
    top: -45px;
}
.GameCardMessage {
    color: #333;
    left: 73px;
    position: relative;
    top: -44px;
}
.BoxTextAligned {
    margin-left: 10px;
    position: relative;
    top: -20px;
}
#RedeemContainer {
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 14px;
    color: Black;
}
#RedeemContainer a {
    color: #00f;
}
#RedeemContainer a:hover {
    text-decoration: none;
}
#RedeemContainer #pin {
    height: 21px;
    font-size: 12px;
}
.BigLinks {
    font-size: 16px;
    font-weight: bold;
}
.SkinnyRightArrow {
    cursor: pointer;
    background: url(/images/arrow_skinny55h_right.png) no-repeat;
    width: 12px;
    height: 55px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.SkinnyRightArrow:hover {
    background-position: 0 -55px;
}
.SkinnyRightArrowDisabled {
    background: url(/images/arrow_skinny55h_right.png) no-repeat 0 -110px;
    width: 12px;
    height: 55px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.SkinnyLeftArrow {
    cursor: pointer;
    background: url(/images/arrow_skinny55h_left.png) no-repeat;
    width: 12px;
    height: 55px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.SkinnyLeftArrow:hover {
    background-position: 0 -55px;
}
.SkinnyLeftArrowDisabled {
    background: url(/images/arrow_skinny55h_left.png) no-repeat 0 -110px;
    width: 12px;
    height: 55px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.BlueLeftArrow {
    cursor: pointer;
    background: url(/images/arrow_36px_left.png) no-repeat;
    width: 36px;
    height: 36px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.BlueLeftArrow:hover {
    background: url(/images/arrow36px_leftOn.png) no-repeat;
}
.BlueRightArrow {
    cursor: pointer;
    background: url(/images/arrow_36px_right.png) no-repeat;
    width: 36px;
    height: 36px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
.BlueRightArrow:hover {
    background: url(/images/arrow36px_rightOn.png) no-repeat;
}
.BCHat {
    background: url(/images/Games/gamesPage_bcHelmet.png) no-repeat;
    width: 35px;
    height: 29px;
    display: inline-block;
    margin-top: 3px;
    *display: inline;
    *zoom: 1;
}
.notificationBox {
    display: inline-block;
    background-color: #f00;
    color: #fff;
    height: 16px;
    min-width: 18px;
    width: auto;
    font-size: 14px;
    font-weight: bold;
    margin: 2px 2px 4px 2px;
    padding: 0 2px;
    line-height: 1.1em;
    text-align: center;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
}
.notificationBoxIE {
    display: inline-block;
    color: #fff;
    background-image: url(/images/bg-notifications.png);
    background-repeat: repeat-x;
    background-position: left top;
    min-width: 24px;
    width: auto;
    height: 16px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    *display: inline;
    *zoom: 1;
}
#BuildersClubContainer {
    margin-left: -5px;
}
#CatalogContainer > .StandardBox {
    padding: 3px 6px 8px 5px;
}
.Assets .StandardBoxHeader {
    width: 660px;
}
.Assets .StandardBox {
    width: 660px;
}
.Contests {
    margin-left: -5px;
}
.DarkGradientBox {
    background: none;
    width: 150px;
    color: Black;
    position: relative;
    border: none;
}
.DarkGradientBox .DGB_Header {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: none;
}
.DarkGradientBox .DGB_TextBox {
    border: solid 1px #888;
}
.DarkGradientBox .DGB_Label {
    color: Black;
    font-size: 10px;
    font-weight: bold;
    text-align: left;
}
.DarkGradientBox .DGB_Button {
    cursor: pointer;
    background-color: #435D77;
    color: White;
    text-decoration: none;
    border: solid 1px #777;
    padding: 6px 10px 6px 10px;
    font-family: Verdana, Sans-Serif;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
}
.DarkGradientBox .DGB_Button:link,
.DarkGradientBox .DGB_Button:visited {
    background-color: #435D77;
    color: White;
    text-decoration: none;
}
.DarkGradientBox .DGB_Button:hover,
.DarkGradientBox .DGB_Button:active {
    background-color: #B6CCE4;
    color: #435D77;
    text-decoration: none;
}
#GamesContainer .DisplayFilters {
    width: 126px;
}
.WaitCursor,
.WaitCursor * {
    cursor: wait!important;
}
.PlayButton,
.BuildButton,
.PlayButtonSelected,
.BuildButtonSelected {
    height: 54px;
    width: 123px;
    display: block;
    cursor: pointer;
}
.PlayButton {
    background-image: url('/images/games/playBtn_off.png');
    background-repeat: no-repeat;
}
.BuildButton {
    background-image: url('/images/games/buildBtn_off.png');
    background-repeat: no-repeat;
}
.PlayButton:hover,
.PlayButtonSelected {
    background-image: url('/images/games/playBtn_on.png');
    background-repeat: no-repeat;
}
.BuildButton:hover,
.BuildButtonSelected {
    background-image: url('/images/games/buildBtn_on.png');
    background-repeat: no-repeat;
}
#BCOnlyPlaces {
    width: 416px;
}
#BCOnlyPlaces .StandardBoxHeaderGray {
    width: 399px;
    height: 33px;
    padding: 0 7px 0 16px;
}
#BCOnlyPlaces .StandardBox {
    padding: 5px;
}
#GamesLeftColumn {
    width: 126px;
}
#InboxTabs {
    position: relative;
    top: 2px;
}
#ItemContainer #Summary {
    background-color: Transparent;
    border: none;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 11px;
    color: Black;
}
#ItemContainer #Summary .label {
    color: #888;
}
#ItemContainer #Summary .box .head {
    color: Black;
}
#ItemContainer #Summary .box .body {
    border: 1px solid #CCC;
    padding: 4px 8px 8px;
    color: #000;
}
#ItemContainer h3 {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 11px;
    color: #888;
    letter-spacing: normal;
}
.ReportAbuse {
    text-align: right;
}
.ReportAbuse .AbuseButton a {
    color: #F99;
    background: none;
    padding-left: 16px;
    padding-bottom: 2px;
}
.ReportAbuse .AbuseButton a:hover {
    background: url("/images/cssspecific/rbx2/abuse.png") no-repeat scroll 0 2px transparent;
    color: #F00;
}
.ReportAbuse img {
    display: none;
}
.MultiplayerVisit:hover {
    background-position: 0 54px;
}
.MultiplayerVisit {
    width: 212px;
    height: 54px;
    background: url(/images/cssspecific/rbx2/btn_play_54h.png);
}
.SoloVisit:hover {
    color: #0C0;
}
.SoloVisit {
    background: none;
    color: #080;
    font-size: 14px;
    position: relative;
    top: -20px;
    left: 28px;
    width: auto;
    height: auto;
}
.SoloVisitText {
    display: inline;
}
#ItemContainer .PlayGames {
    background-color: Transparent;
    border: none;
    padding: 0;
    width: 100%;
    margin: 4px 0 16px 0;
}
.PlaceInfoIcons {
    margin: 4px 0 0 1px;
    text-align: right;
}
.iPublic,
.iUnlocked {
    background: url(/images/cssspecific/rbx2/icon_public.png);
    width: 20px;
    height: 20px;
}
.iLocked {
    background: url(/images/cssspecific/rbx2/icon_public.png);
    width: 20px;
    height: 20px;
    background-position: -20px;
}
.SharedIcon {
    background: url(/images/cssspecific/rbx2/icon_locked.png);
    width: 20px;
    height: 20px;
    background-position: -20px;
}
.CopyLockedIcon {
    background: url(/images/cssspecific/rbx2/icon_locked.png);
    width: 20px;
    height: 20px;
}
.AllGearIcon {
    background: url(/images/cssspecific/rbx2/icon_gear.png);
    width: 20px;
    height: 20px;
}
.GenreGearIcon {
    background: url(/images/cssspecific/rbx2/icon_gear.png);
    background-position: 0 -20px;
    width: 20px;
    height: 20px;
}
.NoGearIcon {
    background: url(/images/cssspecific/rbx2/icon_gear.png);
    background-position: 0 -40px;
    width: 20px;
    height: 20px;
}
#ItemContainer .ajax_tab_label {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: normal;
}
#ItemContainer #Thumbnail,
#ItemContainer #Thumbnail_Place {
    border: none;
}
#ItemContainer .CommentsContainer .Comments {
    border: 0 none;
}
#ItemContainer .CommentsContainer .Comment {
    background: none;
}
#ItemContainer .CommentsContainer .Avatar {
    border: 0 none;
}
#ItemContainer .CommentsContainer .Post .Audit {
    color: #888;
}
#BadgeStatsHeader {
    width: auto;
}
.sbMini {
    margin-top: 5px;
    font-family: Verdana, Sans-Serif;
    font-size: 16px;
    margin-right: 7px;
}
.ProfileAlertPanel {
    border: none;
}
#UserPlaces .Place .Statistics,
#UserPlaces .Place .Configuration {
    border: none;
}
#GroupTitle {
    width: 888px;
}
.Column2b .StandardBoxGrey {
    width: 454px;
}
.subMenu {
    background: url(/images/topNav_black.png);
    width: 900px;
    height: 30px;
    border: none;
    text-align: center;
    margin-top: -5px;
    margin-left: -5px;
}
.subMenu ul {
    margin: 0 0 0 27px;
}
.subMenu > ul > li {
    height: 30px;
    margin: 0 2px;
}
.subMenu ul ul {
    left: -27px;
}
.subMenu ul ul a,
.subMenu ul ul a:visited {
    background: #444;
    border: none;
}
.subMenu ul ul a:hover {
    background: #777;
}
.subMenu > ul > li:hover {
    background: url(/images/topNav_black.png);
    background-position: 0 30px;
}
.subMenu :hover > a,
.subMenu ul ul :hover > a {
    text-decoration: none;
}
.subMenu a:hover {
    background: none;
    text-decoration: none;
}
.subMenu a,
.subMenu a:visited {
    border: none;
}
.subMenu .subMenuItemselected {
    border: none;
}
#CancelBuildersClubContainer h2,
#PaymentMethodsContainer h2,
#PaymentContainer h2,
#PayPalContainer h2,
#CashContainer h2,
#UpgradeCompleteContainer h2,
#ManageAccountUpgradesContainer h2,
#CancelAccountUpgradeContainer h2,
#AccountUpgradesConfirmationContainer h2 {
    font-family: Arial, Helvetica, Sans-Serif;
    color: #444;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0;
}
#BuildersClubContainer #LeftColumn {
    margin-left: 5px;
}
#BuildersClubContainer #RightColumn {
    margin-right: 5px;
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 14px;
    color: #000;
    width: 285px;
}
#BuildersClubContainer #RightColumn .StandardBox {
    width: 273px;
}
#BuildersClubContainer #RightColumn .StrongRed {
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 14px;
    font-weight: bold;
    color: #f00;
}
#BuildersClubContainer #RightColumn h3 {
    font-weight: bold;
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 18px;
    color: #333;
}
#BuildersClubContainer #RightColumn .RefCode {
    font-weight: bold;
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: 30px;
    color: #666;
    display: block;
    margin-bottom: 16px;
}
#Header {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    bottom: 0;
}
#hlNews {
    margin-right: 4px;
}
.AlertSpace {
    position: relative;
    top: 0;
    width: 147px;
    height: 50px;
    border: 1px solid #ccc;
    margin: 0;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
}
#Header .AlertSpace {
    float: right;
    border: none;
    margin-left: 0;
    margin-right: 0;
    background: url(/images/cssspecific/rbx2/head_sign.png) 0 0;
    height: 78px;
}
.AlertSpace a {
    position: absolute;
    width: 43px;
    padding-left: 18px;
    background: url(/images/cssspecific/rbx2/head_infobox_icons.png) no-repeat 0 0;
}
.AlertSpace a:hover,
#Header .AlertSpace a:active {
    text-decoration: none;
}
.AlertSpace .MessageAlert {
    border: none;
    background: none;
}
.AlertSpace .MessageAlert a {
    left: 13px;
    top: 8px;
    color: #444;
    background-position: -2px 0;
}
.AlertSpace .MessageAlert a:hover {
    color: #aaa;
    background-position: -2px -20px;
}
.AlertSpace .RobuxAlert {
    border: none;
    background: none;
}
.AlertSpace .RobuxAlert a {
    left: 13px;
    top: 28px;
    color: #080;
    background-position: -2px -41px;
}
.AlertSpace .RobuxAlert a:hover {
    color: #0d0;
    background-position: -2px -61px;
}
.AlertSpace .FriendsAlert {
    border: none;
    background: none;
}
.AlertSpace .FriendsAlert a {
    left: 79px;
    top: 8px;
    color: #05b;
    background-position: -2px -81px;
}
.AlertSpace .FriendsAlert a:hover {
    color: #0cf;
    background-position: -2px -101px;
}
.AlertSpace .TicketsAlert {
    border: none;
    background: none;
}
.AlertSpace .TicketsAlert a {
    left: 79px;
    top: 28px;
    color: #a61;
    background-position: -2px -121px;
}
.AlertSpace .TicketsAlert a:hover {
    color: #fb6;
    background-position: -2px -141px;
}
div.icons,
a.icons {
    display: none;
}
div.message_icon {
    display: none;
}
div.friends_icon {
    display: none;
}
div.robux_icon {
    display: none;
}
div.tickets_icon {
    display: none;
}
#Header .Navigation {
    width: 900px;
    height: 30px;
    background: url(/images/cssspecific/rbx2/topNav_blue.png);
    background-position: 0 0;
    text-align: center;
    line-height: 20px;
}
.Navigation ul {
    margin: 0 auto;
    padding: 0;
}
.Navigation li {
    display: inline-block;
    margin: 0;
    padding: 6px 10px 0 10px;
    height: 24px;
    font-size: 16px;
    font-weight: bold;
}
.Navigation li:hover {
    background: url(/images/cssspecific/rbx2/topNav_blue.png);
    background-position: 0 30px;
}
.Navigation a {
    display: inline-block;
    color: #fff;
}
.Navigation a:hover {
    text-decoration: none;
}
.Navigation ul li a,
.Navigation ul li a:visited {
    border: none;
    font-size: 16px;
    padding: 0;
}
.Navigation .dropdownmainnav {
    border: none;
    line-height: 2em;
    background: #444;
}
.Navigation .dropdownmainnav div {
    background-color: #444;
    cursor: pointer;
}
.Navigation .dropdownmainnav div:hover {
    background-color: #888;
}
.StandardBox {
    padding: 5px;
    margin-bottom: 8px;
    background: url(/images/cssspecific/rbx2/standardBox_01_bkg.png) top repeat-x #fff;
    border: 1px solid #aaa;
    z-index: 0;
}
.StandardBoxHeader,
.StandardBoxHeaderGray {
    height: 33px;
    padding: 0 7px 0 5px;
    text-align: left;
    z-index: 2;
    background: url(/images/cssspecific/rbx2/tab_black_33h_t1.png) no-repeat left top;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    z-index: 0;
}
.StandardBoxHeaderGray {
    background: url(/images/cssspecific/rbx2/tab_gray_33h_t1.png) no-repeat left top;
}
.StandardBoxHeader span,
.StandardBoxHeaderGray span {
    display: block;
    width: 100%;
    height: 29px;
    padding: 5px 5px 0 2px;
    background: url(/images/cssspecific/rbx2/tab_black_33h_t2.png) no-repeat right top;
    overflow: hidden;
}
.StandardBoxHeaderGray span {
    background: url(/images/cssspecific/rbx2/tab_gray_33h_t2.png) no-repeat right top;
}
.StandardTabWhite {
    background: url(/images/cssspecific/rbx2/tab_white_26h_t1.png) no-repeat left top;
    padding: 0 4px;
    float: none;
    text-align: left;
}
.StandardTabWhite span {
    display: block;
    width: 100%;
    *width: 115%;
    height: 26px;
    padding: 5px 5px 0 9px;
    background: url(/images/cssspecific/rbx2/tab_white_26h_t2.png) no-repeat right top;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #000;
    font-weight: normal;
}
.StandardBoxWhite {
    position: relative;
    top: -1px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 8px;
    color: Black;
}
.StandardTabGray,
.StandardTabGrayActive {
    position: relative;
    background: url(/images/cssspecific/rbx2/tab_white_31h_t1.png) no-repeat left top;
    background-position: left 0;
    height: 31px;
    padding: 0;
    text-align: left;
    cursor: pointer;
    margin: 0;
}
.StandardTabGray span,
.StandardTabGrayActive span {
    background: url(/images/cssspecific/rbx2/tab_white_31h_t2.png) no-repeat right top;
    background-position: right 0;
    height: 25px;
    padding: 6px 16px 0 8px;
    margin: 0 0 0 4px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    display: block;
}
.StandardTabGray a,
.StandardTabGrayActive a {
    color: #333;
}
.StandardTabGrayActive {
    background-position: left -62px;
}
.StandardTabGrayActive span {
    background-position: right -62px;
}
.StandardTabGray:hover {
    position: relative;
    background: url(/images/cssspecific/rbx2/tab_white_31h_t1.png) no-repeat left top;
    background-position: left -31px;
    height: 31px;
    padding: 0;
    z-index: 2;
    text-align: left;
    margin: 0;
}
.StandardTabGray span:hover {
    background: url(/images/cssspecific/rbx2/tab_white_31h_t2.png) no-repeat right top;
    background-position: right -31px;
    height: 25px;
    padding: 6px 16px 0 8px;
    margin: 0 0 0 4px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    display: block;
}
.StandardBoxGray {
    position: relative;
    top: -2px;
    padding: 8px 5px;
    background: url(/images/cssspecific/rbx2/standardBox_01_bkg.png) top repeat-x #fff;
    border: 1px solid #aaa;
}
.tab_white_31h_container .ajax__tab_header {
    background: none;
}
.tab_white_31h_container .ajax__tab_outer {
    background: none;
    height: auto;
}
.tab_white_31h_container .ajax__tab_inner {
    position: relative;
    background: url(/images/cssspecific/rbx2/tab_white_31h_t1.png) no-repeat left top;
    height: 31px;
    padding-left: 0;
    z-index: 2;
}
.tab_white_31h_container .ajax__tab_header .ajax__tab_tab {
    background: url(/images/cssspecific/rbx2/tab_white_31h_t2.png) no-repeat right top;
    height: 25px;
    padding: 6px 16px 0 8px;
    margin: 0 0 0 4px;
}
.tab_white_31h_container .ajax__tab_hover .ajax__tab_outer {
    background: none;
    height: auto;
}
.tab_white_31h_container .ajax__tab_hover .ajax__tab_inner {
    position: relative;
    background: url(/images/cssspecific/rbx2/tab_white_31h_t1.png) no-repeat left top;
    background-position: left -31px;
    height: 31px;
    padding-left: 0;
    z-index: 2;
}
.tab_white_31h_container .ajax__tab_hover .ajax__tab_tab {
    background: url(/images/cssspecific/rbx2/tab_white_31h_t2.png) no-repeat right top;
    background-position: right -31px;
    height: 25px;
    padding: 6px 16px 0 8px;
    margin: 0 0 0 4px;
}
.tab_white_31h_container .ajax__tab_active .ajax__tab_outer {
    background: none;
    height: auto;
}
.tab_white_31h_container .ajax__tab_active .ajax__tab_inner {
    position: relative;
    background: url(/images/cssspecific/rbx2/tab_white_31h_t1.png) no-repeat left top;
    background-position: left -62px;
    height: 31px;
    padding-left: 0;
    z-index: 2;
}
.tab_white_31h_container .ajax__tab_active .ajax__tab_tab {
    background: url(/images/cssspecific/rbx2/tab_white_31h_t2.png) no-repeat right top;
    background-position: right -62px;
    height: 25px;
    padding: 6px 16px 0 8px;
    margin: 0 0 0 4px;
}
.tab_white_31h_container .ajax__tab_body {
    position: relative;
    top: -2px;
    padding: 8px 5px;
    background: url(/images/cssspecific/rbx2/standardBox_01_bkg.png) top repeat-x #fff;
    border: 1px solid #aaa;
}
.Column2a {
    float: left;
}
.Column3b {
    float: left;
}
.Column2c {
    float: left;
    margin-left: 10px;
}
.Column2d {
    float: left;
}
.Column1e {
    width: 140px;
}
.Column2e .StandardBoxHeaderGray {
    margin: 0;
    width: 726px;
}
.Column2e .StandardBoxGray {
    width: 726px;
}
.Column2f {
    float: left;
}
div.rbx2only {
    display: block;
}
.rbx2only {
    display: inline;
}
.rbx2hide {
    display: none;
}
#RobloxCentralBank {
    overflow: hidden;
}
.transparentBkg {
    background-color: Transparent;
}
.FriendRequestsPane {
    width: 890px;
}
.Shadow {
    display: none;
}
.ShadowedStandardBox .Header {
    height: 33px;
    padding: 0 7px 0 5px;
    text-align: left;
    z-index: 2;
    background: url(/images/cssspecific/rbx2/tab_black_33h_t1.png) no-repeat left top;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
}
.ShadowedStandardBox .Header span {
    display: block;
    width: 100%;
    height: 29px;
    background: url(/images/cssspecific/rbx2/tab_black_33h_t2.png) no-repeat right top;
    overflow: hidden;
    height: 26px;
    padding: 7px 4px 0 3px;
}
.ShadowedStandardBox .Content {
    padding: 5px;
    margin-bottom: 8px;
    background: url(/images/cssspecific/rbx2/standardBox_01_bkg.png) top repeat-x #fff;
    border: 1px solid #aaa;
}
a.rss_icon {
    background: url(` + topNav_rss + `) no-repeat;
}
.Column1d .StandardTabWhite,
.Column2d .StandardTabWhite {
    width: auto;
}
.MyRobloxContainer {
    width: 890px;
}
.BCHat {
    margin-top: 1px;
}
ul.AspNet-Menu li {
    height: 1%!important;
}
ul.AspNet-Menu li a,
ul.AspNet-Menu li span {
    height: 1%!important;
</style>`;
	return AllCSS;
}