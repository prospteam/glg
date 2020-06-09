import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Picker } from 'native-base';

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
            fname: "",
            username: "",
            lname: "",
            password: "",
            address: "",
            emailadd: "",
            cnumber: "",
            usertype: "",
            mc_number: "",
            tax_id: "",
            company: "",
            register: "",
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
        // 				[fname] => John
        // 				[username] => tcarrier2
        // 				[lname] => Test Smith
        // 				[password] => password
        // 				[address] => Test
        // 				[emailadd] => asd@asd.asd
        // 				[cnumber] => 0945609
        // 				[usertype] => carrier
        // 				[mc_number] => 123
        // 				[tax_id] => 123
        // 				[company] => Test
        // 				[register] =>
        // )

        const inputs = {
            fname: this.state.fname,
            lname: this.state.username,
            username: this.state.lname,
            password: this.state.password,
            address: this.state.address,
            emailadd: this.state.emailadd,
            cnumber: this.state.cnumber,
            usertype: this.state.usertype,
            mc_number: this.state.mc_number,
            tax_id: this.state.tax_id,
            company: this.state.company,
            register: "any_value",
        }

        // alert('getting action');
        // console.log("this.prop");
        console.log(this);
        console.log('Start');
         axios.post(this.props.my_config.api_link +'/KROD/query_builder',inputs)
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
                                onChangeText={fname => this.setState({ fname})}
                                value={this.state.fname}
                            />
                            <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Last Name"
                                onChangeText={lname => this.setState({ lname })}
                                value={this.state.lname}
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
                                onChangeText={cnumber => this.setState({ cnumber })}
                                value={this.state.cnumber}
                            />
                            <TextInput style={styles.InputRegister} 
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            placeholderTextColor="#fff" placeholder="Email Address"
                                onChangeText={emailadd => this.setState({ emailadd })}
                                value={this.state.emailadd}
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
                                    onValueChange={(value) => this.setState({usertype:value})}
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
