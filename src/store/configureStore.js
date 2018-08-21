import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';


export default configureStore = () => {
  let store = createStore(reducer, applyMiddleware(thunk));
  return store;
}
