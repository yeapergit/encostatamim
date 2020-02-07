import React from "react";
import { Header, Image } from "semantic-ui-react";
import headerImg from "../images/header.jpg";

const CustomHeader = () => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
       {/* <Image src={headerImg} /> */}
      </Header>
    </div>
  );
};

export default CustomHeader;
