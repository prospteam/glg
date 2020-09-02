import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';
import Dash from 'react-native-dash';
import axios from 'axios';

import { Actions } from 'react-native-router-flux';
import truck_bg from '../../assets/images/truck_bg.jpg';
import logo from '../../assets/images/logo.png';
import bg_image from '../../assets/images/bg_image.png';
import styles from '../../assets/styles/Commonstyles.js';
import MyLayout from '../layout/MyLayout';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';
import { api_link } from '../../libraries/MyConfigs.js';


class Orderstatus extends Component {
    state={load_data:[]}

    componentDidMount() {
        // var self = this;
        // console.log('___s_________________________');
        // console.log(this);

        this.form_login(this.props.tracking_id);
    }

    form_login = (tracking_id) => {

        if (tracking_id == '') {
                // this.setState({
                //     show: true,
                //     msg: "Please Enter Password",
                //     theme: "warning",
                //     title: "Warning!"
                // })
                alert("Please Enter Something");
                return;
        }

        // console.log(this.state);
        // console.log("GETTING");
        // .toLowerCase();
        const that = this;
        // http://glgfreight.com/loadboard/api_mobile/common/get


        alert('Loading...');
        axios({
            method: 'post',
            url: api_link + 'KROD/query_builder',
            data: {
                "select": "*",
                "from": "glg_loads",
                "where": {
                    "load_id": "169",
                    // "load_id": tracking_id,
                    // "username": this.state.username.toLowerCase(),
                    // "other_password": this.state.password.toLowerCase()
                }
            }
        }).then(function (response) {
            // console.log('___________response__________d______');
            // console.log(response);
            // that.props.set_show_mini_loader(false);
            // that.setState({is_load_test:false});
            if (response.data.length > 0) {
                alert("Successfully Login");
                // console.log('___________testxxx_________________');
                // console.log(that.props);
                // that.props.set_is_logged('set_is_logged', true);
                that.setState({
                    load_data: response.data[0]
                });
                // console.log(response);
            } else {
                alert("Load not found.");
            }
        })
        .catch(function (error) {

            // that.setState({is_load_test:false});
            // that.props.set_show_mini_loader(false);
            console.log(error);
            console.log("Errorr");
        });
    }

    render(){
        // console.log('________________________asd____');
        // console.log('ito na this : '+this.props.asd);
        // this.form_login(this.props.tracking_id);
        return (
            <MyLayout>
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
                    <View style={{flexDirection: 'row', backgroundColor:'#ff9c00cf',  width: '70%', borderRadius:3}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{ fontSize: 18, color: 'white', marginLeft: 75, fontWeight: 'bold' }}>{this.state.load_data ? this.state.load_data.tracking_status:"Processing"}</Text>
                            <Text style={{fontSize:15, color:'white', marginLeft:60}}>Mon, 01 June 2020</Text>
                        </View>
                    </View>
                </View>
            </MyLayout>
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
