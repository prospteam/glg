import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, Icon, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import truck_bg from '../../assets/images/truck_bg.jpg';
import logo from '../../assets/images/logo.png';
import styles from '../../assets/styles/Commonstyles.js';
import { Actions } from 'react-native-router-flux';

import bg_image from '../../assets/images/bg_image.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';


class Guest extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: [],
            load_id: '',
        };

    }

    _handlePress() {
        console.log(this.state.load_id);
        alert("rogen Lang talaga magandaaaaaaaa");
    }
    render() {
        return (
            <View>
                <ImageBackground source={truck_bg} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
                    <View  style={{justifyContent: "center", alignItems: "center",}}>
                        <TouchableOpacity onPress={()=>{Actions.Login()} }>
                            <Text style={{fontSize:18, color:'white',  marginTop:20,marginLeft:220}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                <View style={{ marginTop: "10%", justifyContent: "center", alignItems: "center" }}>
                <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100, blurRadius: 5 }} />
            </View>
            {/* <View style={{ marginTop: "10%", justifyContent: "center", alignItems: "center" }}>
                  <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100,
                  //  blurRadius: 5
                    }} />
              </View> */}
                <View  style={{justifyContent: "center", alignItems: "center", marginTop: 50}}>
                    <Text style={{color:'white', fontSize:25, fontFamily: 'sans-serif' }}>GLG Tack a Load </Text>
                    <TextInput style={styles.text_input} placeholder="Enter Code Here"  placeholderTextColor="white" onChangeText={text => this.setState({ load_id: text })} />
                </View>
                    <View  style={{justifyContent: "center", alignItems: "center", marginTop: 30}}>
                            <TouchableOpacity style={styles.button} onPress={() => Actions.Orderstatus()}>
                                <Text style={{fontSize:18}}>Track</Text>
                            </TouchableOpacity>
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
export default connect(redux_states_to_props,redux_action_function_to_props)(Guest);
