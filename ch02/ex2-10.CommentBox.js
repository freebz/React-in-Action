// 예제 2.10  댓글의 제출과 요소의 반복을 처리하는 컴포넌트(CommentBox.js)

class CommentBox extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    comments: this.props.comments
	};
	this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
	const comments = this.state.comments;
	// 상태를 직접 수정하지 않는 것에 주목하자.
	comment.id = Date.now();
	const newComments = comments.concat([comment]);
	this.setState({
	    comments: new Comments;
	});
    }
    render() {
	return React.createElement(
	    'div',
	    {
		className: 'commentBox'
	    },
	    React.createElement(Post, {
		id: this.props.post.id,
		content: this.props.post.content,
		user: this.props.post.user
	    }),
	    this.state.comments.map(function(comment) {
		return React.createElement(Comment, {
		    key: comment.id,
		    id: comment.id,
		    content: comment.content,
		    user: comment.user
		});
	    }),
	    React.createElement(CreateComment, {
		onCommentSubmit: this.handleCommentSubmit
	    })
	);
    }
}

CommentBox.propTypes = {
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
};

const App = React.createElement(CreateComment);

ReactDOM.render(
    React.createElement(CommentBox, {

	comments: data.comments,
	post: data.post
    }),
    node
);
