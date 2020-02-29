// 예제 4.9  App 컴포넌트가 마운트될 때 데이터를 로드하는 코드

//...
  constructor(props) {
    //...
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }
  componentDidCatch(err, info) {
    console.error(err);
    console.error(info);
    this.setState(() => ({
      error: err
    }));
  }
  getPosts() {
    API.fetchPosts(this.state.endpoint)
      .then(res => {
	return res
	  .json()
	  .then(posts => {
	    const links = parseLinkHeader(res.headers.get('Link'));
	    this.setState(() => ({
	      posts: orderBy(this.state.posts.concat(posts)),
	      'date', 'desc'),
	      endpoint: links.next.url
	    }));
	  })
	  .catch(err => {
	    this.setState(() => ({ error: err }));
	  })
      });
  }
  render() {
    //...
    <button className="block" onClick={this.getPosts}>
      Load more posts
    </button>
    //...
  }
//...
