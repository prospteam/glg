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
      paddingTop:'15%',
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
  vehicle_type:{
    color:'orange'
},
trackinput:{
  justifyContent: "center",
   alignItems: "stretch",
   borderBottomWidth : 1,
   borderColor: "#24cea7",
   width:'60%'
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

});
