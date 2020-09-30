import { combineReducers } from "redux";
import countReducer, { counterSaga } from "./count";
import { all } from "redux-saga/effects";
// 유티함수 all가져옴

const rootReducer = combineReducers({ countReducer });

// rootSaga(saga - 제너레이터함수)
export function* rootSaga() {
  yield all([counterSaga()]);
  //   유틸함수 all은 배열안의 여러 사가들 동시에 실행시켜준다.
}

export default rootReducer;
