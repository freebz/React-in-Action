// 예제 11.8  루트 리듀서에 새 리듀서들을 추가하기(src/reducers/root.js)

import { combineReducers } from 'redux';

import { error } from './error';
import { loading } from './loading';
import { pagination } from './pagination';
import { posts, postIds } from './posts';
import { user } from './user';
import { comments, commentIds } from './comments';

const rootReducer = combineReducers({
  commentIds,
  comments,
  error,
  loading,
  pagination,
  postIds,
  posts,
  user
});

export default rootReducer;
