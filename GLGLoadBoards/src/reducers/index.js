import {combineReducers} from 'redux';
import MyGlobalReducer from './MyGlobalReducer.js';

const allReducers = combineReducers({
    MyGlobalReducer    : MyGlobalReducer,
});

export default allReducers;
