import React from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";

import Header from "./header";

import "./layout.scss";
import Footer from "./footer";
import Policy from "./policy";
import Slider from "../components/Slider";

export default function Index() {
  return (
    <div className="layout">
      <Layout>
        <Header>
          <Header />
        </Header>
        <Slider />
        <Layout.Content className="content">
          <Outlet />
        </Layout.Content>
        <Policy />
        <Footer />
      </Layout>
    </div>
  );
}
