// 예제 2.11  JSX를 이용해 다시 작성한 컴포넌트

import React, { Component } from "react"
import ReactDom from "react-dom"
import PropTypes from "prop-types"

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //...
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="createComponent">
        <input
          value={this.state.user}
          onChange={this.handleUserChange}
          placeholder="Your name"
          type="text"
        />
        <input
          value={this.state.content}
          onChange={this.handleTextChange}
          placeholder="Thoughts?"
          type="text"
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}

class CommentBox extends Component {
  //...
  render() {
    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          content={this.props.post.content}
          user={this.props.post.user}
        />
	{this.state.comments.map(function(comment) {
	  return (
	    <Comment
	      key={comment.id}
	      content={comment.content}
	      user={comment.user}
	    />
	  );
	})}
        <CreateComment
          onCommentSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments.PropTypes.arrayOf(PropTypes.object)
}

ReactDom.render(
  <CommentBox
    comments={data.comments}
    post={data.post}
  />,
  node
);
