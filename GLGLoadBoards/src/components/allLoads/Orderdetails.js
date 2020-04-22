import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Orderdetails extends Component {
	constructor(props){
		super(props);
        this.state = {
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

    componentDidMount() {
        var self = this;

    axios({
        method: 'get',
        url: 'http://web2.proweaverlinks.com/tech/bwbsafe/backend_web_api/load1.txt',
      }).then(function (response) {
        console.log("this is a test test");
        self.setState({
            trailer_type: response.trailer_type,
            date_available:response.date_available,
            commodity: response.commodity,
            weight: response.weight,
            height:response.height,
            width:response.width,
        });
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
        console.log("LAGI ERROR NA LAGI ALAM KO test");
    });
}

    render() {
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
                                  <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Trailer Type</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.state.trailer_type}</Text>
                                      </View>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Ship Date</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.state.date_available}</Text>
                                      </View>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Commodity</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.state.commodity}</Text>
                                      </View>
                                  </View>
                                   <View style={{flex: 1, flexDirection: 'row', margin:15}}/>
                                  <View style={{flex: 1, flexDirection: 'row', marginLeft:30}}>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Weight</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.state.weight}</Text>
                                      </View>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Height</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.state.height}</Text>
                                      </View>
                                      <View style={{flex:1}}>
                                          <Text style={{fontSize:10}}>Width</Text>
                                          <Text style={{fontSize:15,fontWeight: 'bold'}}>{this.state.width}</Text>
                                      </View>
                                  </View>
                                    <TouchableOpacity>
                                        <Text style={styles.search_button}>Call Brooker</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{fontSize:15, fontWeight: 'bold',marginLeft:75}}>(+96356612)</Text>
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
