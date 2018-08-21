import {FETCH_ARTICLE,
        FETCH_ARTICLE_SUCCESS,
        FETCH_ARTICLE_FAILURE} from './constants';
import {url, API_KEY} from './API/API';

export function fetchArticleAPI(params) {
  return (dispatch) => {
    dispatch(getArticle())
    let apiURL = url('article');
    let request = combineURLWithArguments(apiURL, params);
    console.log('request: ' + request);

    fetch(request)
    .then(response => response.json())
    .then(json => {
      dispatch(getArticleSuccess(json.response.docs))
    })
    .catch(error => {
      dispatch(getArticleFailure(error))
    })
  }
}

function getArticle() {
  return {
    type:FETCH_ARTICLE
  }
}

function getArticleSuccess(data) {
  return {
      type: FETCH_ARTICLE_SUCCESS,
      data
  }
}

function getArticleFailure(error) {
  return {
      type: FETCH_ARTICLE_FAILURE,
      error
  }
}

function combineURLWithArguments(url, params) {
  const arguString = Object.keys(params)
    .map(key => key + '=' + encodeURIComponent(params[key]))
    .join('&');

  return url + arguString;
}
