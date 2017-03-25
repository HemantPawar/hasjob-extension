import pipe from './fp';

const createUrlObject = url => new URL(url);
const getHostname = location => location.hostname;
const filterDomain = hostname => (hostname.startsWith('www.') ? hostname.slice(4) : hostname);
const makeJobFeedUrl = domain => `https://hasjob.co/${domain}/feed`;

export default pipe(createUrlObject, getHostname, filterDomain, makeJobFeedUrl);
