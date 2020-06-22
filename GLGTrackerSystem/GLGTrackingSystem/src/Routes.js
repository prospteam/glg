import React, { Component } from 'react';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';

import App from '/App.js';
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
                            key="App"
                            component={App}
                            title="App"
                            {/* <hideNavBar*/}
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
export default connect(redux_state_to_Props,reduxActionFunctions)(Routes);
