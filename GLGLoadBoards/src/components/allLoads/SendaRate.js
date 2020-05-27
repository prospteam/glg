import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Modal from 'react-native-modal';
import axios from 'axios';

import Screen from '../layout/Screen';
import Mileage from '../mileage/Mileage';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class SendaRate extends Component {
	constructor(props){
		super(props);
        this.state = {
            isModalVisible: false,
        };
	}

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
    render() {

        return (
            <Screen>
            <View style={{flex: 1}}>
              <Button title="Show modal" onPress={this.toggleModal}><Text style={{color:'white'}}>Hello!</Text></Button>
              <Modal isVisible={this.state.isModalVisible}>
                <View style={{flex: 1}}>
                  <Text style={{color:'white'}}>Hello!</Text>
                   <TextInput style={styles.text_input_edit} placeholderTextColor="#000"/>
                  <Button title="Hide modal" onPress={this.toggleModal} />
                </View>
              </Modal>
            </View>
			</Screen>
		)
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
    // const reduxState = (state) => {
    console.log('redux staettt', state.redux_session.user_data.user_type)
    return {
		redux_state: state.redux_state,
		redux_session: state.redux_session
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

export default connect(reduxStateToProps,reduxActionFunctions)(SendaRate);
