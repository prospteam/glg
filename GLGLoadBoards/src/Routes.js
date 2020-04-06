// RNRF logic here
import React, { Component } from 'react';
// import SideBar from './components/template/Sidebar.js';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';
// import Routes from './Routes.js';
import Login from './components/login/Login.js';
import Temp from './components/Temp.js';
import SampleComponent from './components/sample_component/SampleComponent.js';
import SampleComponent2 from './components/sample_component/SampleComponent2.js';
import Register from './components/login/Register.js';
import Dashboard from './components/login/Dashboard.js/';
import LoadSearch from './components/loadsSearch/LoadSearch.js';
import {connect} from 'react-redux';

// Dont just exist, live.
class Routes extends Component {
    render() {
        return (
            <Router>
                    <Scene key="root">
                        <Scene key="SampleComponent" component={SampleComponent}  title="" hideNavBar />
                        <Scene key="SampleComponent2" component={SampleComponent2}  title="" hideNavBar />
                        <Scene key="Temp" component={Temp}  title="" hideNavBar />
                        <Scene key="LoadSearch" component={LoadSearch} title="" hideNavBar />
                        <Scene key="Dashboard" component={Dashboard} initial={(this.props.MyGlobalReducer.isLoggedIn== true) ? true : false } title="Dashboard" hideNavBar />
                        <Scene key="Register" component={Register} title="" hideNavBar />
                        {
                        // <Scene key="Login" component={Login} initial={(this.props.MyGlobalReducer.isLoggedIn === false) ? true : false} title="" hideNavBar />
                            
                        // <Scene key="shipperDashboard" component={shipperDashboard} title="" hideNavBar/>
                        // <Scene key="carrierDashboard" component={CarrierDashboard} title="" hideNavBar/>
                        // <Scene key="All_loads" component={All_loads} title="" hideNavBar />
                        // <Scene key="truck_map" component={truck_map} title="" hideNavBar />
                        // tangtangko above para maka proceed ko. 3/19/20
                        }
                    </Scene>
                </Router>
            );
    }
}

// Push yourself a little more, everytime.

function reduxStateToProps (state){
    return {
        MyGlobalReducer: state.MyGlobalReducer
    }
}

export default connect(reduxStateToProps,null)(Routes);
