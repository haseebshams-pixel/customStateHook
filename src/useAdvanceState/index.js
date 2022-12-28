import { useEffect, useCallback, useRef, useState } from "react";

export default function useAdvanceState(firstState) {
  const [curState, setCurrentState] = useState(firstState);
  const [prevState, setPreviousState] = useState(0);
  const curStateRef = useRef(firstState);
  const prevStateRef = useRef(0);
  useEffect(() => {
    setCurrentState(firstState);
    setPreviousState(0);
    curStateRef.current = firstState;
    prevStateRef.current = 0;
  }, []);
  const toggler = (val) => {
    prevStateRef.current = curStateRef.current;
    curStateRef.current = val;
    let x = prevStateRef.current;
    setPreviousState(x);
    setCurrentState(val);
  };
  const setAdvanceState = useCallback(
    function (i) {
      toggler(i);
    },
    [firstState]
  );
  return [curState, prevState, setAdvanceState];
}
