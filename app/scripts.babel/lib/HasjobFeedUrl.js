function getHostname(url) {
  const urlObject = new URL(url);
  const hostname = urlObject.hostname;

  return hostname;
}

function getDomain(url) {
  const hostname = getHostname(url);
  const domain = hostname.startsWith('www.') ? hostname.slice(4) : hostname;

  return domain;
}

export default function getFeedUrl(url) {
  const hostname = getDomain(url);

  return `https://hasjob.co/${hostname}/feed`;
}

