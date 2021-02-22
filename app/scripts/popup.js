import tabUrl from './lib/ActiveTabUrl.js';
import jobFeedUrl from './lib/HasjobFeedUrl.js';
import { checkStatus, responseText, handleError } from './lib/RequestUtils.js';
import { textToXml, xmlToHtml, appendData } from './lib/HtmlUtils.js';

const processTabUrl = new Promise(tabUrl);

processTabUrl
  .then(jobFeedUrl)
  .then(fetch)
  .then(checkStatus)
  .then(responseText)
  .then(textToXml)
  .then(xmlToHtml)
  .then(appendData)
  .catch(handleError);
