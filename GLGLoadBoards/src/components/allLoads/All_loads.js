import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';

export default class Dashboard extends Component {

   state = {
      color: 'white',
      show: false,
      msg: "",
      theme: "warning",
      title: "Warning"
  }

   handleClose = () => {
      this.setState({
         show: false
      })
   }
   onChangeText = (text) => {
      this.setState({
         color: text

      })
   }
   constructor(props) {
      super(props)
      this.state = {
         origin: '',
         destination: '',
         length: '',
         width: '',
         height: '',
         weight: '',
         date: '',
      }
   }


   handlePress() {
      // console.log(this.state.origin);
      // console.log(this.state.destination);
      // console.log(this.state.length);
      // console.log(this.state.width);
      // console.log(this.state.height);
      // console.log(this.state.weight);
      // console.log(this.state.date);
      // console.log(this.state.comments);
      // console.log(this.state.commodity);
      // console.log(this.state.refnumber);
      // console.log(this.state.trailertype);

      const that = this;

      axios.post('http://192.168.20.33/Projects/globallogisticsgroup/Loadboard_Website/loadboard/loads/add_load/yes?glg_api=yes', {
         origin: this.state.origin,
         destination: this.state.destination,
         length: this.state.length,
         width: this.state.width,
         height: this.state.height,
         weight: this.state.weight,
         date: this.state.date,
         comments: this.state.comments,
         commodity: this.state.commodity,
         reference: this.state.reference,
         trailer_type: this.state.trailer_type,
         // allLoads:'All_loads'
      }).then(function (response) {

         console.log(response);

         if (response.data.status == "success") {
            that.setState({
               show: true,
               msg: "Invalid Loads",
               theme: "warning",
               title: "Warning!",
            });
            Actions.Dashboard()
         } else {
            that.setState({
               show: true,
               msg: "Add Loads Successfully",
               theme: "success",
               title: "Success!",
            });
         }
      }).catch(function (err) {
         console.log(err);
         // Actions.Dashboard();
      });


   }

