// ==UserScript==
// @name         Meir
// @namespace    https://hentaivn.tv/user-108808
// @version      0.1
// @description  Thay đổi cách đọc truyện tại hentaivn
// @author       Meir
// @match        https://hentaivn.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var images = []; for (var i = 0; i < document.getElementById("image").getElementsByTagName("img").length; i++) images.push(document.getElementById("image").getElementsByTagName("img")[i].src); function Read(page) { document.getElementById("image").innerHTML = '<div style="text-align: center"><img src="' + images[page] + '"></div><br><div style="text-align: center"><button style="font-size: 16pt" ' + (page == 0 ? 'disabled' : 'onclick="Read(' + (page - 1) + ')"') + '>&lt; Trang trước</button>&nbsp;&nbsp;&nbsp;<span style="font-size: 16pt;">Trang ' + (page + 1) + '/' + images.length + '</span>&nbsp;&nbsp;&nbsp;<button style="font-size: 16pt" ' + (page == images.length - 1 ? 'disabled' : 'onclick="Read(' + (page + 1) + ')"') + '>Trang sau &gt;</button></div>'; } Read(0);
})();
