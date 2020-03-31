import imageService from "./iconService";
import React from "react";

window.addEventListener("load", setLocalStorageItems);
document.addEventListener("click", closeSubMenu);
scrollToMain();
bringMeBack();
openSidebarMenu();
openNavbar();
setLocalStorageItems();
let cardDataTarget = saveDataAttrForInfoCard();
let linkTarget = getDataAttrOfMenuItem();
let currentUrl = getCurrentUrl();
keepSidebarMenuOpen();
toggleSidebarMenuItemClass();
toggleCardClass();
setCardColor();

function openSidebarMenu() {
  let sidebarLinks = Array.from(
    document.getElementsByClassName("sidebar-menu__link")
  );

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function(ev) {
      sidebarLinks.forEach(link => {
        let linkChildren = Array.from(link.children);

        if (link !== ev.currentTarget) {
          link.classList.remove("sidebar-menu_link_active", "sub-menu_open");
          link.setAttribute("data-active", "false");
          link.nextElementSibling.classList.remove("sub-menu_open");

          linkChildren.forEach(child => {
            switch (child.tagName) {
              case "IMG":
                child.classList.remove("sidebar-menu__icon_active");
                break;
              case "SPAN":
                child.classList.remove("sidebar-menu__btn_close");
                child.classList.add("sidebar-menu__btn_open");
                break;
              default:
                break;
            }
          });
        } else if (
          link.classList.contains(
            "sidebar-menu__link_active",
            "sub-menu_open"
          ) &&
          link.dataset.active === "true"
        ) {
          link.setAttribute("data-active", "false");
          link.classList.remove("sub-menu_open", "sidebar-menu__link_active");
          link.nextElementSibling.classList.remove("sub-menu_open");

          linkChildren.forEach(child => {
            switch (child.tagName) {
              case "IMG":
                child.classList.remove("sidebar-menu__icon_active");
                break;
              case "SPAN":
                child.classList.remove("sidebar-menu__btn_close");
                child.classList.add("sidebar-menu__btn_open");
                break;
              default:
                break;
            }
          });
        } else {
          link.setAttribute("data-active", "true");
          link.classList.add("sub-menu_open", "sidebar-menu__link_active");
          link.nextElementSibling.classList.remove("sub-menu_open");

          linkChildren.forEach(child => {
            switch (child.tagName) {
              case "IMG":
                child.classList.add("sidebar-menu__icon_active");
                break;
              case "SPAN":
                child.classList.add("sidebar-menu__btn_close");
                child.classList.remove("sidebar-menu__btn_open");
                break;
              default:
                break;
            }
          });
        }
      });
    });
  });
}

// <li className="sidebar-menu__item">
//   <a className="sidebar-menu__link">
//     Моделирование БП
//     <img
//         src={imageService.chartNetwork}
//         className="sidebar-menu__icon"
//     />
//     <span className="sidebar-menu__btn sidebar-menu__btn_open" />
//   </a>
//   <ul className="sub-menu">
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Business Studio</a>
//     </li>
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Методология</a>
//     </li>
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Каталог</a>
//     </li>
//   </ul>
// </li>
// <li className="sidebar-menu__item">
//     <a className="sidebar-menu__link">
//     Оптимизация БП
// <img
// src={imageService.balanceScaleLeft}
// className="sidebar-menu__icon"
//     />
//     <span className="sidebar-menu__btn sidebar-menu__btn_open" />
//     </a>
// <ul className="sub-menu">
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">Инструменты потимизации БП</a>
//   </li>
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">
//       Мониторинг работ оптимизации БП
//     </a>
//   </li>
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">
//       Портфель проектов по оптимизации БП
//     </a>
//   </li>
// </ul>
// </li>
// <li className="sidebar-menu__item">
//   <a className="sidebar-menu__link">
//     Оценка зрелости БП
//     <img
//         src={imageService.batteryHalf}
//         className="sidebar-menu__icon"
//     />
//     <span className="sidebar-menu__btn sidebar-menu__btn_open" />
//   </a>
//   <ul className="sub-menu">
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Методология</a>
//     </li>
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Оценка зрелости БП</a>
//     </li>
//   </ul>
// </li>
// <li className="sidebar-menu__item">
//     <a className="sidebar-menu__link">
//     Обучение
//     <img
// src={imageService.userGraduate}
// className="sidebar-menu__icon"
//     />
//     <span className="sidebar-menu__btn sidebar-menu__btn_open" />
//     </a>
// <ul className="sub-menu">
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">Полезно почитать</a>
//   </li>
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">Программа обучения</a>
//   </li>
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">Статистика по обучению</a>
//   </li>
// </ul>
// </li>
// <li className="sidebar-menu__item">
//   <a className="sidebar-menu__link">
//     События и достижения
//     <img
//         src={imageService.trophyAlt}
//         className="sidebar-menu__icon"
//     />
//     <span className="sidebar-menu__btn sidebar-menu__btn_open" />
//   </a>
//   <ul className="sub-menu">
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Конкурсы</a>
//     </li>
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Новости</a>
//     </li>
//     <li className="sub-menu__item">
//       <a className="sub-menu__link">Аллея славы</a>
//     </li>
//   </ul>
// </li>
// <li className="sidebar-menu__item">
//     <a className="sidebar-menu__link">
//     О нас
// <img
// src={imageService.addressCard}
// className="sidebar-menu__icon"
//     />
//     <span className="sidebar-menu__btn sidebar-menu__btn_open" />
//     </a>
// <ul className="sub-menu">
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">Структура УОБП</a>
//   </li>
//   <li className="sub-menu__item">
//     <a className="sub-menu__link">Аналитик БП</a>
//   </li>
// </ul>
// </li>
