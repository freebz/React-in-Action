// 예제 2.4  PropTypes와 render 메서드의 사용법

import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extend component {
  render() {
    return React.createElement("div", { className: "post" },
      React.createElement("h2", { className: "postAuthor", id: this.props.id },
        this.props.user,
        React.createElement("span", { className: "postBody" },
          this.props.content
        )
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

const App = React.createElement(Post, {
  id: 1, content: " said: This is a post!", user: "Mark"
})

ReactDOM.render(App, node)
