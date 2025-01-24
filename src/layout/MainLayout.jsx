import React from "react";
import Header from "./header";
import Footer from "./footer";
import propTypes from "prop-types";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: propTypes.node,
};
