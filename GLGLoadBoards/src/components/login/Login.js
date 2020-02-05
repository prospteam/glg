import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import bg_image from '../../assets/images/bg_image.png';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

export default class App extends Component {
  
    state = {
        color: 'white',
    }
    constructor(props){
        super(props)
        
        this.state = {
            username: '',
            password: '',
        }
    }

    _simpleAlertHandler = () => {
        // console.log(this.state.username);
        // console.log(this.state.password);
        
        console.log("GETTING");
     
        axios.post('http://glgfreight.com/loadboard/login/index/yes', {
            username:this.state.username ,
            password: this.state.password,
            login:'login'
          })
        .then(function (response) {
            console.log(response.data);
            // if(response.data.John=="XDXDxxx"){
            //     console.log("SUccess");
            // }else{
            //     console.log("failed");
            // }
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
                        <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
                        <TextInput style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Name" returnKeyLabel = {"next"} onChangeText={text => this.setState({username : text})} />
                        <TextInput style={{ borderWidth: 2, margin: 10, width: '70%', color: "#fff", borderColor: "#009688", textAlign: 'center', borderRadius: 5, backgroundColor: "#164367" }} placeholderTextColor="#fff" placeholder="Enter Password" returnKeyLabel = {"next"} onChangeText={text => this.setState({password : text})} />
                        <TouchableOpacity onPress={() => this._simpleAlertHandler()}>
                            <Text style={styles.btnlogin}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: "5%", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity><Text style={{ color: "#fff", margin: 10 }}>No Account? Register Here</Text></TouchableOpacity>
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

