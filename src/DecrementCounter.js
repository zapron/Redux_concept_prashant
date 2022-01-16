import { useCallback, useState } from "react";
import { connect } from "react-redux";

const DecrementComponent = ({ counter, dispatch }) => {
  // const [counter, setCounter] = useState(0);
  const decrement = () => {
    // setCounter(counter + 1);
    dispatch({ type: "DECREMENT" });
  };
  // console.log(props);
  return (
    <div>
      {/* {counter} */}
      <br />
      <button onClick={decrement}> SUBTRACT </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(DecrementComponent);
