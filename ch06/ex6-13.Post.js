// 예제 6.13  포스트에 지도를 추가하는 코드(src/components/post/Post.js)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../shared/http';
import Content from './Content';
import Image from './Image';
import Link from './Link';
import PostActionSelection from './PostActionSelection';
import Comments from '../comment/Comments';
import DisplayMap from '../map/DisplayMap';
import UserHeader from '../post/UserHeader';
import Loader from '../Loader';

export class Post extends Component {
  static propTypes = {
    post: PropTypes.object
  };
  //...
  render() {
    if (!this.state.post) {
      return <Loader />;
    }
    return (
      <div className="post">
        <UserHeader date={this.state.post.date} user={this.state.post.user} />
        <Content post={this.state.post} />
        <Image post={this.state.post} />
        <Link link={this.state.post.link} />
	{this.state.post.location && <DisplayMap displayOnly location={this.state.post.location} />}
        <PostActionSelection showComments={this.state.showComments} />
        <Comments
          comments={this.state.comments}
          show={this.state.showComments}
          post={this.state.post}
          handleSubmit={this.createComment}
          user={this.props.user}
        />
      </div>
    );
  }
}
export default Post;
