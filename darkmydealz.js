// ==UserScript==
// @name          Mydealz
// @namespace     http://userstyles.org
// @description	  A dark theme for mydealz.de
// @author        supp
// @include       https://www.mydealz.de/*
// @run-at        document-start
// @version       0.46
// @updateURL     https://raw.githubusercontent.com/e0xify/mydealz-dark/master/darkmydealz.js
// ==/UserScript==

(function() {var css = [
    "html,",
    "body {",
    "	background-color: #21252D !important;",
    "}",
    "",
    "html,",
    "body,",
    "body * {",
    "	border-color: #3C414C !important;",
    "}",
    "",
    "::-webkit-scrollbar {",
	"  width: 12px;",
	"  /* This is more usable for users trying to click it. */",
	"  background-color: rgba(0,0,0,0);",
	"  -webkit-border-radius: 0px;",
	"}",
	"/* hover effect for both scrollbar area, and scrollbar \'thumb\' */",
	"::-webkit-scrollbar:hover {",
	"  background-color: rgba(0, 0, 0, 0.09);",
	"}",
	"",
	"/* The scrollbar \'thumb\' ...that marque oval shape in a scrollbar */",
	"::-webkit-scrollbar-thumb:vertical {",
	"  /* This is the EXACT color of Mac OS scrollbars. ",
	"     Yes, I pulled out digital color meter */",
	"  background: rgba(0,0,0,0.5);",
	"  -webkit-border-radius: 0px;",
    " background-clip: padding-box;",
	"}",
	"::-webkit-scrollbar-thumb:vertical:active {",
	"  background: rgba(0,0,0,0.61); /* Some darker color when you click it */",
	"  -webkit-border-radius: 0px;",
	"}",
    ".height--all-full, .thread--type-card .thread-content--nonfixed, .userHtml-video-iframe {",
    "	background: #21252D !important;",
    "}",
    ".bg--main, .card, .thread--type-card, .thread--type-list {",
    "	background: #2b303b !important;",
    "box-shadow: 0px 0 50px -1px #2b303b;",
    "margin-top: 10px;",
    "}",
     "* {",
    "	color: #ccc;",
    "}",
    ".text--color-red.override {",
    "	color: #e00034 !important;",
    "}",
    " .threadTempBadge-icon:hover {",
    "	color: #e00034 !important;",
    "}",
    ".bg--color-greyPanel {",
    "	background-color: #21252D !important;",
    "}",
    ".voteBar {",
    "	background-color: transparent !important;",
    "}",
    ".subNav, .subNav--light {",
    "	background-color: #2b303b !important;",
    "    margin-right: 19.12%;",
    "margin-left: 19.12%;",
    "}",
    ".btn--mode-boxSec {",
    "	background-color: #2b303b !important;",
    "}",
     ".cept-dealBtn.boxAlign-jc--all-c.space--h-3.width--all-12.btn.btn--mode-dark-inactive {",
    " border: 1px solid #ccc !important;",
    "}",
     ".cept-dealBtn.boxAlign-jc--all-c.space--h-3.width--all-12.btn.btn--mode-primary {",
    " border: 1px solid #54B347 !important;",
    "}",
    ".vote-temp--burn, .vote-temp--hot {",
    "	color: #e00034 !important;",
    "}",
    ".vote-btn.vote-up {",
    "	background-color: grey !important;",
    "}",
    ".vote-btn.vote-down {",
    "	background-color: grey !important;",
    "}",
    ".overflow--fade-b-r--l:after, .overflow--fade-b-r--s:after, .overflow--fade-b-r:after, .overflow--fromW3-fade-b-r--l:after, .overflow--fromW3-fade-r--l:after, .thread-title--card:after, .thread-title--list--merchant:after, .thread-title--list:after {",
    "	background: none !important;",
    "}",
    ".fadeEdge--r:after, .overflow--fade:after {",
    "	background: none !important;",
    "}",
    ".flex--shrink-0, .thread-userOption, .thread-userOptionLink, .thread-userOptionTeaser, .threadItem-ribbonIcoCell, .vote-box {",
    "	background: #21252D !important;",
    "}",
    ".vote-box {",
    "	box-shadow: 0px 0 10px -3px #E00034",
    "}",
    ".subNavMenu-btn {",
    "	background-color: #21252D !important;",
    "}",
    ".input, .inputBox, .secretCode-codeBox, .toolbar, .voucher-code {",
    "	background-color: transparent !important;",
    "}",
     ".subNavMenu--menu .subNavMenu-list {",
    "	background-color: #21252D !important;",
    "}",
     ".bg--em {",
    "	background-color: #21252D !important;",
    "}",
     ".bg--color-white, .listingProfile{",
    "	background-color: transparent !important;",
    "}",
     ".flex.boxAlign-ai--all-c.width--all-12.height--all-full {",
    "	background-color: #002543 !important;",
    "}",
    ".userHtml-quote {",
    "	border-left: 5px solid #69BE28 !important;",
    "}",
    ".text--overlay:before {",
    "	background: none !important;",
    "}",
     ".text--overlay {",
    "	background: none !important;",
    "}",
    ".cept-carousel-prev.flex--shrink-0 {",
    "	background: none !important;",
    "}",
    ".cept-carousel-next.flex--shrink-0.undefined.clickable {",
    "	background: none !important;",
    "}",
    " .flex--shrink-0, .thread-userOption, .thread-userOptionLink, .thread-userOptionTeaser, .threadItem-ribbonIcoCell, .vote-box {",
    "	background: none !important;",
    "}",
    " .overflow--ellipsis:hover {",
    "	color: #61B133 !important;",
    "}",
    " .nav-link-text.vAlign--all-m:hover {",
    "	color: #61B133 !important;",
    "}",
     " .box--all-i.size--all-m.vAlign--all-m:hover {",
    "	color: #61B133 !important;",
    "}",
     " .space--l-2.hide--toW5:hover {",
    "	color: #61B133 !important;",
    "}",
    " .footer {",
    "	background: none !important;",
    "}",
     " .nav {",
    "	background: #2b303b !important;",
    "}",
    ".icon.icon--flame.text--color-red {",
    "	color: #e00034 !important;",
    "}",
     ".conversationList-msg--read:not(.conversationList-msg--active) {",
    "	background: #2b303b !important;",
    "}",
     ".imgFrame  {",
    "	background-color: #fff !important;",
    "	height: 150px !important;",
    "	width: 150px !important;",
    "	border-radius: 30px !important;",
    "}",
     ".navDropDown-footer {",
    "	background: #2b303b !important;",
    "}",
    ".popover--brandAccent .popover-content, .popover--brandPrimary .popover-content, .popover--default .popover-content, .popover--menu .popover-content, .popover--red .popover-content {",
    "	background: #2b303b !important;",
    "}",
    ".navDropDown-tabContent {",
    "	background: #2b303b !important;",
    "}",
     ".notification-item--read {",
    "	background-color: #21252D !important;",
    "}",
    ".navMenu-trigger:hover {",
    "	background: #21252D !important;",
    "}",
    ".conversationList-msgPreview {",
    "	color: #ccc !important;",
    "}",
    ".aGrid-item--b-0 {",
    "	visiblity: hidden !important;",
    "}",
      ".threadTempBadge-icon, .threadTempBadge-icon--card {",
    "	margin-left: 290px !important;",
    "   margin-top: 2px !important;",
    "}",

    ".text--overlaytext--lh-1.space--t-1.aGrid-ite.aGrid-item--r-0.aGrid-item--b-0.text--color-price {",
    "	margin-top: 10px; !important;",
    "}",
     ".vote-btn.vote-up:hover {",
    "	background-color:#e00034 !important;",
    "}",
    ".vote-btn.vote-down:hover {",
    "	background-color:#0EAAF7 !important;",
    "}",
    ".btn.btn--square.navDropDown-btn.navDropDown-trigger.navDropDown-trigger:hover {",
    "background-color:rgba(97,177,51,0.5) !important;",
    "}",
    ".userHtml a.linkPlain, .userHtml a.thread-link {",
    "	color:#54B347 !important;",
    "}",
    ".text--color-greyShade {",
    "	color: #ccc !important;",
    "}",
    ".text--color-charcoal {",
    "	color: #ccc !important;",
    "}",
    ".bg--color-grey {",
    "	background-color: red !important;",
    "}",
    ".threadTempBadge:before {",
    "	background-color: transparent !important;",
    " border: none !important;",
    "}",
     ".notification-item {",
    "	background-color: #2b303b !important;",
    "}",
    ".autoSuggest-results.autoSuggest-offset {",
    "	background: #2b303b !important;",
    "}",
    ".popover--modal .popover-content {",
    "	background: #2b303b !important;",
    "}",
    ".vue {",
    "	background: #2b303b !important;",
    "}",
    ".navMenu-trigger {",
    "	background: transparent !important;",
    "}",
    " .img-framed, .imgFrame-img, .ratioBox-child {",
    "	border-radius:20px !important;",
    "}",
    " .page2-center.tGrid.tGrid--auto overflow--wrap-off {",
    "	width:300px !important;",
    "background-color:#333 !important;",
    "}",
    ".bg--color-brandSecondaryShade {",
    "	background-color: transparent !important;",
    "}",
    ".profileHeader.space--h-2.space--v-2.hAlign--all-c {",
    "	border-radius: 40px !important;",
    "}",
     ".space--mt-2, .space--mv-2 {",
    "	border-color: green !important;",
    "background-color: #2b303b !important;",
    "}",
    "/* Track */",
    "::-webkit-scrollbar-track {",
    "	background: #2b303b !important;",
    "}",
    "",
    ".btn, .btn--plain, .countdownBanner--btn, .subNavMenu-btn, .tag {",
    "	background: transparent !important;",
    "}",
    "/* Handle */",
    "::-webkit-scrollbar-thumb {",
    "	background: #3C414C !important;",
    "}",
    "",
    "/* Handle on hover */",
    "::-webkit-scrollbar-thumb:hover {",
    "	background: #3C414C !important;",
    "}",
    "",
    "code {",
    "	background: #2C3037 !important;",
    "	color: #EBEBEB !important;",
    "}",
].join("\n");
             if (typeof GM_addStyle != "undefined") {
                 GM_addStyle(css);
             } else if (typeof PRO_addStyle != "undefined") {
                 PRO_addStyle(css);
             } else if (typeof addStyle != "undefined") {
                 addStyle(css);
             } else {
                 var node = document.createElement("style");
                 node.type = "text/css";
                 node.appendChild(document.createTextNode(css));
                 var heads = document.getElementsByTagName("head");
                 if (heads.length > 0) {
                     heads[0].appendChild(node);
                 } else {
                     // no head yet, stick it whereever
                     document.documentElement.appendChild(node);
                 }
             }

            })();
