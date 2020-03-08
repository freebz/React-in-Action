// 예제 7.7  라우트 설정 예(src/components/router/Router.js)

function edit_user (params, props) {
  return Object.assign({}, params, props);
}

const router = enroute({
  '/users/new': create_user,
  '/users/:slug': find_user,
  '/users/:slug/edit': edit_user,
  '*': not_found
});

enroute('/users/mark/edit', { additional 'props' });
