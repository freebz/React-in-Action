// 예제 5.4  CreatePost 컴포넌트에 추가할 코드(src/components/post/Create.js)

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange(e) {
    console.log('Handling an update to the post body!');
  }
  handleSubmit() {
    console.log('Handling submission!');
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
