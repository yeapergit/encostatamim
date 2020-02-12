import axios from "axios";
import { GET_USER_DETAILS } from "./actionTypes";

export const getUserDetails = id => async dispatch => {

    const request = axios.get(`/api/socios/${id}`);
  
   request.then(response => {
       return response.data.socio;
   }).then(data => {
       dispatch({ type: GET_USER_DETAILS, payload: data });
   });
  };
  