import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Sider() {
  const menu = [
    {
      key: "1",
      label: "Page1",
      path: "/",
    },
    {
      key: "2",
      label: "Page2",
      path: "/Page2",
    },
    {
      key: "3",
      label: "Page3",
      path: "/Page3",
    },
  ];
  return (
    <div className="sider">
      <div className="demo-logo-vertical" />
      {/* <Menu
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
      /> */}
      <Menu>
        {menu.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
