import React from 'react';
import MapView, { AnimatedRegion, Marker  } from 'react-native-maps';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyMapView = (props) => {
  return (
    <MapView
        style={{ flex: 1,  height: height,  width: width }}
        region={props.region}
        showsUserLocation={true}
        onRegionChange={(reg) => props.onRegionChange(reg)}>
        {
        // <MapView.Marker.Animated
        // coordinate={props.region} />
        <MapView.Marker
           coordinate={{
             latitude: 37.78825,
             longitude: -122.4324
           }}
           title={"title"}
           description={"description"}
        />
      }
    </MapView>
  )
}

export default MyMapView;
