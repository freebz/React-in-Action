// 예제 10.12  추가된 포스트 액션 생성기(src/actions/posts.js)

//...

export function createNewPost(post) {
  return (dispatch, getState) => {
    const { user } = getState();
    post.userId = user.id;
    return API.createPost(post)
      .then(res => res.json())
      .then(newPost => {
	dispatch({
	  type: type.posts.CREATE,
	  post: newPost
	});
      })
      .catch(err => dispatch(createError(err)));
  };
}
export function getPostsForPage(page = 'first') {
  return (dispatch, getState) => {
    const { pagination } = getState();
    const endpoint = pagination[page];
    return API.fetchPosts(endpoint)
      .then(res => {
	const links = parseLinkHeader(res.headers.get('Link'));
	return res.json().then(posts => {
	  dispatch(updatePaginationLinks(links));
	  dispatch(updateAvailablePosts(posts));
	});
      })
      .catch(err => dispatch(createError(err)));
  };
}
export function loadPost(postId) {
  return dispatch => {
    return API.fetchPost(postId)
      .then(res => res.json())
      .then(post => {
	dispatch(updateAvailablePosts([post]));
	dispatch(getCommentsForPost(postId));
      })
      .catch(err => dispatch(createError(err)));
  };
}
