import CounterComponent from "./CounterComponent";
import DecrementCounter from "./DecrementCounter";
import "./styles.css";
import { connect } from "react-redux";

const App = ({ counter }) => {
  return (
    <div className="App">
      <h1>React Redux Example</h1>
      <h1>{counter}</h1>
      <CounterComponent />
      <DecrementCounter />
    </div>
  );
};
const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(App);
