import { Menu } from "antd";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export default function Sider() {
  return (
    <div className="sider">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Page4",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Page5",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Page6",
          },
        ]}
      />
    </div>
  );
}
