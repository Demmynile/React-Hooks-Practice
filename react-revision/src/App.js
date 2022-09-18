import ImperativeHandle from "./Hooks/imperativeHandle/ImperativeHandle";
import { UseEffect } from "./Hooks/useEffect/UseEffectt";
// import LayoutEffect from "./Hooks/useLayoutEffect/useLayoutEffect";
import ReducerTutorial from "./Hooks/useReducer/Reducer";
import UseRef from "./Hooks/useRef/UseRef";
import StateTutorial from "./Hooks/useState/BasicState";
import InputState from "./Hooks/useState/InputState";

function App() {
  return (
    <div>
      {/* <StateTutorial />
      <InputState /> */}
      {/* <ReducerTutorial /> */}
      {/* <UseEffect/> */}
      {/* <UseRef /> */}
      {/* <LayoutEffect /> */}
      <ImperativeHandle />
    </div>
  );
}

export default App;
