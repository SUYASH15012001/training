import { FAILURE, SUCCESS, WAITING } from "../actionTypes";
import store from "../store";

const { dispatch } = store;

const fetchStatus = (statusKey) => {
  console.log("in controll");
  if (statusKey === 1) dispatch({ type: WAITING });
  else if (statusKey === 2) dispatch({ type: SUCCESS });
  else dispatch({ type: FAILURE });
};

export { fetchStatus };
