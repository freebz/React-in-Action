// 예제 10.5  리덕스 스토어 생성하기

// src/store/configureStore.js
import { __PRODUCTION__ } from 'environs';
import prodStore from './configureStore.prod';
import devStore from './configStore.dev';
import default (__PRODUCTION__ ? prodStore : devStore);

// src/store/configureStore.prod.js
import { createStore } from 'redux';
import rootReducer from '../reducers/root';

let store;
export default function configureStore(initialState) {
  if (store) {
    return store;
  }
  store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk, crashReporting)));
  return store;
}

// src/store/configureStore.dev.js
import thunk from 'redux-thunk';
import { createStore, compose } from 'redux';
import rootReducer from '../reducers/root';

let store;
export default initialState => {
  if (store) {
    return store;
  }
  const createdStore = createStore(
    rootReducer,
    initialState,
    compose(window.devToolsExtension())
  );
  store = createdStore;
  return store;
};
