import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./styles.css";

const Footer = (): JSX.Element => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <p>Copyright © 2022</p>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0">Follow</p>
                <span>
                  <i className="ri-facebook-fill"></i>
                </span>
                <span>
                  <i className="ri-twitter-fill"></i>
                </span>
                <span>
                  <i className="ri-instagram-fill"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
