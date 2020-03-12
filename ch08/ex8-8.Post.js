// 예제 8.8  Link 컴포넌트의 통합(src/components/post/Post.js)

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as API from '../../shared/http';
import Content from './Content';
import Image from './Image';
import Link from './Link';
import PostActionSection from './PostActionSection';
import Comments from '../comment/Comments';
import DisplayMap from '../map/DisplayMap';
import UserHeader from '../post/UserHeader';

import RouterLink from '../router/Link';

export class Post extends Component {

  render() {
    return this.state.post ? (
      <div className="post">
        <RouterLink to={'/posts/${this.state.post.id}'}>
          <span>
            <UserHeader date={this.state.post.date}
                        user={this.state.post.user} />
            <Content post={this.state.post} />
            <Image post={this.state.post} />
            <Link link={this.state.post.link} />
          </span>
        </RouterLink>
	{this.state.post.location && <DisplayMap location={this.stae.post.location} />}
        <PostActionSection showComments={this.state.showComments} />
        <Comments
          comments={this.state.comments}
          show={this.state.showComments}
          post={this.state.post}
          handleSubmit={this.createComment}
          user={this.props.user}
        />
      </div>
    ) : null;
  }
}

export default Post;
