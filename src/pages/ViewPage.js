import React, { useEffect } from "react";
import { getUserDetails } from "../actions/";
import { connect } from "react-redux";

const ViewPage = props => {

  useEffect(() => {
    props.getUserDetails(props.match.params.id);
  }, [props.match.params.id]); 

  return (
    <div>
      {props.user.name}
      <br></br>
      {props.user.id}
    </div>
  );
};

const mapStateToProps = state =>{
 return {
   user : state.details,
 }
};

export default connect(mapStateToProps, { getUserDetails })(ViewPage);
