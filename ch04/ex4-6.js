// 예제 4.6  에러의 처리

//...
class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('ChildComponent: state');
    this.oops = this.oops.bind(this);
  }
  //...
  oops() {
    this.setState(() => ({ oops: true }));
  }
  render() {
    console.log('ChildComponent: render');
    if (this.state.oops) {
      throw new Error('Something went wrong');
    }
    return [
      <div key="name">Name: {this.props.name}</div>,
      <button key="error" onClick={this.oops}>
        Create error
      </button>
    ];
  }
}

class ParentComponent extends Component {
  //...
  constructor(props) {
    super(props);
    console.log('ParentComponent: state');
    this.state = { text: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  //...
  componentDidCatch(err, errorInfo) {
    console.log('componentDidCatch');
    console.error(err);
    console.error(errorInfo);
    this.setState(() => ({ err, errorInfo }));
  }
  render() {
    console.log('ParentComponent: render');
    if (this.state.err) {
      return (
	<details style={{ whiteSpace: 'pre-wrap' }}>
	  {this.state.error && this.state.error.toString()}
	  <br />
	  {this.state.errorInfo.componentStack}
	</details>
      );
    }
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <input key="input" value={this.state.text}
        onChange={this.onInputChange} />,
      <ChildComponent key="ChildComponent" name={this.state.text} />
    ]
  }
}
render(<ParentComponent />, document.getElementById('root'));
