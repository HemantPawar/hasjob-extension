const markResolve = response => Promise.resolve(response);
const markReject = response => Promise.reject(new Error('status not ok', response.statusText));

const makeRequest = url => fetch(url).then(markResolve);
const checkStatus = response => (response.ok ? markResolve(response) : markReject(response));
const responseText = response => response.text();


export { makeRequest, checkStatus, responseText };
