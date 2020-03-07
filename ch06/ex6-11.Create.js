// 예제 6.11  CreatePost 컴포넌트에서 위치 정보 처리하기(src/components/post/Create.js)

  constructor(props) {
    super(props);
    this.initialState = {
      content: '',
      valid: false,
      showLocationPicker: false,
      location: {
	lat: 34.1535641,
	lng: -118.1428115,
	name: null
      },
      locationSelected: false
    };
    this.state = this.initialState;
    this.filter = new Filter();
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleRemoveLocation = this.handleRemoveLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleLocation = this.handleToggleLocation.bind(this);
    this.onLocationSelect = this.onLocationSelect.bind(this);
    this.onLocationUpdate = this.onLocationUpdate.bind(this);
  }
  handleRemoveLocation() {
    this.setState(() => ({
      locationSelected: false,
      location: this.initialState.location
    }));
  }
  handleSubmit() {
    if (!this.state.valid) {
      return;
    }
    const newPost = {
      content: this.state.content
    };
    if (this.state.locationSelected) {
      newPost.location = this.state.location;
    }
    this.props.onSubmit(newPost);
    this.setState(() => ({
      content: '',
      valid: false,
      showLocationPicker: false,
      location: this.initialState.location,
      locationSelected: false
    }));
  }
  onLocationUpdate(location) {
    this.setState(() => ({ location }));
  }
  onLocationSelect(location) {
    this.setState(() => ({
      location,
      showLocationPicker: false,
      locationSelected: true
    }));
  }
  handleToggleLocation(e) {
    e.preventDefault();
    this.setState(state => ({ showLocationPicker: !state.showLocationPicker }));
  }
//...
