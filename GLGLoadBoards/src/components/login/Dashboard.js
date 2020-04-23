import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import {Icon} from 'native-base';


export default class Dashboard extends Component {

   onChangeText = (text) => {
      this.setState({
         color: text
      })
   }
  //  componentWillMount(){
  //   AsyncStorage.getItem('userdata').then((user_data_json) => {
  //     let userdata = JSON.parse(user_data_json);
  //     this.setState({
  //       user: userdata,
  //       loaded: true
  //     });
  //   });
  // }
  //
   render() {
      //  console.log('this.props.RiderReducer.loggedinData', this.props.RiderReducer.loggedinData);
      return (
         <>
            <View style={{ position: 'relative', height: 150, width: '100%' }}>
               <View style={{ backgroundColor: '#03365c', height: 250, position: 'absolute', width: '100%' }}>
                  <Text style={styles.TextInput}>Proweaver</Text>
                    <TouchableOpacity>
                        <Text style={styles.Logout}>Logout</Text>
                        <Icon reverse name='ios-log-out' type="ionicons" color='orange'/>
                     </TouchableOpacity>
                  <Text style={styles.tableName}>Dashboard</Text>
               </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#e1f8ff', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
               {/* <ScrollView > */}
               <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: -20, zIndex: 4 }}>

                  <View style={styles.Navigation}>
                     <Text style={styles.activeUserbtn}>Total Active Shipper</Text>
                     <Text style={styles.activeCount}>1</Text>
                  </View>
                  <View style={styles.Navigation}>
                     <Text style={styles.activeUserbtn}>Total Posted Loads</Text>
                     <Text style={styles.activeCount}>51</Text>
                  </View>
                  <View style={styles.Navigation}>
                     <Text style={styles.activeUserbtn}>Total Active Carriers</Text>
                     <Text style={styles.activeCount}>1</Text>
                  </View>
                  <View style={styles.Navigation}>
                     <Text style={styles.activeUserbtn}>Total Posted Trucks</Text>
                     <Text style={styles.activeCount}>51</Text>
                  </View>
               </View>
               {/* </ScrollView> */}
            </View>
            <View style={styles.Graphs}>
               <View style={{
                  ...styles.topStates,
                  top: -120
               }}>
                  <Text>Total Loads per Month</Text>
               </View>

               <View style={{
                  ...styles.topStates,
                  top: -100
               }}>
                  <Text >Total Trucks Per Month</Text>
               </View>
               <View style={{
                  ...styles.topStates,
                  top: -80
               }}>
                  <Text>Top States With Most Posted Loads</Text>
               </View>
            </View>
            <View>

            </View>
         </>
      );
   }

}
// logout(){
//
//   AsyncStorage.removeItem('userdata').then(() => {
//     app.unauth();
//     this.props.navigator.push({
//       component: Login
//     });
//   });
//
// }

const styles = StyleSheet.create({

   Graphs: {
      backgroundColor: '#e1f8ff'
   },

   Navigation: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 3, width: '22%',
      height: 80,
      borderRadius: 5
   },

   InputRegister: {
      backgroundColor: '#03365c',
      height: 300,
      zIndex: 1,
      position: 'absolute',
      width: "100%",
   },

   tableName: {
      zIndex: 9,
      marginLeft: 20,
      marginTop: 15,
      fontSize: 20,
      color: 'white'
   },

   topStates: {
      backgroundColor: "white",
      borderRadius: 8,
      width: '80%',
      marginLeft: 38,
      zIndex: 4,
      padding: 45,
   },

   activeUserbtn: {
      backgroundColor: '#fff',
      color: '#000',
      fontSize: 10,
      borderRadius: 5,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      zIndex: 3,

   },
   activeCount: {
      color: 'orange',
      fontSize: 20,
      zIndex: 3,

   },
   TextInput: {
      color: 'white',
      zIndex: 4,
      marginTop: 25,
      marginLeft: 60
  },

  Logout:{
      alignSelf: 'flex-end',
      flexDirection: 'row',
      marginRight:'5%',
      marginTop: '-8%',
      color:'#fff',
  },
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },

});
