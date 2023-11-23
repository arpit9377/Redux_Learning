import {createStore} from 'redux';
import BooKReducer from './BookReducer';
const store=createStore(BooKReducer);
export default store;