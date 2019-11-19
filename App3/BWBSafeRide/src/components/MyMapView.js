import React from 'react';
import MapView, { AnimatedRegion, Marker  } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Icon } from 'native-base';
import MapViewDirections from 'react-native-maps-directions';

let { width, height } = Dimensions.get('window');
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC8lpkvXFDua9S2al669zfwz7GSkeVFWs4';

// this.mapView = null;

const MyMapView = (props) => {
  console.log('MyMapView Renedering');
  console.log(props);
  // height = (props.height)?props.height+300:height;
  return (
    <MapView
        style={{ flex: 1,  height: height-100,  width: width }}
        // region={{origin}}
        region={props.region}
        showsUserLocation={true}
        // ref={c => this.mapView = c}
        onRegionChangeComplete={(reg) => props.onRegionChange(reg)}
        >
          {props.form_from && <MapView.Marker
               coordinate={props.form_from}
               title={"Pickup Location"}
               description={props.geocode_name}
               pinColor='#45A163'
            />}
            {props.form_to && <MapView.Marker
                 coordinate={props.form_to}
                 title={"Drop-off Location"}
                 description={"description"}
              />}
          <MapViewDirections
            origin={props.form_from}
            destination={props.form_to}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="#4372AA"
            onReady={result => {
              props.getData(result)
              // console.log(`Distance: ${result.distance} km`)
              // console.log(`Duration: ${result.duration} min.`)
              // this.mapView.fitToCoordinates(result.coordinates, {
              //   edgePadding: {
              //     right: (width / 20),
              //     bottom: (height / 5),
              //     left: (width / 20),
              //     top: (height / 20),
              //   }
              // });
            }}
            onError={(errorMessage) => {
              console.log('GOT AN ERROR');
            }}
          />

    </MapView>
  )
}
export default MyMapView;
