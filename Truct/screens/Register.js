import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Root } from 'native-base'
import { Button, Text, View, Content, Item, Input, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Action from '../actions/Action';

class Register extends React.Component {

    set_route(){
        this.props.set_route();
        Actions.login()
    }

    render() {
        return (

            <View style={styles.container}>
                <Root>
                    <Content style={{ padding: 10 }} padder>
                        <View>
                            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
                        </View>
                        <Item rounded style={{ marginTop: 20 }}>
                            <Input placeholder='Client/Company Name' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} onChangeText={(text) => this.props.handle_changes(text, 'registration_form', 'client_company_name')} />
                        </Item>
                        <Item rounded style={{ marginTop: 12 }}>
                            <Input placeholder='Email Address' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} onChangeText={(text) => this.props.handle_changes(text, 'registration_form', 'email_address')} />
                        </Item>
                        <Item rounded style={{ marginTop: 12 }}>
                            <Input placeholder='Contact Number' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} onChangeText={(text) => this.props.handle_changes(text, 'registration_form', 'contact_number')} />
                        </Item>
                        <Item rounded style={{ marginTop: 12 }}>
                            <Input placeholder='Password' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} secureTextEntry={true} onChangeText={(text) => this.props.handle_changes(text, 'registration_form', 'password')} />
                        </Item>
                        <Item rounded style={{ marginTop: 12 }}>
                            <Input placeholder='Confirm Password' placeholderTextColor="white" style={{ paddingLeft: 50, color: 'white' }} secureTextEntry={true} onChangeText={(text) => this.props.handle_changes(text, 'registration_form', 'confirm_password')} />
                        </Item>
                        <View style={{ marginTop: 12 }}>    
                            {this.props.isLoading ? <Spinner color='success' /> :
                                <Button block rounded light style={{ padding: 10 }} onPress={() => this.props.register_user(this.props.registration_form)}>
                                    <Text>Sign up</Text>
                                </Button>
                            }
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={() => this.set_route()}><Text style={{ textAlign: 'center' }}><Text style={{ color: 'white'}}>Already a user?</Text> <Text style={{ color: 'gray' }}>Login Now</Text></Text></TouchableOpacity>
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
    logo: {
        width: 300,
        height: 100,
    }
});

const mapStateToProps = state => {
    return {
        registration_form: state.registration_form,
        isLoading: state.isLoading,     
    }
}

const mapActionsToDispatch = dispatch => {
    return {
        handle_changes: (value, state_parent_name, state_child_name) => dispatch({ type: 'HANDLE_CHANGES', payload: { value: value, state_parent_name: state_parent_name, state_child_name: state_child_name } }),
        register_user: (registration_form) => dispatch(Action.registration_func('api_login/register_user',registration_form)),
        set_route: () => dispatch(Action.set_route('login_form_screen'))
    }
}

export default connect(mapStateToProps, mapActionsToDispatch)(Register);