// ==UserScript==
// @name        Uncheck Google Trust This Device
// @namespace   ugssi
// @description Disable google's automatic "Dont ask again on this computer" checkbox
// @include     http://accounts.google.tld/*
// @include     https://accounts.google.tld/*
// @version     1.0
// @grant       none
// ==/UserScript==

var chkbox = document.getElementById('trustDevice');
chkbox.removeAttribute('checked');
