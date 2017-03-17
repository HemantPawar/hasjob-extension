const jobList = html => `<ul>${html}</ul>`;
const listItem = job => `<li><a href="${job.link}" target="_blank">${job.title}</a></li>`;

const textToXml = text => new DOMParser().parseFromString(text, 'text/xml');
const xmlToHtml = (xml) => {
  const allJobs = [...xml.getElementsByTagName('entry')];

  const html = allJobs.map((job) => {
    const title = job.getElementsByTagName('title')[0].childNodes[0].nodeValue;
    const link = job.getElementsByTagName('link')[0].getAttribute('href');

    return listItem({ link, title });
  });

  return jobList(html.join(''));
};
const appendData = (html) => { document.querySelector('.page-content').innerHTML = html; };

export { textToXml, xmlToHtml, appendData };
