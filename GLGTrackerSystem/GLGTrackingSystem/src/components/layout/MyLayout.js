import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';
// import Dash from 'react-native-dash';

// import { Actions } from 'react-native-router-flux';
// import truck_bg from '../../assets/images/truck_bg.jpg';
// import logo from '../../assets/images/logo.png';
import bg_image from '../../assets/images/bg_image.png';
import logo_square from '../../assets/images/logo_square.jpg';
// import styles from '../../assets/styles/Commonstyles.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';

class MyLayout extends Component {
    render(){
        return (
            <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5 }}>
                <View // App Container
                    style={{ 
                        // backgroundColor: 'blue' ,
                        margin:20,
                        }}
                        >
                    <View // Header section
                        style={{
                            // backgroundColor:'red',
                            // flex:1,
                            flexDirection: 'row',
                            // height: 80,
                        }}>
                        <View
                            style={{
                                // backgroundColor: 'blue',
                                flex: 1,
                                // height: '100%',
                                // justifyContent: 'center',
                                flexDirection:'row',
                                alignItems:'center'
                            }}>
                            <Image source={logo_square} style={{ justifyContent: "center", alignItems: "center",width: 40, height: 40, borderRadius: 100, blurRadius: 5, backgroundColor: 'red' }} />
                            <Text style={{ color: '#fff', marginLeft: 10}}>
                                {(this.props.title) ? this.props.title : "User Page Title"}
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems:'flex-end',
                                // height: '100%',
                                // backgroundColor: 'gold',
                                flex: 1,
                                // justifyContent:'flex-end',
                            }}>
                            <Text style={{color:'#fff'}}>
                                Option1 | Logout
                            </Text>
                        </View>
                    </View>
					{this.props.children}
			    </View>
            </ImageBackground>
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