// 예제 10.8  redux-thunk를 이용해 비동기 액션 생성기를 지원하는 코드(src/store/configureStore.dev.js)

import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducer/root';

let store;
export default (initialState) => {
  if (store) {
    return store;
  }
  const createdStore = createStore(rootReducer, initialState, compose(
    applyMiddleware(
      thunk,
    ),
    window.devToolsExtension()
    )
  );
  store = createdStore;
  return store;
};
