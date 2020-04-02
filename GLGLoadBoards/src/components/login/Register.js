import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Picker } from 'native-base';

// MY IMPORTS
import bg_image from '../../assets/images/bg_image.png';
import logo from '../../assets/images/logo.png';

// Redux Imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sampleFunction } from '../../actions/Actions.js';// I included ang "index.js" para di malibog

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
        this.props.sampleFunction('', inputs);
    }

    render() {
        return (
         <ScrollView >
            <View>
                <ImageBackground source={bg_image} style={{ width: '100%', height: '100%' }}>
                    <View style={{ marginTop: "8%", justifyContent: "center", alignItems: "center" }}>
                        <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100 }} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                        <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="User Name"
                            onChangeText={username => this.setState({ username })}
                            value={this.state.username}
                        />
                        <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Password"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                        <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Address"
                            onChangeText={address => this.setState({ address })}
                            value={this.state.address}
                        />
                        <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Contact Number"
                            onChangeText={cnumber => this.setState({ cnumber })}
                            value={this.state.cnumber}
                        />
                        <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="Email Address"
                            onChangeText={emailadd => this.setState({ emailadd })}
                            value={this.state.emailadd}
                        />
                        <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="shipper/carrier"
                            onChangeText={usertype => this.setState({ usertype })}
                            value={this.state.usertype}
                        />
{
                        // <Picker
                        //     mode='dropdown'
                        //     selectedValue={this.state.usertype}
                        //     onValueChange={fname => this.setState({ fname })}>
                        //     <Item label='Cats' value='key0' />
                        //     <Item label='Dogs' value='key1' />
                        //     <Item label='Birds' value='key2' />
                        //     <Item label='Elephants' value='key3' />
                        // </Picker>
                        }
                        <TouchableOpacity onPress={this.handleSubmit}>
                            <Text style={styles.btnlogin}>Register</Text>
                        </TouchableOpacity>

                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity><Text style={{ color: "#fff" }}>Already a Member? Login Here</Text></TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
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
        // Reducer: state.Reducer
    }
}

// const mapActionsToDispatch = dispatch => {
// return {
// sampleFunction	: () => dispatch(sampleFunction('','')),
// }
// }

function mapActionsToDispatch(dispatch) {

    return bindActionCreators({
        sampleFunction: sampleFunction,
    }, dispatch)

}

export default connect(mapStateToProps, mapActionsToDispatch)(Register);
