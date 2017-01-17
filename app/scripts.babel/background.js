chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion); // eslint-disable-line
});
