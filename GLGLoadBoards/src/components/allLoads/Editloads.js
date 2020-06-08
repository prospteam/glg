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

 class Editloads extends Component {
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
            axios.post('https://glgfreight.com/loadboard_app/api_mobile/Loads/edit_loads', {
                load_id: this.props.load_id,
                origin: this.state.origin,
                destination: this.state.destination,
                date_available: this.state.date_available,
                trailer_type: this.state.trailer_type,
                length: this.state.length,
                width: this.state.width,
                rate: this.state.rate,
                commodity: this.state.commodity,
                reference_number: this.state.reference_number,
                comments: this.state.comments,
                bornforyou: "born to be wild",
            }).then(function (response) {

                if (response.data.status == 'ok'){
                    <SCLAlert
                        show={this.props.redux_state.show_alert}
                        theme="success"
                        title="Success"
                        subtitle="Edit Successfully"
                    />
                }else {
                    <SCLAlert
                        show={this.props.redux_state.show_alert}
                        theme="warning"
                        title="Warning"
                        subtitle="Please check your fields"
                    />
                }
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
        console.log(this.props.load_id);
        return (
            <Screen>
				<Text style={styles.contentItem} defaultValue = {this.props.load_id}>
					Edit Loads
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                            <Card defaultValue = {this.props.load_id}>
                            <CardItem header style={{backgroundColor:'#05426e',justifyContent: "center", alignItems: "center"}}>
                                <Text defaultValue = {this.props.load_id}  style={{color:'#fff'}}>Edit Loads</Text>
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
                                          <Text style={{fontSize:10}}>Destination</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.destination} onChangeText={text => this.setState({ destination: text })}/>
                                      </View>
                                  </View>
                                    <View  style={{marginBottom:15}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Date Available</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.date_available}  onChangeText={text => this.setState({ date_available: text })}/>
                                      </View>
                                  </View>
                                      <View  style={{marginBottom:15}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Trailer Type</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.trailer_type} onChangeText={text => this.setState({ trailer_type: text })}/>
                                      </View>
                                  </View> 
                                      <View  style={{marginBottom:15}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>length</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.length} onChangeText={text => this.setState({ length: text })}/>
                                      </View>
                                      <View style={{margin:2}}/>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Width</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.width} onChangeText={text => this.setState({ width: text })}/>
                                      </View>
                                  </View>
                                      <View  style={{marginBottom:15}}/>
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                        <View  style={{margin:2}}/>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Commodity</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.commodity} onChangeText={text => this.setState({ commodity: text })}/>
                                      </View>
                                            <View  style={{margin:2}}/>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Ref. Number</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.reference_number} onChangeText={text => this.setState({ reference_number: text })}/>
                                      </View>
                                  </View>
                                      <View  style={{marginBottom:15}}/>
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

export default connect(reduxStateToProps,reduxActionFunctions)(Editloads);
