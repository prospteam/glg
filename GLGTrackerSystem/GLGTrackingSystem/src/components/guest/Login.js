import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { my_actions } from '../../redux/actions/Actions';

// Out Imports
import truck_bg from '../../assets/images/truck_bg.jpg';
import logo from '../../assets/images/logo.png';
import styles from '../../assets/styles/Commonstyles.js';
import {test} from '../../libraries/MyFunctions.js';
import {api_link} from '../../libraries/MyConfigs.js';
import { set_is_logged,set_user_data } from '../../redux/actions/Actions';


class Login extends Component {
    state = {
        color: 'white',
        show: false,
        msg: "",
        theme: "warning",
        title: "Warning",
        success_login:false,
    }
    temp_user_data={};

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            // is_load_test: false,
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        });
        if (this.state.success_login) {
            if(!this.props.redux_session.is_logged){
                this.props.set_is_logged('set_is_logged', true);
                this.props.set_user_data(
                    'set_user_data',
                    this.temp_user_data
                );
            }
        }
    }
    handleOpen = () => {
        // this.props.set_show_mini_loader(true);
        // var thatssss = this;
        // setTimeout(function(){
        //     thatssss.props.set_show_mini_loader(false);

        //   }, 1000);
        // this.setState({is_load_test:true});
        // return
        if (this.state.usertype == 'carrier') {

        }
        if (this.state.username != '') {
            if (this.state.password != '') {
            } else {
                this.setState({
                    show: true,
                    msg: "Please Enter Password",
                    theme: "warning",
                    title: "Warning!"
                })
                return;
            }
        } else {
            this.setState({
                show: true,
                msg: "Please Enter Username",
                theme: "warning",
                title: "Warning!"
            })
            return;
        }

        // console.log(this.state);
        // console.log("GETTING");
        // .toLowerCase();
        const that = this;
        // http://glgfreight.com/loadboard/api_mobile/common/get
        axios({
            method: 'post',
            url: api_link+'KROD/query_builder',
            data: {
                "select": "*",
                "from": "glg_users",
                "where": {
                    // "username": "admin",
                    "username": this.state.username.toLowerCase(),
                    "other_password": this.state.password.toLowerCase()
                }
            }
          }).then(function (response) {
            // that.props.set_show_mini_loader(false);
            // that.setState({is_load_test:false});
            if (response.data.length>0) {

                that.setState({
                    show: true,
                    msg: "Successfully Login",
                    theme: "success",
                    title: "Success!",
                    success_login: true
                });
                that.temp_user_data = response.data[0];
            } else {
                that.setState({
                    show: true,
                    msg: "Incorrect Username and Password",
                    theme: "warning",
                    title: "Warning!"
                });
            }
        })
        .catch(function (error) {

            // that.setState({is_load_test:false});
            // that.props.set_show_mini_loader(false);
            console.log(error);
            console.log("LAGI ERROR NA LAGI ALAM KO");
        });
    }

    onChangeText = (text) => {
        this.setState({
            color: text
        });
    }

    render(){
      return (
          <View>
              <ImageBackground source={truck_bg} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
                  <View style={{ marginTop: "30%", justifyContent: "center", alignItems: "center" }}>
                      <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100,
                  //  blurRadius: 5
                    }} />
                  </View>
                  <View  style={{justifyContent: "center", alignItems: "center", marginTop: 15}}>
                    <Text style={{color:'white', fontSize:25, fontFamily: 'sans-serif' }}>Login </Text>
                            <TextInput style={styles.text_input} placeholder="Username"  placeholderTextColor="white" onChangeText={text => this.setState({ username: text })}/>
                        <View style={{margin:5}}/>
                            <TextInput style={styles.text_input} placeholder="Password"  placeholderTextColor="white" onChangeText={text => this.setState({ password: text })}/>
                  </View>
                  <View  style={{justifyContent: "center", alignItems: "center", marginTop: 30}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleOpen()}>
                        <Text style={{fontSize:18}}>Log In</Text>
                   </TouchableOpacity>
                  </View>
              </ImageBackground>
          </View>
      );
  }
}


function redux_states_to_props(state){
   // console.log('redux_session  ', state.redux_session)
   // for login button
     // <TouchableOpacity style={styles.button} onPress={()=>{this.handleOpen()}}>
   return {
    // my_config: state.my_config
    redux_session: state.redux_session
       // si MyGlobalReducer kay makit an sa reducers folder
   }
}
function redux_action_function_to_props(dispatch){
   return bindActionCreators({
        // my_actions : my_actions,
        // set_user_data : set_user_data,
        set_is_logged : set_is_logged,
        set_user_data : set_user_data,
   },dispatch);
}
export default connect(redux_states_to_props,redux_action_function_to_props)(Login);
