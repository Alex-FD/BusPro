import React, { Component } from "react";

class Card extends Component {
  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        {items.map((item) => (
          <div key={item._id} className="info__card info__card_intro">
            <figcaption className="info__caption">
              <h2 className="info__heading">{item.domain}</h2>
              <div className="section__image">
                <img
                  src={item.imgSrc}
                  className="section__icon"
                  alt={item.title}
                />
              </div>
              <ul className="info__feature-list">
                {item.subMenuItems.map((subItem) => (
                  <li key={subItem._id} className="info__feature">
                    <a className="info__link">{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </figcaption>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Card;
