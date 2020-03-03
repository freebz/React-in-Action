// 예제 5.7  기본적인 유효성 검사(src/components/post/Create.js)

//...
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      valid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
  }
  handlePostChange(event) {
    const content = event.target.value;
    this.setState(() => {
      return {
	content,
	valid: content.length <= 280
      };
    });
  }
  handleSubmit() {
    if (!this.state.valid) {
      return;
    }
    const newPost = {
      content: this.state.content
    };
    console.log(this.state);
  }
  render() {
    return (
      <div className="create-post">
        <button onClick={this.handleSubmit}>Post</button>
        <textarea
          value={this.state.content}
          onChange={this.handlePostChange}
          placeholder="What's on your mind?"
        />
      </div>
    );
  }
}
