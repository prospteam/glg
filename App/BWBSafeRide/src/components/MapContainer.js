import React from 'react';
import { View, } from 'react-native';
import { Button, Text, Input, Form, Item, Label, DatePicker } from 'native-base';
import MapInput from './MapInput';
import MyMapView from './MyMapView';
import { getLocation } from './getLocation';

class MapContainer extends React.Component {
  state = {
    region: {
      latitude: 43.7984299,
      longitude: -84.7310113,
      latitudeDelta: 3,
      longitudeDelta: 3,
    },
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // this.updateState({
    //   latitude: 123.9,
    //   longitude: 10.2833,
    // });
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude,
      });
      this.updateSelectedLatLong({
        latitude: data.latitude,
        longitude: data.longitude,
      });
    })
    .catch(err => {
      console.log('Error:'+err.message);
    });
  }

  updateState(location) {
      let latDelta = (location.latitudeDelta) ? location.latitudeDelta:0.003;
      let longDelta = (location.longitudeDelta) ? location.longitudeDelta:0.003;
      this.setState({
        region: {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: latDelta,
          longitudeDelta: longDelta,
        },
      });
  }

  updateSelectedLatLong(location) {
    this.setState({
      selectedLatLong:{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }
    });
  }

  getCoordsFromName(loc,inputField) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng,
    });
    this.updateSelectedLatLong({
      latitude: loc.lat,
      longitude: loc.lng,
    });

    if (inputField==='from') {
        this.setState({
          form_from:'from',
          form_from_latlong:{
            latitude: loc.lat,
            longitude: loc.lng,
          },
        });
    }else{
        this.setState({
          form_to:'to',
          form_to_latlong:{
            latitude: loc.lat,
            longitude: loc.lng,
          },
        });
    }
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  getDataFromMap(params) {
    // this.setState({ region });
    // console.log('From Map');
    // console.log(params);
      this.setState({
        distance:params.distance,
        duration:params.duration,
        height:500
      });
      console.log(this.state);
  }

  bookNow(e){
    console.log('Booknow');
    console.log(this.state);
  }

  render() {
    console.log('MapContainer Rendered');
    const { distance, duration } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {this.state.region['latitude'] ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              height={this.state.height}
              region={this.state.region}
              form_from={this.state.form_from_latlong}
              form_to={this.state.form_to_latlong}
              selectedLatLong={this.state.selectedLatLong}
              onRegionChange={reg => this.onMapRegionChange(reg)}
              getData={params => this.getDataFromMap(params)}
            />
          </View>
        ) : null}

          <View style={{
            zIndex:1,
            position: 'absolute',
            bottom:0,
            flex: 0.4,
            textAlign:'center',
            width:'100%',
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}>

            <View style={{
              backgroundColor:'white',
              padding:20,
              borderRadius:10,
              shadowColor: "#000",
              shadowOffset: {
              	width: 0,
              	height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}>

              <Text style={{
                width:'100%',
                textAlign: 'left',
                fontWeight:'bold',
                fontSize:20,
                marginBottom:15
              }}>
              Where are you going?
              </Text>
              <Label>Pickup</Label>
              <MapInput notifyChange={loc => this.getCoordsFromName(loc,'from')} placeholder='Enter pickup location.'/>
              <View
                style={{
                  borderBottomColor: '#d9d9d9',
                  borderBottomWidth: 2,
                }}
              />
              <Label>Drop-Off</Label>
              <MapInput notifyChange={loc => this.getCoordsFromName(loc,'to')} placeholder='Enter drop-off location' />
              {distance ?(
                  <Form>
                  <View
                    style={{
                      borderBottomColor: '#d9d9d9',
                      borderBottomWidth: 2,
                      marginTop: 20,
                      marginLeft: -20,
                      marginRight: -20,
                    }}
                  />

                    <Label>Pickup Date</Label>
                    <DatePicker
                      defaultDate={new Date(2018, 4, 4)}
                      minimumDate={new Date(2018, 1, 1)}
                      maximumDate={new Date(2018, 12, 31)}
                      locale={"en"}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Select date"
                      textStyle={{ color: "green" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      disabled={false}
                      />
                    <Item floatingLabel last>
                      <Label>Pickup Time</Label>
                      <Input />
                    </Item>
                  <Button style={{marginTop: 30}} onPress={(e) => this.bookNow(e)}>
                      <Text style={{
                        width:'100%',
                        textAlign: 'center',
                      }}>Book Now</Text>
                  </Button>
                </Form>
                ) : null}
            </View>
          </View>
      </View>
    );
  }
}

export default MapContainer;
