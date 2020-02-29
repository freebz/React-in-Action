// 예제 4.11  모든 포스트를 나열하기(src/app.js)

//...
import Post from './components/post/Post';
//...
<Welcome />
<div>
  ...
    {this.state.posts.length && (
      <div className="posts">
        {this.state.posts.map(({ id }) => (
	  <Post id={id} key={id}
	   user={this.props.user} />
	))}
      </div>
    )}
    <button className="block" onClick={this.getPosts}>
      Load more posts
    </button>
  </div>
  <div>
    <Ad
      url="https://ifelse.io/book"
      imageUrl="/static/assets/ads/ria.png"
    />
    <Ad
      url="https://ifelse.io/book"
      imageUrl="/static/assets/ads/orly.png"
    />
  </div>
//...
