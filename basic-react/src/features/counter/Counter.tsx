import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const coin = useSelector((state: any) => {
    console.log(state.counter.coin);

    return state.counter.coin;
  });

  return (
    <div>
      <h1>State counter</h1>
      <hr />
      <button
        onClick={() => {
          dispatch(increment());
          navigate("/coin");
        }}
      >
        Increment value
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
          navigate("/coin");
        }}
      >
        Increment by 10
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(decrement());
          navigate("/coin");
        }}
      >
        Decrement value
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(decrementByAmount(10));
          navigate("/coin");
        }}
      >
        Decrement by 10
      </button>
    </div>
  );
};

export default Counter;
