import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
// redux-saga/effects의 유틸리티 함수들

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// sagas(제너레이터함수 - redux-saga에서는 saga라고부름)
function* increaseSaga() {
  yield delay(1000); // 1초 지연
  yield put(increase()); // 해당 액션을 디스패치
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

// index.js에서 사용할거기때문에 export키워드
// rootSaga에 넣을거임(여러 사가들이 존재할수도있으므로
// rootSaga를 만들어서 모든 사가들을 넣음
// like rootReducer)
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // 모든 INCREASE_ASYNC액션 처리 = redux-thunk사용할떄와 같은효과
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  // 가장 마지막으로 디스패치된 DECREASE_ASYNC액션 처리
}
// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0;

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
