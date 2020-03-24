// 예제 11.2  로딩 리듀서의 구현(src/reducers/loading.js)

import initialState from '../constants/initialState';
import * as types from '../constants/types';

export function loading(state = initialState.loading, action) {
  switch (action.type) {
  case types.app.LOADING:
    return true;
  case types.app.LOADED:
    return false;
  default:
    return state;
  }
}
