// 예제 6.3  지도 컴포넌트에 참조 추가하기(src/components/map/DisplayMap.js)

import React, { Comoponent } from 'react';
import PropTypes from 'prop-types';
export default class DisplayMap extends Component {
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
