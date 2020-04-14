import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import { getMenuItems } from "../../menuService";
import ScrollDown from "../scrollDown/scrolldown";

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

  handleItemSelect = (item) => {
    const selectedCards = item.subMenuItems.flat(2).map((sub) => sub.card);
    this.setState({
      selectedItem: item,
      selectedItemCards: selectedCards,
      selectedSubItemCard: {},
    });
  };

  handleSubItemSelect = (subItem) => {
    const selectedSubItemCard = subItem.card;
    this.setState({
      selectedSubItem: subItem,
      selectedSubItemCard: selectedSubItemCard,
    });
  };

  handleClearingItemsClasses = (item) => {
    this.state.menuItems
      .filter((i) => i._id !== item._id)
      .forEach((item) => {
        item.active = false;
      });
  };
  handleItemAttr = (item) => {
    item.active = !item.active;
  };
  handleSubItemAttr = (subItem) => {
    subItem.active = !subItem.active;
  };
  scrollDown = () => {
    let header = document.getElementsByClassName("header")[0];
    let headerHeight = parseInt(
      window.getComputedStyle(header, null).getPropertyValue("height")
    );
    window.scrollTo({
      top: headerHeight,
      behavior: "smooth",
    });
  };
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
                <button className="header__button" />
              </div>
            </div>
            <nav className="navbar navbar_top">
              <div className="menu">
                <div className="navbar__center navbar__center_navigation">
                  <Navbar
                    items={this.state.menuItems}
                    selectedItem={this.state.selectedItem}
                    selectedSubItem={this.state.selectedSubItem}
                    onItemSelect={this.handleItemSelect}
                    onSubItemSelect={this.handleSubItemSelect}
                    onItemAttrToggle={this.handleItemAttr}
                    onSubItemAttrToggle={this.handleSubItemAttr}
                    onClearClasses={this.handleClearingItemsClasses}
                  />
                </div>
              </div>
            </nav>
            <ScrollDown onScrollDownClick={this.scrollDown} />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
