import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet} from 'react-native';
import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';
import { Container, Content, Button, Text, View , Footer, Icon, FooterTab} from 'native-base';
import Helpers from '../Helpers';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const user_id = useAsyncStorage('@user_id');

class Home extends React.Component {
    async componentDidMount() {
        const isLogged = await AsyncStorage.getItem('user_id');
    }

    async logout(){
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('user_id');
        Actions.login({ type: 'reset' })
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Text>Home</Text>
                </View>
                <Navigation/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D47A1',
    }
});

const mapStateToPros = (state) => {
    return {

    }
}

const mapActionToDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapStateToPros, mapActionToDispatch)(Home);
