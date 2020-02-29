// 예제 4.3  갱신 메서드

//...
class ChildComponent extends Component {
  //...
  componentWillReceiveProps(nextProps) {
    console.log('ChildComponent: componentWillReceiveProps()');
    console.log('nextProps: ', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('<ChildComponent/> - shouldComponentUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('<ChildComponent/> - componentWillUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
  }
  componentDidUpdate(previousProps, previousState) {
    console.log('ChildComponent - componentDidUpdate()');
    console.log('previousProps: ', previousProps);
    console.log('previousState: ', previousState);
  }
  //...
  render() {
    console.log('ChildComponent: render');
    return [
      <div key="name"Name: {this.props.name}</div>
    ];
  }
}

class ParentComponent extends Component {
  //...
  onInputChange(e) {
    const text = e.target.value;
    this.setState(() => ({ text: text }));
  }
  render() {
    console.log('ParentComponent: render');
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>
      <input key="input" value={this.state.text} onChange={this.onInputChange}/>,
      <ChildComponent key="ChildComponent" name={this.state.text} />
    ];
  }
}
//...
