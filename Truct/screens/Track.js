import React from 'react';
import { StyleSheet, Dimensions, View, Image  } from 'react-native';
import { Container, Text, Button, Icon  } from 'native-base';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import Steps from 'react-native-steps';

const GOOGLE_API_KEY = 'AIzaSyBKvD_JyWVGHXqI-Sna7Jnk1wE3zsKyCAU';

const labels = ["Alcoy", "Santander", "Samboan", "Badian", "Cebu City"];

const configs = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#2ed573',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#2ed573',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#2ed573',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#2ed573',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#2ed573',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 11,
    currentStepLabelColor: '#2ed573'
}

const delta_latitude = 1;
const delta_longitude = Dimensions.get("window").width / Dimensions.get("window").height * delta_latitude;

class Track extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {
            current: 1,
            location_drag:{
                latitude: 10.3185183,
                longitude: 123.908407
            },
            region:{
                latitude: 8.4542,
                longitude: 124.6319,
                latitudeDelta: delta_latitude,
                longitudeDelta: delta_longitude
            },
            currentLocation:{
                latitude:0,
                longitude:0,
                latitudeDelta: delta_latitude,
                longitudeDelta: delta_longitude
            },
            marker:[{           
                    location:{
                        latitude: 9.7117,
                        longitude: 123.4608,
                    },     
                    title:'Alcoy',
                    description:'Sample Description' 
                }, {
                    location: {
                        latitude: 9.4468,
                        longitude: 123.3374,
                    },
                    title: 'Santander',
                    description: 'Sample Description'
                }, {
                    location: {
                        latitude: 9.8321,
                        longitude: 123.4159,
                    },
                    title: 'Badian',
                    description: 'Sample Description'                                        
                }, {
                    location: {
                        latitude: 9.5044,
                        longitude: 123.3374,
                    },
                    title: 'Samboan',
                    description: 'Sample Description'                                        
                }, {
                    location: {
                        latitude: 10.3157,
                        longitude: 123.8854,
                    },
                    title: 'Cebu City',
                    description: 'Sample Description'                           
                }       
            ]
        }
        this.goToDriversLocation = this.goToDriversLocation.bind(this);
    }

    onPageChange(position) {
        this.setState({ current: position });
    }

    componentDidMount() {             
        Geolocation.getCurrentPosition(position => {
           const region = {
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               latitudeDelta: delta_latitude,
               longitudeDelta: delta_longitude
           }
           this.setState({region});
        })               
    }

    goToDriversLocation(){
        Geolocation.getCurrentPosition(position => {
            const region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: delta_latitude,
                longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * delta_latitude
            }
            this.mapView.animateToRegion(region, 1000);
        });    
    }

    getNewCoordinate(e){
        // this.setState(prevState => ({
        //     marker: {
        //         ...prevState.marker,
        //         [prevState.marker[index].location]: e.nativeEvent.coordinate,
        //     },
        // }));
        console.log(e);
    }

    render() {            
        const end_location_index = this.state.marker.length - 1;          
        const way_points = [];
        const waypoints_list = this.state.marker.map((response, index) => {           
            way_points.push({ latitude:response.location.latitude,longitude:response.location.longitude});
        });      
        const start_location = this.state.marker[0].location;
        const end_location = this.state.marker[end_location_index].location;          
        const marker_display = this.state.marker.map((response,index) => {    
                               
            return (
                <>
                    <Marker draggable coordinate={response.location} onDragEnd={this.getNewCoordinate.bind(this)} title={response.title} description={response.description} key={index} />
                    {/* <MapViewDirections origin={start_location} waypoints={way_points} precision="high" destination={end_location} apikey={GOOGLE_API_KEY} strokeWidth={3} strokeColor="#1e90ff" key={index + 10} optimizeWaypoints={false}/>                     */}
                </>
            )
        });      
        return (   
            <View >                                  
                <MapView ref={(map) => { this.mapView = map; }} showsMyLocationButton={true}  provider={PROVIDER_GOOGLE} initialRegion={this.state.region} style={styles.map} showsUserLocation={true}>
                    {marker_display}                                         
                </MapView> 
                <View style={styles.map_action}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View>
                            <Image source={require('../assets/Avatars/avatar_1577909_640.png')} style={{ width: 86, height: 86,borderRadius:170}} resizeMode="contain" />
                        </View>
                        <View>
                            <View style={{marginLeft:25,marginTop:10}}>
                                <View>
                                    <Text style={{fontSize:20,}}>Driver Name</Text>                                
                                    <Text style={{fontSize:13,color:'gray'}}>Plate #: 0701-886541</Text>
                                    <Text style={{fontSize:13,color:'gray'}}>Speed: 57 KPH</Text>
                                </View>
                                <View style={{marginTop:20}}>
                                    <Button onPress={() => this.goToDriversLocation()}>                                        
                                        <Text>Driver's Location</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Steps configs={configs} current={this.state.current} labels={labels} reversed={false} count={labels.length}/>
                </View>
                <Navigation />
            </View>                                       
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,        
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
       height:'93%'
    },
    map_action: { 
        width: Dimensions.get("window").width - 50, 
        height: '30%',       
        backgroundColor: "transparent", 
        position: 'absolute', 
        top: "60%", 
        padding: 10, 
        zIndex: 10, 
        backgroundColor: 'white', 
        borderRadius: 40,       
        alignSelf:'center'
    }
});

const mapStateToPros = (state) => {
    return {
      
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToPros, mapActionToDispatch)(Track);