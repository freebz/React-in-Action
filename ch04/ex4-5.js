// 예제 4.5  컴포넌트의 언마운팅

//...
class ChildComponent extends Component {
  //...
  componentWillUnmount() {
    console.log('ChildComponent: componentWillUnmount');
  }
  render() {
    console.log('ChildComponent: render');
    return [
      <div key="name">Name: {this.props.name}</div>
    ];
  }
}
class ParentComponent extends Component {
  //...
  componentWillUnmount() {
    console.log('ParentComponent: componentWillUnmount');
  }
  onInputChange(e) {
    const text = e.target.value;
    this.setState(() => ({ text: text }));
  }
  componentDidCatch(err, errorInfo) {
    console.log('componentDidCatch');
    console.error(err);
    console.error(errorInfo);
    this.setState(() => ({ err, errorInfo }));
  }
  render() {
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <input key="input" value={this.state.text} onChange={this.onInputChange} />,
      <ChildComponent key="ChildComponent" name={this.state.text} />
    ];
  }
}
//...
