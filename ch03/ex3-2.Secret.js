// 예제 3.2  setState 메서드로 컴포넌트의 상태를 변경하는 예제

import React from "react";
import { render } from "react-dom";

class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'top secret!'};
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState(() => ({
      name: 'Mark'
    }));
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
            <button onClick={this.onButtonClick}>reveal the secret!</button>
      </div>
    )
  }
}

render(
     <Secret/>,
     document.getElementById('root')
);
