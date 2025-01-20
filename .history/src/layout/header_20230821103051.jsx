import { Button, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
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
    <div className="header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <div className="menuLine">
        <Menu mode="horizontal">
          {menu.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
}
