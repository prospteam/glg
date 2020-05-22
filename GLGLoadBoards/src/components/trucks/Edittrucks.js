import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Edittrucks extends Component {
	constructor(props){
		super(props);
        this.state = {
            origin: '',
            destination:'',
            date_available:'',
            trailer_type:'',
            length:'',
            width:'',
            rate:'',
            commodity:'',
            reference_number:'',
            comments:'',
        };
	}
        _handlePress() {
            // console.log(this.state.origin);
            // console.log(this.state.destination);
            // console.log(this.state.trailer_type);
            // console.log(this.state.date);
            // console.log(this.state.commodity);
            // console.log(this.state.reference_number);

            axios.post('https://glgfreight.com/loadboard_app/api_mobile/Loads/edit_loads', {
                load_id: this.state.load_id,
                origin: this.state.origin,
                destination: this.state.destination,
                date_available: this.state.date_available,
                trailertype: this.state.trailertype,
                length: this.state.length,
                width: this.state.width,
                rate: this.state.rate,
                commodity: this.state.commodity,
                reference_number: this.state.reference_number,
                comments: this.state.comments,
            }).then(function (response) {
                console.log(response);
                console.log("________________________________________");
                alert('success');
            }).catch(function (err) {
                console.log(err);
                    alert('TOO MANY ERRORS');

            });
        }
    render() {
        console.log(this.props.origin);
        return (
            <Screen>
				<Text style={styles.contentItem}>
					Edit Trucks
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                        <Card>
                            <CardItem header style={{backgroundColor:'#05426e',justifyContent: "center", alignItems: "center"}}>
                                <Text defaultValue = {this.props.load_id}  style={{color:'#fff'}}>Edit Trucks</Text>
                            </CardItem>
                            <CardItem>
                            <Body>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Origin</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.origin} onChangeText={text => this.setState({ origin: text })}/>
                                      </View>
                                      <View  style={{margin:2}}/>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Origin State</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.origin_state} onChangeText={text => this.setState({ destination: text })}/>
                                      </View>
                                  </View>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Date Available</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.date_available}  onChangeText={text => this.setState({ date_available: text })}/>
                                      </View>
                                  </View>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Trailer Type</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.trailer_type} onChangeText={text => this.setState({ trailer_type: text })}/>
                                      </View>
                                  </View>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Comments</Text>
                                          <TextInput
                                              style={styles.textArea}
                                              underlineColorAndroid="transparent"
                                              placeholder="Type something"
                                              placeholderTextColor="grey"
                                              numberOfLines={10}
                                              multiline={true}
                                              defaultValue = {this.props.comments}
                                              onChangeText={text => this.setState({ reference_number: text })}
                                            />
                                      </View>
                                  </View>
                                   <View style={{flex: 1, flexDirection: 'row', margin:15}}/>
                                    <TouchableOpacity onPress={() => this._handlePress()}>
                                        <Text style={styles.call_button}>Update</Text>
                                    </TouchableOpacity>
                                </Body>
                            </CardItem>
                        </Card>
                </View>
                </ScrollView>
			</Screen>
		)
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
    // const reduxState = (state) => {
    // console.log('redaux stae  ', state)
    return {
		redux_state: state.redux_state
		// si MyGlobalReducer kay makit an sa reducers folder
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Edittrucks);
