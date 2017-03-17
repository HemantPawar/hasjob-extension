const checkStatus = response => (
  response.ok ?
    Promise.resolve(response) :
    Promise.reject(new Error('status not ok', response.statusText))
);
const responseText = response => response.text();
const handleError = (error) => { console.error('oops!!!', error); }; // eslint-disable-line

export { checkStatus, responseText, handleError };
