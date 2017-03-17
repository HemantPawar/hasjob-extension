const markResolve = response => Promise.resolve(response);
const markReject = response => Promise.reject(new Error('status not ok', response.statusText));

const checkStatus = response => (response.ok ? markResolve(response) : markReject(response));
const responseText = response => response.text();
const handleError = (error) => { console.error('status not ok', error); }; // eslint-disable-line

export { checkStatus, responseText, handleError };
