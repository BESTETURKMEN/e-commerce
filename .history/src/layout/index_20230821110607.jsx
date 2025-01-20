import React from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";
import { FloatButton } from "antd";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";

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
          <div className="floatBtn">
            <FloatButton.Group
              trigger="hover"
              type="primary"
              style={{
                right: 94,
              }}
              icon={<CustomerServiceOutlined />}
            >
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
