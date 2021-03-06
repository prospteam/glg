import React, { Component } from 'react';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body  } from 'native-base';
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			input_sampleString: "",
		}
	}
	submit_sampleString(){
		alert();
		this.props.set_sampleString('set_sampleString',this.state.input_sampleString);
	}
    render() {
		console.log("input_sampleString")
		console.log(this.state)
		// console.log("this.props")
		// console.log(this.props.redux_state.sampleString)

        return (
			<Screen active_tab="Dashboard" title="Dashboard" >
				<Text style={styles.contentItem}>
					Dashboard contents here to be placed soon.
				</Text>
			</Screen>
		)
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
        set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Dashboard);
