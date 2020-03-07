// 예제 6.10  사용자에게 검색 결과를 표시하기(src/components/map/LocationTypeAhead.js)

//...
render() {
    return [
      <div key="location-typeahead" className="location-typeahead">
        <i className="fa fa-location-arrow" onClick={this.attemptGeoLocation} />
        <input
          onChange={this.handleSearchChange}
          type="text"
          placeholder="Enter a location..."
          value={this.state.text}
        />
        <button
          disabled={!this.state.selectedLocation}
          onClick={this.handleSelectLocation}
          className="opoen"
        >
          Select
        </button>
      </div>,
      this.state.text.length && this.state.locations.length ? {
	<div key="location-typeahead-results" className="location-typeahead-results">
	  {this.state.locations.map(location => {
	    return (
	      <div
	        onClick=(e => {
		  e.preventDefault();
		  this.handleLocationUpdate(location);
		})
	        key={location.name}
	        className="result"
	      >
	        {location.name}
	      </div>
	    );
	  })}
	</div>
      ) : null
    ];
  }
//...
