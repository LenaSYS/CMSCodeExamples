// ==UserScript==
// @name        replaceKurskodSCIO
// @namespace   plorf
// @include     https://scio.his.se/portal
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant       GM_log
// ==/UserScript==
 
var searchfields=document.getElementsByClassName("search-field");
for(const searchfield of searchfields){
    searchfield.value="Snus";
}

var searchforms=document.getElementsByClassName("search-form");
for(const searchform of searchfields){
    searchform.submit();
}