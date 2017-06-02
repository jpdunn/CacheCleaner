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
  var dataTypes;
  var stringDataTypes;
  var base46DataTypes;


  // Create a JSON object with all the settings states. This is a direct
  // replica of what the 'browsingData.remove' function will take so that
  // we can simply pull it out of local storage and use it for removing
  // all data of the selected data types.
  dataTypes = {
    "appcache" : appCacheEl.checked,
    "cache" : cacheDataEl.checked,
    "cookies" : cookiesEl.checked,
    "downloads" : downloadsEl.checked,
    "fileSystems" : fileSystemsEl.checked,
    "formData" : formDataEl.checked,
    "history" : historyEl.checked,
    "indexedDB" : indexedDBEl.checked,
    "passwords" : passwordsEl.checked,
    "webSQL" : webSQLEl.checked
  };

  // Stringify the JSON object.
  stringDataTypes = JSON.stringify(dataTypes);

  // Now base64 encode the JSON string so that we can easily store
  // it in local storage.
  base46DataTypes = window.btoa(stringDataTypes);

  localStorage["cc.startEnabled"] = startEnabledEl.checked;
  localStorage["cc.dataTypes"] = base46DataTypes;
}


function loadLocalStorageSettings() {
  var checkedValue;
  var storedDataTypes;
  var storedJSONData;


  checkedValue = localStorage["cc.startEnabled"];
  storedDataTypes = localStorage["cc.dataTypes"];

  // Storing a value into local storage means it gets treated as a string
  // irrespective of what the value originally was. Because Javascript has
  // no notion of 'parsing' a string to a boolean value this is the best
  // we can do for now. This may get revisited if an easier solution is found.
  if (checkedValue === 'true'){
    startEnabledEl.checked = true;
  }else{
    startEnabledEl.checked = false;
  }

  storedJSONData = window.atob(storedDataTypes);
}

saveButtonEl.addEventListener("click", saveSettings);
loadLocalStorageSettings();
