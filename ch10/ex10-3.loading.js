// 예제 10.3  loading 및 loaded 액션 생성자(src/actions/loading.js)

import * as types from '../constants/types';

export function loading() {
  return {
    type: types.app.LOADING
  };
}

export function loaded() {
  return {
    type: types.app.LOADED
  };
}
