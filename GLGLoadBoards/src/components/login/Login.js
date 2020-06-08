// Dependencies di ka kaya kung wala siya
import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
// import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import Icon from 'react-native-vector-icons/FontAwesome5';

import bg_image from '../../assets/images/bg_image.png';
import logo from '../../assets/images/logo.png';
import {api_link} from '../../libraries/MyConfigs.js';

// REDUX imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged,set_user_data,set_show_mini_loader } from '../../redux/actions/Actions';

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

    render() {
        // console.log('redux_session22');
        // console.log(this.props.redux_session);
        // console.log("this.state.is_load_test");
        // console.log(this.state.is_load_test);
        return (
            <View>
                <ImageBackground source={bg_image} style={{ width: '100%', height: '100%' }}>
                    <View style={{ marginTop: "30%", justifyContent: "center", alignItems: "center" }}>
                        <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100 }} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <SCLAlert
                            show={this.state.show}
                            onRequestClose={this.handleOpen}
                            theme={this.state.theme}
                            title={this.state.title}
                            subtitle={this.state.msg}
                        >
                        <SCLAlertButton theme="default" onPress={this.handleClose}>OK</SCLAlertButton>
                        </SCLAlert>
                        <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
                        <TextInput 
                            style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} 
                            placeholderTextColor="#fff" 
                            placeholder="Enter Username" 
                            returnKeyLabel={"next"} 
                            onChangeText={text => this.setState({ username: text })} 
                            autoCapitalize = 'none'
                        />
                        <TextInput  secureTextEntry={true} style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Password" returnKeyLabel={"next"} onChangeText={text => this.setState({ password: text })} />
                        <TouchableOpacity onPress={() => this.handleOpen()}>
                            <Text style={styles.btnlogin}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: "5%", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={() => Actions.Register()}><Text style={{ color: "#fff", margin: 10 }}>No Account? Quick Register Here</Text></TouchableOpacity>
                            {/* <Text style={{ color: "#fff", margin: 10 }}>Forgot Password? </Text> */}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnlogin: {
        backgroundColor: '#fff',
        color: '#000',
        margin: 10,
        fontSize: 15,
        borderRadius: 20,
        height: 30,
        width: 100,
        textAlign: 'center',
        padding: 4,
        fontWeight: 'bold'
    }
});


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
        set_user_data : set_user_data,
        set_show_mini_loader : set_show_mini_loader
    },dispatch);
 }

export default connect(redux_states_to_props,redux_action_function_to_props)(Login);
