// 예제 5.6  제어되지 않는 컴포넌트 사용의 예(src/components/post/Create.js)

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
  }
  handlePostChange(event) {
    const content = event.target.value;
    this.setState(() => {
      return {
	content
      };
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="create-post">
        <button onClick={this.handleSubmit}>Post</button>
        <textarea
          onChange={this.handlePostChange}
          placeholder="What's on your mind?"
        />
      </div>
    );
  }
}
