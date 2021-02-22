import pipe from './fp.js';
import { appendData } from './HtmlUtils.js';

const errorMessage = error => (
  `<div class="page-info">
    <h3>Something went wrong!!!</h3>
    <code class="error-code">${error}</code>
  </div>`
);

const checkStatus = response => (
  response.ok ?
    Promise.resolve(response) :
    Promise.reject(new Error('status not ok', response.statusText))
);

const responseText = response => response.text();
const handleError = pipe(errorMessage, appendData);

export { checkStatus, responseText, handleError };
