import React, { Component } from "react";
import { getMenuItems } from "../../menuService";

class Navbar extends Component {
  render() {
    const {
      items,
      onItemSelect,
      selectedItem,
      selectedSubItem,
      onItemAttrToggle,
      onClearClasses,
      onSubItemSelect,
    } = this.props;
    return (
      <ul className={"tabs-menu tabs-menu_left tabs-menu_size-l"}>
        <li className="tabs-menu__tab menu__item">
          <a className="link menu__link menu__item menu__item_has-sub">
            Главная <span className="menu__verbar">&nbsp;|&nbsp;</span>
          </a>
          <ul className="menu__sub-menu menu__sub-menu_open">
            {items.map((item) => (
              <li key={item._id} className="menu__sub-item">
                <a
                  onClick={() => {
                    onItemSelect(item);
                    onItemAttrToggle(item);
                  }}
                  active={item.active.toString()}
                  className="menu__sub-link"
                >
                  {item.domain}
                </a>
              </li>
            ))}
          </ul>
        </li>
        {items.map((item) => (
          <li key={item._id} className="tabs-menu__tab menu__item">
            <a
              onClick={() => {
                onItemSelect(item);
                onItemAttrToggle(item);
                onClearClasses(item);
              }}
              active={item.active.toString()}
              className="link menu__link menu__item menu__item_has-sub"
            >
              {item.domain}
              <span className="menu__verbar">&nbsp;|&nbsp;</span>
            </a>
            <ul className="menu__sub-menu menu__sub-menu_open">
              {item.subMenuItems.map((subItem) => (
                <li key={subItem._id} className="menu__sub-item">
                  <a
                    onClick={() => {
                      onSubItemSelect(subItem);
                    }}
                    className="menu__sub-link"
                    active={subItem.active.toString()}
                  >
                    {subItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navbar;
