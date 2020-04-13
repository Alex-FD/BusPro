import React, { Component } from "react";
import { getMenuItems } from "../../menuService";

class Card extends Component {
  state = {
    menuitems: getMenuItems(),
  };
  render() {
    return this.state.menuitems.map((item) => (
      <div className="info__card info__card_intro">
        <figcaption className="info__caption">
          <h2 className="info__heading">{item.domain}</h2>
          <div className="section__image">
            <img src={item.imgSrc} className="section__icon" />
          </div>
          <ul className="info__feature-list">
            {item.subMenuItems.map((item) => (
              <li key={item._id} className="info__feature">
                <a className="info__link">{item.title}</a>
              </li>
            ))}
          </ul>
        </figcaption>
      </div>
    ));
  }
}

export default Card;
