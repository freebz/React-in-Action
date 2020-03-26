// 예제 12.14  데이터를 로드해 서버에서 렌더링하기(server/serverjs)

//...
  const store = configureStore(initialReduxState);
  try {
    const token = req.cookies['letters-token'];
    if (token) {
      const firebaseUser = await firebase.auth().
                                          verifyIdToken(token);
      const userResponse = await fetch(
	`${config.get('ENDPOINT')}/users/${firebaseUser.uid}`
      );
      if (userResponse.status !== 404) {
	const user = awiat userResponse.json();
	await store.dispatch(loginSuccess(user));
	await store.dispatch(getPostsForPage());
      }
    }
  } catch (err) {
    if (err.errorInfo.code === 'auth/argument-error') {
      res.clearCookie('letters-token');
    }
    // 에러를 전달한다.
    store.dispatch(createError(err));
  }
  //...
