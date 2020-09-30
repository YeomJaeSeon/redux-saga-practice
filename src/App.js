import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "./modules/count";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer);
  return (
    <div>
      {count}
      <button
        onClick={() => {
          dispatch(increaseAsync());
        }}
      >
        +1
      </button>
      {/* redux-saga takeEvery유틸함수 적용 */}
      <button
        onClick={() => {
          dispatch(decreaseAsync());
        }}
      >
        -1
      </button>
      {/* redux-saga takeLatest유틸함수 적용 */}
    </div>
  );
}
