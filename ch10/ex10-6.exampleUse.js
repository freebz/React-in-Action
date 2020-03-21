// 예제 10.6  액션 전달하기(src/store/exampleUse.js)

import configureStore from './configureStore';
import { loading, loaded } from '../actions/loading';
const store = configureStore();

console.log('========== Example store ==========');
store.dispatch(loading());
store.dispatch(loaded());
store.dispatch(loading());
store.dispatch(loaded());
console.log('========== end example store ==========');
