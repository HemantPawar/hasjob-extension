chrome.runtime.onInstalled.addListener((details) => {
  // eslint-disable-next-line
  console.log('previousVersion', details.previousVersion);
});
