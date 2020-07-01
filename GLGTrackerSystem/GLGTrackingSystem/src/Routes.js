import React, { Component } from 'react';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';

// OUR IMPORTS
import Apptest from './components/test/Apptest.js';
import SampleComponent from './components/SampleComponent.js';
import Guest from './components/guest/Guest.js';
import Login from './components/guest/Login.js';
import {set_is_logged} from './redux/actions/Actions'

// REDUX IMPORTS
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

// Dont just exist, live.
class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Scene key="root">
                    <Scene
                        key="Guest"
                        component={Guest}
                        title="Guest"
                        hideNavBar
                    />
                    <Scene
                        key="Login"
                        component={Login}
                        title="Login"
                        hideNavBar
                    />
                        <Scene
                            key="SampleComponent"
                            component={SampleComponent}
                            title="SampleComponent"
                            hideNavBar
                        />
                        <Scene
                            key="Apptest"
                            component={Apptest}
                            title="Apptest"
                            hideNavBar
                        />
                    </Scene>
                </Router>
            </>
        );
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }
export default connect(null,reduxActionFunctions)(Routes);
