// 예제 6.5  동적 지도 구현하기(src/components/map/DisplayMap.js)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class DisplayMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLoaded: false,
      location: {
	lat: props.location.lat,
	lng: props.location.lng,
	name: props.location.name
      }
    };
    this.ensureMapExists = this.ensureMapExists.bind(this);
    this.updateMapPosition = this.updateMapPosition.bind(this);
  }
  //...
  componentDidMount() {
    if (this.map && !this.props.displayOnly) {
      this.map.invalidateSize(false);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location) {
      const locationsAreEqual = Object.keys(nextProps.location).every(
	k => nextProps.location[k] === this.props.location[k]
      );
      if (!locationsAreEqual) {
	this.updateMapPosition(nextProps.location);
      }
    }
  }
  //...
  ensureMapExists() {
    if (this.state.mapLoaded) return;
    this.map = this.L.mapbox.map(this.mapNode, 'mapbox.streets', {
      zoomControl: false,
      scrollWheelZoom: false
    });
    this.mapsetView(this.L.latLng(this.state.location.lat, this.state.location.lng), 12);
    this.addMarker(this.state.location.lat, this.state.location.lng);
    this.setState(() => ({ mapLoaded: true }));
  }
  updateMapPosition(location) {
    const { lat, lng } = location;
    this.map.setView(this.L.latLng(lat, lng));
    this.addMarker(lat, lng);
    this.setState(() => ({ location }));
  }
  addMarker(lat, lng) {
    if (this.marker) {
      return this.marker.setLatLng(this.L.latLng(lat, lng));
    }
    this.marker = this.L.marker([lat, lng], {
      icon: this.L.mapbox.marker.icon({
	'marker-color': '#4469af'
      })
    });
    this.marker.addTo(this.map);
  }
  render() {
    return [
      <div key="displayMap" className="displayMap">
        <div
          className="map"
          ref={node => {
	    this.mapNode = node;
	  }}
        >
        </div>
      </div>
    ];
  }
}
