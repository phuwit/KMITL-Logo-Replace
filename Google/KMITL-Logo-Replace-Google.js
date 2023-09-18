// ==UserScript==
// @name        KMITL-Logo-Replace-Google
// @namespace   github.com/phuwit.KMITL-Logo-Replace.Google
// @match       https://*.google.com/*
// @grant       none
// @version     1.0
// @author      https://github.com/phuwit
// @description haha funny
// ==/UserScript==

let new_logo = "https://cdn.jsdelivr.net/gh/phuwit/KMITL-Logo-Replace@main/Google/image/kmitl_logo_bw.svg";
let old_logo_id = "100206365847567318724"
                        https://www.google.com/u/1/ac/images/logo.gif?uid=100206365847567318724&service=google_gsuite

function replaceSrc(srcValue) {
    var nodes = [];
    var element = document.getElementsByTagName("img");

    for (var i = 0; i < element.length; i++) {
        if (element[i].hasAttribute("src")) {
            if (element[i].getAttribute("src").search(old_logo_id) != -1) {
                element[i].src = new_logo;
                break;
            }
        }
    }
}

replaceSrc(old_logo_id);