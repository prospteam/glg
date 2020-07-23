import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';
// import Dash from 'react-native-dash';

// import { Actions } from 'react-native-router-flux';
// import truck_bg from '../../assets/images/truck_bg.jpg';
// import logo from '../../assets/images/logo.png';
import bg_image from '../../assets/images/bg_image.png';
// import styles from '../../assets/styles/Commonstyles.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';

class MyLayout extends Component {
    render(){
        return (
			<View>
				<ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
					{this.props.children}
				</ImageBackground>
			</View>
		);
    }
}

function redux_states_to_props(state){
   // console.log('redux_session  ', state.redux_session)
   return {
       redux_session: state.redux_session
       // si MyGlobalReducer kay makit an sa reducers folder
   }
}
function redux_action_function_to_props(dispatch){
   return bindActionCreators({
       set_is_logged : set_is_logged,
       // set_user_data : set_user_data,
   },dispatch);
}
export default connect(redux_states_to_props,redux_action_function_to_props)(MyLayout);
