import "./App.css";
import useAdvanceState from "./useAdvanceState";

function App() {
  const [curState, prevState, setAdvanceState] = useAdvanceState(1);
  return (
    <div className="App">
      <h1>Hello State Counter</h1>
      <h4>Current State</h4>
      <span>{curState}</span>
      <h4>Previous State</h4>
      <span>{prevState}</span>
      <br />
      <br />
      <button
        onClick={() => {
          let x = curState + 1;
          setAdvanceState(x);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
