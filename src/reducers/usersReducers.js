export default (state = {}, action) => {
  console.log("users", state);
  console.log(action.payload);
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    default:
      return state;
  }
};
