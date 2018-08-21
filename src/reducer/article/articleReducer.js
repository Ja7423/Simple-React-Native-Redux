import {FETCH_ARTICLE,
        FETCH_ARTICLE_SUCCESS,
        FETCH_ARTICLE_FAILURE} from '../../constants';

const initialArticleState = {
  articleData: [],
  errorMSG: null
}

export default articleReducer = (state = initialArticleState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return {
        ...state,
        articleData: [],
      }
    case FETCH_ARTICLE_SUCCESS:
      console.log('fetch json data success');
      console.log(action.data);
      return {
        ...state,
        articleData: action.data,
      }
    case FETCH_ARTICLE_FAILURE:
      console.log('fetch article error: ' + action.error);
      return {
        ...state,
        errorMSG: action.error,
      }
    default:
      return state
  }
}
