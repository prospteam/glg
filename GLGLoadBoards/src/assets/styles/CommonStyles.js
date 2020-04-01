import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content:{
        marginTop: 10,
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 20,
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
        // 'NativeBase.Text': {
        //   color: variables.tabBarActiveTextColor,
        //   fontSize: variables.tabBarTextSize,
        //   lineHeight: 16
        // },
        // 'NativeBase.Icon': {
        //   color: variables.tabBarActiveTextColor
        // },
        // 'NativeBase.IconNB': {
        //   color: variables.tabBarActiveTextColor
        // },
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