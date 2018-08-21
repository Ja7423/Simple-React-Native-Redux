const API_URL = 'https://api.nytimes.com/svc/';

export const API_CATEGORY = {
  'article': 'search/v2/articlesearch.json?',
}


export const API_KEY = 'fb09f64a212642269978a41c539e8645';
export function url(type) {
  return API_URL + API_CATEGORY[type];
}
