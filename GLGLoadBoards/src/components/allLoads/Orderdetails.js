import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Modal from 'react-native-modal';
import axios from 'axios';

import Screen from '../layout/Screen';
import Mileage from '../mileage/Mileage';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Orderdetails extends Component {
	constructor(props){
		super(props);
        this.state = {
            isModalVisible: false,
            response: [],
            load_id: '',
            origin:'',
            destination:'',
            trailer_type:'',
            date_available:'',
            commodity:'',
            weight:'',
            height:'',
            width:'',
            rate:'',

        };
	}
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    render() {
        console.log(this.props.trailer_type);
        return (
            <Screen>
				<Text style={styles.contentItem}>
					Order Details 1
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                    <Card containerStyle={{ flex:1,backgroundColor:'red',}}>
                        <CardItem header style={{backgroundColor:'#05426e',justifyContent: "center", alignItems: "center"}}>
                            <Text style={{color:'#fff'}}>{this.props.origin} <Icon style={styles.arrow_des} type="FontAwesome5" name="arrow-right"/> {this.props.destination}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <View style={{flex: 1}}>
                            <TouchableOpacity title="Show modal" onPress={this.toggleModal}>
                                <Text style={styles.call_button}><Icon style={styles.send_rate} type="FontAwesome5" name="star"/> Send a Rate</Text>
                            </TouchableOpacity>
                              <Modal isVisible={this.state.isModalVisible} style={{margin:0, justifyContent: "center", alignItems: "center", borderRadius:5}}>
                                <View style={{backgroundColor:'#ffffff', padding:'5%'}}>
                                  <Text style={{color:'#00000'}}>Send a Rate To Broker</Text>
                                   <View style={{borderBottomColor: '#e5e5e5',borderBottomWidth: 1}}/>
                                   <View style={{margin:10}}/>
                                  <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View>
                                          <Text style={{fontSize:10}}>Rate:</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#d6d6d6" placeholder="Enter Your Rate"/>
                                      </View>
                                      <View  style={{margin:2}}/>
                                      <View>
                                          <Text style={{fontSize:10}}>Contact Name:</Text>
                                          <TextInput style={styles.text_input_edit} placeholderTextColor="#d6d6d6"  placeholder="Enter Your Contact Number" />
                                      </View>
                                  </View>
                                   <View style={{margin:10}}/>
                                   <TouchableOpacity title="Hide modal" onPress={this.toggleModal}>
                                       <Text style={styles.send_rate_email}>Send Email</Text>
                                   </TouchableOpacity>
                                </View>
                              </Modal>
                            </View>
                            <View style={{margin:10}} />
                                <View style={{
                                        height:200,
                                        width:'100%',
                                        backgroundColor:'red',
                                    }}>
                                    <Mileage props={{
                                                origin:this.props.origin+',+USA',
                                                destination:this.props.destination+',+USA'
                                        }}/>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Trailer Type</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.props.trailer_type}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Ship Date</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.props.date_available}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Commodity</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.props.commodity}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', margin:15}}/>
                                <View style={{flex: 1, flexDirection: 'row', marginLeft:30}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Weight</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.props.weight}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Height</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.props.height}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Width</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.props.width}</Text>
                                    </View>
                                </View>
                                <View style={{marginBottom: '10%'}} />


                                <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                    <View style={{flex:1}}>
                                        <TouchableOpacity>
                                            <Text style={styles.call_button}>Call Brooker</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={styles.findtruck_button}>Find Truck</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{fontSize:15, fontWeight: 'bold',marginLeft:15}}>(+96356612)</Text>
                                </View>
                            </Body>
                        </CardItem>
                            <CardItem footer style={{backgroundColor:'#05426e' }}>
                            <View style={{flex: 1, flexDirection: 'column',justifyContent: "center", alignItems: "center"}}>
                                <View>
                                    <Text style={{color:'white'}}>Comments: </Text>
                                </View>
                                <View style={{marginBottom:5}}>
                                    <Text style={{color:'white'}}>{this.props.comments}</Text>
                                </View>
                            </View>
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
    console.log('redux staettt', state.redux_session.user_data.user_type)
    return {
		redux_state: state.redux_state,
		redux_session: state.redux_session
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

export default connect(reduxStateToProps,reduxActionFunctions)(Orderdetails);
