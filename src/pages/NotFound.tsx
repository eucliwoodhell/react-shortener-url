import React from "react";
import Helmet from "../components/Helmet";
import Content from "../components/UI/content";

const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <Helmet title="Page Not Found">
        <Content title="404 - Page Not Found" />
      </Helmet>
    </React.Fragment>
  );
};

export default NotFound;
