import tabUrl from './lib/ActiveTabUrl';
import jobFeedUrl from './lib/HasjobFeedUrl';
import { makeRequest, checkStatus, responseText, handleError } from './lib/RequestUtils';
import { textToXml, xmlToHtml, appendData } from './lib/HtmlUtils';

const processTabUrl = new Promise(tabUrl);

processTabUrl
  .then(jobFeedUrl)
  .then(makeRequest)
  .then(checkStatus)
  .then(responseText)
  .then(textToXml)
  .then(xmlToHtml)
  .then(appendData)
  .catch(handleError);
