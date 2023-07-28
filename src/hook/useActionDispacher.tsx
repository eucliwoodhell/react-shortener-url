import { useDispatch } from "react-redux";

interface Hook {
  valueAction: <T>(actionCallback: (value: T) => void) => (payload: T) => void;
  voidAction: (actionCallback: () => void) => () => void;
}

export default function useActionDispatcher(): Hook {
  const dispatch = useDispatch();

  function valueAction<T>(action: (value: T) => any) {
    return function dispatchAction(payload: T) {
      dispatch(action(payload));
    };
  }

  function voidAction(actionCallback: () => any) {
    return function dispatchAction() {
      dispatch(actionCallback());
    };
  }

  return {
    valueAction,
    voidAction,
  };
}
