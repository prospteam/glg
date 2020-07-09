import React, { Component } from 'react';
import { SafeAreaView,ScrollView, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';

// Out Imports
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import my_styles from '../../assets/styles/MyStyles';
import {set_is_logged} from '../../redux/actions/Actions';
import logo_square from '../../assets/images/logo_square.jpg';
import {to_upper} from '../../libraries/MyFunctions.js';

 class Layout extends Component {
    constructor(props) {
		super(props)
    }

	//TEst
    render() {
		const { active_tab, title } = this.props;

        return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<Content contentContainerStyle={{flex:1}}>
						<SafeAreaView  style={styles.contentContainer}>
							<ScrollView contentContainerStyle={{flex:1}}>
								{/* <Spinner
									visible={this.props.redux_state.show_mini_loader}
									textContent={'Loading...'}
									textStyle={{color: '#FFF'}}
								/> */}
								<View style={styles.contentHeader}>
									<View style={{
										flexDirection:'row',
										padding:15,
										paddingLeft:20,
										paddingRight:20,
										justifyContent: 'center',
										alignItems: 'center'
									}}>
										<Image style={{
											height: 30,
											width: 30,
											borderRadius: 40,
											overflow: 'hidden',
											}} 
											source={logo_square} />
										<Text style={styles.ligtFont}>
											{
											(this.props.redux_session.user_data)?
											to_upper(this.props.redux_session.user_data.user_type)
											:
											"Not available"
											}
										</Text>
										<View style={{alignItems: 'flex-end',flex:1,flexDirection:'row-reverse'}}>
											<Icon onPress={ () => this.end_session()} style={{...styles.ligtFont}} name='exit' />
											{/* <Icon onPress={ () => this.end_session()} style={{...styles.ligtFont}} name='person' /> */}
										</View>
									</View>
								</View>
								<View style={styles.contentBody}>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Text style={[styles.darkFont,styles.headerBigger]}>
											{(this.props.title)?this.props.title:""}
										</Text>
										{this.props.side_header_buttons}
									</View>
									{/* <View style={{
										height:30,
										backgroundColor:'red',
										flexDirection:"row",
										justifyContent:"space-around"
									}}>
										<TouchableOpacity>
											<Text>Load Mapses</Text>
										</TouchableOpacity>
										<TouchableOpacity>
											<Text>Load Mapses</Text>
										</TouchableOpacity>
									</View> */}
									{this.props.children}
								</View>
							</ScrollView>
						</SafeAreaView>
					</Content>
					<Footer>
						<FooterTab style={{backgroundColor: '#fff'}}>
							{/* <Button
							style={styles.footertab_button}
							onPress= {(active_tab!="Dashboard")?() => Actions.Dashboard():null}
							>
								<View style={(active_tab=="Dashboard")?styles.footertab_active_indicator:null} />
								<Icon
									style={(active_tab=="Dashboard")?styles.footertab_icon_active:null}
									type="FontAwesome" name="line-chart"
								/>
							</Button> */}
							<Button style={styles.footertab_button}
							onPress= {(active_tab!="Loads")?() => this.go_to_loads():null}
                            direction='horizontal'
							>
								<View style={(active_tab=="Loads")?styles.footertab_active_indicator:null} />
								<Icon
									style={(active_tab=="Loads")?styles.footertab_icon_active:null}
									type="FontAwesome5" name="dolly"
								/>
							</Button>
							<Button style={styles.footertab_button}
							onPress= {(active_tab!="Trucks")?() => this.go_to_trucks():null}
							>
								<View style={(active_tab=="Trucks")?styles.footertab_active_indicator:null} />
								<Icon
									style={(active_tab=="Trucks")?styles.footertab_icon_active:null}
									type="FontAwesome5" name="truck"
								/>
							</Button>
							{/* <Button style={styles.footertab_button}>
								<View style={(false)?styles.footertab_active_indicator:null} />
								<Icon name="person"/>
							</Button> */}
						</FooterTab>
					</Footer>
				</Container>
			</StyleProvider>
        );
    }
}


// Push yourself a little more, every day.

function redux_state_to_Props (state){
	console.log("Sceen ni ha");
	console.log(state.redux_session.user_data);
    return {
        redux_session: state.redux_session,
        redux_state: state.redux_state
    }
}

function reduxActionFunctions(dispatch){
	return bindActionCreators({
		set_is_logged : set_is_logged,
		// set_show_mini_loader : set_show_mini_loader,
	},dispatch);
}

export default connect(redux_state_to_Props,reduxActionFunctions)(Layout);
