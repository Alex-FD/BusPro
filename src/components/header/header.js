import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import { getMenuItems } from "../../menuService";

class Header extends Component {
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
    return (
      <header className="header">
        <div className="jumbotron jumbotron_center jumbotron_theme-ruga">
          <div className="navbar__center navbar__center_jumbotron">
            <div className="header__row">
              <div className="header__logo header__logo_circle">
                <img className="header__icon header__logo_circle" />
              </div>
            </div>
            <div className="header__row">
              <div className="header__title">
                <h1 className="header__heading header__heading_jumbo">
                  Управление по организации бизнес-процессов
                </h1>
              </div>
            </div>
            <div className="header__row">
              <div className="header__wrapper">
                <input className="header__search" placeholder="поиск" />
                <button className="header__button"></button>
              </div>
            </div>
            <nav className="navbar navbar_top">
              <div className="menu">
                <div className="navbar__center navbar__center_navigation">
                  <Navbar items={this.state.menuItems} />
                </div>
              </div>
            </nav>
            <div className="header__row header__row_scroll-down">
              <div className="header__scroll-down">
                <div className="header__chevron"></div>
                <div className="header__chevron"></div>
                <div className="header__chevron"></div>
              </div>
              <span className="header__scroll-text">вниз</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
