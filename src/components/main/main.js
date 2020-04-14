import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar";
import InfoCard from "../infoCard/info";
import { getMenuItems } from "../../utils/menuService";
import Card from "../card/card";
import Footer from "../footer/footer";
import Header from "../header/header";

class Main extends Component {
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

  handleCardsVisibility = () => {
    const cards = Array.from(
      document.getElementsByClassName("info__card_intro")
    );
    cards.forEach((c) => (c.style.display = "none"));
  };

  handleItemAttr = (item) => {
    item.active = !item.active;
  };

  handleSubItemAttr = (subItem) => {
    subItem.active = !subItem.active;
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main page">
          <section className="section">
            <div className="main__inner  group main__inner_info">
              <div className="sidebar">
                <div className="menu-wrapper">
                  <Sidebar
                    items={this.state.menuItems}
                    selectedItem={this.state.selectedItem}
                    selectedSubItem={this.state.selectedSubItem}
                    onItemSelect={this.handleItemSelect}
                    onSubItemSelect={this.handleSubItemSelect}
                    onItemAttrToggle={this.handleItemAttr}
                    onSubItemAttrToggle={this.handleSubItemAttr}
                    onClearClasses={this.handleClearingItemsClasses}
                    onCardVisibility={this.handleCardsVisibility}
                  />
                </div>
              </div>
              <div className="section__element section__element_full">
                <InfoCard
                  items={this.state.menuItems}
                  selectedItem={this.state.selectedItem}
                  selectedSubItem={this.state.selectedSubItem}
                  selectedSubItemCard={this.state.selectedSubItemCard}
                  selectedCards={this.state.selectedItemCards}
                />
                <Card items={this.state.menuItems} />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Main;
