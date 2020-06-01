import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import axios from 'axios';



// MY Imports
import Screen from './layout/Screen';
import styles from '../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../redux/actions/Actions';// I included ang "index.js"

 class FindTruck extends Component {
	constructor(props){
		super(props);
        this.state = {
            response: [],
            load_id: '',
            origin:'',
            origin_state:'',
            destination:'',
            trailer_type:'',
            date_added:'',
            comments:'',
        };
	}

    componentDidMount() {
        var self = this;

    axios({
        method: 'get',
        url: 'https://glgfreight.com/loadboard_app/api_mobile/Trucks/all_trucks',
      }).then(function (response) {
        console.log("this is a test");
        console.log(response.data);
        self.setState({response: response.data});
    })
    .catch(function (error) {
        console.log(error);
        console.log("LAGI ERROR NA LAGI ALAM KO");
    });
}

    render() {
		console.log("input_sampleString")
        let trucks_details;
        trucks_details = this.state.response.map((data, index)=>{
            return (
                <Card key={index}>
                    <CardItem header style={{backgroundColor:'#05426e' }}>
                     <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                         <View style={{flex:1}}> 
                             <Text style={{fontSize:12, color:'white'}}>{data.origin}</Text>
                             <Text style={{fontSize:15,fontWeight: 'bold', color:'white'}}>{data.origin_state}</Text>
                         </View>
                         <View style={{flex:1}}>
                           <Icon style={styles.arrow_des} type="FontAwesome5" name="arrow-right"/>
                         </View>
                         <View style={{flex:1}}>
                             <Text style={{fontSize:12,color:'white'}}>{data.destination}</Text>
                             <Text style={{fontSize:15,fontWeight: 'bold',color:'white'}}>{data.destination_state}</Text>
                         </View>
                     </View>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                               <View style={{flex: 1,marginBottom:5}}>
                                   <Text style={{fontSize:10}}>Trip Miles</Text>
                                   <Text style={{fontSize:10}}>001</Text>
                               </View>
                               <View style={{flex: 1,marginBottom:5}}>
                                   <Text style={{fontSize:10}}>Trailer Type</Text>
                                   <Text style={{fontSize:10}}>{data.trailer_type}</Text>
                               </View>
                           </View>
                           <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                              <View style={{flex: 1,marginBottom:5}}>
                                  <Text style={{fontSize:10}}>Ship dates</Text>
                                  <Text style={{fontSize:10}}>{data.date_added}</Text>
                              </View>
                              <View style={{flex: 1,marginBottom:5}}>
                                  <Text style={{fontSize:10}}>Comments</Text>
                                  <Text style={{fontSize:10}}>{data.comments}</Text>
                              </View>
                          </View>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress={()=>
Linking.openURL(`tel:094560596098`)}>
                                    <Text style={styles.call_button}>Call Driver</Text>
                                </TouchableOpacity>
                          </View>
                        </Body>
                    </CardItem>
                </Card>
            );
            console.log(response.data.trailer_type);
        });

        return (
                <Screen active_tab="Loads" title="Loads" >
                    <Text style={styles.contentItem}>
						Truck List
                    </Text>
                    <ScrollView>
						<View style={styles.contentBody}>
							{trucks_details}
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

export default connect(reduxStateToProps,reduxActionFunctions)(FindTruck);
