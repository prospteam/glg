import {combineReducers} from 'redux';
<<<<<<< HEAD
import GlobalReducer from './GlobalReducer.js';
import otherReducer from './otherReducer.js';
import userSessionReducer from './userSessionReducer.js';


const allReducers = combineReducers({
    userSessionReducer_    : userSessionReducer,
    otherReducer_  : otherReducer,
    GlobalReducer_      : GlobalReducer,

=======
import Fetch_Data_Reducer from './Reducer.js';
import Fetch_Single_Data_Reducer from './SingleReducer.js';
import RiderReducers from './Rider_Reducer.js';
import RegionReducer from './RegionReducer.js';
import ApiData_ from './ActionReducer.js';

const allReducers = combineReducers({
    fetchData    : Fetch_Data_Reducer,
    singleData   : Fetch_Single_Data_Reducer,
    ApiData      : ApiData_,
    RiderReducer: RiderReducers,
    RegionReducer: RegionReducer
>>>>>>> 9e7cdadb87e03aff1efb1fa9760e11619a85f685
});

export default allReducers;
