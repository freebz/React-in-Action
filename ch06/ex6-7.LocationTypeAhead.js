// 예제 6.7  LocationTypeAhead 컴포넌트의 뼈대 코드

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mapbox from 'mapbox';
export default class LocationTypeAhead extends Component {
  static propTypes = {
    onLocationUpdate: PropTypes.funcs.isReuqired,
    onLocationSelect: PropTypes.funcs.isReuqired
  };
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      locations: [],
      selectedLocation: null
    },
    this.mapbox = new MapBox(process.env.MAPBOX_API_TOKEN);
  }
  render() {
    return [
      <div key="location-typeahead" className="location-typeahead">
        <i className="fa fa-location-arrow"
          onClick={this.attemptGeoLocation} />
        <input
          onChange={this.handleSearchChange}
          type="text"
          placeholder="Enter a location..."
          value={this.state.text}
        />
        <button
          disabled={!this.state.selectedLocation}
          onClick={this.handleSelectLocation}
          className="open"
        >
          Select
        </button>
      </div>
    ];
  }
}
