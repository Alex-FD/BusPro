import React, { Component } from "react";
import { getMenuItems } from "../../menuService";

class Sidebar extends Component {
  state = {
    menuItems: []
  };

  componentDidMount() {
    this.setState({
      menuItems: getMenuItems()
    });
  }

  handleClick = item => {
    console.log(item._id);
  };
  render() {
    return (
      <div className="sidebar">
        <div className="menu-wrapper">
          <ul className="sidebar-menu">
            {this.state.menuItems.map(item => (
              <li key={item._id} className="sidebar-menu__item">
                <a
                  onClick={() => this.handleClick(item)}
                  data-active="false"
                  className="sidebar-menu__link"
                >
                  {item.title}
                  <span className="sidebar-menu__counter">
                    {item.subMenuItems.length}
                  </span>
                  <img src={item.imgSrc} className="sidebar-menu__icon" />
                  <span className="sidebar-menu__btn sidebar-menu__btn_open" />
                </a>
                <ul className="sub-menu">
                  {item.subMenuItems.map(item => (
                    <li key={item._id} className="sub-menu__item">
                      <a className="sub-menu__link">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
