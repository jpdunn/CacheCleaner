(function() {

  var cleanCacheData = (function() {
    if (typeof(chrome.browsingData) !== 'undefined') {
      var oneDayAgo;


      oneDayAgo = (new Date()).getTime() - 86400;

      chrome.browsingData.removeCache({
        "since": oneDayAgo
      }, function() {
        alert('cache cleaned....');
      });
    });

    var cleanClicked = (function() {
      cleanCacheData();
    });

    chrome.browserAction.onClicked.addListener(cleanClicked);
  })();
