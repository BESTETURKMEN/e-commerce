import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./layout.scss";

export default function Header() {
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
    <div>
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
