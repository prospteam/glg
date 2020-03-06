import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Button, Text, View, Thumbnail, Spinner } from 'native-base';
// import { url } from '../helpers/Helper';
// import logo from '../../assets/images/logo.png';
// import axios from 'axios';
// import { Actions } from 'react-native-router-flux';
// Redux Imports
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { sampleFunction } from '../../actions/index.js';// I included ang "index.js" para di malibog

class Register extends Component{
	constructor(props){
		super(props);
		this.state = {
			fname		:"X",	
			username	:"X",
			lname		:"X",
			password	:"X",
			address		:"X",
			emailadd	:"X",
			cnumber		:"X",
			usertype	:"X",
			mc_number	:"X",
			tax_id		:"X",
			company		:"X",
			register	:"X",
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
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
			fname		:this.state.fname,
			lname		:this.state.username,
			username	:this.state.lname,
			password	:this.state.password,
			address		:this.state.address,
			emailadd	:this.state.emailadd,
			cnumber		:this.state.cnumber,
			usertype	:this.state.usertype,
			mc_number	:this.state.mc_number,
			tax_id		:this.state.tax_id,
			company		:this.state.company,
			register	:"any_value",
		}
		// alert('getting action');
		// console.log("this.prop");
		console.log(this);
		this.props.sampleFunction('', inputs);
		
		
	  
	}
	render(){
		return (
			<ScrollView>
				<View>
					<Text>
						First Name
					</Text>
					<Input 
						placeholder='First Name' 
						value={this.state.first_name} 
						onChangeText={(first_name) => this.setState({first_name:''})} 
					/>
				</View>
				<View>
					<Text>
						Last Name
					</Text>
					<Input 
						placeholder='Last Name' 
						value={this.state.last_name} 
						onChangeText={(last_name) => this.setState({last_name})} 
					/>
				</View>
				<View>
					<Button block onPress={this.handleSubmit} type="submit">
						<Text>
							Register
						</Text>
					</Button>
				</View>
			</ScrollView>
		);
	}
}



function mapStateToProps(state){
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

function mapActionsToDispatch(dispatch){
    return bindActionCreators({
        sampleFunction	: sampleFunction,
    },dispatch)
}
export default connect(mapStateToProps,mapActionsToDispatch)(Register);
