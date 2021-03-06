import React, { Component } from 'react';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';
// import Routes from './Routes.js';
import Login from './components/login/Login.js';

// import TruckMapSearch from './components/truck_map_search/TruckMapSearch';
// import Asd from './components/truck_map_search/Asd';

import AppPreloader from './components/AppPreloader';
import Mileage from './components/mileage/Mileage';
import SampleComponent from './components/sample_component/SampleComponent.js';
import SampleComponent2 from './components/sample_component/SampleComponent2.js';
import Loads from './components/allLoads/Loads.js';
import MyLoads from './components/allLoads/MyLoads.js';
import GoogleMapsPlacesInput from './components/allLoads/GoogleMapsPlacesInput.js';
import Orderdetails from './components/allLoads/Orderdetails.js';
import Truckdetails from './components/trucks/Truckdetails.js';
import Editloads from './components/allLoads/Editloads.js';
import Addloads from './components/allLoads/Addloads.js';
import Register from './components/login/Register.js';
import Dashboard from './components/dashboard/Dashboard.js/';
import Trucks from './components/trucks/Trucks.js/';
import Addtrucks from './components/trucks/Addtrucks.js/';
import MyTrucks from './components/trucks/MyTrucks.js/';
import Edittrucks from './components/trucks/Edittrucks.js/';
import LoadSearch from './components/loadsSearch/LoadSearch.js';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';

// REDUX IMPORTS
import { bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {set_is_logged} from './redux/actions/Actions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// Other Screens
// import Truck_map from './components/other_old/truck_maps/truck_map.js';
// import Truckmapsv2 from './components/other_old/truck_maps/truckmapsv2.js';
// import TruckMapSearch from './components/other_old/truck_map_search/TruckMapSearch.js';
// import Load_map from './components/other_old/Load_map.js';
import FindTruck from './components/FindTruck.js';
import RatesFromCarrier from './components/RatesFromCarrier.js';
import FindLoads from './components/allLoads/FindLoads.js';
import AddressAutocomplete from './components/AddressAutocomplete.js';

// Dont just exist, live.
class Routes extends Component {
    render() {

        // console.log(this.props.redux_state.show_mini_loader);
        // console.log("this.props.redux_state.show_mini_loader");
        return (
            <>
                {/* <SCLAlert
                    show={this.props.redux_state.show_alert}
                    // onRequestClose={this.props.redux_state.show_}
                    // theme={this.props.redux_state.show_theme}
                    // title={this.props.redux_state.show_title}
                    // subtitle={this.props.redux_state.show_msg}
                    theme="info"
                    title="Info"
                    subtitle="You can setup the colors using the theme prop"
                /> */}

                {/* <Spinner
                    visible={this.props.redux_state.show_mini_loader}
                    textContent={'Loading...'}
                    textStyle={{color: '#FFF'}}
                /> */}
                <Router>
                    <Scene key="root">
                        {/* <Scene key='Trucks' tabs={true} >

                            <Scene
                                key="SampleComponent"
                                component={SampleComponent}
                                title=""
                                hideNavBar
                            />
                            <Scene
                                key="Loads"
                                component={Loads}
                                title="Loads"
                                hideNavBar
                            />
                        </Scene> */}

                        {/* <Scene
                            direction='left'
                            key="Dashboard"
                            component={Dashboard}
                            title="Dashboard"
                            hideNavBar
                        /> */}
                        {
                            (this.props.redux_session.user_data.user_type=="shipper")?
                            <Scene
                                key="MyLoads"
                                component={MyLoads}
                                title="MyLoads"
                                hideNavBar
                            />
                            :(this.props.redux_session.user_data.user_type=="carrier")?
                            <Scene
                                key="MyTrucks"
                                component={MyTrucks}
                                title="MyTrucks"
                                hideNavBar
                            />
                            :""
                        }
                        <Scene
                            key="Loads"
                            component={Loads}
                            title="Loads"
                            hideNavBar
                        />
                        <Scene
                            key="Trucks"
                            component={Trucks}
                            title="Trucks"
                            hideNavBar

                        />
                        {/* <Scene
                            key="Mileage"
                            component={Mileage}
                            title="Mileage"
                            hideNavBar
                        /> */}
                        <Scene
                            key="Orderdetails"
                            component={Orderdetails}
                            title="Orderdetails"
                            hideNavBar
                        />
                        <Scene
                            key="Truckdetails"
                            component={Truckdetails}
                            title="Truckdetails"
                            hideNavBar
                        />
                        <Scene
                            key="Addloads"
                            component={Addloads}
                            title="Addloads"
                            hideNavBar
                        />
                        <Scene
                            key="Addtrucks"
                            component={Addtrucks}
                            title="Addtrucks"
                            hideNavBar
                        />
                        <Scene
                            key="Editloads"
                            component={Editloads}
                            title="Editloads"
                            hideNavBar
                        />
                        <Scene
                            key="Edittrucks"
                            component={Edittrucks}
                            title="Edittrucks"
                            hideNavBar
                        />
                        <Scene
                            key="GoogleMapsPlacesInput"
                            component={GoogleMapsPlacesInput}
                            title="GoogleMapsPlacesInput"
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
                        {/* <Scene
                            key="Truck_map"
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
                        /> */}
                        {
                            // <Scene key="shipperDashboard" component={shipperDashboard} title="" hideNavBar/>
                            // <Scene key="carrierDashboard" component={CarrierDashboard} title="" hideNavBar/>
                            // <Scene key="All_loads" component={All_loads} title="" hideNavBar />
                            // <Scene key="truck_map" component={truck_map} title="" hideNavBar />
                            // tangtangko above para maka proceed ko. 3/19/20
                        }

                        {/* SUB PAGES */}

                        <Scene
                            key="FindTruck"
                            component={FindTruck}
                            title="FindTruck" hideNavBar
                        />
                        <Scene
                            key="FindLoads"
                            component={FindLoads}
                            title="FindLoads" hideNavBar
                        />
                        <Scene
                            key="RatesFromCarrier"
                            component={RatesFromCarrier}
                            title="RatesFromCarrier" hideNavBar
                        />
                        <Scene
                            key="AddressAutocomplete"
                            component={AddressAutocomplete}
                            title="AddressAutocomplete" hideNavBar
                        />
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
