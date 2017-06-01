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
saveButtonEl = document.getElementById("saveButton");


function saveSettings(){
  localStorage["startEnabled"] = startEnabledEl.checked;
}


function loadLocalStorageSettings() {
  var checkedValue;


  checkedValue = localStorage["startEnabled"];
  startEnabledEl.checked = checkedValue;
}

saveButtonEl.addEventListener("click", saveSettings);
loadLocalStorageSettings();
