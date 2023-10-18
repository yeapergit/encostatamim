import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const InitPage = () => {
  return (
    <Link to="/list">
      <Button>Click 2 Enter</Button>
    </Link>
  );
};

export default InitPage;
