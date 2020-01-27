import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import { Container, Text, View, Grid, Row, ListItem,Left, Body, Icon, Content} from 'native-base';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Action from '../actions/Action';

const user_id = useAsyncStorage('@user_id');
const logo = require('../assets/profile_sample.png');

class Profile extends React.Component {
    async componentDidMount() {
        const isLogged = await AsyncStorage.getItem('user_id');
        console.log(this.props.userID);
    }

    async logout() {
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('user_id');
        Actions.login({ type: 'reset' })
    }

    render() {
        console.log(this.props);
        return (
            <Container >
                <View style={styles.container}>
                    <Grid>
                        <Row style={styles.profile}>
                            <View style={{ flex: 1, marginTop:40 }}>
                                <Image
                                    style={styles.logo}
                                    source={logo}
                                />     
                            </View>
                            <View style={{ flex: 1, marginTop:90 }}>
                                <Text style={{color:'#fff'}}>Edit Profile</Text>
                            </View>                      
                        </Row>
                        <ScrollView>
                        <Row style={styles.profile_details}>
                            <Content>
                                <ListItem>
                                        <Icon type="FontAwesome" style={{ color: '#808080 ' }} name="user-circle">
                                    </Icon>
                                    <Body>
                                        <Text style={{ color: '#808080 ',fontSize: 10 }}> Name</Text>
                                        <Text>Dummy Name</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Icon type="FontAwesome" style={{ color: '#808080 ' }} name="envelope-open">
                                    </Icon>
                                    <Body>
                                        <Text style={{ color: '#808080 ', fontSize: 10 }}> Email Address</Text>
                                        <Text>Info@sample-name.com</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Icon style={{ color: '#808080 ' }} name="mobile">
                                    </Icon>
                                    <Body>
                                        <Text style={{ color: '#808080 ', fontSize: 10 }}> Contact Number</Text>
                                        <Text>123-456-7890</Text>
                                    </Body>
                                </ListItem>
                            </Content>
                        </Row>
                        </ScrollView>
                    </Grid>
                </View>
                <Navigation />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profile: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0057a0',
        height:250,
    },
    profile_details: {
        backgroundColor: '#fff',
    },
    logo: {
        width: 150, height: 150, borderRadius: 150 / 2
    }
});

const mapStateToPros = (state) => {
    return {
        userID: state.userID
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        increase: () => dispatch(Action.fetch_data('api_profile/get_user_details','profile_details',)),
        decrease: () => dispatch({ type: 'DEC' })
    }
}

export default connect(mapStateToPros, mapActionToDispatch)(Profile);