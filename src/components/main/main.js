import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar";
import Card from "../card/card";
import { getInfoCards, getMenuItems } from "../../menuService";
import InfoCard from "../infoCard/info";

class Main extends Component {
  state = {
    menuItems: [],
    selectedItemCards: []
  };

  componentDidMount() {
    this.setState({
      menuItems: getMenuItems()
    });
  }

  handleItemSelect = item => {
    const selectedCards = item.subMenuItems.flat(2).map(sub => sub.card);
    this.setState({
      selectedItem: item,
      selectedItemCards: selectedCards
    });
  };

  handleClearingItemsClasses = item => {
    this.state.menuItems
      .filter(i => i._id !== item._id)
      .forEach(item => {
        item.active = false;
      });
  };

  handleItemAttr = item => {
    item.active = !item.active;
  };

  render() {
    return (
      <main className="main page">
        <section className="section">
          <div className="main__inner  group main__inner_info">
            <div className="sidebar">
              <div className="menu-wrapper">
                <Sidebar
                  items={this.state.menuItems}
                  selectedItem={this.state.selectedItem}
                  selectedItemCards={this.state.selectedItemCards}
                  onItemSelect={this.handleItemSelect}
                  onItemAttrToggle={this.handleItemAttr}
                  onClearClasses={this.handleClearingItemsClasses}
                />
              </div>
            </div>
            <div className="section__element section__element_full">
              <InfoCard
                items={this.state.menuItems}
                selectedItem={this.state.selectedItem}
                selectedCards={this.state.selectedItemCards}
              />
              {/*<Card onHideintroCards={this.handleHidingIntroCards} />*/}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
