(function() {
  var shouldCleanCache;


  shouldCleanCache = false;

  // Removes any cached data that is older than 1 day.
  var cleanCacheData = (function() {
    if (typeof(chrome.browsingData) !== 'undefined') {
      var oneDayAgo;


      oneDayAgo = (new Date()).getTime() - 86400000;

      chrome.browsingData.removeCache({
        "since": oneDayAgo
      }, function() {
        alert('cache cleaned....');
      });
    });

    // Fired when the extension icon is clicked.
    var cleanClicked = (function() {
      // Toggle the cache flag and add/remove the action listener accordingly.
      if (shouldCleanCache){
        shouldCleanCache = false;
        chrome.webRequest.onBeforeRequest.removeListener(cleanCacheData);

      }else{
        shouldCleanCache = true;
        chrome.webRequest.onBeforeRequest.addListener(clearCache, {urls: ["<all_urls>"]});
      }
    });

    chrome.browserAction.onClicked.addListener(cleanClicked);
  })();
