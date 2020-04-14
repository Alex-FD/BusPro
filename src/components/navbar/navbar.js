import React, { Component } from "react";
import { getMenuItems } from "../../menuService";

class Navbar extends Component {
  state = {
    menuItems: [],
    selectedItemCards: [],
  };

  componentDidMount() {
    this.setState({
      menuItems: getMenuItems(),
    });
  }

  render() {
    const {
      items,
      onItemSelect,
      selectedItem,
      onItemAttrToggle,
      onSubItemAttrToggle,
      onClearClasses,
      onSubItemSelect,
    } = this.props;

    return (
      <ul className={"tabs-menu tabs-menu_left tabs-menu_size-l"}>
        {items.map((item) => (
          <li key={item._id} className="tabs-menu__tab menu__item">
            <a
              onClick={() => {
                onItemSelect(item);
                onItemAttrToggle(item);
                onClearClasses(item);
              }}
              active={item.active.toString()}
              className={
                item.active === true && item === selectedItem
                  ? "link menu__link menu__item menu__item_has-sub menu__sub-menu_open"
                  : "link menu__link menu__item menu__item_has-sub"
              }
            >
              {item.domain}
              <span className="menu__verbar">&nbsp;|&nbsp;</span>
            </a>
            <ul
              className={
                item.active === true && item === selectedItem
                  ? "menu__sub-menu menu__sub-menu_open"
                  : "menu__sub-menu"
              }
            >
              {item.subMenuItems.map((subItem) => (
                <li key={subItem._id} className="menu__sub-item">
                  <a
                    onClick={() => {
                      onSubItemSelect(subItem);
                      onSubItemAttrToggle(subItem);
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
