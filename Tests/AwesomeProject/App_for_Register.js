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
            <View style={{marginTop:"8%",justifyContent: "center", alignItems: "center"}}>
               <Image source={logo} style={{width: 150, height: 150, borderRadius: 100}} />
            </View>
            <View style={{justifyContent: "center", alignItems: "center"}}>
               <Text style={{fontSize: 20, color:"#fff"}}>Register</Text>
               <TextInput style={styles.InputRegister} placeholderTextColor="#fff" placeholder="First Name" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="Last Name" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="User Name" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="Password" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="Address" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="Contact Number" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="Email Address" onChangeText={text => this.onChangeText(text)}/>
               <TextInput style={styles.InputRegister}placeholderTextColor="#fff"  placeholder="As a Shipper" onChangeText={text => this.onChangeText(text)}/>

               <TouchableOpacity>
                         <Text style={styles.btnlogin}>Register</Text>
                </TouchableOpacity>
               <View style={{justifyContent: "center", alignItems: "center"}}>
               <TouchableOpacity><Text  style={{color:"#fff"}}>Already a Member? Login Here</Text></TouchableOpacity>
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
 height:40,
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
  height: 30,
  width: 100,
  textAlign:'center',
  padding: 4,
  fontWeight: 'bold',
}

});
