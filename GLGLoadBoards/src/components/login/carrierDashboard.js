import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView  } from 'react-native';


export default class shipperDashboard extends Component {

   onChangeText = (text) => {
      this.setState({
         color: text
      })
   }

   render() {
      return (
      
      	<View style={{backgroundColor:"red",color:'white'}}>
            <View style={styles.InputRegister}>
            </View>
            <View>
               <Text style={styles.TextInput}>Proweaver</Text>
               <Text style={styles.tableName}>Dashboard</Text>
            </View>
            <View style={styles.userCount}></View>
               <View style={styles.totalLoads}>
                  <View style={styles.table}>
                     <View style={{justifyContent: "center", alignItems: "center"}}>
                      <Text >Total Loads Per Month</Text>
                     </View>
                </View>
             </View>
             <View style={styles.totalTrucks}>
                  <View style={styles.table}>
                     <View style={{justifyContent: "center", alignItems: "center"}}>
                      <Text >Total Trucks Per Month</Text>
                     </View>
                </View>
             </View>
             
          </View>
      
      );
   }

}
const styles = StyleSheet.create({
InputRegister:{
backgroundColor:'#03365c',
height: 300,
zIndex:  1,
position:'absolute',
width: "100%",
},
tableName:{
   zIndex:9,
   marginLeft:20,
   marginTop:15,
   fontSize:20,
   color:'white'
},
totalLoads:{
   marginTop:80,
   marginLeft:20,
   marginRight:10,
   backgroundColor:"white",
   height: '35%',
   borderRadius:8,
   width:320,
   zIndex:4,
   padding:45
},

totalTrucks:{
   marginTop:15,
   marginLeft:20,
   marginRight:10,
   backgroundColor:"white",
   borderRadius:8,
   height:'25%',
   width:320,
   zIndex:4,
   padding:45
},
TextInput:{
   color:'white',
   zIndex:4,
   marginTop: 25,
   marginLeft:60
},
userCount:{
   position:'absolute',
   backgroundColor:'#e1f8ff',
   height:1000,
   borderRadius: 50,
   zIndex: 2,
   width:"100%",
   marginTop:130,
  
},
});
