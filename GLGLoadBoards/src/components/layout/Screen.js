import React, { Component } from 'react';
import { SafeAreaView,ScrollView   } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import styles from '../../assets/styles/CommonStyles';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {set_is_logged} from '../../redux/actions/Actions';

 class Screen extends Component {
    constructor(props) {
		super(props)
    }

    end_session() {
        this.props.set_is_logged('set_is_logged',false);
	}
	//TEst
    render() {
		const { active_tab, title } = this.props;
        // console.log(this.props.logout);
        return (
			<StyleProvider style={getTheme(material)}>
				<Container >
					<Content contentContainerStyle={{flex:1}}>
						<SafeAreaView  style={styles.contentContainer}>
							<ScrollView contentContainerStyle={{flex:1}}>
								<View style={styles.contentHeader}>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Icon style={styles.ligtFont} name='image' />
										<Text style={styles.ligtFont}>
											{
											(this.props.redux_session.user_data)?
											this.props.redux_session.user_data.email:"Not available"
											}
										</Text>
										<View style={{alignItems: 'flex-end',flex:1,flexDirection:'row-reverse'}}>
											<Icon onPress={ () => this.end_session()} style={{...styles.ligtFont}} name='exit' />
											<Icon onPress={ () => this.end_session()} style={{...styles.ligtFont}} name='person' />
										</View>
									</View>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Text style={[styles.ligtFont,styles.headerBigger]}>
											{(this.props.title)?this.props.title:"Page Title"}
										</Text>
										<Button onPress={()=>Actions.Mileage(
											{origin:'TX,+USA',destination:'MI,+USA'}
											)}>
											<Text>
											Test Mileage, TX -> MI
											</Text>
										</Button>
									</View>
								</View>
								<View style={styles.contentBody}>
									{this.props.children}
								</View>
							</ScrollView>
						</SafeAreaView>
					</Content>
					<Footer>
						<FooterTab style={{backgroundColor: '#fff'}}>
							<Button
							style={styles.footertab_button}
							onPress= {(active_tab!="Dashboard")?() => Actions.Dashboard():null}
							>
								<View style={(active_tab=="Dashboard")?styles.footertab_active_indicator:null} />
								<Icon
									style={(active_tab=="Dashboard")?styles.footertab_icon_active:null}
									type="FontAwesome" name="line-chart"
								/>
							</Button>
							<Button style={styles.footertab_button}
							onPress= {(active_tab!="Loads")?() => Actions.Loads():null}
							>
								<View style={(active_tab=="Loads")?styles.footertab_active_indicator:null} />
								<Icon
									style={(active_tab=="Loads")?styles.footertab_icon_active:null}
									type="FontAwesome5" name="dolly"
								/>
							</Button>
							<Button style={styles.footertab_button}
							onPress= {(active_tab!="Trucks")?() => Actions.Trucks():null}
							>
								<View style={(active_tab=="Trucks")?styles.footertab_active_indicator:null} />
								<Icon
									style={(active_tab=="Trucks")?styles.footertab_icon_active:null}
									type="FontAwesome5" name="truck"
								/>
							</Button>
							<Button style={styles.footertab_button}>
								<View style={(false)?styles.footertab_active_indicator:null} />
								<Icon name="person"/>
							</Button>
						</FooterTab>
					</Footer>
				</Container>
			</StyleProvider>
        );
    }
}


// Push yourself a little more, every day.

function redux_state_to_Props (state){
	// console.log("Sceen ni ha");
	// console.log(state.redux_session.user_data.email);
    return {
        redux_session: state.redux_session
    }
}

function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_is_logged : set_is_logged
    },dispatch);
 }


export default connect(redux_state_to_Props,reduxActionFunctions)(Screen);
