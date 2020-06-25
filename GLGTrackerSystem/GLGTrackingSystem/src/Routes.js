import React, { Component } from 'react';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';

// OUR IMPORTS
import { Apptest } from './components/test/Apptest';

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
