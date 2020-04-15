import React, { Component } from 'react';
import { SafeAreaView,ScrollView   } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider  } from 'native-base';
import { Actions } from 'react-native-router-flux';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import styles from '../../assets/styles/CommonStyles';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {set_is_logged} from '../../redux/actions/Actions';;
// import { StyleSheet } from 'react-native';

 class Screen extends Component {

    end_session() {
        this.props.set_is_logged('set_is_logged',false);
    }

    render() {
        console.log(this.props.logout);
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
											<Text style={styles.ligtFont}>Rosendo Hernandezss</Text>
											<View style={{alignItems: 'flex-end',flex:1,flexDirection:'row-reverse'}}>
                                            <Button onPress={ () => this.end_session()}>
                                                <Icon style={{...styles.ligtFont}}  name='exit' />
                                            </Button>
												<Icon style={{...styles.ligtFont}} name='person' />
											</View>
										</View>
										<View style={{
											flexDirection:'row',
											padding:10,
										}}>
											<Text style={[styles.ligtFont,styles.headerBigger]}>I am title</Text>
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
								onPress= {() => Actions.SampleComponent()}
								>
									<Icon type="FontAwesome" name="line-chart" />
								</Button>
								<Button style={styles.footertab_button}
								onPress= {() => Actions.SampleComponent2()}
								>
									<View style={styles.footertab_active_indicator} />
									<Icon style={styles.footertab_icon_active} type="FontAwesome5" name="dolly" />
								</Button>
								<Button style={styles.footertab_button}>
									<Icon type="FontAwesome" name="truck" />
								</Button>
								<Button style={styles.footertab_button}>
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
    console.log(' Router.js redux_session  ', state.redux_session)
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
