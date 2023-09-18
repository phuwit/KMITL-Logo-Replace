// ==UserScript==
// @name        KMITL-Logo-Replace-Google
// @namespace   github.com/phuwit.KMITL-Logo-Replace.Google
// @match       https://*.google.com/*
// @grant       none
// @version     1.3
// @author      https://github.com/phuwit
// @description haha funny
// @downloadURL https://raw.githubusercontent.com/phuwit/KMITL-Logo-Replace/main/Google/KMITL-Logo-Replace-Google.user.js
// @homepageURL https://github.com/phuwit/KMITL-Logo-Replace
// ==/UserScript==

// pick one: black and white, or color
let new_logo = "https://raw.githubusercontent.com/phuwit/KMITL-Logo-Replace/main/Google/image/kmitl_logo_bw.svg";
// let new_logo = "https://raw.githubusercontent.com/phuwit/KMITL-Logo-Replace/main/Google/image/kmitl_logo_color.svg";
let old_logo_id = "100206365847567318724"

function replaceSrc(srcValue) {
    let element

    // probably less intensive matching via classname
    element = document.getElementsByClassName("gb_Hc gb_Ja gb_Ma");
    
    if (element.length > 0) {
        for (let i = 0; i < element.length; i++) {
            if (element[i].hasAttribute("src")) {
                if (element[i].getAttribute("src").search(old_logo_id) != -1) {
                    element[i].src = new_logo;
                    break;
                }
            }
        }
    }
    
    // // fallback matching method
    // element = document.getElementsByTagName("img");

    // for (let i = 0; i < element.length; i++) {
    //     if (element[i].hasAttribute("src")) {
    //         if (element[i].getAttribute("src").search(old_logo_id) != -1) {
    //             element[i].src = new_logo;
    //             break;
    //         }
    //     }
    // }
}

replaceSrc(old_logo_id);