// 예제 11.12  mapDispatchToProps 함수 사용하기(src/pages/home.js)

//...
import { createError } from '../actions/error';
import { createNewPost, getPostsForPage } from '../actions/posts';
import { showComments } from '../actions/comments';
import Ad from '../comments/ad/Ad';
import CreatePost from '../comments/post/Create';
import Post from '../components/post/Post';
import Welcome from '../components/welcome/Welcome';

export class Home extends Component {
  componentDidMount() {
    this.props.actions.getPostsForPage();
  }
  componentDidCatch(err, info) {
    this.props.actions.createError(err, info);
  }
  render() {
    return (
      <div className="home">
        <Welcome />
        <div>
          <CreatePost onSubmit={this.props.actions.createNewPost} />
	  {this.props.posts && (
  	    <div className="posts">
	    {this.props.posts.map(post => (
	      <Post
  	        key={post.id}
	        post={post}
	        openCommentsDrawer={this.props.actions.showComments}
	      />
	    ))}
	    </div>
	  )}
          <button className="block" onClick={this.props.actions.getNextPageOfPosts}>
            Load more posts
          </button>
        </div>
        <div>
          <Ad url="https://ifelse.io/book" imageUrl="/static/assets/ads/ria.png" />
          <Ad url="https://ifelse.io/book" imageUrl="/static/assets/ads/orly.jpg" />
        </div>
      </div>
    );
  }
}
//...
export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
	createNewPost,
	getPostsForPage,
	showComments,
	createError,
	getNextPageOfPosts: getPostsForPage.bind(this, 'next')
      },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
