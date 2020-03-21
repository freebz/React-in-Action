// 예제 10.9  에러 액션 생성하기(src/actions/error.js)

import * as types from '../constants/types';
export function createError(error, info) {
  return {
    type: types.app.ERROR,
    error,
    info
  };
}
