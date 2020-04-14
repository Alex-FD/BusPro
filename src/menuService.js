import iconService from "./iconService";
import imageService from "./imageService";

const menuItems = [
  {
    _id: "ddd1d176-3956-4af8-8b06-58eed8f43e23",
    url: "Моделирование БП",
    subMenuItems: [
      {
        _id: "0362a1ba-9200-4fb0-a5d1-432da29fa95c",
        title: "Business Studio",
        active: false,

        card: {
          _id: "2df0fa5f-007a-4fcc-89bc-beb75386ef57",
          url: "Modelling",
          title: "Business Studio",
          imgSrc: imageService.money,
          active: false,
          textItems: [
            {
              _id: "c828e6db-272f-4ad0-a667-ea807585c5d3",
              text: "Установка и первоначальная настройка Business Studio",
            },
            {
              _id: "38207ca3-6470-4999-8bb2-64dc9be4620d",
              text: "Сопровождение Business Studio",
            },
            {
              _id: "eaa7402b-5289-4df5-be66-962c4a681644",
              text: "Как аналитику БП получить доступ в Business Studio?",
            },
          ],
        },
      },
      {
        _id: "88263654-128e-4a4f-a714-4ef873ae7aa0",
        title: "Методология",
        active: false,

        card: {
          _id: "363200b8-5188-43a5-88f6-917405251914",
          url: "Modelling",
          title: "Методология",
          imgSrc: imageService.framework,
          active: false,
          textItems: [
            {
              _id: "f1421f82-9189-42fe-934e-8282813a38e4",
              text:
                "Бизнес-процесс Проверка регламентов бизнес-процессов,\n" +
                "публикуемых в портале корпоративной документации.pdf",
            },
            {
              _id: "f022d538-7c51-4bb6-b754-ac901a786d03",
              text:
                "Бизнес-процесс Создание, изменение регламентов бизнес-процессов\n" +
                "компании.pdf",
            },
            {
              _id: "2e25f762-fe7d-4bd9-bc67-f0b52c8d8d5c",
              text:
                "Инструкция по созданию ключевых показателей эффективности\n" +
                "бизнес-процессов верхнего уровня.pdf",
            },
            {
              _id: "c32265da-b17d-40da-8f1f-24ce27fd2ce8",
              text:
                "Памятка по ключевым элементам моделирования бизнес-процессов\n" +
                "BPMN 2.0.pptx",
            },
            {
              _id: "c0000be6-351d-422d-ad13-06e2343619b8",
              text: "Стандарт моделирования.pdf",
            },
          ],
        },
      },
      {
        _id: "da64e5a4-af05-48e0-bd1c-c6af24168a18",
        title: "Каталог процессов",
        active: false,

        card: {
          _id: "2d4aad9d-55bf-4c94-858d-b341cb4a71cb",
          url: "Modelling",
          title: "Каталог процессов",
          imgSrc: imageService.process,
          active: false,
          textItems: [
            {
              _id: "a1eb4e74-ae45-46be-9fbc-7278d7b1cf65",
              text:
                "Каталог бизнес-процессов ПАО Магнит по состоянию на 25.12.2019.xls",
            },
          ],
        },
      },
    ],
    imgSrc: iconService.chartNetwork,
    active: false,
  },
  {
    _id: "16aaeae8-f058-422b-8a11-9c8d9f09d5b5",
    url: "Оптимизация БП",
    subMenuItems: [
      {
        _id: "5af278d6-1352-476a-a422-23cc2e569bf2",
        title: "Инструменты потимизации БП",
        active: false,

        card: {
          _id: "dfb01d89-91bf-47da-9121-e55be9277d2b",
          url: "Optimize",
          title: "Инструменты потимизации БП",
          imgSrc: imageService.optimization,
          active: false,
          textItems: [
            {
              _id: "90d142b5-ff23-4971-949a-9b57c4e90368",
              text: "Бизнес-процесс по оптимизации БП",
            },
            {
              _id: "f8d72bd9-e213-47d8-b4c3-db33cdc98925",
              text: "Путеводитель по оптимизации процессов",
            },
            {
              _id: "d2a61db6-8b97-45cd-9a56-5b344943a2b4",
              text: "Шаблон по оптимизации процессов",
            },
            {
              _id: "75f3270a-a151-4174-bb20-c408f81ea19b",
              text: "Ссылка на материалы по формированию бизнес-требования",
            },
            {
              _id: "c555379c-a763-428d-b874-cf74e8ab1831",
              text: "Шаблон бизнес-требования",
            },
            {
              _id: "af063c03-c8dc-4133-9131-b6fbefb7bf34",
              text: "Методика расчета экономического эффекта",
            },
          ],
        },
      },
      {
        _id: "a19a5c4d-54fe-417c-9cf1-111d1d80573a",
        title: "Мониторинг работ оптимизации БП",
        active: false,

        card: {
          _id: "c4f253c2-97b2-4fb9-991d-bcf427a53328",
          url: "Optimize",
          title: "Мониторинг работ оптимизации БП",
          imgSrc: imageService.cms,
          active: false,
          textItems: [
            {
              _id: "8565e9ea-061b-4d52-b15c-4a790c33b16c",
              text: "Планы работ по оптимизации процессов",
            },
            {
              _id: "d6952572-6577-4622-bb0d-2e66822fe870",
              text: "Рейтинг работ по потимизации процессов внутри компании",
            },
            {
              _id: "804e5267-f036-47d4-8177-e14a881038ff",
              text: "Презентации по потимизации БП для коммуникаций",
            },
          ],
        },
      },
      {
        _id: "768114a8-8a43-4a9e-b09e-3ff5d1df9134",
        title: "Портфель проектов по оптимизации БП",
        active: false,

        card: {
          _id: "818c37b1-fe1c-4cf8-b2b0-8e3e07a6acd1",
          url: "Optimize",
          title: "Портфель проектов по оптимизации БП",
          imgSrc: imageService.dashboard,
          active: false,
          textItems: [
            {
              _id: "47efc79f-d7e1-4acd-b098-d071819bd715",
              text: "План проектов по оптимизации БП",
            },
          ],
        },
      },
    ],
    imgSrc: iconService.balanceScaleLeft,
    active: false,
  },
  {
    _id: "2675be1b-f34d-42e9-b1fc-1d40b97a3f2a",
    url: "Оценка зрелости БП",
    subMenuItems: [
      {
        _id: "a0383db0-dfc1-493a-a71d-fdac9af8c19e",
        title: "Методология",
        active: false,

        card: {
          _id: "9c5a13e9-864a-4fca-92e9-6e763ed5b122",
          url: "Maturity",
          title: "Методология",
          imgSrc: imageService.framework,
          active: false,
          textItems: [
            {
              _id: "1843359e-b47c-4274-8bb6-d7bad8d8aee0",
              text: "Бизнес-процесс по оценке зрелости БП",
            },
            {
              _id: "6749b201-0c0a-46a5-850f-6e150050ff4a",
              text: "Критерии по оценке зрелости БП",
            },
            {
              _id: "2f89e699-a5f3-4884-a078-b87a681520b2",
              text: "Анкета для владельцев процесса",
            },
            {
              _id: "3de60f86-5ce2-4c67-9d2f-5e197dd1d77b",
              text: "Анкета для сотрудников БП",
            },
          ],
        },
      },
      {
        _id: "4a5d3e84-54a4-4ef4-95c0-6f4d2810fc48",
        title: "Оценка зрелости БП",
        active: false,

        card: {
          _id: "a97f50fd-0fda-4b80-a37b-086907dc140a",
          url: "Maturity",
          title: "Портфель работ по оценке зрелости",
          imgSrc: imageService.test,
          active: false,
          textItems: [
            {
              _id: "9ba6327f-7b85-4650-b974-539cd0bfe5af",
              text: "Планы работ по оценке зрелости БП",
            },
            {
              _id: "bbc9b46b-b96b-40e1-84b4-c25097c7225a",
              text: "Календарь аудитов по оценке зрелости БП",
            },
            {
              _id: "5ae2b8e4-f6ac-4f6e-9194-82d6c57fa437",
              text: "Презентации по оценке зрелости для коммуникаций",
            },
            {
              _id: "24287e06-2d67-4f0e-b827-e2f940cfec81",
              text: "Мониторинг по планам работ по оценке зрелости",
            },
          ],
        },
      },
    ],
    imgSrc: iconService.batteryHalf,
    active: false,
  },
  {
    _id: "9a50fb9a-c1bd-45df-a456-17272b1bad4a",
    url: "Обучение",
    subMenuItems: [
      {
        _id: "7fc3bc5c-2530-40ad-8f93-c3d7ed5bd7ed",
        title: "Полезно почитать",
        active: false,

        card: {
          _id: "89dc17d6-11c5-4fd7-8f53-012d6b4c4ec8",
          url: "Teaching",
          title: "Полезно почитать",
          imgSrc: imageService.book,
          active: false,
          textItems: [
            { _id: "4c28cc71-7231-458c-882c-57f5c4823130", text: "Книги" },
            { _id: "991ea520-18fb-43a9-b349-146d9e48bc27", text: "Статьи" },
            {
              _id: "af5138b1-392e-4030-a55e-61cfcb4c4631",
              text: "Ссылки на полезные материалы",
            },
          ],
        },
      },
      {
        _id: "885407f2-5d97-465b-b5fc-134c2f1989ec",
        title: "Программа обучения",
        active: false,

        card: {
          _id: "91072768-fcf4-4aec-ac0f-48fa52cc29d1",
          url: "Teaching",
          title: "Программа обучения",
          imgSrc: imageService.course,
          active: false,
          textItems: [
            {
              _id: "dcb422fe-b55c-41cb-8d63-b26999c43474",
              text: "Перечень направлений обучения",
            },
            {
              _id: "ae3a7519-f702-42fd-adc7-8eb5bf060b8f",
              text: "Как записаться на обучение?",
            },
          ],
        },
      },
      {
        _id: "2f585906-03cf-4d06-a2c6-ed8464ae585c",
        title: "Статистика по обучению",
        active: false,

        card: {
          _id: "e89575b6-0896-4ba1-ac48-e157727b4355",
          url: "Teaching",
          title: "Статистика по обучению",
          imgSrc: imageService.dashboard,
          active: false,
          textItems: [
            {
              _id: "5b26d189-6ecc-4737-b715-05b859ec61e0",
              text: "Статистика по обучению",
            },
          ],
        },
      },
    ],
    imgSrc: iconService.userGraduate,
    active: false,
  },
  {
    _id: "c53ecec6-16ed-4fc7-b08c-cf93602b8f76",
    url: "События и достижения",
    subMenuItems: [
      {
        _id: "7566ec83-e903-44b1-b8fa-0167206dc8b5",
        title: "Конкурсы",
        active: false,

        card: {
          _id: "ef746c90-b8cd-4909-bf92-e5dd8dee7951",
          url: "Events",
          title: "Конкурсы",
          imgSrc: imageService.bizfin,
          active: false,
          textItems: [
            {
              _id: "9de4b653-9fd4-43b1-925f-77223dc15f23",
              text: "Раздел находится в разработке",
            },
            {
              _id: "83cbed33-796d-45b0-8946-084d870d8884",
              text: "Раздел находится в разработке",
            },
            {
              _id: "b959878b-a837-428e-91bd-caadc8ee183d",
              text: "Раздел находится в разработке",
            },
          ],
        },
      },
      {
        _id: "97084f14-e993-44e1-8b36-b3197dd3885a",
        title: "Новости",
        active: false,

        card: {
          _id: "ba6be953-bb5e-4097-9942-1915b3bda828",
          url: "Events",
          title: "Новости",
          imgSrc: imageService.news,
          active: false,
          textItems: [
            {
              _id: "02cfe10b-c624-4117-ac7d-ef0584e9c16b",
              text: "Раздел находится в разработке",
            },
            {
              _id: "23aff9ed-2d1e-4007-8592-10604de86a72",
              text: "Раздел находится в разработке",
            },
            {
              _id: "4b0befc5-1608-46c1-88cf-026e882f7bc6",
              text: "Раздел находится в разработке",
            },
          ],
        },
      },
      {
        _id: "fd47eb9b-9197-47a7-bab3-e266daac0414",
        title: "Аллея славы",
        active: false,

        card: {
          _id: "46a24b4f-a71e-48d9-ab29-d20ca8493752",
          url: "Events",
          title: "Аллея славы",
          imgSrc: imageService.podium,
          active: false,
          textItems: [
            {
              _id: "95190d62-bfba-49b2-9968-add1eb36c57e",
              text: "Раздел находится в разработке",
            },
            {
              _id: "8eb5db22-3c96-4b8e-aced-1f08a9657e38",
              text: "Раздел находится в разработке",
            },
            {
              _id: "ec616862-1c49-4d63-a7e8-de677e439a2d",
              text: "Раздел находится в разработке",
            },
          ],
        },
      },
    ],
    imgSrc: iconService.trophyAlt,
    active: false,
  },
  {
    _id: "f249b1e9-e42a-4383-a1e2-ad2e1aa99e5b",
    url: "О нас",
    subMenuItems: [
      {
        _id: "05eb2f4f-b751-4d8c-b064-493e6e7249fa",
        title: "Структура УОБП",
        active: false,

        card: {
          _id: "af3545c6-9b5c-4eb7-ac0c-9c3cfe3c4a3c",
          url: "About",
          title: "Структура УОБП",
          imgSrc: imageService.diagram,
          active: false,
          textItems: [
            {
              _id: "cf597677-ebc0-4667-a739-0f7baf6a53f8",
              text: "Команда управления",
            },
            {
              _id: "f1319b33-2f1c-4ba1-bc3c-e66867d3bbe6",
              text: "Основные цели и задачи управления",
            },
            { _id: "567e39d6-b7e7-4196-bed7-0039bcc4d23e", text: "Контакты" },
          ],
        },
      },
      {
        _id: "e1cbb70c-03c0-4611-b21d-9df8c68e2790",
        title: "Аналитик БП",
        active: false,

        card: {
          _id: "5d298688-24b0-4df8-935c-ffc1a90b3a90",
          url: "About",
          title: "Аналитик БП",
          imgSrc: imageService.analytics,
          active: false,
          textItems: [
            {
              _id: "fec64799-f37b-45ed-842d-8627edf60821",
              text: "Профили аналитика БП",
            },
            {
              _id: "555671dc-391e-48fd-8455-759053c4b3d1",
              text: "Реестр аналитиков БП",
            },
          ],
        },
      },
    ],
    imgSrc: iconService.addressCard,
    active: false,
  },
];

export function getMenuItems() {
  return menuItems;
}

export function getInfoCards() {
  return menuItems
    .map((item) => item.subMenuItems)
    .flat(2)
    .map((sub) => sub.card);
}
