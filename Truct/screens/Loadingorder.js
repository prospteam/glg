import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import { Container, Text, View, } from 'native-base';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const user_id = useAsyncStorage('@user_id');

class Loadingorder extends React.Component {
    async componentDidMount() {
        const isLogged = await AsyncStorage.getItem('user_id');

    }

    async logout() {
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('user_id');
        Actions.login({ type: 'reset' })
    }

    render() {

        return (
            <Container>
                <View style={styles.container}>
                    <Text>Loading Order</Text>
                </View>
                <Navigation />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0057a0',
    }
});

const mapStateToPros = (state) => {
    return {
        counter: state.counter
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        increase: () => dispatch({ type: 'INC' }),
        decrease: () => dispatch({ type: 'DEC' })
    }
}

export default connect(mapStateToPros, mapActionToDispatch)(Loadingorder);
