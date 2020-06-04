import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import styles from '../../assets/styles/CommonStyles';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Addtrucks extends Component {
	constructor(props){
		super(props);
        this.state = {
            load_id:'',
            origin: '',
            origin_state:'',
            destination_state:'',
            destination:'',
            date_available:'',
            trailer_type:'',
            comments:'',
                color: 'white',
                show: false,
                msg: "",
                theme: "success",
                title: "success",
                edit_success: false,
        };
	}
    handleClose = () => {
        this.setState({
            show: false
        });

        if (this.state.edit_success) {
            this.setState({
                show: true,
                msg: "Please Enter Password",
                theme: "success",
                title: "Success!"
            })
            return;
        }
    }
        _handlePress() {
          axios.post('https://glgfreight.com/loadboard_app/api_mobile/Trucks/addtrucks', {
                origin: this.state.origin,
                destination: this.state.destination,
                trailer_type: this.state.trailer_type,
                date_available: this.state.date_available,
                comments: this.state.comments,
                bornforyou: "born to be wild",
            }).then(function (response) {
                console.log("______________________");
                console.log("______________________");
                console.log(response);
                console.log("______________________");
                console.log("______________________");
                alert('success');
            }).catch(function (err) {
                console.log(err);
                    alert('TOO MANY ERRORS');
            });

        }
    render() {

        return (
            <Screen>
                <ScrollView>
                <View style={styles.contentBody}>
                            <Card>
                            <CardItem header style={{backgroundColor:'#05426e',justifyContent: "center", alignItems: "center"}}>
                                <Text style={{color:'#fff'}}>Add Trucks</Text>
                            </CardItem>
                            <CardItem>
                            <Body>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Origin</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ origin: text })}/>
                                      </View>
                                  </View>
                                  <View style={{margin:8}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Destination</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ destination: text })}/>
                                      </View>
                                  </View>
                                  <View style={{margin:8}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Trailer Type</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ trailer_type: text })}/>
                                      </View>
                                  </View>
                                  <View style={{margin:8}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Date Available</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ date_available: text })}/>
                                      </View>
                                  </View>
                                  <View style={{margin:8}}/>
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
                                              onChangeText={text => this.setState({ comments: text })}
                                            />
                                      </View>
                                  </View>
                                   <View style={{flex: 1, flexDirection: 'row', margin:15}}/>
                                    <TouchableOpacity onPress={() => this._handlePress()}>
                                        <Text style={styles.call_button}>Submit</Text>
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

export default connect(reduxStateToProps,reduxActionFunctions)(Addtrucks);
