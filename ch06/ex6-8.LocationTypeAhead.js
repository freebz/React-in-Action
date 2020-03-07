// 예제 6.8  위치 검색 기능의 구현(src/components/map/LocationTypeAhead.js)

//...
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
componentWillUnmount() {
  this.resetSearch();
}
handleLocationUpdate(location) {
  this.setState(() => {
    return {
      text: location.name,
      locations: [],
      selectedLocation: location
    };
  });
  this.props.onLocationUpdate(location);
}
handleSearchChange(e) {
  const text = e.target.value;
  this.setState(() => ({ text }));
  if (!text) return;
  this.mapbox.geocodeForward(text, {}).then(loc => {
    if (!loc.entity.features || !loc.entity.features.length) {
      return;
    }
    const locations = loc.entity.features.map(feature => {
      const [lng, lat] = feature.center;
      return {
	name: feature.place_name,
	lat,
	lng
      };
    });
    this.setState(() => ({ locations }));
  });
}
resetSearch() {
  this.setState(() => {
    return {
      text: '',
      locations: [],
      selectedLocation: null
    }
  });
}
handleSelectLocation() {
  this.props.onLocationSelect(this.state.selectedLocation);
}
//...
