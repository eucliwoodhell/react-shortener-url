import React from "react";
import { Container } from "reactstrap";
import "./styles.css";

const Content = (props: { title: string }): JSX.Element => {
  return (
    <React.Fragment>
      <div className="common__section">
        <Container>
          <h2>{props.title}</h2>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Content;
