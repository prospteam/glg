import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content:{
        marginTop: 10,
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 20,
    },
    contentContainer:{
        backgroundColor: '#03365c',
        flex: 1,
        // height: '100%',
        flexDirection: 'column', // DEFAULT
        // width: '100%'
    },
    contentHeader:{
        paddingTop:5,
    },
    contentBody:{
        // marginLeft:1,
        // marginRight:1, container Edges unta
        paddingTop:10,
        backgroundColor: '#e1f8ff',
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:15,
    },
    contentItem:{
        margin:10,
    },
    contentCenter:{
        marginTop: 15,
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeCustom: {
        borderRadius: 0,
        borderTopColor: '#ff9c00',
        borderTopWidth: 10,
        },
    dateInput: { borderWidth: 0 },
    ligtFont: {
        color: '#fff',
        marginRight:10,
        marginLeft:10,
        // fontWeight: 'bold',
        // fontSize: 30,
    },
    darkFont: {
        color: '#03365c',
        marginRight:10,
        marginLeft:10,
        // fontWeight: 'bold',
        // fontSize: 30,
    },
    headerBigger: {
        fontSize: 18,
        // fontWeight: 'bold',
        // fontSize: 30,
    },
    footertab_button: {
        position:'relative'
    },
    footertab_icon_active: {
        color:'#086f87'
    },
    vehicle_type:{
        color:'orange'
    },
    arrow_des:{
        color:'orange',
        fontSize:15,
    },
    send_rate:{
        color:'#05426e',
        fontSize:15,
    },
    order_detailes:{
        color:'white',
        fontSize: 17,
    },

    editIcon:{
        color:'white',
        fontSize: 15,
    },
    headerIcon:{
        color:'#05426e',
        fontSize: 22,
    },
    deleteIcon:{
        color:'white',
        fontSize: 15,
        marginLeft:80,
    },
    footertab_active_indicator: {
        width:'75%',
        height:10,
        backgroundColor: '#ff9c00',
        position:'absolute',
        top:0
    },
    middle: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },

    text_input:{
        borderWidth: 0.5,
        borderColor: '#009688',
        borderRadius: 5,
        width:'58%',
        height: 35
    },
    date_text_input:{
        borderWidth: 0.5,
        borderColor: '#009688',
        borderRadius: 5,width:'70%',
        height: 35,
    },
    text_input_edit:{
        borderWidth: 0.5,
        borderColor: '#009688',
        borderRadius: 5,
        width:'100%',
        height: 35,
        padding:10
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        borderWidth: 0.5,
        borderColor: '#009688',
        borderRadius: 5,
    },
    middle_text:{
        fontWeight: 'bold',
        fontSize:12,
        marginTop:10
    },
    search_button:{
        backgroundColor: 'orange',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 50,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginTop: 10,
        marginBottom:10
    },
    add_loads:{
        backgroundColor: '#05426e',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 2,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginTop: 10,
        marginBottom:10
    },
    call_button:{
        backgroundColor: 'orange',
        color: 'white',
        borderRadius: 50,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginLeft:65
    },
    call_button_sad:{
        backgroundColor: 'orange',
        color: 'white',
        borderRadius: 50,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
    },
    sendratebtn:{
        backgroundColor: 'orange',
        color: 'white',
        borderRadius: 50,
        width: 150,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginLeft:65
    },
    cancelratebtn:{
        backgroundColor: '#ccc2c2',
        color: 'black',
        borderRadius: 50,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
    },
    send_rate_email:{
        backgroundColor: '#05426e',
        color: 'white',
        borderRadius: 30,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
    },
    findtruck_button:{
        backgroundColor: '#05426e',
        color: 'white',
        borderRadius: 50,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginLeft:65
    },
    findtruck_button_sad:{
        backgroundColor: '#05426e',
        color: 'white',
        borderRadius: 50,
        width: 120,
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        // marginLeft:65
    },
    fieldsInput1:{
        borderWidth : 1
    },
    iconCompleted:{
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent:'space-between',

      },
     dash:{
        width:1,
        height: 20,
        top:0,
        marginLeft:25,
        flexDirection:'column',
     },
});
