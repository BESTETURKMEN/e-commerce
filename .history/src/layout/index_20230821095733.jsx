import React from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";

import Footer from "./footer";
import Header from "./header";

import "./layout.scss";
import Sider from "./sider";
export default function Index() {
  return (
    <div>
      <Layout>
        <Layout.Sider>
          <Sider />
          <Layout>
            <Layout.Header>
              <Header />
            </Layout.Header>
            <Layout.Content className="content">
              <Outlet />
            </Layout.Content>
            <Layout.Footer>
              <Footer />
            </Layout.Footer>
          </Layout>
        </Layout.Sider>
      </Layout>
    </div>
  );
}
