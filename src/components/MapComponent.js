import React from 'react';
import Map from 'google-map-react';



const GoogleMap = () => {
    return (
        <div className="row w-100">
            <div className="col-md-6 offset-1 text-center" style={{ width: '60%', height: '550px'}} id='map'>
                <Map
                    bootstrapURLKeys={{ key: 'AIzaSyAzBBg-SKhxXCRpICNZ58OcJyy0DzssZZg' }}
                    defaultZoom={13}
                    defaultCenter={{
                        lat: 34.194096488174075, 
                        lng: -77.806217628262
                    }}
                />          
            </div>
            <div className='col-md-5 align-self-center'>
                <p>708 S Lumina Ave <br />
                Wrightsville Beach, NC 28480 <br />
                <a role="button" className="btn btn-link btn-lg"  href="tel:+9876543210">(987)867-5309</a><br />
                <a role="button" className="btn btn-link btn-lg pl-0" href="mailto:behappilyglutenfree@gmail.com">behappilyglutenfree@gmail.com</a></p><br />
                <p class="text-center">Connect with us on social media for lots of yummy pictures and yummy sales!</p>
                <div class="col text-center">
                    <a className="btn btn-social-icon btn-instagram ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://instagram.com/" rel="noreferrer"><i className="fa fa-instagram"></i></a>{' '}
                    <a className="btn btn-social-icon btn-facebook ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://facebook.com/" rel="noreferrer"><i className="fa fa-facebook"></i></a>{' '}
                    <a className="btn btn-social-icon btn-twitter ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://twitter.com/" rel="noreferrer"><i className="fa fa-twitter"></i></a>{' '} 
                </div>
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

