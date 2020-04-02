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
    footertab_active_indicator: {
        width:'75%',
        height:10,
        backgroundColor: '#ff9c00',
        position:'absolute',
        top:0
        }
});