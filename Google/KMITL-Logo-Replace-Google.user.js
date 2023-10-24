// ==UserScript==
// @name        KMITL-Logo-Replace-Google
// @namespace   github.com/phuwit.KMITL-Logo-Replace.Google
// @run-at document-end
// @match       https://*.google.com/*
// @grant       none
// @version     1.5.2
// @author      https://github.com/phuwit
// @description haha funny
// @downloadURL https://phuwit.github.io/KMITL-Logo-Replace/Google/KMITL-Logo-Replace-Google.user.js
// @homepageURL https://github.com/phuwit/KMITL-Logo-Replace
// ==/UserScript==

// EDIT THIS AREA VVV

    // pick one: black, or color
    const new_logo = "https://phuwit.github.io/KMITL-Logo-Replace/Google/image/kmitl_color.svg";
    // const new_logo = "https://phuwit.github.io/KMITL-Logo-Replace/Google/image/kmitl_black.svg";
    // const new_logo = "https://phuwit.github.io/KMITL-Logo-Replace/Google/image/fake_kmitl_color.svg";
    // const new_logo = "https://phuwit.github.io/KMITL-Logo-Replace/Google/image/fake_kmitl_black.svg";
    // const new_logo = "https://phuwit.github.io/KMITL-Logo-Replace/Google/image/fake_kmutt_color.svg";
    // const new_logo = "https://phuwit.github.io/KMITL-Logo-Replace/Google/image/fake_kmutt_black.svg";

    // google user id
    // EXAMPLE : 
    // from https://drive.google.com/drive/u/1/my-drive
    // ------------------------------------^^^---------
    // google user id would be 1, so you would enter
    // const google_user_id = "1";

    // if there are no user id present, enter an empty string
    // const google_user_id = "";

    const google_user_id = "1";
    
// EDIT THIS AREA ^^^

const old_logo_filename = "logo.gif";
const old_logo_service_query = "service=google_gsuite";
const old_logo_user_path = "u/" + google_user_id;

// fallback matching method
element = document.getElementsByTagName("img");

for (let i = 0; i < element.length; i++) {
    if (element[i].hasAttribute("src")) {
        let src = element[i].getAttribute("src");
        if (src.search(old_logo_filename) != -1 &&
            src.search(old_logo_service_query) != -1 &&
            src.search(old_logo_user_path) != -1
            ) {
            element[i].src = new_logo;
            break;
        }
    }
}
