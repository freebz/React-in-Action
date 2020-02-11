// 예제 2.7  이벤트 핸들러를 설정하는 예제

class CreateComment extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    content: "",
	    user: ''
	};
	this.handleUserChange = this.handleUserChange.bind(this);
	this.handleTextChange = this.handleTextChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
	const val = event.target.value;
	this.setState(() => ({
	    user: val
	}));
    }
    handleTextChange(event) {
	const val = event.target.value;
	this.setState(() => ({
	    content: val
	}));
    }
    handleSubmit(event) {
	event.preventDefault();
	this.setState(() => ({
	    user: '',
	    content: ''
	}));
    }
    render() {
	return React.createElement(
	    'form',
	    {
		className: 'createComponent',
		onSubmit: this.handleSubmit
	    },
	    React.createElement('input', {
		type: 'text',
		placeholder: 'Your name',
		value: this.state.user,
		onChange: this.handleUserChange
	    }),
	    React.createElement('input', {
		type: 'text',
		placeholder: 'Thoughts?',
		value: this.state.content,
		onChange: this.handleTextChange
	    }),
	    React.createElement('input', {
		type: 'submit',
		value: 'post'
	    })
	);
    }
}
CreateComment.porpTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    content: PropTypes.string
};
