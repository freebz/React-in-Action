// 예제 6.6  대체 지도 이미지 추가하기(src/components/map/DisplayMap.js)

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
    this.generateStaticMapImage = this.generateStaticMapImage.bind(this);
  }
  //...
  generateStaticMapImage(lat, lng) {
    return `https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/${lat},${lng}, 12,0,0/600x175?access_token=${process.env.MAPBOX_API_TOKEN}`;
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
	  {!this.state.mapLoaded && (
	    <img
  	      className="map"
	      src={this.generateStaticMapImage(
		this.state.location.lat,
		this.state.location.lng
	      )}
	      alt={this.state.location.name}
	    />
	  )}
        </div>
      </div>
      this.props.displayOnly && (
	<div key="location-description" className="location-description">
	  <i className="location-icon fa fa-loction-arrow" />
  	  <span className="location-nam">{this.state.location.name}</span>
	</div>
      )
    ];
  }
}
