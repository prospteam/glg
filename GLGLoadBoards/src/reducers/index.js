import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer.js';
import otherReducer from './otherReducer.js';
import userSessionReducer from './userSessionReducer.js';


const allReducers = combineReducers({
    userSessionReducer_    : userSessionReducer,
    otherReducer_  : otherReducer,
    GlobalReducer_      : GlobalReducer,

});

export default allReducers;
