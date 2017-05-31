var startEnabledEl;


startEnabledEl = document.getElementById("startEnabled");

function optionChanged() {
  var newValue;


  newValue = false;

  if (startEnabledEl.checked) {
    newValue = true;
  }

  localStorage["startEnabled"] = newValue;
}


function loadLocalStorageSettings() {
  startEnabledEl.checked = localStorage["startEnabled"];
}

startEnabledEl.addEventListener("change", optionChanged);
loadLocalStorageSettings();
