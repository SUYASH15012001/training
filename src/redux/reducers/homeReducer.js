import * as actionsTypes from "../actionTypes";

const initState = {
  status: "",
  value: 0,
};
export default function homeReducer(state = initState, action) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case "counter/incremented":
      console.log("checked");
      return {
        ...state,
        value: state.value + 1,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        data: action.products,
      };
    case actionsTypes.WAITING:
      return {
        ...state,
        status: "Waiting for data",
      };
    case actionsTypes.SUCCESS:
      return {
        ...state,
        status: "Successfully got the data",
      };
    case actionsTypes.FAILURE:
      return {
        ...state,
        status: "Failed to fetch data",
      };
    default:
      return state;
  }
}
