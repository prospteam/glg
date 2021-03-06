import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    text_input:{
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 5,
        width:'70%',
        height: 50,
        backgroundColor: '#00000082',
        color: "#fff",
    },
    button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: '50%',
    borderRadius:20,
    height:50,
  },
  contentBody:{
      // marginLeft:1,
      // marginRight:1, container Edges unta
      // paddingTop:'15%',
      flex:1,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:15,
  },
  contentItem:{
      margin:10,
      borderRadius: 5,
  },
  iconCompleted:{
      flexDirection: 'column',
      alignItems: 'center',
    },
  vehicle_type_pend:{
    color:'#429bcde8'
},
vehicle_type_proccess:{
  color:'#e49c5ef0'
},
vehicle_type_deliv:{
  color:'#24b56be0'
},
vehicle_type:{  color:'orange'},
trackinput:{
  justifyContent: "center",
   alignItems: "stretch",
   borderBottomWidth : 1,
   borderColor: "#24cea7",
   width:'60%',
   color:'white',
},
dash:{
   width:1,
   height: 20,
   top:0,
   marginLeft:25,
   flexDirection:'column',
},
dash1:{
   width:1,
   height:50,
   top:0,
   flexDirection:'column',
},
MainContainerAddCamp :{
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 20,
padding: 5,
},
TextInputStyleClass: {
textAlign: 'left',
paddingLeft: 7,
marginBottom: 7,
height: 40,
borderWidth: 1,
borderColor: '#00BCD4',
},
PickerStyleClass:{
    backgroundColor:'#87ceeb',
    paddingLeft: 7,
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: '#FF5722',
}

});
