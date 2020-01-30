import React, { Component } from 'react';
import { StyleSheet , Image, ScrollView } from 'react-native';
import { Item, Input, Button ,Text, View } from 'native-base';
import logo from '../../assets/images/logo.png';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export default class ResetPasswordValidation extends Component {
    constructor(props){
        super(props);
        this.state = {
            Code: '',
            Email: '',
            errMsg: '',
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const inputs = {
            Code        :  this.state.Code,
            Email        :  this.state.Email,
        }
         this.onSubmit(inputs);
    }

    onSubmit (data){
        const api = 'http://192.168.1.20/maxi/backend_web_api/apis/validationcodecheck';
        const bodyFormData  =  new FormData();

        for(var i  = 0; i  < Object.keys(data).length; i++){
                bodyFormData.append(Object.keys(data)[i],this.state[Object.keys(data)[i]]);
        }
        axios({
            method  : 'post',
            url     : api,
            data    : bodyFormData,
            config  : { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then((res) => {
            this.setState( {errMsg: res.data.message} );

            if(res.data.response_status == true){
                this.props.navigation.navigate('ResetPassword');
            }
        });
    }

    render() {

        return (
            <ScrollView style= {{ marginBottom: '10%'}} >
                <View style={styles.container}>
                    <View style={{height:100}}></View>
                    <View style  ={styles.image}>
                        <Image source ={logo} />
                    </View>

                    <View>
                        <Text style={styles.heading}>Enter Code</Text>

                        <Text style={{marginBottom: 20}}>Confirm your email address and the six-digit code we have sent via email to reset your password.</Text>

                        { this.state.errMsg != '' ? (
                            <Text style={styles.errorMessage}> {this.state.errMsg} </Text>
                        ) : null  }

                        <Item style={styles.inputs}>
                            <Input placeholder='name@domain.com' value={this.state.Email} normalizeFontSize={false}  onChangeText={(Email) => this.setState({Email})}/>
                        </Item>

                        <Item style={styles.inputs}>
                            <Input placeholder='######' value={this.state.Code} normalizeFontSize={false}  onChangeText={(Code) => this.setState({Code})}/>
                        </Item>

                        {/* <View style={styles.centerText}>
                            <Text style={{color:'#3885B6'}} onPress={() => this.props.navigation.navigate('Login')}>Resend Code</Text>
                        </View> */}

                        <Button block  onPress={this.handleSubmit}  type="submit" style={styles.loginBtn}>
                            <Text>Confirm</Text>
                        </Button>
                        <Text style={{color:'#3885B6', marginRight:'20%'}} onPress={() => this.props.navigation.navigate('Login')}>Return to Login</Text>
                    </View>
                </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        width: '100%', justifyContent: 'center', alignItems: 'center'
    },
    heading: {
        fontSize: 24,
        color: '#910506',
        marginBottom: 10
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    errorMessage:{
        backgroundColor: '#dd4b39',
        padding: 7,
        marginBottom: 10,
        color: '#fff'
    },
    container: {
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: 'center',

    },
    inputs:{
        borderColor: 'gray',
        borderLeftWidth:0.5 ,
        borderRightWidth:0.5 ,
        borderBottomWidth:0.5 ,
        borderTopWidth:0.5 ,
        borderRadius:3,
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    loginBtn:{
        marginTop:'8%',
        marginBottom:'5%',
        backgroundColor: '#910506',
        borderRadius:3,
    }

});
