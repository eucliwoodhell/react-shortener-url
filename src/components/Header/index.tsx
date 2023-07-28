import React from "react";
import { Container } from "reactstrap";
import "./styles.css";

const Header = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="header">
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <h5>URL</h5>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Header;
