import React, { useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import axios from "axios";

const ViewPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/socios/${this.props.match.params.id}`)
      .then(response => console.log({ response }));
  });

  return <div>aSDASDASD</div>;
}

export default ViewPage;
