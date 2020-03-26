// 예제 12.7  수정된 사용자 리듀서(src/reducers/user.js)

export function user(state = initialState.user, action) {
  switch (action.type) {
    case types.auth.LOGIN_SUCCESS:
      const { user, token } = action;
      if (!isServer()) {
	Cookies.set('letters-token', token);
      }
      return Object.assign({}, state.user, {
	authenticated: true,
	name: user.name,
	id: user.id,
	profilePicture: user.profilePicture || '/static/assets/user/4.jpeg',
	token
      });
    case types.auth.LOGOUT_SUCCESS:
      Cookies.remove('letters-token');
      return initialState.user;
    default:
      return state;
  }
}
