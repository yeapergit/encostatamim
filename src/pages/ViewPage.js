import React, { useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import axios from "axios";

const ViewPage = props => {
  const [user, setUser] = useState({});
  console.log(props);

  useEffect(() => {
    axios
      .get(`/api/socios/${props.match.params.id}`)
      .then(response => setUser(response.data.socio));
  }, [props.match.params.id]);

  return (
    <div>
      {user.name}<br></br>
      {user.id}
    </div>
  );
};

export default ViewPage;
