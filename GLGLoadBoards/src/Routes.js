import React, { Component } from 'react';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

// MY IMPORTRS
import Login from './components/login/Login.js';
// import AppPreloader from './components/AppPreloader';
import Temp from './components/Temp.js';
import SampleComponent from './components/sample_component/SampleComponent.js';
import SampleComponent2 from './components/sample_component/SampleComponent2.js';
import Loads from './components/allLoads/Loads.js';
import Orderdetails from './components/allLoads/Orderdetails.js';
import Register from './components/login/Register.js';
import Dashboard from './components/dashboard/Dashboard.js/';
import Trucks from './components/trucks/Trucks.js/';
import LoadSearch from './components/loadsSearch/LoadSearch.js';

// REDUX IMPORTS
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {set_is_logged} from './redux/actions/Actions';

// Other Screens
import Truck_map from './components/other_old/truck_maps/truck_map.js';
import Truckmapsv2 from './components/other_old/truck_maps/truckmapsv2.js';
import TruckMapSearch from './components/other_old/truck_map_search/TruckMapSearch.js';
import Load_map from './components/other_old/Load_map.js';

// Dont just exist, live.
class Routes extends Component {
    render() {

        return (
            <>
                <Spinner
                    visible={this.props.redux_state.show_mini_loader}
                    textContent={'Loading...'}
                    textStyle={{color: '#FFF'}}
                />
                <Router>
                    <Scene key="root">
                        <Scene
                            key="Dashboard"
                            component={Dashboard}
                            title="Dashboard"
                            hideNavBar
                        />
                        <Scene
                            key="Trucks"
                            component={Trucks}
                            title="Trucks"
                            hideNavBar
                        />
                        <Scene
                            key="Loads"
                            component={Loads}
                            title="Loads"
                            hideNavBar
                        />
                        <Scene
                            key="Orderdetails"
                            component={Orderdetails}
                            title="Orderdetails"
                            hideNavBar
                        />
                        <Scene
                            key="Loads"
                            component={Loads}
                            title="Loads"
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
                            key="SampleComponent"
                            component={SampleComponent}
                            title=""
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

                        {/*  OTHER COMPONENTS */}
                        <Scene
                            key="Truck_map"
                            initial={true}
                            component={Truck_map}
                            title="Truck_map" hideNavBar
                        />
                        <Scene
                            key="Truckmapsv2"
                            component={Truckmapsv2}
                            title="Truckmapsv2" hideNavBar
                        />
                        <Scene
                            key="TruckMapSearch"
                            component={TruckMapSearch}
                            title="TruckMapSearch" hideNavBar
                        />
                        <Scene
                            key="Load_map"
                            component={Load_map}
                            title="Load_map" hideNavBar
                        />
                        {
                        // <Scene key="shipperDashboard" component={shipperDashboard} title="" hideNavBar/>
                        // <Scene key="carrierDashboard" component={CarrierDashboard} title="" hideNavBar/>
                        // <Scene key="All_loads" component={All_loads} title="" hideNavBar />
                        // <Scene key="truck_map" component={truck_map} title="" hideNavBar />
                        // tangtangko above para maka proceed ko. 3/19/20
                        }
                        
                    </Scene>
                </Router>
            </>
        );
    }
}

// Push yourself a little more, every day.
function redux_state_to_Props (state){
    console.log('_____________________________________');
    console.log('');
    console.log('      Router.js redux_session  ');
    console.log('');
    console.log('is_logged');
    console.log(state.redux_session.is_logged);
    console.log('');
    console.log('user_data');
    console.log(state.redux_session.user_data);
    console.log('');
    console.log('_____________________________________');
    return {
        redux_state: state.redux_state,
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
