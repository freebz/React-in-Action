// 예제 2.6  기본 상태를 설정하는 방법

class CreateComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: "", user: "" }
  }
  render() {
    return React.createElement("form", { className: "createComment" },
      React.createElement("input", {
	type: "text",
	placeholder: "Your name",
	value: this.state.user
      }),
      React.createElement("input", { type: "text", placeholder: "Thoughts?" }),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
}
Createcomment.propTypes = {
  content: React.PropTypes.string
}
const App = React.createElement(Post, {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  React.createElement(CreateComment)
);
