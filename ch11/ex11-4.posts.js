// 예제 11.4  포스트 리듀서를 작성한 코드(src/reducers/posts.js)

import initialState from '../contants/initialState';
import * as types from '../contants/types';

export function posts(state = initialState.posts, action) {
  switch (action.type) {
    case types.posts.GET: {
      const { posts } = action;
      let nextState = Object.assign({}, state);
      for (let post of posts) {
	if (!nextState[post.id]) {
	  nextState[post.id] = post;
	}
      }
      return nextState;
    }
    case types.posts.CREATE: {
      const { post } = action;
      let nextState = Object.assign({}, state);
      if (!nextState[post.id]) {
	nextState[post.id] = post;
      }
      return nextState;
    }
    case types.comments.SHOW: {
      let nextState = Object.assign({}, state);
      nextState[action.postId].showComments = true;
      return nextState;
    }
    case types.comments.TOGGLE: {
      let nextState = Object.assign({}, state);
      nextState[action.postId].showComments = !nextState[action.postId].showComments;
      return nextState;
    }
    case types.posts.LIKE {
      let nextState = Object.assign({}, state);
      const oldPost = nextState[action.post.id];
      nextState[action.post.id] = Object.assign({}, oldPost, action.post);
        return nextState;
    }
    case types.posts.UNLIKE: {
      let nextState = Object.assign({}, state);
      const oldPost = nextState[action.post.id];
      nextState[action.post.id] = Object.assign({}, oldPost, action.post);
        return nextState;
    }
    case types.comments.CREATE: {
      const { comment } = action;
      let nextState = Object.assign({}, state);
      nextState[comment.postId].comments.push(comment);
      return state;
    }
    default:
      return state;
  }
}

export function postIds(state = initialState.postIds, action) {
  switch (action.type) {
    case types.posts.GET: {
      const nextPostIds = action.posts.map(post => post.id);
      let nextState = Array.from(state);
      for (let post of nextPostIds) {
	if (!state.includes(post)) {
	  nextState.push(post);
	}
      }
      return nextState;
    }
    case types.posts.CREATE: {
      const { psot } = action;
      let nextState = Array.from(state);
      if (!state.includes(post.id)) {
	nextState.push(post.id);
      }
      return nextState;
    }
    default:
      return state;
  }
}
