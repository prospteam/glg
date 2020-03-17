import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';

export default class Dashboard extends Component {

   onChangeText = (text) => {
      this.setState({
         color: text
      })
   }

   render() {
      return (
         <ScrollView >
            <View style={{ color: 'white' }}>
               <View style={styles.InputRegister}>
               </View>
               <View>
                  <Text style={styles.TextInput}>Proweaver</Text>
                  <Text style={styles.tableName}>Dashboard</Text>
               </View>
               <View style={styles.userCount}>
                  <View >
                     <Text style={styles.activeUserbtn}>Total Active User</Text>
                     <Text style={styles.activeCount}>17</Text>
                  </View>
               </View>

               <View style={styles.userCount}>
                  <View >
                     <Text style={styles.activeUserbtn}>Total Active User</Text>
                     <Text style={styles.activeCount}>17</Text>
                  </View>
               </View>
               <View style={styles.shipperCount}>
                  <View>
                     <Text style={styles.activeUserbtn}>Total Active Shippers</Text>
                     <Text style={styles.activeCount}>1</Text>
                  </View>
               </View>
               <View style={styles.LoadsCount}>
                  <View style={{ marginBottom: 1 }}>
                     <Text style={styles.activeUserbtn}>Total Posted Loads</Text>
                     <Text style={styles.activeCount}>51</Text>
                  </View>
               </View>
               <View style={styles.carriersCount}>
                  <View style={{ marginBottom: 1 }}>
                     <Text style={styles.activeUserbtn}>Total Active Carriers</Text>
                     <Text style={styles.activeCount}>4</Text>
                  </View>
               </View>
               <View style={styles.totalLoads}>
                  <View style={styles.table}>
                     <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text >Total Loads Per Month</Text>
                     </View>
                  </View>
               </View>
               <View style={styles.totalTrucks}>
                  <View style={styles.table}>
                     <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text >Total Trucks Per Month</Text>
                     </View>
                  </View>
               </View>
               <View style={styles.topStates}>
                  <View style={styles.table}>
                     <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text >Top States With Most Posted Loads</Text>
                     </View>
                  </View>
               </View>
               <View style={styles.topTrucks}>
                  <View style={styles.table}>
                     <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text >Top States With Most Posted Trucks</Text>
                     </View>
                  </View>
               </View>
            </View>
         </ScrollView>
      );
   }

}
const styles = StyleSheet.create({

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

   totalLoads: {
      marginTop: 100,
      marginHorizontal: '10%',
     
      backgroundColor: "white",
      borderRadius: 8,
      width: 320,
      zIndex: 4,
      padding: 45
   },

   totalTrucks: {
      marginTop: 15,
      marginLeft: 20,
      marginRight: 10,
      backgroundColor: "white",
      borderRadius: 8,
      width: 320,
      zIndex: 4,
      padding: 45
   },
   userCount: {
      position: 'absolute',
      backgroundColor: '#e1f8ff',
      height: 1000,
      borderRadius: 50,
      zIndex: 2,
      width: "100%",
      marginTop: 130,
      borderColor: 'white'

   },
   topStates: {
      marginTop: 15,
      marginLeft: 20,
      marginRight: 10,
      backgroundColor: "white",
      borderRadius: 8,
      width: 320,
      zIndex: 4,
      padding: 45
   },
   topTrucks: {
      marginTop: 15,
      marginLeft: 20,
      marginRight: 10,
      backgroundColor: "white",
      borderRadius: 8,
      width: 320,
      zIndex: 4,
      padding: 45
   },

   TextInput: {
      color: 'white',
      zIndex: 4,
      marginTop: 25,
      marginLeft: 60
   },

   shipperCount: {
      position: 'absolute',
      height: 1000,
      borderRadius: 50,
      zIndex: 2,
      width: "100%",
      marginTop: 130,
      marginLeft: 80
   },
   LoadsCount: {
      position: 'absolute',
      height: 1000,
      borderRadius: 50,
      zIndex: 2,
      width: "100%",
      marginTop: 130,
      marginLeft: 160
   },

   carriersCount: {
      position: 'absolute',
      height: 1000,
      borderRadius: 50,
      zIndex: 2,
      width: "100%",
      marginTop: 130,
      marginLeft: 240
   },

   activeUserbtn: {
      backgroundColor: '#fff',
      color: '#000',
      marginTop: -30,
      marginLeft: 30,
      fontSize: 10,
      borderRadius: 5,
      height: 70,
      width: 75,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      zIndex: 3,
   },
   activeCount: {
      color: 'orange',
      fontSize: 20,
      padding: 10,
      marginTop: -40,
      marginLeft: 48,
      zIndex: 3,

   },
   btn2login: {
      backgroundColor: '#fff',
      color: '#000',
      marginTop: -40,
      marginLeft: 165,
      fontSize: 12,
      borderRadius: 5,
      height: 40,
      width: 100,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      borderWidth: 1,
      zIndex: 3,
   },
   btn3login: {
      backgroundColor: '#01508b',
      color: '#fff',
      marginTop: -40,
      marginLeft: 280,
      fontSize: 12,
      borderRadius: 5,
      height: 40,
      width: 100,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      borderWidth: 1,
      zIndex: 3,
   },

});
