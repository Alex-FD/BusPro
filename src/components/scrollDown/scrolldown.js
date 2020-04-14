import React, { Component } from "react";

class ScrollDown extends Component {
  render() {
    const { onScrollDownClick } = this.props;

    return (
      <div
        onClick={() => onScrollDownClick()}
        className="header__row header__row_scroll-down"
      >
        <div className="header__scroll-down">
          <div className="header__chevron" />
          <div className="header__chevron" />
          <div className="header__chevron" />
        </div>
        <span className="header__scroll-text">вниз</span>
      </div>
    );
  }
}
export default ScrollDown;
