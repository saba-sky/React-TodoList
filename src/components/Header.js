import React from 'react';
import {Alert} from "react-bootstrap";

const Header = ({header, paragraph}) => {
  return (
    <>
      <Alert variant="dark">
        <Alert.Heading>{header}</Alert.Heading>
        <hr />
        <p className="mb-0">
          {paragraph}
        </p>
      </Alert>
    </>
  );
};

export default Header;