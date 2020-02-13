import axios from "axios";
import { GET_USERS, GET_USER_DETAILS } from "./actionTypes";

export const getUserDetails = id => async dispatch => {
  const request = axios.get(`/api/socios/${id}`);

  console.log(request.then(response => response.data.socio));

  request
    .then(response => {
      return response.data.socio;
    })
    .then(data => {
      dispatch({ type: GET_USER_DETAILS, payload: data });
    });
};

export const getUsers = () => async dispatch => {
  const request = axios.get("/api/socios");

  request
    .then(response => {
      return response.data.socios;
    })
    .then(data => {
      dispatch({ type: GET_USERS, payload: data });
    });
};
