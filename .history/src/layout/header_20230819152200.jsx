import { Menu } from "antd";
import React from "react";

export default function Header() {
  const menu = [
    {
      key: "1",
      label: "Home",
      path: "/",
    },
    {
      key: "2",
      label: "Characters",
      path: "/characters",
    },
    {
      key: "3",
      label: "Movies",
      path: "/movies",
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
