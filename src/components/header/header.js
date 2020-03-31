import React, { Component } from "react";

class Header extends Component {
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
                <button className="header__button"></button>
              </div>
            </div>
          </div>
          <nav className="navbar navbar_top">
            <div className="menu">
              <div className="navbar__center navbar__center_navigation">
                <ul className="tabs-menu tabs-menu_left tabs-menu_size-l">
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__item menu__item_has-sub">
                      Главная
                      <span className="menu__verbar">&nbsp;|&nbsp;</span>
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Моделирование БП</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Оптимизация БП</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Оценка зрелости БП</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Обучение</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">События и достижения</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">О нас</a>
                      </li>
                    </ul>
                  </li>
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__item menu__item_has-sub">
                      Моделирование БП
                      <span className="menu__verbar">&nbsp;|&nbsp;</span>
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Business Studio</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Методология</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Каталог процессов</a>
                      </li>
                    </ul>
                  </li>
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__item menu__item_has-sub">
                      Оптимизация БП
                      <span className="menu__verbar">&nbsp;|&nbsp;</span>
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">
                          Инструменты оптимизации БП
                        </a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">
                          Мониторинг работ оптимизации БП
                        </a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">
                          Портфель проектов по оптимизации БП
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__item menu__item_has-sub">
                      Оценка зрелости БП
                      <span className="menu__verbar">&nbsp;|&nbsp;</span>
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Методология</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Оценка зрелости БП</a>
                      </li>
                    </ul>
                  </li>
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__item menu__item_has-sub">
                      Обучение
                      <span className="menu__verbar">&nbsp;|&nbsp;</span>
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Полезно почитать</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Программа обучения</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Статистика по обучению</a>
                      </li>
                    </ul>
                  </li>
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__item menu__item_has-sub">
                      События и достижения
                      <span className="menu__verbar">&nbsp;|&nbsp;</span>
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Новости</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Конкурсы</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Аллея славы</a>
                      </li>
                    </ul>
                  </li>
                  <li className="tabs-menu__tab menu__item">
                    <a className="link menu__link menu__link_noverbar menu__item menu__item_has-sub">
                      О нас
                    </a>
                    <ul className="menu__sub-menu menu__sub-menu_open">
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Структура УОБП</a>
                      </li>
                      <li className="menu__sub-item">
                        <a className="menu__sub-link">Аналитик БП</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="header__row header__row-scroll-down">
            <div className="header__scroll-down">
              <div className="header__chevron"></div>
              <div className="header__chevron"></div>
              <div className="header__chevron"></div>
            </div>
            <span className="header__scroll-text">вниз</span>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
