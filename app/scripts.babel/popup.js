import tabUrl from './lib/ActiveTabUrl';
import jobFeedUrl from './lib/HasjobFeedUrl';

const processTabUrl = new Promise(tabUrl);

processTabUrl
  .then(jobFeedUrl)
  .then((url) => { console.log(url); }) // eslint-disable-line
  .catch((error) => { console.error(error); }); // eslint-disable-line
