import { Avatar, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./layout.scss";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

export default function Sider() {
  const menu = [
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
  ];
  return (
    <div className="sider">
      <div className="avatar">
        <Avatar size={150} icon={<UserOutlined />} />
      </div>
      <div className="siderMenu">
        <Menu theme="dark" mode="inline">
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
