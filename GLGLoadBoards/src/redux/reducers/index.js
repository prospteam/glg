import {combineReducers} from 'redux';
import MyGlobalReducer from './MyGlobalReducer.js';
import ReduxSession from './ReduxSession.js';

const allReducers = combineReducers({
    redux_state    : MyGlobalReducer,
    redux_session    : ReduxSession,
});

export default allReducers;
