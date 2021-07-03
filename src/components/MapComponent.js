import React from 'react';
import Map from 'google-map-react';
import  { Marker } from 'react-google-maps';
import { Icon } from 'iconify';
import locationIcon from 'iconify'





const GoogleMap = () => {
    return (
        <div className="row w-100">
            <div className="col-md-6 offset-1 text-center" style={{ width: '60%', height: '550px'}}>
                <Map
                    bootstrapURLKeys={{ key: 'AIzaSyAzBBg-SKhxXCRpICNZ58OcJyy0DzssZZg' }}
                    defaultZoom={13}
                    defaultCenter={{
                        lat: 34.194096488174075, 
                        lng: -77.806217628262
                    }}
                />
                
            </div>
        </div>
    )
}

export default GoogleMap;
































// const MapStyle = ({ text }) => (
//     <div style={{
//         color: 'white', 
//         background: 'grey',
//         padding: '15px 10px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
//       }}>
//         {text}
//       </div>
//     );
  







// class Maps extends Component {
//     static defaultProps = {
//         center: { lat: 34.194096488174075, lng: -77.806217628262 },
//         zoom: 11,
        
//     };
//     render() {
//         return (
//             <div className="col-md-6 offset-1" style={{ height: '30vh', width: '60%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={'AIzaSyAzBBg-SKhxXCRpICNZ58OcJyy0DzssZZg'}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                     >
//                     <MapStyle
//                         lat={this.props.center.lat}
//                         lng={this.props.center.lng}
//                         text={"BHGF"}
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }

