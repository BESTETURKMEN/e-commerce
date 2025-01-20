import { Menu } from "antd";
import React from "react";

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
            label: "Page4",
            path: "/Page4",
          },
          {
            key: "2",
            label: "Page5",
            path: "/Page5",
          },
          {
            key: "3",
            label: "Page6",
            path: "/Page6",
          },
        ]}
      />
    </div>
  );
}
