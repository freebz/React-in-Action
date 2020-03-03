// 예제 5.3  CreatePost 컴포넌트에 추가할 코드(src/components/post/Create.js)

//...
class CreatePOst extends Component {
  render() {
    return (
      <div className="create-post">
        <textarea
          placeholder="What's on your mind?"
        />
      </div>
      <button>Post</button>
    );
  }
}
//...
