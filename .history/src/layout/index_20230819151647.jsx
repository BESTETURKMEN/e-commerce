import React from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";

import Footer from "./footer";
import Header from "./header";

export default function Index() {
  return (
    <div>
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
    </div>
  );
}
