// ==UserScript==
// @name        PoE.Trade Alert Mod
// @namespace   https://github.com/crimsonfalconer/poe.alert.mod
// @include     http://poe.trade/*/live
// @version     2
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_log
// @updateURL       https://github.com/crimsonfalconer/poe.alert.mod/raw/master/poe.alert.mod.meta.js
// @downloadURL     https://github.com/crimsonfalconer/poe.alert.mod/raw/master/poe.alert.mod.user.js
// @updateVersion   2
// @homepageURL     https://github.com/crimsonfalconer/poe.alert.mod
// @supportURL      https://github.com/crimsonfalconer/poe.alert.mod/issues
// ==/UserScript==

function UpdateLiveAlertSound()
{
  var alertURL  = GM_getValue("poeTradeAlertSound", 'https://raw.githubusercontent.com/crimsonfalconer/poe.alert.mod/master/alert.mp3');
  
  var inputURL = document.getElementById('alert-sound-url');
  if (typeof inputURL != 'undefined')
  {
    if(inputURL.value != alertURL)
    {
      GM_log("Updating URL to: " + inputURL.value);   
      GM_setValue('poeTradeAlertSound', inputURL.value);
      alertURL = inputURL.value;
    }
  }
 
  var audioObj = document.getElementById('live-audio');
  var sourceObj = audioObj.getElementsByTagName('source');
  if (sourceObj.length > 0)
  {
    sourceObj[0].setAttribute('src', alertURL);
    audioObj.load();
  }
}

var alertURL = GM_getValue("poeTradeAlertSound", 'https://raw.githubusercontent.com/crimsonfalconer/poe.alert.mod/master/alert.mp3');
var panel = document.getElementById('live-notification-settings');

panel.appendChild(document.createElement('br'));
panel.appendChild(document.createElement('br'));

var link = document.createElement('input');
link.style = "width:500px";
link.id = 'alert-sound-url';
link.type = 'textbox';
link.value = alertURL;
panel.appendChild(link);

var save = document.createElement('input');
save.type = 'button';
save.value = 'Update Sound';
save.onclick = UpdateLiveAlertSound;
panel.appendChild(save);

  
UpdateLiveAlertSound();
