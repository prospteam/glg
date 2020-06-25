import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { set_is_logged } from '../../redux/actions/Actions';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {api_link} from '../../libraries/MyConfigs.js';

 class App extends Component {

    render() {
        return (
            <Text>Hello Worldss</Text>
		)
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
    // const reduxState = (state) => {
    // console.log('redaux stae  ', state)
    return {
		redux_state: state.redux_state,
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged,
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }
export default connect(reduxStateToProps,reduxActionFunctions)(App);
