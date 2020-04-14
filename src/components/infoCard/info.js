import React, { Component } from "react";

class InfoCard extends Component {
  render() {
    const { selectedCards, selectedSubItemCard } = this.props;

    return (
      <React.Fragment>
        {selectedCards.map((c) => (
          <div
            key={c._id}
            className={
              selectedSubItemCard._id === c._id
                ? "info__card info__card_active"
                : "info__card"
            }
          >
            <div className="card__row card__row_top">
              <div className="section__image">
                <img src={c.imgSrc} className="section__icon" />
              </div>
              <div className="section__tile">
                <div className="section__text section__text_tile">
                  <p>{c.title}</p>
                </div>
              </div>
            </div>
            <div className="card__row">
              <ul className="info__feature-list">
                {c.textItems.map((textItem) => (
                  <li key={textItem._id} className="info__feature">
                    {textItem.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default InfoCard;
