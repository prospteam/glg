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
