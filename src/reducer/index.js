import {combineReducers} from 'redux';
import articleReducer from './article/articleReducer';

const rootReducer = combineReducers({
    articleReducer,
})

export default rootReducer
