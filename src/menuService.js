import imageService from "./iconService";

const menuItems = [
  {
    _id: "ddd1d176-3956-4af8-8b06-58eed8f43e23",
    title: "Моделирование БП",
    subMenuItems: [
      {
        _id: "0362a1ba-9200-4fb0-a5d1-432da29fa95c",
        title: "Business Studio"
      },
      {
        _id: "88263654-128e-4a4f-a714-4ef873ae7aa0",
        title: "Методология"
      },
      {
        _id: "da64e5a4-af05-48e0-bd1c-c6af24168a18",
        title: "Каталог"
      }
    ],
    imgSrc: imageService.chartNetwork
  },
  {
    _id: "16aaeae8-f058-422b-8a11-9c8d9f09d5b5",
    title: "Оптимизация БП",
    subMenuItems: [
      {
        _id: "5af278d6-1352-476a-a422-23cc2e569bf2",
        title: "Инструменты потимизации БП"
      },
      {
        _id: "a19a5c4d-54fe-417c-9cf1-111d1d80573a",
        title: "Мониторинг работ оптимизации БП"
      },
      {
        _id: "768114a8-8a43-4a9e-b09e-3ff5d1df9134",
        title: "Портфель проектов по оптимизации БП"
      }
    ],
    imgSrc: imageService.balanceScaleLeft
  },
  {
    _id: "2675be1b-f34d-42e9-b1fc-1d40b97a3f2a",
    title: "Оценка зрелости БП",
    subMenuItems: [
      {
        _id: "a0383db0-dfc1-493a-a71d-fdac9af8c19e",
        title: "Методология"
      },
      {
        _id: "4a5d3e84-54a4-4ef4-95c0-6f4d2810fc48",
        title: "Оценка зрелости БП"
      }
    ],
    imgSrc: imageService.batteryHalf
  },
  {
    _id: "9a50fb9a-c1bd-45df-a456-17272b1bad4a",
    title: "Обучение",
    subMenuItems: [
      {
        _id: "7fc3bc5c-2530-40ad-8f93-c3d7ed5bd7ed",
        title: "Полезно почитать"
      },
      {
        _id: "885407f2-5d97-465b-b5fc-134c2f1989ec",
        title: "Программа обучения"
      },
      {
        _id: "2f585906-03cf-4d06-a2c6-ed8464ae585c",
        title: "Статистика по обучению"
      }
    ],
    imgSrc: imageService.userGraduate
  },
  {
    _id: "c53ecec6-16ed-4fc7-b08c-cf93602b8f76",
    title: "События и достижения",
    subMenuItems: [
      {
        _id: "7566ec83-e903-44b1-b8fa-0167206dc8b5",
        title: "Конкурсы"
      },
      {
        _id: "97084f14-e993-44e1-8b36-b3197dd3885a",
        title: "Новости"
      },
      {
        _id: "fd47eb9b-9197-47a7-bab3-e266daac0414",
        title: "Аллея славы"
      }
    ],
    imgSrc: imageService.trophyAlt
  },
  {
    _id: "f249b1e9-e42a-4383-a1e2-ad2e1aa99e5b",
    title: "О нас",
    subMenuItems: [
      {
        _id: "05eb2f4f-b751-4d8c-b064-493e6e7249fa",
        title: "Структура УОБП"
      },
      {
        _id: "e1cbb70c-03c0-4611-b21d-9df8c68e2790",
        title: "Аналитик БП"
      }
    ],
    imgSrc: imageService.addressCard
  }
];

export function getMenuItems() {
  return menuItems;
}
