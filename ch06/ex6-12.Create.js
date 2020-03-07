// 예제 6.12  서브렌더링의 예(src/components/post/Create.js)

constructor(props) {
  //...
  this.renderLocationControls = this.renderLocationControls.bind(this);
}
renderLocationControls() {
  return (
    <div className="controls">
      <button onClick={this.handleSubmit}>Post</button>
      {this.state.location && this.state.locationSelected ? (
	<button onClick={this.handleRemoveLocation} className="open location-indicator">
	  <i className="fa-location-arrow fa" />
  	  <small>{this.state.location.name}</small>
	</button>
      ) : (
	<button onClick={this.handleToggleLocation} className="open">
 	  {this.state.showLocationPicker ? 'Cancel' : 'Add location'}{' '}
  	<i
	  className={classNames('fa', {
	    'fa-map-o': !this.state.showLocationPicker,
	    'fa-times': this.state.showLocationPicker
	  })}
	/>
      </button>
    )}
    </div>
  );
}
render() {
  return (
    <div className="create-post">
      <textarea
        value={this.state.content}
        onChange={this.handlePostChange}
        placeholder="What's on your mind?"
      />
      {this.renderLocationControls()}
      <div
        className="location-picker"
        style={{ display: this.state.showLocationPicker ? 'block' : 'none' }}
      >
        {!this.state.locationSelected && [
	  <LocationTypeAhead
 	    key="LocationTypeAhead"
	    onLocationSelect={this.onLocationSelect}
	    onLocationUpdate={this.onLocationUpdate}
	  />,
	  <DisplayMap
  	    key="DisplayMap"
	    displayOnly={false}
	    location={this.state.location}
	    onLocationSelect={this.onLocationSelect}
	    onLocationUpdate={this.onLocationUpdate}
	  />
	]}
      </div>
    </div>
  );
}
