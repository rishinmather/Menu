import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItems {...menuItem} key={menuItem.id} />;
      })}
    </div>
  );
};

export default Menu;
