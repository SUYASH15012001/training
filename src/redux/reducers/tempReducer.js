const initState = {
  data: "temp data",
  value: 0,
};
export default function tempReducer(state = initState, action) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case "counter/decrement":
      return {
        ...state,
        value: state.value + 1,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        data: action.products,
      };
    default:
      return state;
  }
}
