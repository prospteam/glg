import React, { Component } from 'react';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body  } from 'native-base';
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString } from '../../actions/Actions';// I included ang "index.js" 

 class SampleComponent extends Component {
	constructor(props){
		super(props);
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
		// console.log(this.props.reduxState.sampleString)

        return (
			<Screen>
				<Text style={styles.contentItem}>
					Sub Title
				</Text>
				
				<Card style={styles.contentItem}>
					<CardItem header>
						<Text>Sample Redux State Call</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text>
							reduxState.sampleString={this.props.reduxState.sampleString}
							</Text>
						</Body>
					</CardItem>
				</Card>
				<Card style={styles.contentItem}>
					<CardItem header>
						<Text>Sample Redux Function Call</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Icon active name='home' />
								<Input
									placeholder="Input text..." 
									onChangeText={
										(text) => this.setState(
											{input_sampleString:text}
											)
										}
									defaultValue={this.state.input_sampleString}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button onPress={() => this.submit_sampleString()}>
								<Text>Update</Text>
							</Button>
						</Body>
					</CardItem>
				</Card>
			</Screen>
		)
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
    // const reduxState = (state) => {
    console.log('redaux stae  ', state)
    return {
		reduxState: state.MyGlobalReducer
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_sampleString : set_sampleString
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(SampleComponent);

