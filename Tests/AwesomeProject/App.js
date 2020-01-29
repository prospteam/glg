import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView  } from 'react-native';
import bg_image from './assets/images/bg_image.png';
import profile from './assets/images/profile.png';
import loadmap from './assets/images/load_map.png';

export default class App extends Component {

   state = {
      color: 'white',
   }

   onChangeText = (text) => {
      this.setState({
         color: text
      })
   }

   render() {
      return (
   <View style={{color:'white'}}>
            <View style={styles.InputRegister}>
               <Image source={profile} style={{marginTop:15,marginLeft:15,width: 35, height: 35, borderRadius: 100}} />
            </View>
            <View>
               <Text style={styles.TextInput}>Proweaver</Text>
               <Text style={styles.tableName}>Loads</Text>
            </View>
            <View style={styles.bottomBg}>
               <TouchableOpacity>
                   <Text style={styles.btnlogin}>All New Load</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                   <Text style={styles.btn2login}>All Loads</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                   <Text style={styles.btn3login}>Load Maps</Text>
                </TouchableOpacity>
                <View>
                <Text style={{color:"black", zIndex:14, marginLeft:20,fontSize:18, marginTop:8}}>Load Map</Text>
                </View>
            </View>
               <View style={styles.whiteBG}>
                  <View style={styles.table}>
                     <View style={{justifyContent: "center", alignItems: "center"}}>
                        <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Origin" onChangeText={text => this.onChangeText(text)}/>
                        <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Destination" onChangeText={text => this.onChangeText(text)}/>
                        <TouchableOpacity>
                           <Text style={styles.addLoadbtn}>View Loads</Text>
                        </TouchableOpacity>
                     </View>
                </View>
             </View>
             <View style={styles.whiteBG}>
                <View style={styles.mapBottom}>
                   <View style={{justifyContent: "center", alignItems: "center", marginTop:10}}>
                        <Image source={loadmap}/>
                   </View>
             </View>
          </View>
      </View>
      );
   }

}
const styles = StyleSheet.create({

mapBottom:{

},
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

whiteBG:{
   marginTop:60,
   marginLeft:20,
   marginRight:20,
   backgroundColor:"white",
   borderRadius:8,
   width:370,
   zIndex:4,
   padding:20
},

TextInput:{
   color:'white',
   zIndex:4,
   marginTop: 25,
   marginLeft:60
},
bottomBg:{
   position:'absolute',
   backgroundColor:'#e1f8ff',
   height:1000,
   borderRadius: 50,
   zIndex: 2,
   width:"100%",
   marginTop:110,
},
btnlogin:{
  backgroundColor:'#fff',
  color:'#000',
  marginTop:-15,
  marginLeft:30,
  fontSize: 12,
  borderRadius:5,
  height: 40,
  width: 120,
  textAlign:'center',
  padding: 10,
  fontWeight: 'bold',
  borderColor:"#009688",
  borderWidth:1,
  zIndex:3,
},
btn2login:{
  backgroundColor:'#fff',
  color:'#000',
  marginTop:-40,
  marginLeft:165,
  fontSize: 12,
  borderRadius:5,
  height: 40,
  width: 100,
  textAlign:'center',
  padding: 10,
  fontWeight: 'bold',
  borderColor:"#009688",
  borderWidth:1,
  zIndex:3,
},
btn3login:{
  backgroundColor:'#01508b',
  color:'#fff',
  marginTop:-40,
  marginLeft:280,
  fontSize: 12,
  borderRadius:5,
  height: 40,
  width: 100,
  textAlign:'center',
  padding: 10,
  fontWeight: 'bold',
  borderColor:"#009688",
  borderWidth:1,
  zIndex:3,
},
fieldsInput1:{
 borderWidth:1,
 color:"#000",
 width:'70%',
 height:40,
 margin:2,
 borderColor:"#009688",
 textAlign:'center',
 borderRadius:5,
 backgroundColor: "white",
},

active:{
   backgroundColor:'#03365c',
   borderColor:"#009688",
   borderWidth:2,
   color:'white'
},
addLoadbtn:{
   backgroundColor:'#ff9c00',
   color:'#000',
   marginTop:10,
   marginLeft:20,
   fontSize: 12,
   borderRadius:20,
   height: 40,
   width: 120,
   textAlign:'center',
   padding: 10,
   fontWeight: 'bold',
   zIndex:3,
}
});
