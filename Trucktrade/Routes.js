import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Loadingorder from './screens/Loadingorder';
import Home from './screens/Home';
import Track from './screens/Track';
import {connect} from 'react-redux';

class Routes extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>
                <View style={{ backgroundColor: 'blue' }}>
                    <Text>
                        xxxxx
                    </Text>
                </View>
                <Router>
                    <Stack key="root">                                      
                        <Scene key="login" component={Login} title="Login" hideNavBar={true} initial={(this.props.isLoggedIn == false && this.props.current_route == 'login_form_screen') ? true : false}/> 
                        <Scene key="home" component={Home} title="Home" hideNavBar={true} /> 
                        <Scene key="register" component={Register} title="Register" hideNavBar={true} />                       
                        <Scene key="loadingorder" component={Loadingorder} title="Loading Order" hideNavBar={true} />
                        <Scene key="profile" component={Profile} title="Profile" hideNavBar={true} />
                        <Scene key="track" component={Track} title="Track" hideNavBar={true} />
                    </Stack>
                </Router>
            </>
        )
    }
}

const mapStatesToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        isRegistration: state.isRegistration,
        isLoading: state.isLoading,
        current_route: state.current_route,
    }
}

export default connect(mapStatesToProps,null)(Routes);
