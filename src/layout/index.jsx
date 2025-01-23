import React from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";

import "./layout.scss";

export default function Index() {
  return (
    <div className="layout">
      <Layout>
        <Layout.Content className="content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </div>
  );
}
