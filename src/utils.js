const COLORS = {
  head: {
    name: 'green',
    code: '#6AB187'
  },
  links: {
    name: 'orange',
    code: '#DE7A22'
  },
  og_tags: {
    name: 'yellow',
    code: '#F4CC70'
  },
  headers_tags: {
    name: 'blue',
    code: '#20948B'
  },
  images: {
    name: 'gray',
    code: '#465362'
  },
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
  return COLORS[metric].name
}

function getColorCode(metric) {
  return COLORS[metric].code

}

export default {
  scrapSite,
  getBackgroundColor,
  getColorCode
}
