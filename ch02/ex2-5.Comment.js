// 예제 2.5  중첩된 컴포넌트 추가하기

//...
  this.props.user,
  React.createElement("span", { className: "postBody" },
    this.props.content
  ),
  this.props.children
//...
class Comment extends Component {
  render() {
    return React.createElement("div", { className: "comment" },
      React.createElement("h2", { className: "commentAuthor" },
	this.props.user,
	  React.createElement("span", { className: "commentContent" },
	    this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const App = React.createElement(Post, {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how coll!"
  })
);

ReactDom.render(App, node)
