import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, TouchableOpacity, ActivityIndicator  } from 'react-native';
import { Root } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Text, View, Content, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Action from '../actions/Action';
class Login extends React.Component {

    constructor(props) {
        super(props);
    }
    
    set_route() {
        this.props.set_route();
        Actions.register()
    }
   
    render() {
        return (
            <View style={styles.container}>
                <Root>
                    <Content style={{ padding: 10 }} padder>                        
                        <View>
                            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
                        </View>
                        <Item rounded>
                            <Input placeholder='Email Address' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} onChangeText={(text) => this.props.handle_changes(text, 'login_form', 'username')} />
                        </Item>
                        <Item rounded style={{ marginTop: 20 }}>
                            <Input placeholder='Password' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} secureTextEntry={true} onChangeText={(text) => this.props.handle_changes(text, 'login_form', 'password')} />
                        </Item>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: 'white' }} onPress={() => Actions.register()}>Forgot Password?</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {this.props.isLoading ? <ActivityIndicator size="large" color="#fffff" /> :
                                <Button block rounded light style={{ padding: 10 }} onPress={() => this.props.authenticate_user(this.props.login_form)}>
                                    <Text>LOG IN</Text>
                                </Button>
                            }
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={() => this.set_route()}><Text style={{ textAlign: 'center' }}><Text style={{ color: 'white' }}>New User?</Text> <Text style={{ color: 'gray' }}>Sign up for a new account</Text></Text></TouchableOpacity>
                        </View>
                    </Content>
                </Root>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0057a0'
    },
    logo:{
        width: 300,
        height: 300,
    }
});

const mapStateToProps = state => {
    return {
        login_form: state.login_form,
        isLoading: state.isLoading,
        authenticate_data: state.authenticate_data,
        showToast: state.showToast
    }
}

const mapActionsToDispatch = dispatch => {
    return {
        handle_changes: (value, state_parent_name, state_child_name) => dispatch({ type: 'HANDLE_CHANGES', payload: { value: value, state_parent_name: state_parent_name, state_child_name: state_child_name } }),
        authenticate_user: (login_form) => dispatch(Action.login(login_form)),
        set_route: () => dispatch(Action.set_route('registration_form_screen'))
    }
}

export default connect(mapStateToProps, mapActionsToDispatch)(Login);