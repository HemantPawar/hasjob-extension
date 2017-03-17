import tabUrl from './lib/ActiveTabUrl';
import jobFeedUrl from './lib/HasjobFeedUrl';
import { makeRequest, checkStatus, responseText } from './lib/RequestUtils';

const processTabUrl = new Promise(tabUrl);

processTabUrl
  .then(jobFeedUrl)
  .then(makeRequest)
  .then(checkStatus)
  .then(responseText)
  .then((data) => { console.log(data); }) // eslint-disable-line
  .catch((error) => { console.error(error); }); // eslint-disable-line
