// 예제 8.14  라우터에 로그인 컨테이너를 구현한 코드(src/index.js)

export const renderApp = (state, callback) = () => {}) => {
  render(
    <Router {...state}>
      <Route path="" component={App}>
        <Route path="/" component={Home} />
        <Route path="/posts/:postId" component={SinglePost} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Route>login
    </Router>,
    document.getElementById('app'),
    callback
  );
};

let state = {
  location = window.location.pathname,
  user: {
    authenticated: false,
    profilePicture: null,
    id: null,
    name: null,
    token: null
  }
};

renderApp(state);

history.listen(location => {
  const user = firebase.auth().currentUser;
  state = Object.assign({}, state, {
    location: user ? location.pathname : '/login'
  });
  renderApp(state);
})

firebase.auth().onAuthenticateChanged(async user => {
  if (!user) {
    state = {
      location: state.location,
      user: {
	authenticated: false
      }
    };
    return renderApp(state, () => {
      history.push('/login');
    })
  }
  const token = await getFirebaseToken();
  const res = await API.loadUser(user.uid);
  let renderUser;
  if (res.status === 404) {
    const userPayload = {
      name: user.displayName,
      profilePicture: user.photoURL,
      id: user.uid
    };
    renderUser = await API.createUser(userPayload).then(res => res.json());
  } else {
    renderUser = await res.json();
  }
  history.push('/');
  state = Object.assign({}, state, {
    user: {
      name: renderUser.name,
      id: renderUser.id,
      profilePicture: renderUser.profilePicture,
      authenticated: true
    },
    token
  });
  renderApp(state);
});
