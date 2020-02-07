// RNRF logic here
import React, { Component } from 'react';
import SideBar from './components/template/Sidebar.js';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';
// import Routes from './Routes.js';
import Login from './components/login/Login.js';
import Register from './components/login/Register.js';
import Test from './components/home/Test.js';
// import ForgotPassword from './components/login/ForgotPassword.js';
// import ResetPasswordValidation from './components/login/ResetPasswordValidation.js';
// import ResetPassword from './components/login/ResetPassword.js';
// import Dash from './components/home/Dash.js';
// import ProfileUpdate from './components/home/ProfileUpdate.js';
// import Profile from './components/home/Profile.js';
// import PayNow from './components/booking/PayNow.js';
// import BookNow from './components/booking/BookNow.js';
// import BookingDetails from './components/booking/BookingDetails.js';
// import PinnedLocation from './components/home/PinnedLocations.js';
// import MapRiderViewsMarker from './components/home/maps/MapRiderViewsMarker.js';
// import MapDriverLocationMarker from './components/home/maps/MapDriverLocationMarker.js';
// import Notification from './components/booking/pushnotification/Notification.js';
// import DriverRating from './components/booking/DriverRating.js';
import {connect} from 'react-redux';
import { addons } from 'react-native';


// Dont just exist, live.

class Routes extends Component {
    render() {
        return (
            <Router>
                    <Scene key="root">
					
                        <Scene key="Login" component={Login} initial={(this.props.MyGlobalReducer.isLoggedIn === false) ? false : false} title="" hideNavBar />
                        <Scene key="Test" component={Test} title="" hideNavBar />
                        <Scene key="Register" component={Register} title="" hideNavBar />
                        {
                        // <Scene key="Routes" component={Routes} title="Test" hideNavBar />
                        // <Scene key="Test" component={Test} hideNavBar title="Test" hideNavBar />
                        // <Scene key="ForgotPassword" component={ForgotPassword} title="" hideNavBar />
                        // <Scene key="ResetPasswordValidation" component={ResetPasswordValidation} title="" hideNavBar />
                        // <Scene key="ResetPassword" component={ResetPassword} title="" />
                        }

                        {
                            // <Drawer hideNavBar key="drawer" drawer contentComponent={SideBar} drawerWidth={280}>
                            //     <Scene key="Register" component={Register} title="" hideNavBar />
                            // <Scene key="Test" component={Test} title="Test" hideNavBar initial={true} />
                            //    <Scene key="Login" component={Login} initial={(this.props.RiderReducer.isLoggedIn === false) ? true : false} title="" hideNavBar />
                            // <Scene key="Dash" component={Dash} title="Dash" initial={(this.props.RiderReducer.isLoggedIn === true) ? true : false} hideNavBar />
                            // <Scene key="BookingDetails" component={BookingDetails}  title="Booking Details" hideNavBar />
                            // <Scene key="DriverRating" component={DriverRating} title="DriverRating" hideNavBar />
                            // <Scene key="Profile" component={Profile} hideNavBar title="Profile" hideNavBar />
                            // <Scene key="ProfileUpdate" component={ProfileUpdate} title="ProfileUpdate" hideNavBar />
                            // <Scene key="PinnedLocation" component={PinnedLocation} title="Pinned Locations" hideNavBar />
                            // <Scene key="BookNow" component={BookNow} title="BookNow" hideNavBar />
                            // <Scene key="Notification" component={Notification} title="Notification" hideNavBar />
                            // <Scene key="PayNow" component={PayNow} title="PayNow" hideNavBar />
                            // <Scene key="MapRiderViewsMarker" component={MapRiderViewsMarker} title="MapRiderViewsMarker" hideNavBar />
                            // <Scene key="MapDriverLocationMarker" component={MapDriverLocationMarker} title="MapDriverLocationMarker" hideNavBar />
                            //     </Drawer>
                        }
                    </Scene>
                </Router>
            );  
    }
}

// Push yourself a little more, everytime.

function reduxState (state){
    return {
        MyGlobalReducer: state.MyGlobalReducer
    }
}

export default connect(reduxState,null)(Routes);