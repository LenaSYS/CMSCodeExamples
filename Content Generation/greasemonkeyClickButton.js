// ==UserScript==
// @name        simulateMouseClick
// @namespace   plorf
// @include     https://scio.his.se/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @grant       none
// ==/UserScript==
 
var clickEvent = new MouseEvent('click', {
   view: window,
   bubbles: true,
   cancelable: true
});
 
document.getElementById("myButton").dispatchEvent (clickEvent);