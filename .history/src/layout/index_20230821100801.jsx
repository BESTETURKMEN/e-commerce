import React from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";

import Footer from "./footer";
import Header from "./header";

import "./layout.scss";
import Sider from "./sider";

export default function Index() {
  return (
    <div className="layout">
      <Layout>
        <Layout.Sider>
          <Sider />
        </Layout.Sider>
        <Layout>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Content className="content">
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
}
