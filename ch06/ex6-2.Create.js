// 예제 6.2  속성을 통해 전달된 함수를 호출하는 코드(src/components/post/Create.js)

class CreatePost extends Component {
  //...
  fetchPost() { /* 제4장에서 작성한 함수이다. */}
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.valid) {
      return;
    }
    if (this.props.onSubmit) {
      const newPost = {
	date: Date.now(),
	// 포스트에 임시 키를 할당한다. 이 키는 나중에 API가 실제 키로 교체해 전달해 준다.
	id: Date.now(),
	content: this.state.content,
      };
      this.props.onSubmit(newPost);
      this.setState({
	content: '',
	valid: null,
      })
    }
    //...
  }
