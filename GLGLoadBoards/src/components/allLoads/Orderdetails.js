import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Orderdetails extends Component {
	constructor(props){
		super(props);
		// this.props.set_is_logged('set_is_logged',false);
		this.state = {
			input_sampleString: "",
		}
	}
	submit_sampleString(){
		alert();
		this.props.set_sampleString('set_sampleString',this.state.input_sampleString);
	}
    render() {
		console.log("input_sampleString")
		console.log(this.state)
		// console.log("this.props")
		// console.log(this.props.redux_state.sampleString)

        return (
            <Screen>
				<Text style={styles.contentItem}>
					Order Details
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                        <Card>
                            <CardItem header style={{backgroundColor:'#05426e',justifyContent: "center", alignItems: "center"}}>
                                <Text style={{color:'#fff'}}>Hillboro - Phoenix</Text>
                            </CardItem>
                            <CardItem>
                            <Body>
                                  <View style={{flex: 1, flexDirection: 'row'}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Trailer Type</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>C</Text>
                                      </View>
                                  </View>
                                  <View style={{flex: 1, flexDirection: 'row'}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Ship Date</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>Dec 2, 2020</Text>
                                      </View>
                                  </View>
                                  <View style={{flex: 1, flexDirection: 'row'}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Commodity</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>Lumber</Text>
                                      </View>
                                  </View>
                                    <TouchableOpacity>
                                        <Text style={styles.search_button}>Call Brooker</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{fontSize:15, fontWeight: 'bold', marginBottom:10}}>(+96356612)</Text>
                                    </View>
                                </Body>
                            </CardItem>
                                <CardItem footer style={{backgroundColor:'#05426e' }}>
                                <View style={{flex: 1, flexDirection: 'column',justifyContent: "center", alignItems: "center"}}>
                                    <View>
                                        <Text style={{color:'white'}}>Comment</Text>
                                    </View>
                                    <View style={{marginBottom:5}}>
                                        <Text style={{color:'white'}}>Arrive Time: 04:45 PM</Text>
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

export default connect(reduxStateToProps,reduxActionFunctions)(Orderdetails);
