import iconService from "./iconService";
import imageService from "./imageService";

const menuItems = [
  {
    _id: "ddd1d176-3956-4af8-8b06-58eed8f43e23",
    title: "Моделирование БП",
    subMenuItems: [
      {
        _id: "0362a1ba-9200-4fb0-a5d1-432da29fa95c",
        title: "Business Studio",
        card: {
          _id: "2df0fa5f-007a-4fcc-89bc-beb75386ef57",
          domain: "Моделирование БП",
          title: "Business Studio",
          imgSrc: imageService.money,
          active: false,
          textItems: [
            "Установка и первоначальная настройка Business Studio",
            "Сопровождение Business Studio",
            "Как аналитику БП получить доступ в Business Studio?"
          ]
        }
      },
      {
        _id: "88263654-128e-4a4f-a714-4ef873ae7aa0",
        title: "Методология",
        card: {
          _id: "363200b8-5188-43a5-88f6-917405251914",
          domain: "Моделирование БП",
          title: "Методология",
          imgSrc: imageService.framework,
          active: false,
          textItems: [
            "Бизнес-процесс Проверка регламентов бизнес-процессов,\n" +
              "публикуемых в портале корпоративной документации.pdf",
            "Бизнес-процесс Создание, изменение регламентов бизнес-процессов\n" +
              "компании.pdf",
            "Инструкция по созданию ключевых показателей эффективности\n" +
              "бизнес-процессов верхнего уровня.pdf",
            "Памятка по ключевым элементам моделирования бизнес-процессов\n" +
              "BPMN 2.0.pptx",
            "Стандарт моделирования.pdf"
          ]
        }
      },
      {
        _id: "da64e5a4-af05-48e0-bd1c-c6af24168a18",
        title: "Каталог",
        card: {
          _id: "2d4aad9d-55bf-4c94-858d-b341cb4a71cb",
          domain: "Моделирование БП",
          title: "Каталог процессов",
          imgSrc: imageService.process,
          active: false,
          textItems: [
            "Каталог бизнес-процессов ПАО Магнит по состоянию на 25.12.2019.xls"
          ]
        }
      }
    ],
    imgSrc: iconService.chartNetwork,
    active: false
  },
  {
    _id: "16aaeae8-f058-422b-8a11-9c8d9f09d5b5",
    title: "Оптимизация БП",
    subMenuItems: [
      {
        _id: "5af278d6-1352-476a-a422-23cc2e569bf2",
        title: "Инструменты потимизации БП",
        card: {
          _id: "dfb01d89-91bf-47da-9121-e55be9277d2b",
          domain: "Оптимизация БП",
          title: "Инструменты потимизации БП",
          imgSrc: imageService.optimization,
          active: false,
          textItems: [
            "Бизнес-процесс по оптимизации БП",
            "Путеводитель по оптимизации процессов",
            "Шаблон по оптимизации процессов",
            "Ссылка на материалы по формированию бизнес-требования",
            "Шаблон бизнес-требования",
            "Методика расчета экономического эффекта"
          ]
        }
      },
      {
        _id: "a19a5c4d-54fe-417c-9cf1-111d1d80573a",
        title: "Мониторинг работ оптимизации БП",
        card: {
          _id: "c4f253c2-97b2-4fb9-991d-bcf427a53328",
          domain: "Оптимизация БП",
          title: "Мониторинг работ оптимизации БП",
          imgSrc: imageService.cms,
          active: false,
          textItems: [
            "Планы работ по оптимизации процессов",
            "Рейтинг работ по потимизации процессов внутри компании",
            "Презентации по потимизации БП для коммуникаций"
          ]
        }
      },
      {
        _id: "768114a8-8a43-4a9e-b09e-3ff5d1df9134",
        title: "Портфель проектов по оптимизации БП",
        card: {
          _id: "818c37b1-fe1c-4cf8-b2b0-8e3e07a6acd1",
          domain: "Оптимизация БП",
          title: "Портфель проектов по оптимизации БП",
          imgSrc: imageService.dashboard,
          active: false,
          textItems: ["План проектов по оптимизации БП"]
        }
      }
    ],
    imgSrc: iconService.balanceScaleLeft,
    active: false
  },
  {
    _id: "2675be1b-f34d-42e9-b1fc-1d40b97a3f2a",
    title: "Оценка зрелости БП",
    subMenuItems: [
      {
        _id: "a0383db0-dfc1-493a-a71d-fdac9af8c19e",
        title: "Методология",
        card: {
          _id: "9c5a13e9-864a-4fca-92e9-6e763ed5b122",
          domain: "Оценка зрелости БП",
          title: "Методология",
          imgSrc: imageService.framework,
          active: false,
          textItems: [
            "Бизнес-процесс по оценке зрелости БП",
            "Критерии по оценке зрелости БП",
            "Анкета для владельцев процесса",
            "Анкета для сотрудников БП"
          ]
        }
      },
      {
        _id: "4a5d3e84-54a4-4ef4-95c0-6f4d2810fc48",
        title: "Оценка зрелости БП",
        card: {
          _id: "a97f50fd-0fda-4b80-a37b-086907dc140a",
          domain: "Оценка зрелости БП",
          title: "Портфель работ по оценке зрелости",
          imgSrc: imageService.test,
          active: false,
          textItems: [
            "Планы работ по оценке зрелости БП",
            "Календарь аудитов по оценке зрелости БП",
            "Презентации по оценке зрелости для коммуникаций",
            "Мониторинг по планам работ по оценке зрелости"
          ]
        }
      }
    ],
    imgSrc: iconService.batteryHalf,
    active: false
  },
  {
    _id: "9a50fb9a-c1bd-45df-a456-17272b1bad4a",
    title: "Обучение",
    subMenuItems: [
      {
        _id: "7fc3bc5c-2530-40ad-8f93-c3d7ed5bd7ed",
        title: "Полезно почитать",
        card: {
          _id: "89dc17d6-11c5-4fd7-8f53-012d6b4c4ec8",
          domain: "Обучение",
          title: "Полезно почитать",
          imgSrc: imageService.book,
          active: false,
          textItems: ["Книги", "Статьи", "Ссылки на полезные материалы"]
        }
      },
      {
        _id: "885407f2-5d97-465b-b5fc-134c2f1989ec",
        title: "Программа обучения",
        card: {
          _id: "91072768-fcf4-4aec-ac0f-48fa52cc29d1",
          domain: "Обучение",
          title: "Программа обучения",
          imgSrc: imageService.course,
          active: false,
          textItems: [
            "Перечень направлений обучения",
            "Как записаться на обучение?"
          ]
        }
      },
      {
        _id: "2f585906-03cf-4d06-a2c6-ed8464ae585c",
        title: "Статистика по обучению",
        card: {
          _id: "e89575b6-0896-4ba1-ac48-e157727b4355",
          domain: "Обучение",
          title: "Статистика по обучению",
          imgSrc: imageService.dashboard,
          active: false,
          textItems: ["Статистика по обучению"]
        }
      }
    ],
    imgSrc: iconService.userGraduate,
    active: false
  },
  {
    _id: "c53ecec6-16ed-4fc7-b08c-cf93602b8f76",
    title: "События и достижения",
    subMenuItems: [
      {
        _id: "7566ec83-e903-44b1-b8fa-0167206dc8b5",
        title: "Конкурсы",
        card: {
          _id: "ef746c90-b8cd-4909-bf92-e5dd8dee7951",
          domain: "События и достижения",
          title: "Конкурсы",
          imgSrc: imageService.bizfin,
          active: false,
          textItems: [
            "Раздел находится в разработке",
            "Раздел находится в разработке",
            "Раздел находится в разработке"
          ]
        }
      },
      {
        _id: "97084f14-e993-44e1-8b36-b3197dd3885a",
        title: "Новости",
        card: {
          _id: "ba6be953-bb5e-4097-9942-1915b3bda828",
          domain: "События и достижения",
          title: "Новости",
          imgSrc: imageService.news,
          active: false,
          textItems: [
            "Раздел находится в разработке",
            "Раздел находится в разработке",
            "Раздел находится в разработке"
          ]
        }
      },
      {
        _id: "fd47eb9b-9197-47a7-bab3-e266daac0414",
        title: "Аллея славы",
        card: {
          _id: "46a24b4f-a71e-48d9-ab29-d20ca8493752",
          domain: "События и достижения",
          title: "Аллея славы",
          imgSrc: imageService.podium,
          active: false,
          textItems: [
            "Раздел находится в разработке",
            "Раздел находится в разработке",
            "Раздел находится в разработке"
          ]
        }
      }
    ],
    imgSrc: iconService.trophyAlt,
    active: false
  },
  {
    _id: "f249b1e9-e42a-4383-a1e2-ad2e1aa99e5b",
    title: "О нас",
    subMenuItems: [
      {
        _id: "05eb2f4f-b751-4d8c-b064-493e6e7249fa",
        title: "Структура УОБП",
        card: {
          _id: "af3545c6-9b5c-4eb7-ac0c-9c3cfe3c4a3c",
          domain: "О нас",
          title: "Структура УОБП",
          imgSrc: imageService.diagram,
          active: false,
          textItems: [
            "Команда управления",
            "Основные цели и задачи управления",
            "Контакты"
          ]
        }
      },
      {
        _id: "e1cbb70c-03c0-4611-b21d-9df8c68e2790",
        title: "Аналитик БП",
        card: {
          _id: "5d298688-24b0-4df8-935c-ffc1a90b3a90",
          domain: "О нас",
          title: "Аналитик БП",
          imgSrc: imageService.analytics,
          active: false,
          textItems: ["Профили аналитика БП", "Реестр аналитиков БП"]
        }
      }
    ],
    imgSrc: iconService.addressCard,
    active: false
  }
];

export function getMenuItems() {
  return menuItems;
}

export function getInfoCards() {
  return menuItems
    .map(item => item.subMenuItems)
    .flat(2)
    .map(sub => sub.card);
}
