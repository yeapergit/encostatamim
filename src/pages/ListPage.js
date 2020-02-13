import React, { useEffect } from "react";
import CustomTable from "../components/CustomTable";
import { connect } from "react-redux";
import { getUsers } from "../actions";

const ListPage = props => {

  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <div className="ui container">
      <CustomTable users={props.socios} />
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    socios: state.users
  };
};

export default connect(mapStateToProps, { getUsers })(ListPage);
