import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from '../Images/Logo/logo2.png';
import '../../App.css';

const styles = {
  logo: {
    width: 65,
    height: 70,
    opacity: 1,
    color: 'black',
    backgroundImage: `url(${logo})`
  }
}

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.468418,
      lng: -74.360347
    },
    zoom: 16,
  };

  render() {
    
    const Marker = ({text}) => {
      return (
        <div style={styles.logo}>{text}</div>
      )
    }

    return (
      <div className="map" style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: 'AIzaSyAUlX2l1164BMoP6eldRDjzzgZJzTpBYiI',
            language: 'en',
            region: 'us'
           }}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
          <Marker
            lat={40.468418}
            lng={-74.360347}
            text={''}
            // text={logo}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;