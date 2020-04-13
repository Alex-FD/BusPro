import React, { Component } from "react";
import { Router } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const {
      items,
      onItemSelect,
      selectedItem,
      selectedSubItem,
      onItemAttrToggle,
      onSubItemAttrToggle,
      onClearClasses,
      onSubItemSelect,
    } = this.props;

    return (
      <ul className="sidebar-menu">
        {items.map((item) => (
          <li key={item._id} className="sidebar-menu__item">
            <NavLink
              to={`/${item.subMenuItems[0].card.domain}`}
              onClick={() => {
                onItemSelect(item);
                onItemAttrToggle(item);
                onClearClasses(item);
              }}
              active={item.active.toString()}
              className={
                item.active === true && item === selectedItem
                  ? "sidebar-menu__link sidebar-menu__link_active"
                  : "sidebar-menu__link"
              }
            >
              {item.domain}
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
            </NavLink>
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
                      onSubItemAttrToggle(subItem);
                    }}
                    className={
                      subItem === selectedSubItem
                        ? "sub-menu__link sub-menu__link_active"
                        : "sub-menu__link"
                    }
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

export default Sidebar;
