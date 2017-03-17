import pipe from './fp';

const jobEntries = xml => [...xml.getElementsByTagName('entry')];

const extractJobData = entryList => entryList.map((jobEntry) => {
  const title = jobEntry.getElementsByTagName('title')[0].childNodes[0].nodeValue;
  const link = jobEntry.getElementsByTagName('link')[0].getAttribute('href');

  return { link, title };
});

const createHtml = (jobList) => {
  if (jobList.length > 0) {
    const listItem = job => `<li><a href="${job.link}" target="_blank">${job.title}</a></li>`;
    const htmlJobList = jobList.map(listItem).reduce((a, b) => a + b);

    return `<ul>${htmlJobList}</ul>`;
  }

  return '<div>Sorry, no jobs listed.</div>';
};

const textToXml = text => new DOMParser().parseFromString(text, 'text/xml');
const xmlToHtml = pipe(jobEntries, extractJobData, createHtml);
const appendData = (html) => { document.querySelector('.page-content').innerHTML = html; };

export { textToXml, xmlToHtml, appendData };
