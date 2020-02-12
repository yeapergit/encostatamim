export default (state = {}, action) => {
  console.log("entra aqui?");
  switch (action.type) {
    case "GET_USER_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
