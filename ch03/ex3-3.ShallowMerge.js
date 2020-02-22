// 예제 3.3  setState 메서드를 이용한 얕은 병합

import React from "react"
import ReactDom from "react-dom"

class ShallowMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
	name: "Mark",
	colors: { favorite: "" }
      }
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      user: {
	colors: { favorite: "blue" }
      }
    });
  }
  render() {
    return (
      <div>
        <h1>My favorite color {this.state.user.colors.favorite} and my name is
	  {this.state.user.name}</h1>
        <button onClick={this.onButtonClick}>show the color!</button>
      </div>
    )
  }
}

ReactDom.render(<ShallowMerge />, document.getElementById("root"));
