import React, { Component } from "react";

class Sidebar extends Component {
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
      <ul className="sidebar-menu">
        {items.map((item) => (
          <li key={item._id} className="sidebar-menu__item">
            <a
              onClick={() => {
                onItemSelect(item);
                onItemAttrToggle(item);
                onClearClasses(item);
              }}
              active={item.active}
              className={
                item.active === true && item === selectedItem
                  ? "sidebar-menu__link sidebar-menu__link_active" //item === selectedItem ? "sidebar-menu__link sidebar-menu__link_active":"sidebar-menu__link sidebar-menu__link" не срабатывает при повторном клике
                  : "sidebar-menu__link"
              }
            >
              {item.title}
              <span
                className={
                  item.active === true && item === selectedItem
                    ? "sidebar-menu__counter sidebar-menu__counter_active"
                    : "sidebar-menu__counter"
                }
              >
                {item.subMenuItems.length}
              </span>
              <img
                src={item.imgSrc}
                className={
                  item.active === true && item === selectedItem
                    ? "sidebar-menu__icon sidebar-menu__icon_active"
                    : "sidebar-menu__icon"
                }
              />
              <span
                className={
                  item.active === true && item === selectedItem
                    ? "sidebar-menu__btn sidebar-menu__btn_close"
                    : "sidebar-menu__btn sidebar-menu__btn_open"
                }
              />
            </a>
            <ul
              className={
                item.active === true && item === selectedItem
                  ? "sub-menu sub-menu_open"
                  : "sub-menu"
              }
            >
              {item.subMenuItems.map((subItem) => (
                <li key={subItem._id} className="sub-menu__item">
                  <a
                    onClick={() => {
                      onSubItemSelect(subItem);
                    }}
                    className={
                      subItem === selectedSubItem
                        ? "sub-menu__link sub-menu__link_active"
                        : "sub-menu__link"
                    }
                    active={subItem.active}
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

export default Sidebar;
