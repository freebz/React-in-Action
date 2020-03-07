// 예제 6.9  지리위치 API의 활용(src/components/map/LocationTypeAhead.js)

constructor(props) {
  super(props);
  this.state = {
    text: '',
    location: [],
    selectedLocation: null
  },
  this.mapbox = new MapBox(process.env.MAPBOX_API_TOKEN);
  this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
  this.handleSearchChange = this.handleSearchChange.bind(this);
  this.handleSelectLocation = this.handleSelectLocation.bind(this);
  this.resetSearch = this.resetSearch.bind(this);
}
//...
attemptGeoLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
	const { latitude, longitude } = coords;
	this.mapbox.geocodeReverse({ latitude, longitude },
	{}).then(loc => {
	  if (!loc.entity.features ||
	      !loc.entity.features.length) {
	    return;
	  }
	  const feature = loc.entity.features[0]
	  const [lng, lat] = feature.center;
	  const currentLocation = {
	    name: feature.place_name,
	    lat,
	    lng
	  };
	  this.setState(() => ({
	    locations: [currentLocation],
	    selectedLocation: currentLocation,
	    text: currentLocation.name
	  }));
	  this.handleLocationUpdate(currentLocation);
	});
      },
      null,
      {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
      }
    );
  }
}
//...
