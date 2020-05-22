import {combineReducers} from 'redux';
import ReduxStates from './ReduxStates.js';
import ReduxSession from './ReduxSession.js';
import MyConfig from './MyConfig.js';

const allReducers = combineReducers({
    redux_state    : ReduxStates,
    redux_session    : ReduxSession,
    my_config    : MyConfig,
});

export default allReducers;
