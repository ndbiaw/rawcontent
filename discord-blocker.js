// ==UserScript==
// @name        Discord Blocker
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/ndbiaw/rawcontent/main/discord-blocker.js
// @grant       none
// @version     1.0
// @author      Anonymous
// @description none
// ==/UserScript==
function hideBlocked(){
    const blocked = document.querySelectorAll('[class^="groupStart"]');
    blocked.forEach(blokMsg => {
        if(blokMsg.style.display !== "none") blokMsg.style.display = "none";
    });
};
setInterval(hideBlocked, 250);
