import ImperativeHandle from "./Hooks/imperativeHandle/ImperativeHandle";
import UseCallback from "./Hooks/useCallBack/UseCallback";
import UseContext from "./Hooks/useContext/UseContext";
import { UseEffect } from "./Hooks/useEffect/UseEffectt";
import UseMemo from "./Hooks/UseMemo/UseMemo";
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
      {/* <ImperativeHandle /> */}
      {/* <UseContext /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
}

export default App;
