import React from 'react';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Content, Button, Text, View, Footer, Icon, FooterTab } from 'native-base';
import { connect } from 'react-redux';


class Navigation extends React.Component {

    async logout() {       
        this.props.logout();
        Actions.login({ type: 'reset' })
    }

    navigateScreen(screen,parameter = {}){       
        Actions[screen](parameter)
    }

    render() {            
        return (           
            <Footer>
                <FooterTab style={{ backgroundColor: "#ffff" }}>
                    <Button onPress={() => this.navigateScreen('home', { type: 'replace' })} >
                        <Icon name="home" active style={{ color:'#2ed573'}}/>
                    </Button>
                    <Button onPress={() => this.navigateScreen('loadingorder', { type: 'replace' })}>
                        <Icon name="ios-archive" style={{ color: '#636e72' }} />
                    </Button>
                    <Button onPress={() => this.navigateScreen('track', { type: 'replace' })}>
                        <Icon name="locate" style={{ color: '#636e72' }} />
                    </Button>
                    <Button onPress={() => this.navigateScreen('loadingorder', { type: 'replace' })}>
                        <Icon name="albums" style={{ color: '#636e72' }} />
                    </Button>
                    <Button onPress={() => this.navigateScreen('loadingorder',{ type: 'replace' })}>
                        <Icon name="ios-contacts" style={{ color: '#636e72' }} />
                    </Button>
                    <Button onPress={() => this.navigateScreen('profile', { type: 'replace' })}>
                        <Icon name="person" style={{ color: '#636e72' }}/>
                    </Button>
                    <Button onPress={() => this.logout()}>
                        <Icon name="ios-power" style={{ color: '#636e72' }} />
                    </Button>
                </FooterTab>
            </Footer>           
        )
    }
}

const mapStateToPros = (state) => {
    return {
       
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        logout: () => dispatch({type:'LOG_OUT'})
    }
}

export default connect(mapStateToPros, mapActionToDispatch)(Navigation);