export default (resolve, reject) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    try {
      resolve(tabs[0].url);
    } catch (ex) {
      reject(new Error(ex));
    }
  });
};
