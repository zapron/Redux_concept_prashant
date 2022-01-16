import { useCallback, useState } from "react";
import { connect } from "react-redux";

const CounterComponent = ({ counter, dispatch }) => {
  // const [counter, setCounter] = useState(0);
  const increment = () => {
    // setCounter(counter + 1);
    dispatch({ type: "INCREMENT" });
  };
  // console.log(props);
  return (
    <div>
      {/* {counter} */}
      <br />
      <button onClick={increment}> ADD </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(CounterComponent);
