// ==UserScript==
// @name        PoE.Trade Alert Mod
// @namespace   poe.trade
// @include     http://poe.trade/*/live
// @version     1
// @grant       none
// ==/UserScript==
 
var audioLink = 'https://raw.githubusercontent.com/crimsonfalconer/poe.alert.mod/master/alert.mp3';
 
var audioObj = document.getElementById('live-audio');
var sourceObj = audioObj.getElementsByTagName('source');
 
if (sourceObj.length > 0)
{
  sourceObj[0].setAttribute('src', '');
  audioObj.load();
}
