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
        // if(this.props.redux_session.is_logged){
        //     this.props.set_is_logged('set_is_logged', false);
        // }

        // console.log("api_link");
        // console.log(api_link);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        });
        // console.log("this.temp_user_data");
        // console.log(this.temp_user_data);
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
                    "username": "admin",
                    // "username": this.state.username.toLowerCase(),
                    // "password": this.state.password.toLowerCase()
                }
            }
          }).then(function (response) {

            // let data = {
            //     state:'isLoggedIn'
            // }
            // if (response.data.userdata.user_type == "shipper") {
            //     that.props.login_true_false('SET_TRUE_FALSE', data);
            //     Actions.Loads();
            //     // Actions.Dashboard();

            // } else if (response.data.userdata.user_type == "carrier") {
            //     Actions.carrierDashboard();
            // } else {
            //     Actions.Loads();
            //     // Actions.Dashboard();
            // }

            if (response.data.length>0) {

                // console.log("responseXd");
                // console.log(response.data[0].user_id);
                // console.log(response.data.length);

                that.setState({
                    show: true,
                    msg: "Successfully Login",
                    theme: "success",
                    title: "Success!",
                    success_login: true
                });

                that.temp_user_data = response.data[0];

                // Actions.Loads()
                // Actions.Dashboard()
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
                            subtitle={this.state.subtitle}
                        >
                        <SCLAlertButton theme="default" onPress={this.handleClose}>OK</SCLAlertButton>
                        </SCLAlert>
                        <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
                        <TextInput style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Name" returnKeyLabel={"next"} onChangeText={text => this.setState({ username: text })} />
                        <TextInput secureTextEntry={true} style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Password" returnKeyLabel={"next"} onChangeText={text => this.setState({ password: text })} />
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
        set_user_data : set_user_data
    },dispatch);
 }

export default connect(redux_states_to_props,redux_action_function_to_props)(Login);
