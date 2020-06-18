import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class Apptest extends Component {
    render() {
        return (
			<Screen active_tab="Loads" title="Loads" >
                <Text>hi</Text>
			</Screen>
		)
        console.log(this.state.response);
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
    // const reduxState = (state) => {
    // console.log('redaux stae  ', state)
    return {
		redux_state: state.redux_state
		// si MyGlobalReducer kay makit an sa reducers folder
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged,
        set_show_mini_loader : set_show_mini_loader,
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Apptest);
