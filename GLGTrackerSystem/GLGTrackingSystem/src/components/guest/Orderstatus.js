import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';
import Dash from 'react-native-dash';

import { Actions } from 'react-native-router-flux';
import truck_bg from '../../assets/images/truck_bg.jpg';
import logo from '../../assets/images/logo.png';
import bg_image from '../../assets/images/bg_image.png';
import styles from '../../assets/styles/Commonstyles.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';


class Orderstatus extends Component {
    render(){
        return (
        <View>
            <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Image source={truck_bg} style={{ width: '100%', height: 180, }} />
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100, marginTop: -65,  }} />
                </View>
                <View style={{justifyContent: "center", alignItems: "center", marginTop: 15}}>
                    <Text style={{color:'white', fontSize:25, fontFamily: 'sans-serif' }}>Track Numbers: </Text>
                    <TextInput style={styles.trackinput} placeholder="0123456789" placeholderTextColor="white" />
                </View>
                <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>

                    <View style={{ margin: 10}} />

                    <View style={{flexDirection: 'row'}}>
                        <Icon name='ios-checkmark-circle' style={{color:'#24cea7', fontSize:20,}} />
                        <Dash dashColor={'#57B9BB'} style={styles.dash1} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:15, color:'white', marginLeft:60}}>Mon, 01 June 2020</Text>
                            <Text style={{fontSize:18, color:'white', marginLeft:60, fontWeight: 'bold'}}>Claimed </Text>
                        </View>
                    </View>

                    <View style={{ margin: 10}} />

                    <View style={{flexDirection: 'row'}}>
                        <Icon name='ios-checkmark-circle' style={{color:'#24cea7', fontSize:20,}} />
                        <Dash dashColor={'#57B9BB'} style={styles.dash1} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:15, color:'white', marginLeft:60}}>Mon, 01 June 2020</Text>
                            <Text style={{fontSize:18, color:'white', marginLeft:60, fontWeight: 'bold'}}>Arrived at USA</Text>
                        </View>
                    </View>

                    <View style={{ margin: 10}} />

                    <View style={{flexDirection: 'row'}}>
                        <Icon name='ios-checkmark-circle' style={{color:'#24cea7', fontSize:20,}} />
                        <Dash dashColor={'#57B9BB'} style={styles.dash1} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:15, color:'white', marginLeft:60}}>Mon, 01 June 2020</Text>
                            <Text style={{fontSize:18, color:'white', marginLeft:60, fontWeight: 'bold'}}>Delivered </Text>
                        </View>
                    </View>

                </View>
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
export default connect(redux_states_to_props,redux_action_function_to_props)(Orderstatus);
