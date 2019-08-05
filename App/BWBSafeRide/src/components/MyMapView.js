import React from 'react';
import Mapview, { MapView, AnimatedRegion, Marker  } from 'react-native-maps';

const MyMapView = (props) => {
            console.log('Came');
            console.log(props);
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}>
            {
            // <MapView.Marker.Animated
            //     coordinate={props.region} />
            }
            <MapView.Marker
               coordinate={{latitude: 37.78825,
               longitude: -122.4324}}
               title={"title"}
               description={"description"}
            />
        </MapView>
    )
}

export default MyMapView;
