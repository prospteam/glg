import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Picker } from 'native-base';
import axios from 'axios';
// MY IMPORTS
import bg_image from '../../assets/images/bg_image.png';
import logo from '../../assets/images/logo.png';

// Redux Imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register_action } from '../../redux/actions/Actions.js';// I included ang "index.js" para di malibog
import RNPickerSelect from 'react-native-picker-select';

const Item = Picker.Item;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            username: "",
            last_name: "",
            password: "",
            address: "",
            email: "",
            contact_number: "",
            user_type: "",
            mc_number: "",
            tax_id: "",
            company: "",
            register: "",
            fk_userid:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        console.log('rgister mounted');
        console.log(this.state);
    }
    handleSubmit(e) {
        e.preventDefault();

        //Alert.alert('hi'+this.state.first_name);
        //console.log('hi');
        //console.log(this.state);

        // 		Array
        // 			(
        // 				[first_name] => John
        // 				[username] => tcarrier2
        // 				[last_name] => Test Smith
        // 				[password] => password
        // 				[address] => Test
        // 				[email] => asd@asd.asd
        // 				[contact_number] => 0945609
        // 				[usertype] => carrier
        // 				[mc_number] => 123
        // 				[tax_id] => 123
        // 				[company] => Test
        // 				[register] =>
        // )

        const inputs = {
            first_name: this.state.first_name,
            last_name: this.state.username,
            username: this.state.last_name,
            password: this.state.password,
            address: this.state.address,
            email: this.state.email,
            contact_number: this.state.contact_number,
            mc_number: this.state.mc_number,
            tax_id: this.state.tax_id,
            company: this.state.company,
            register: "any_value",
        }
        console.log( this.props.redux_session.user_data.user_id);

        // alert('getting action');
        // console.log("this.prop");
        console.log(this);
        console.log('Start');
         axios.post(this.props.my_config.api_link +'/KROD/register',inputs)
        //  axios.post(this.props.my_config.api_link +'/login/register/yes',inputs)
            .then(res => {
                console.log(res.data);
                if (res.data.status == "success") {
                    alert('Success: ' + res.data.message);
                }else{
                    alert('Error: ' + res.data.message);
                }
                console.log('End2');
            })
            .catch(err => {
                console.log({status_:'error',err});
                alert('Error in API connection');
                console.log('End2');
            });
        console.log('End');
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'blue'}}>
                <ImageBackground source={bg_image} style={{ width: '100%', flex:1 }}>
                    <ScrollView style={{flex:1}} >
                        <View style={{ marginTop: "8%", justifyContent: "center", alignItems: "center" }}>
                            <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100 }} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center",flex:1  }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>Register</Text>
                            <TextInput
                                style={styles.InputRegister}
                                placeholderTextColor="#fff"
                                placeholder="First Name"
                                onChangeText={first_name => this.setState({ first_name})}
                                value={this.state.first_name}
                            />
                            <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Last Name"
                                onChangeText={last_name => this.setState({ last_name })}
                                value={this.state.last_name}
                            />
                            <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Username"
                            autoCapitalize = 'none'
                            autoCompleteType="username"
                            textContentType="username"
                                onChangeText={username => this.setState({ username })}
                                value={this.state.username}
                            />
                            <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Password"
                            autoCapitalize = 'none'
                            autoCompleteType="password"
                            textContentType="password"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            />
                            {/* <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Address"
                                onChangeText={address => this.setState({ address })}
                                value={this.state.address}
                            /> */}
                            <TextInput style={styles.InputRegister}
                            autoCompleteType="tel"
                            textContentType="telephoneNumber"
                            keyboardType="phone-pad"
                            placeholderTextColor="#fff" placeholder="Contact Number"
                                onChangeText={contact_number => this.setState({ contact_number })}
                                value={this.state.contact_number}
                            />
                            <TextInput style={styles.InputRegister}
                            autoCompleteType="email"
                            textContentType="emailress"
                            placeholderTextColor="#fff" placeholder="Email Address"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            />
                            {/* <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="shipper/carrier"
                                onChangeText={usertype => this.setState({ usertype })}
                                value={this.state.usertype}
                            /> */}
                            <View style={{
                                ...styles.InputRegister,
                                // 'textAlign':'center',
                                justifyContent:'center',
                                }}>
                                <RNPickerSelect
                                    placeholder={{
                                        label: 'Register as.',
                                        value: null,
                                    }}
                                    // useNativeAndroidPickerStyle={false}
                                    onValueChange={(value) => this.setState({user_type:value})}
                                    items={[
                                        { label: 'Truck Owner/Carrier', value: 'carrier' },
                                        { label: 'Shipper', value: 'shipper' },
                                    ]}
                                />
                            </View>
                            <TouchableOpacity onPress={this.handleSubmit}>
                                <Text style={styles.btnlogin}>Register</Text>
                            </TouchableOpacity>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity><Text style={{ color: "#fff" }}>Already a Member? Login Here</Text></TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    InputRegister: {
        borderWidth: 2,
        width: '70%',
        height: 40,
        margin: 2,
        color: "#fff",
        borderColor: "#009688",
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: "#164367"
    },
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
        fontWeight: 'bold',
    }
});



function mapStateToProps(state) {
    // const reduxState = (state) => {
    console.log('redaux stae from lgin ', state)
    return {
        my_config: state.my_config
    }
}

// const mapActionsToDispatch = dispatch => {
// return {
// sampleFunction	: () => dispatch(sampleFunction('','')),
// }
// }

function mapActionsToDispatch(dispatch) {

    return bindActionCreators({
        register_action: register_action,
    }, dispatch)

}

export default connect(mapStateToProps, mapActionsToDispatch)(Register);
