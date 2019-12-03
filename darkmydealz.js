// ==UserScript==
// @name          Mydealz
// @namespace     http://userstyles.org
// @description	  A dark theme for mydealz.de
// @author        supp
// @include       https://www.mydealz.de/*
// @run-at        document-start
// @version       0.31
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
    "}",
     "* {",
    "	color: #ccc !important;",
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
    " .footer {",
    "	background: none !important;",
    "}",
     " .nav {",
    "	background: #2b303b !important;",
    "}",
     ".conversationList-msg--read:not(.conversationList-msg--active) {",
    "	background: #2b303b !important;",
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
    "	background: #2b303b !important;",
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
    "/* Track */",
    "::-webkit-scrollbar-track {",
    "	background: #2b303b !important;",
    "}",
    "",
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
