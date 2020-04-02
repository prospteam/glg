// Dependencies di ka kaya kung wala siya
import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
// import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import bg_image from '../../assets/images/bg_image.png';
import logo from '../../assets/images/logo.png';
import axios from 'axios';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login_true_false } from '../../actions/index.js';
// I included ang "index.js" para di malibog
// import { sampleFunction2 } from '../../actions/index.js';// I included ang "index.js" para di malibog

class Login extends Component {
    state = {
        color: 'white',
        show: false,
        msg: "",
        theme: "warning",
        title: "Warning"
    }

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }

    }

    handleClose = () => {
        this.setState({
            show: false
        })
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

        console.log("GETTING");

        const that = this;

        axios.post('http://glgfreight.com/loadboard/login/index/yes', {
            username: this.state.username,
            password: this.state.password,
            login: 'login'
        }).then(function (response) {
            let data = {
                state:'isLoggedIn'
            }
            if (response.data.userdata.user_type == "shipper") {
                that.props.login_true_false('SET_TRUE_FALSE', data);
                Actions.Dashboard();

            } else if (response.data.userdata.user_type == "carrier") {
                Actions.carrierDashboard();
            } else {
                Actions.Dashboard();
            }
            if (response.data.status == "success") {
                that.setState({
                    show: true,
                    msg: "Successfully Login",
                    theme: "success",
                    title: "Success!"
                });
                Actions.Dashboard()
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
        });
    }

    onChangeText = (text) => {
        this.setState({
            color: text
        });
    }

    render() {
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
                        <TextInput style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Name" returnKeyLabel={"next"} onChangeText={text => this.setState({ username: text })} />
                        <TextInput secureTextEntry={true} style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Password" returnKeyLabel={"next"} onChangeText={text => this.setState({ password: text })} />
                        <TouchableOpacity onPress={() => this.handleOpen()}>
                            <Text style={styles.btnlogin}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: "5%", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={() => Actions.Register()}><Text style={{ color: "#fff", margin: 10 }}>No Account? Register Here</Text></TouchableOpacity>
                            <Text style={{ color: "#fff", margin: 10 }}>Forgot Password? </Text>
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


 function login_true_false_dispachcer(dispatch){
    return bindActionCreators({
        login_true_false : login_true_false
    },dispatch);
 }

export default connect(null,login_true_false_dispachcer)(Login);
