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
        paddingTop:10,
    },
    contentBody:{
        paddingTop:10,
        backgroundColor: '#e1f8ff',
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
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
    ligtFont: {
        color: '#fff',
        marginRight:10,
        marginLeft:10,
        // fontWeight: 'bold',
        // fontSize: 30,
    },
    headerBigger: {
        fontSize: 25,
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
    order_detailes:{
        color:'white',
        marginLeft:170,
        fontSize: 15,
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
        borderRadius: 5,width:'70%',
        height: 35
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
        marginTop: 20,
        marginBottom:20
    },
    fieldsInput1:{
        borderWidth : 1
    }
});
