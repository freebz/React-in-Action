// 예제 6.1  서버로 포스트 데이터 전송하기(src/components/app.js)

export default class App extends Component {
  //...
  createNewPost(post) {
    return API.createPost(post)
      .then(res => res.json())
      .then(newPost => {
	this.setState(prevState => {
	  return {
	    posts: orderBy(prevState.posts.concat(newPost),
	    'date', 'desc')
	  };
	});
      })
      .catch(err => {
	this.setState(() => ({ error: err }));
      })
  }
}
