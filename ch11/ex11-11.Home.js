// 예제 11.11  mapStateToProps 함수(src/pages/Home.js)

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';

import Ad from '../components/ad/Ad';
import CreatePost from '../components/post/Create';
import Post from '../components/post/Post';
import Welcome from '../components/welcome/Welcome';
export class Home extends Component {
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
		/>
	      ))}
	    </div>
	  )}
          <button className="block" onClick={this.props.actions.getNextPageOfPosts}>
            Load more posts
          </button>
        </div>
        <div>
          <Ad url="https://ifelse.io/book" imageUrl="/static/assets/ads/ria/png" />
          <Ad url="https://ifelse.io/book" imageUrl="/static/assets/ads/orly.jpg" />
        </div>
      </div>
    );
  }
}
//...
export const mapStateToProps = state => {
  const posts = orderBy(state.postIds.map(postId => state.posts[postId]),
    'date', 'desc');
  return { psots };
};

export default connect(mapStateToProps)(Home);