   render() {
      return (
         <ScrollView style={{ flex: 1, backgroundColor: '#e1f8ff' }}>
            <View style={{ flex: 1, position: 'relative', height: 150, width: '100%' }}>
               <View style={{ backgroundColor: '#03365c', height: 250, position: 'absolute', width: '100%' }}>
                  <Text style={styles.TextInput}>Proweaver</Text>
                  <Text style={styles.tableName}>Loads</Text>
               </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#e1f8ff', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
               <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: -75, zIndex: 4 }}>
                  <View style={styles.btnlogin}>
                     <TouchableOpacity>
                        <Text>Add New Load</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={styles.btnlogin}>
                     <TouchableOpacity>
                        <Text>All Loads</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={styles.btnlogin}>
                     <TouchableOpacity>
                        <Text>Load Maps</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <ScrollView>
                  {/* <View>
                  <Text>New Load Information</Text>
                  </View> */}
                  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', marginTop: 5, marginHorizontal: 20, padding: 30, borderRadius: 10, marginBottom: '50%' }}>
                     <SCLAlert
                        show={this.state.show}
                        onRequestClose={this.handlePress}
                        theme={this.state.theme}
                        title={this.state.title}
                        subtitle={this.state.msg}
                     >
                        <SCLAlertButton theme="default" onPress={this.handleClose}>OK</SCLAlertButton>
                     </SCLAlert>
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Origin" onChangeText={(text) => this.setState({ origin: text })} />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Destination" onChangeText={(text) => this.setState({ destination: text })} />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Length" onChangeText={(text) => this.setState({ length: text })} />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Width" onChangeText={(text) => this.setState({ width: text })} />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Height" onChangeText={(text) => this.setState({ height: text })} />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Weight" onChangeText={(text) => this.setState({ weight: text })} />
                     {/* <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Date" onChangeText={(text) => this.setState({ date: text })} /> */}
                     <DatePicker
                        style={styles.fieldsInput1}
                        date={this.state.date}
                        mode="date"
                        placeholder="Select Date"
                        format="YYYY-MM-DD"
                        minDate="2020-01-01"
                        maxDate="2025-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(text) => this.setState({ date: text })}
                     />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Commodity" onChangeText={(text) => this.setState({ commodity: text })} />
                     <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" keyboardType='numeric' placeholder="Reference Number" onChangeText={(text) => this.setState({ reference: text })} />
                     {/* <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Trailer Type" onChangeText={(text) => this.setState({ trailertype: text })} /> */}
                     <View
                        style={styles.fieldsInput1}
                     >
                        <RNPickerSelect
                           onValueChange={(text) => this.setState({ trailer_type: text })}
                           items={[
                              { value: 'AC', label: 'AC (Auto Carrier)' },
                              { value: 'CRG', label: 'CRG (Cargo Van)' },
                              { value: 'FINT', label: 'FINT (Flat-Intermodal)' },
                              { value: 'CONT', label: 'CONT (Container)' },
                              { value: 'CV', label: 'Curtain Van' },
                              { value: 'DD', label: 'DD (Double Drop)' },
                              { value: 'DT', label: 'DT (Dump Trailer)' },
                              { value: 'F', label: 'F (Flatbed)' },
                              { value: 'FS', label: 'FS (Flat+Sides)' },
                              { value: 'LA', label: 'LA (Landal)' },
                              { value: 'FT', label: 'FT (Flat+Tarp)' },
                              { value: 'HB', label: 'HB (Hopper Bottom)' },
                              { value: 'HS', label: 'HS (Hotshot)' },
                              { value: 'LB', label: 'LB (Lowboy)' },
                              { value: 'MX', label: 'MX (Maxi Flat)' },
                              { value: 'PNEU', label: 'PNEU (Pneumatic)' },
                              { value: 'PO', label: 'PO (Power Only)' },
                              { value: 'R', label: 'R (Reefer)' },
                              { value: 'RINT', label: 'RINT (Reefer-Intermodal)' },
                              { value: 'RGN', label: 'RGN (Removable Gooseneck)' },
                              { value: 'VV', label: 'VV (Van+Vented)' },
                              { value: 'V', label: 'V (Dry Van)' },
                              { value: 'SD', label: 'SD (Step Deck/Single Drop)' },
                              { value: 'TNK', label: 'Tanker' },
                              { value: 'VA', label: 'VA (Van+Airride)' },
                              { value: 'VINT', label: 'VINT (Van-Intermodal)' },
                              { value: 'Other', label: 'Other' },
                           ]}
                        />
                     </View>
                     <TextInput style={styles.textArea} placeholderTextColor="#000" multiline={true} numberOfLines={5} placeholder="Comments" onChangeText={(text) => this.setState({ comments: text })} />
                     {/* <TouchableOpacity>
                        <Text style={styles.addLoadbtn} onPress={() => this._handlePress()}>Add Load</Text>
                     </TouchableOpacity> */}
                     <Button
                        style={styles.addLoadbtn}
                        onPress={() => this.handlePress()}
                        title="Add Load">
                        Add Load
                     </Button>
                  </View>
               </ScrollView>
            </View>
         </ScrollView>
      );
   }

}


const styles = StyleSheet.create({

   btnlogin: {
      color: '#fff',
      borderRadius: 5,
      borderColor: "#009688",
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 3,
      width: '28%',
      height: '30%',
      borderRadius: 5,

   },
   TextInput: {
      color: 'white',
      zIndex: 4,
      marginTop: 25,
      marginLeft: 60
   },
   fieldsInput1: {
      borderWidth: 1,
      width: '100%',
      height: 40,
      borderColor: "#009688",
      textAlign: 'center',
      borderRadius: 5,
      margin: 3,
   },
   textArea: {
      borderWidth: 1,
      width: '100%',
      borderColor: "#009688",
      textAlign: 'center',
      borderRadius: 5,
      margin: 3,
      height: 150,
      justifyContent: "flex-start"
   },
   tableName: {
      marginLeft: 20,
      marginTop: 15,
      fontSize: 20,
      color: 'white'
   },
   addLoadbtn: {
      backgroundColor: 'orange',
      color: 'white',
      justifyContent: 'center',
      borderRadius: 50,
      width: 120,
      height: '30%',
      textAlign: 'center',
      padding: 8,
      fontSize: 15,
      marginTop: 20,
   }

});