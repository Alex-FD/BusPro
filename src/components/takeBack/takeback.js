import React, { Component } from "react";

class TakeBack extends Component {
  render() {
    const { onScrollUpClick } = this.props;

    return (
      <div className="header__row">
        <a onClick={() => onScrollUpClick()} className="bring-me-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
          </svg>
        </a>
      </div>
    );
  }
}
export default TakeBack;
