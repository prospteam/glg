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

    end_session() {
        this.props.set_is_logged('set_is_logged', false);
    }
    
    render(){
        return (
            <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, 
            }}>
                <View // App Container
                    style={{ 
                        margin:20,
                        // backgroundColor:'blue'
                        }}
                        >
                    <View // Header section
                        style={{
                            flexDirection: 'row',
                            marginBottom: 0,
                            // backgroundColor: 'red'
                        }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection:'row',
                                alignItems:'center',
                            }}>
                            <Image source={logo_square} style={{ justifyContent: "center", alignItems: "center",width: 40, height: 40, borderRadius: 100, 
                             backgroundColor: 'red' }} />
                            <Text style={{ color: '#fff', marginLeft: 10}}>
                                {(this.props.redux_session.user_data.user_type) == "admin" ? "Admin" :
                                (this.props.redux_session.user_data.user_type) == "broker" ? "Broker" :
                                (this.props.redux_session.user_data.user_type) == "shipper" ? "Shipper" :
                                (this.props.redux_session.user_data.user_type) == "Carrier" ? "Shipper" : "User"}
                                {" "}
                                {(this.props.title) ? this.props.title : ""}
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems:'flex-end',
                                flex: 1,
                            }}>
                                <View style={{flexDirection:'row'}}>
                                    {/* <TouchableOpacity onPress={() => this.end_session()}>
                                        <Text style={{ color: '#fff', padding: 5 }}>
                                            Logout
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: '#fff', padding: 5 }}>
                                        | 
                                    </Text> */}
                                    <TouchableOpacity onPress={() => this.end_session()}>
                                        <Text style={{ color: '#fff',padding:5 }}>
                                            Logout
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
					{this.props.children}
			    </View>
            </ImageBackground>
		);
    }
}

function redux_states_to_props(state){
   console.log('redux_session  ', state.redux_session)
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