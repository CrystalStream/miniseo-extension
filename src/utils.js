const COLORS = {
  head: 'green',
  links: 'orange',
  og_tags: 'yellow',
  headers_tags: 'blue',
  images: 'gray',
}
function scrapSite(url) {
  return fetch(`http://localhost:5000/seo?url=${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .catch(err => err)
}

function getBackgroundColor(metric) {
  return COLORS[metric]
}

export default {
  scrapSite,
  getBackgroundColor
}
