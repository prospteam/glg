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

 class Loads extends Component {
	constructor(props){
		super(props);
        this.state = {
            response: [],
            load_id: '',
            origin:'',
            destination:'',
            trailer_type:'',
            rate:'',
            length:'',
            width:'',
            height:'',
            weight:'',
            date_available:'',
            comments:'',
            category:'',
            carrier_id:'',
            shipper_id:'',
            deleted_status:'',
            origin_state:'',
            destination_state:'',
            delivery_date:'',
            date_added:'',
            commodity:'',
            reference_number:'',
        };
	}

    componentDidMount() {
        var self = this;

        // axios.get('http://glgfreight.com/loadboard/api_mobile/loads/all_loads')

        // .then((response)=>{
        //     console.log(response);
        //     self.setstate({response:response.data});
        // });

        axios({
            method: 'get',
            url: 'http://web2.proweaverlinks.com/tech/bwbsafe/backend_web_api/loads.txt',
        })
        .then(function (response) {
            console.log("responseXd");
            console.log(response.data);
            self.setstate({response:response.data});
        })
        .catch(function (error) {
            console.log(error);
            console.log("LAGI ERROR NA LAGI ALAM KO");
        });
    }

    render() {

		console.log("input_sampleString")

        return (
			<Screen>
				<Text style={styles.contentItem}>
					Load Search
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                    
                    <View>    
                        {this.state.response.map(r => <Text>XD{r}</Text>)}    
                    </View>

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

export default connect(reduxStateToProps,reduxActionFunctions)(Loads);
