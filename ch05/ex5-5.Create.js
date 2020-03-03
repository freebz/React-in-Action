// 예제 5.5  입력값을 이용해 컴포넌트 상태 갱신하기(src/components/post/Create.js)

class CreatePost extends Component {
  constructor(props) {
    super(props);
    // 상태를 설정한다.
    this.state = {
      content: '',
    };
    // 이벤트 핸들러를 설정한다.
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
          value={this.state.content}
          onChange={this.handlePostChange}
          placeholder="What's on your mind?"
        />
      </div>
    );
  }
}
