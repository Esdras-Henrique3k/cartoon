// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: -19.8719,
//             lng: -43.9662,
//         },
//         zoom: 20
//     };

//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '70vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: 'AIzaSyA7QPcR2UPrudRjTMBaiNSO751p1s1ZUEk' }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={-19.8719}
//                         lng={-43.9662}
//                         text="Sede"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }

// export default SimpleMap;


import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '70vh'
};

const center = {
    lat: -19.8719,
    lng: -43.9662,
};

const position = {
    lat: -19.8719,
    lng: -43.9662,
}

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyA7QPcR2UPrudRjTMBaiNSO751p1s1ZUEk   "
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker
                    // onLoad={onLoad}
                    position={position}
                    label="Sede"
                />
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)