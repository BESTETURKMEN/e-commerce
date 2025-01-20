import React from "react";

export default function Header() {
  return (
    <div>
      <div className="menuLine">
        <Menu mode="horizontal">
          {menu.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
          <Button type="link" onClick={showModal}>
            {name === undefined || name === null ? "Login" : name}
          </Button>
          <UserEntry open={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Menu>
      </div>
    </div>
  );
}
