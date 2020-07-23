import React, { Component } from 'react';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';

// OUR IMPORTS
import Login from './components/guest/Login.js';
import Apptest from './components/test/Apptest.js';
import SampleComponent from './components/test/SampleComponent.js';
import Guest from './components/guest/Guest.js';
import Orderstatus from './components/guest/Orderstatus.js';
import Shipper from './components/shipper/Shipper.js';
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
                            key="SampleComponent"
                            component={SampleComponent}
                            title="SampleComponent"
                            hideNavBar
                        />
                        <Scene
                            key="Orderstatus"
                            component={Orderstatus}
                            title="Orderstatus"
                            hideNavBar
                        />
                        <Scene
                            key="Guest"
                            component={Guest}
                            title="Guest"
                            hideNavBar
                        />
                        <Scene
                            key="Shipper"
                            component={Shipper}
                            title="Shipper"
                            hideNavBar
                        />
                        <Scene
                            key="Login"
                            component={Login}
                            title="Login"
                            // initial={!this.props.redux_session.is_logged}
                            title=""
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

// Push yourself a little more, every day.
// function redux_state_to_Props (state){
//     console.log('_____________________________________');
//     console.log('');
//     console.log('      Router.js redux_session  ');
//     console.log('');
//     console.log('is_logged');
//     console.log(state.redux_session.is_logged);
//     console.log('');
//     console.log('user_data');
//     console.log(state.redux_session.user_data);
//     console.log('');
//     console.log('_____________________________________');
//     return {
//         redux_state: state.redux_state,
//         redux_session: state.redux_session
//     }
// }

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }
export default connect(null,reduxActionFunctions)(Routes);
