// ==UserScript==
// @name        PoE.Trade Alert Mod
// @namespace   poe.trade
// @include     http://poe.trade/*/live
// @version     1
// @grant       none
// ==/UserScript==
 
var audioLink = 'http://ec-media.sndcdn.com/A6GEBWlb5NWR?f10880d39085a94a0418a7ef61b03d5275edf83695e0cd6a5a31b901eab5785ae87b90f7e7c6c992d6050dde085c1d59f789b6c041091cf7ff41a684b5';
 
var audioObj = document.getElementById('live-audio');
var sourceObj = audioObj.getElementsByTagName('source');
 
if (sourceObj.length > 0)
{
  sourceObj[0].setAttribute('src', '');
  audioObj.load();
}