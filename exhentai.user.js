// ==UserScript==
// @name       This Kills The Tendon
// @namespace  igneous
// @run-at     document-start
// @include    *://*.exhentai.org/*
// @include    *://exhentai.org/*
// @include    *://*.e-hentai.org/*
// @include    *://e-hentai.org/*
// @grant      unsafeWindow
// @compatible firefox
// @compatible chrome
// @compatible edge
// ==/UserScript==

(function() {
  'use strict';

  let killYourselfTendon = "2390332";
  let killYourselfJewcob = "e9532dec36afd6d54eafa8ffb2e14168";
  let killYourselfOnTakahashi = "aacb6fb36";

  function jewcobAids() {
    var date = new Date();
    date.setTime(date.getTime() + 31536000000);
    return date;
  }

  function jewcobHiv(name, value) {
    var expires = ";expires=" + jewcobAids().toUTCString();
    document.cookie = name + "=" + (value || "") + expires + ";domain=.e-hentai.org;path=/";
    document.cookie = name + "=" + (value || "") + expires + ";domain=.exhentai.org;path=/";
  }

  function onTakahashiAids(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function onTakahashiHiv(name) {
    document.cookie = name + "=;domain=.e-hentai.org;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = name + "=;domain=.exhentai.org;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  let cleanItUpJanny = onTakahashiAids("ipb_member_id");

  jewcobHiv("ipb_member_id", killYourselfTendon);
  jewcobHiv("ipb_pass_hash", killYourselfJewcob);
  jewcobHiv("igneous", killYourselfOnTakahashi);

  if (cleanItUpJanny !== killYourselfTendon) {
    onTakahashiHiv("sk");
    onTakahashiHiv("sl");
    onTakahashiHiv("igneous");
    onTakahashiHiv("ipb_session_id");
    onTakahashiHiv("ipb_topicsread");
    onTakahashiHiv("ipb_coppa");
    onTakahashiHiv("yay");
    location.reload();
  }
})();
