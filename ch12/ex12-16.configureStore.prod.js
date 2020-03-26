// 예제 12.16  SSR을 지원하기 위해 리덕스 스토어를 수정한 코드(src/store/configureStore.prod.js)

//...
let store;
export default function configureStore(initialState) {
  if (store && !isServer()) {
    return store;
  }
  const hydratedState =
    !isServer() && process.env.NODE_ENV === 'production'
      ? window.__INITIAL_STATE__
      : initialState;
    store = createStore(
      rootReducer,
      hydratedState,
      compose(applyMiddleware(thunk, crashReporting))
  );
  return store;
}
