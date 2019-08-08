/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ImageBackground, Image, Alert} from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import LoginView from './src/components/LoginView';
import RegisterView from './src/components/RegisterView';
import Dashboard from './src/components/Dashboard';
import Profile from './src/components/Profile';
import History from './src/components/History';
import Payment from './src/components/Payment';
import Routes from './src/components/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import companyLogosm from './src/assets/images/main_logo-sm.png';
import { createDrawerNavigator, createAppContainer, DrawerItems, DrawerNavigation } from 'react-navigation';
// import firebase from 'react-native-firebase';
// import type, { Notification, NotificationOpen } from 'react-native-firebase';

var Spinner = require('react-native-spinkit');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const destroySession = async () => {
  await AsyncStorage.removeItem('userData');
  // Actions.dashboard();
  // PAGE REDIRECTION HERE
}
const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#1c1b22',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={{aspectRatio: 88 / 49}} source={companyLogosm} />
    </View>
    <DrawerItems {...props} activeTintColor='#1c1b22' activeBackgroundColor='#e3e3e3' inactiveTintColor='#1c1b22' inactiveBackgroundColor='transparent' />
  </View>
);

const MyDrawerNavigator = createDrawerNavigator({
      Dashboard:{
        screen: Dashboard,
      },
      Profile: {
        screen: Profile,
      },
      History: {
        screen: History,
      },
      Payment: {
        screen: Payment,
      },
      Logout: {
        screen: Routes,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }
        // screen: () => {
        //   AsyncStorage.removeItem('userData');
        //   return <Routes />;
        //   },
        // navigationOptions: ({navigation}) => {
        //     return {
        //         drawerLabel: () => null,
        //     }
        // }
      }
    },
    {
      contentComponent: DrawerContent,
    }
);

const MyApp = createAppContainer(MyDrawerNavigator);

type Props = {};

export default class App extends Component<Props> {

    // async pushNotif(){
    //     if (Platform.OS === 'android') {
    //       try {
    //         const res = await firebase.messaging().requestPermission();
    //         const fcmToken = await firebase.messaging().getToken();
    //         if (fcmToken) {
    //           console.debug('FCM Token: ', fcmToken);
    //           const enabled = await firebase.messaging().hasPermission();
    //           if (enabled) {
    //             Alert.alert('FCM messaging has permission:' + enabled)
    //           } else {
    //             try {
    //               await firebase.messaging().requestPermission();
    //               Alert.alert('FCM permission granted')
    //             } catch (error) {
    //               Alert.alert('FCM Permission Error', error);
    //             }
    //           }
    //
    //         } else {
    //           Alert.alert('FCM Token not available');
    //         }
    //       } catch (e) {
    //         Alert.alert('Error initializing FCM', e);
    //       }
    //     }
    // }
    //
    // subscribeToNotificationListeners() {
    //     const channel = new firebase.notifications.Android.Channel(
    //         'notification_channel_name', // To be Replaced as per use
    //         'Notifications', // To be Replaced as per use
    //         firebase.notifications.Android.Importance.Max
    //     ).setDescription('A Channel To manage the notifications related to Application');
    //     firebase.notifications().android.createChannel(channel);
    //
    //     this.notificationListener = firebase.notifications().onNotification((notification) => {
    //         console.log('onNotification notification-->', notification);
    //         console.log('onNotification notification.data -->', notification.data);
    //         console.log('onNotification notification.notification -->', notification.notification);
    //         // Process your notification as required
    //         this.displayNotification(notification)
    //     });
    // }
    //
    // displayNotification = (notification) => {
    //     if (Platform.OS === 'android') {
    //         const localNotification = new firebase.notifications.Notification({
    //             sound: 'default',
    //             show_in_foreground: true,
    //         }).setNotificationId(notification.notificationId)
    //             .setTitle(notification.title)
    //             .setSubtitle(notification.subtitle)
    //             .setBody(notification.body)
    //             .setData(notification.data)
    //             .android.setChannelId('notification_channel_name') // e.g. the id you chose above
    //             .android.setSmallIcon('ic_notification_icon') // create this icon in Android Studio
    //             .android.setColor(colors.colorAccent) // you can set a color here
    //             .android.setPriority(firebase.notifications.Android.Priority.High);
    //
    //         firebase.notifications()
    //             .displayNotification(localNotification)
    //             .catch(err => console.error(err));
    //
    //     }
    // }

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        isLogged: false,
      }
  }

  componentDidMount() {
    this.checkSession();
    // firebase.messaging().hasPermission().then(hasPermission => {
    //        if (hasPermission) {
    //            this.subscribeToNotificationListeners()
    //        } else {
    //            firebase.messaging().requestPermission().then(() => {
    //                this.subscribeToNotificationListeners()
    //            }).catch(error => {
    //                console.error(error);
    //
    //            })
    //        }
    //    })
  }

    // componentWillUnmount() {
        // this.notificationListener();
    // }

  if(isLoading){
    return (
        <View style={styles.container}>
          <Spinner type="9CubeGrid" color="#d3a04c" />
        </View>
      );
  }

  checkSession = async () => {
    if(await AsyncStorage.getItem('userData')){
      this.setState({
        isLogged: true,
        });
    }
    setTimeout(() => {
      this.setState({
        isLoading: false,
        });
      }, 1000);
  }

  destroySession = async () => {
    await AsyncStorage.removeItem('userData');
    this.setState({
      isLogged: false,
      });
  }

  createSession = async () => {
    await AsyncStorage.setItem('userData', true);

    this.setState({
      isLogged: true,
      });
  }

  render() {
    const { isLogged, isLoading } = this.state;

    if(isLoading){
      return (
        <View style={styles.container}>
          <Spinner type="9CubeGrid" color="#d3a04c" />
        </View>
        );
    }

    // if(isLogged === false){
      // return (
      //   <StyleProvider style={getTheme(material)}>
      //     <Routes />
      //   </StyleProvider>
      // );
    // }else{
    //
      return (
        <StyleProvider style={getTheme(material)}>
          <MyApp />
        </StyleProvider>
      );
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined
  }
});
