// RNRF logic here
import React, { Component } from 'react';
// import SideBar from './components/template/Sidebar.js';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';
// import Routes from './Routes.js';
import Login from './components/login/Login.js';
import Loads from './components/Loads.js';
import TruckMapSearch from './components/truck_map_search/TruckMapSearch';
import Asd from './components/truck_map_search/Asd';
import AppPreloader from './components/AppPreloader';
import Temp from './components/Temp.js';
import SampleComponent from './components/sample_component/SampleComponent.js';
import SampleComponent2 from './components/sample_component/SampleComponent2.js';
import Register from './components/login/Register.js';
import Dashboard from './components/login/Dashboard.js/';
import LoadSearch from './components/loadsSearch/LoadSearch.js';


//Redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Dont just exist, live.
class Routes extends Component {
    render() {
        // this.props.set_is_logged('set_is_logged',false);
        return (<Router>
        <Scene key="root">
            {/* <Scene
                key="AppPreloader"
                component={AppPreloader}
                initial={
                    (this.props.redux_session.is_logged === false)? true : false
                }
                title=""
                hideNavBar
            /> */}
            <Scene
                key="Asd"
                component={Asd}
                initial={
                    (this.props.redux_session.is_logged === false)? true : false
                }
                title=""
                hideNavBar
            />
            <Scene
                key="SampleComponent"
                component={SampleComponent}
                title=""
                hideNavBar
            />
            <Scene
                key="Login"
                component={Login}
                initial={!this.props.redux_session.is_logged}
                title=""
                hideNavBar
            />
            <Scene
                key="Loads"
                component={Loads}
                title="Loads"
                hideNavBar
            />
            <Scene
                key="LoadSearch"
                component={LoadSearch}
                title="" hideNavBar
            />
            <Scene
                key="Register"
                component={Register}
                title=""
                hideNavBar
            />
            <Scene
                key="SampleComponent2"
                component={SampleComponent2}
                title="" hideNavBar
            />
            {
            // <Scene key="shipperDashboard" component={shipperDashboard} title="" hideNavBar/>
            // <Scene key="carrierDashboard" component={CarrierDashboard} title="" hideNavBar/>
            // <Scene key="All_loads" component={All_loads} title="" hideNavBar />
            // <Scene key="truck_map" component={truck_map} title="" hideNavBar />
            // tangtangko above para maka proceed ko. 3/19/20
            }
        </Scene>
    </Router>);}
}
// Push yourself a little more, every day.
function redux_state_to_Props (state){
    console.log(' Router.js redux_session  ', state.redux_session)
    return {
        redux_session: state.redux_session
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        // set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(redux_state_to_Props,reduxActionFunctions)(Routes);
