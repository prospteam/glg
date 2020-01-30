import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import bg_image from './assets/images/bg_image.png';
import logo from './assets/images/Logo.png';

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
      <View>
         <ImageBackground source={bg_image} style={{width: '100%', height: '100%'}}>
            <View style={{marginTop:"20%",justifyContent: "center", alignItems: "center"}}>
               <Image source={logo} style={{width: 150, height: 150, borderRadius: 100}} />
            </View>
            <View style={{marginTop:60,justifyContent: "center", alignItems: "center"}}>
               <Text style={{fontSize: 20, color:"#fff"}}>Reset Password</Text>
               <Text  style={{margin:10,fontSize: 13, color:"#fff", textAlign:'center',}}>We will send you an email that will allow you to reset your password.</Text>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="Email Address" onChangeText={text => this.onChangeText(text)}/>

               <TouchableOpacity>
                         <Text style={styles.btnlogin}>Reset Password</Text>
                </TouchableOpacity>
               <View style={{justifyContent: "center", alignItems: "center"}}>
               <TouchableOpacity><Text  style={{color:"#fff"}}>Cancel</Text></TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
      </View>

      );
   }

}
const styles = StyleSheet.create({

InputRegister:{
 borderWidth:2,
 width:'70%',
 height:50,
 margin:2,
 color:"#fff",
 borderColor:"#009688",
 textAlign:'center',
 borderRadius:5,
 backgroundColor: "#164367"
},
btnlogin:{
  backgroundColor:'#fff',
  color:'#000',
  margin:10,
  fontSize: 15,
  borderRadius:20,
  height: 40,
  width: 150,
  textAlign:'center',
  padding: 7,
  fontWeight: 'bold',
}

});
