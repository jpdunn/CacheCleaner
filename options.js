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
appCacheEl = document.getElementById("appcache");
cacheDataEl = document.getElementById("cache");
cookiesEl = document.getElementById("cookies");
downloadsEl = document.getElementById("downloads");
fileSystemsEl = document.getElementById("fileSystems");
formDataEl = document.getElementById("formData");
historyEl = document.getElementById("history");
indexedDBEl = document.getElementById("indexedDB");
passwordsEl = document.getElementById("passwords");
webSQLEl = document.getElementById("webSQL");
saveButtonEl = document.getElementById("save");


/**
 * Saves the settings into local storage.
 */
function saveSettings(){
  var dataTypes;
  var stringDataTypes;
  var base64DataTypes;


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
  base64DataTypes = window.btoa(stringDataTypes);

  localStorage["cc.startEnabled"] = startEnabledEl.checked;
  localStorage["cc.dataTypes"] = base64DataTypes;
}


/**
 * Loads the stored settings from local storage.
 */
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
  parseDataTypes(JSON.parse(storedJSONData));
}


/**
 * Takes the given data types JSON object and parses it to
 * allow the appropriate checkbox elements to be filled.
 *
 * @param dataTypes The JSON object containing the data types that were stored.
 */
function parseDataTypes(dataTypes){
  // Iterate over all the the keys in the JSON object and find the relating
  // element for it and set the value to be what was stored.
  _.each(dataTypes, (value, key) => {
    var typeEl;


    typeEl = document.getElementById(key);
    typeEl.checked = value;
  });
}


saveButtonEl.addEventListener("click", saveSettings);
loadLocalStorageSettings();
