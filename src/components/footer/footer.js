import React, { Component } from "react";
import imageService from "../../imageService";
import iconService from "../../iconService";
import TakeBack from "../takeBack/takeback";

class Footer extends Component {
  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <footer className="footer">
        <div className="main__inner main__inner_footer">
          <div className="main__wrapper main__wrapper_footer">
            <div className="footer__card footer__card_col footer__card_wide-25">
              <a className="link footer__text">Моделирование БП</a>
              <a className="link footer__text">Оптимизация БП</a>
              <a className="link footer__text">Оценка зрелости БП</a>
              <a className="link footer__text">Обучение</a>
              <a className="link footer__text">События и достижения</a>
              <a className="link footer__text">О нас</a>
            </div>
            <div className="footer__card footer__card_col footer__card_wide-65">
              <div className="header__row">
                <h4 className="footer__text">
                  Задать вопрос по работе пространства
                </h4>
              </div>
              <div className="header__row">
                <a className="footer__link footer__link_feedback">
                  ask@tander.ru
                </a>
              </div>
              <div className="header__row">
                <button
                  className="footer__btn footer__btn_feedback"
                  type="submit"
                  value="feedback"
                >
                  Обратная связь
                </button>
              </div>
            </div>
            <div className="footer__card footer__card_col footer__card_wide-10">
              <TakeBack onScrollUpClick={this.scrollUp} />
            </div>
          </div>
        </div>
        <div className="footer__sub-footer">
          <div className="main__inner main__inner_footer">
            <div className="header__row">
              <div className="header__logo header__logo_circle header__logo_x-small">
                <img
                  className="header__icon header__logo_circle header__icon_x-small"
                  src={imageService.care}
                />
              </div>
              <span className="footer__text footer__text_copyright">
                &nbsp;
                <img
                  className="sidebar-menu__icon"
                  src={iconService.copyright}
                />
                &nbsp;2019&nbsp;АО&nbsp;"Тандер"
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
