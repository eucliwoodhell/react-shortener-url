import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props: { children: React.ReactNode }): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
