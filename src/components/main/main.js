import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import Card from "../card/card";
import { getMenuItems } from "../../menuService";
import InfoCard from "../infoCard/info";
import Home from "../home";
import Modelling from "../modelling";
import Optimize from "../optimize";
import Maturity from "../maturity";
import Teaching from "../teaching";
import Events from "../events";
import About from "../about";

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
  // handleClearingSubItemsClasses = (subItem) => {
  //   this.state.menuItems
  //       .filter((i) => i._id !== subItem._id)
  //       .forEach((item) => {
  //         item.active = false;
  //       });
  // };

  handleItemAttr = (item) => {
    item.active = !item.active;
  };
  handleSubItemAttr = (subItem) => {
    subItem.active = !subItem.active;
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
                  selectedSubItem={this.state.selectedSubItem}
                  onItemSelect={this.handleItemSelect}
                  onSubItemSelect={this.handleSubItemSelect}
                  onItemAttrToggle={this.handleItemAttr}
                  onSubItemAttrToggle={this.handleSubItemAttr}
                  onClearClasses={this.handleClearingItemsClasses}
                />
              </div>
            </div>
            <div className="section__element section__element_full">
              {/*<Switch>*/}
              {/*  <Route path="/home" component={Home} />*/}
              {/*  <Route path="/modelling">component={Modelling}</Route>*/}
              {/*  <Route path="/optimize" component={Optimize} />*/}
              {/*  <Route path="/maturity" component={Maturity} />*/}
              {/*  <Route path="/teaching" component={Teaching} />*/}
              {/*  <Route path="/events" component={Events} />*/}
              {/*  <Route path="/about" component={About} />*/}
              {/*  <Route path="/" component={Home} />*/}
              {/*  <Redirect to="/not found" />*/}
              {/*</Switch>*/}

              <InfoCard
                items={this.state.menuItems}
                selectedItem={this.state.selectedItem}
                selectedSubItem={this.state.selectedSubItem}
                selectedSubItemCard={this.state.selectedSubItemCard}
                selectedCards={this.state.selectedItemCards}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
