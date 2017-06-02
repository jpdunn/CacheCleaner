var startEnabledEl;
var appCacheEl;
var cacheDataEl;
var cookiesEl;
var downloadsEl;
var fileSystemsEl;
var formDataEl;
var historyEl;
var indexedDBEl;
var passwordsEl;
var webSQLEl;
var saveButtonEl;


startEnabledEl = document.getElementById("startEnabled");
appCacheEl = document.getElementById("removeAppCache");
cacheDataEl = document.getElementById("removeCache");
cookiesEl = document.getElementById("removeCookies");
downloadsEl = document.getElementById("removeDownloads");
fileSystemsEl = document.getElementById("removeFileSystems");
formDataEl = document.getElementById("removeFormData");
historyEl = document.getElementById("removeHistory");
indexedDBEl = document.getElementById("removeIndexedDB");
passwordsEl = document.getElementById("removePasswords");
webSQLEl = document.getElementById("removeWebSQL");
saveButtonEl = document.getElementById("save");


function saveSettings(){
  localStorage["cc.startEnabled"] = startEnabledEl.checked;
}


function loadLocalStorageSettings() {
  var checkedValue;


  checkedValue = localStorage["cc.startEnabled"];

  // Storing a value into local storage means it gets treated as a string
  // irrespective of what the value originally was. Because Javascript has
  // no notion of 'parsing' a string to a boolean value this is the best
  // we can do for now. This may get revisited if an easier solution is found.
  if (checkedValue === 'true'){
    startEnabledEl.checked = true;
  }else{
    startEnabledEl.checked = false;
  }

}

saveButtonEl.addEventListener("click", saveSettings);
loadLocalStorageSettings();
