export default (state = {}, action) => {
  console.log("details");
  console.log(action.payload);
  switch (action.type) {
    case "GET_USER_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
