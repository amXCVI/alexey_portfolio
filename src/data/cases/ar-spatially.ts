import type { ImageMetadata } from 'astro';

/**
 * Generic case-study content model, reused by every case page (Tasks 3–5).
 * Copy is transcribed verbatim from Figma; layout-specific imagery is wired
 * separately in each page via `astro:assets` imports.
 */

/** A labelled image (used in galleries and standalone figures). */
export interface CaseImageItem {
  src: ImageMetadata;
  alt: string;
  /** Optional caption rendered under the image / on its dark plate. */
  caption?: string;
}

/** One content section of a case study. */
export interface CaseSectionContent {
  /** Centred section title (e.g. «Цель проекта»). */
  heading: string;
  /** Lead / intro paragraphs rendered before any list. */
  paragraphs?: string[];
  /** Bullet list rendered with the shared diamond markers. */
  list?: string[];
  /** Closing paragraphs rendered after the list. */
  footnotes?: string[];
  /** Heading→body pairs (e.g. the «Ключевые решения» blocks). */
  blocks?: { title: string; body: string }[];
}

/** The terminal «Результат» section. */
export interface CaseResultContent {
  heading: string;
  /** Lead paragraph(s) summarising the outcome. */
  intro?: string[];
  /** Bulleted deliverables / achievements. */
  items: string[];
  /** Optional sub-heading + its own list (e.g. «Ключевые достижения»). */
  achievements?: { heading: string; items: string[] };
}

/** Full case-study payload. */
export interface CaseContent {
  /** Page / hero title. */
  title: string;
  /** Hero meta lines (date, url, role …). */
  meta?: string[];
  /** Hero description / intro paragraph. */
  description: string;
  /** Hero skill / discipline chips. */
  tags?: string[];
  /** Ordered content sections (Figma top-to-bottom). */
  sections: CaseSectionContent[];
  /** Terminal result block. */
  result: CaseResultContent;
}

export const arSpatially: CaseContent = {
  title: 'AR Spatially',
  meta: ['Дата: с 2023 года по 2026', 'www: arspatially.com'],
  description:
    'AR Spatially - это стартап, мобильная AR-платформа, объединяющая пользователей, художников и бизнес через контент, привязанный к реальным локациям.',
  tags: [
    'Product Discovery',
    'UX Research',
    'Competitive Analysis',
    'Information Architecture',
    'User Flows',
    'Design system',
    'Wireframes',
    'UX/UI Design',
    'Mobile Interaction Design',
    'Prototyping',
  ],
  sections: [
    {
      heading: 'AR Spatially',
      paragraphs: [
        'За время работы в этой компании - участвовал в разработке и запуске экосистемы цифровых продуктов, объединяющей технологии блокчейна, NFT, геолокации, дополненной реальности (AR) и мобильных приложений. Проект включал создание собственной токеномики, мобильных приложений, маркетинговых платформ и инструментов для взаимодействия пользователей с объектами реального мира через цифровую экосистему. крипто-проект DGES (Decentralised Geolocation Ecosystem) — децентрализованная экосистема геолокации на блокчейне. Создание токена DGES 3 лендинга для продвижения продуктов. 3 мобильных приложения связанных с геолокацией. (одно для художников стритарта - nftstreet, где был заложен и протестирован потенциал всей экосистемы, второе это игра в стиле fight club, и третье это непосредственно приложение о котором будет ниже речь )',
      ],
      footnotes: [
        'Команда: 15+ специалистов, я в ней был единственный отвественный за UI/UX дизайнер.',
      ],
      list: [
        'Mobile Developers (iOS, Android)',
        'Front-end Developers',
        'Back-end Developer',
        'AR/VR Engineers',
        'QA Engineer',
        '3D Designer',
        'UI/UX Designer',
        'Product Managers и Marketing Team',
      ],
    },
    {
      heading: 'Цель проекта',
      paragraphs: [
        'Создать первую мобильную платформу нового поколения, которая объединяет:',
      ],
      list: [
        'дополненную реальность (AR)',
        'геолокацию',
        'пользовательский контент',
        'социальное взаимодействие',
        'пространственные вычисления (Spatial Computing)',
      ],
      footnotes: [
        'Главная задача заключалась в том, чтобы сделать сложные AR-технологии доступными для обычных пользователей через интуитивный мобильный интерфейс.',
      ],
    },
    {
      heading: 'Этапы создания проекта',
      paragraphs: [
        'Разработал и валидировал несколько концепций UI/UX через пользовательские исследования, тестирование на реальной аудитории и работу с QA-командами. Провёл проверку ключевых пользовательских сценариев:',
      ],
      footnotes: [
        'взаимодействие с камерой, AR-объектами, пространствами (Spaces), размещением на карте и редактированием контента. Последовательно спроектировал и протестировал три итерации продукта, улучшая UX на основе данных и обратной связи пользователей. Сформировал оптимальную архитектуру пользовательских потоков и взаимодействий. На основе полученных результатов создал дизайн-систему, которая стала основой для дальнейшего масштабирования продукта.',
        'Главная задача заключалась в том, чтобы сделать сложные AR-технологии доступными для обычных пользователей через интуитивный мобильный интерфейс.',
      ],
    },
    {
      heading: 'Основные UX-вызовы',
      paragraphs: [
        'Большинство людей никогда не взаимодействовали с пространственным цифровым контентом — у них нет ментальной модели «как разместить объект в реальном мире через телефон». Задача: спроектировать интерфейс, в котором новичок создаёт и работает с AR-объектами в пространстве — на интуиции. Так же показать бизнесу все преимущества дополненной реальности.',
        'Спроектировал UX-архитектуру приложения вокруг сценариев Explore, Create и Interact.',
        'Необходимо было связать два принципиально разных режима взаимодействия: 2D Map Experience Immersive AR Experience Переход между ними должен был быть максимально естественным и понятным.',
        'Разработал пользовательские потоки для поиска, создания и взаимодействия с AR-контентом.',
        'Пользователю необходимо: находить объекты создавать объекты создавать спейсы где эти объекты будут находиться редактировать объекты делиться объектами Для этого была разработана система простых сценариев и микроинтеракций, скрывающая техническую сложность AR.',
      ],
    },
    {
      heading: 'Ключевые решения',
      blocks: [
        {
          title: 'AR-First Navigation',
          body: 'Интерфейс проектировался не вокруг экранов, а вокруг пространственного взаимодействия пользователя с окружающим миром.',
        },
        {
          title: 'Геопривязанный контент',
          body: 'Разработаны UX-сценарии для размещения и поиска объектов в реальных координатах.',
        },
        {
          title: 'Простое создание AR-контента',
          body: 'Сложный процесс размещения 3D-объектов был сведен к понятной логике действий, а так же интегрирована система ИИ ассистента, для помощи пользователю.',
        },
        {
          title: 'Пространственная карта',
          body: 'Карта стала связующим звеном между физическим и цифровым пространством.',
        },
      ],
    },
  ],
  result: {
    heading: 'Результат',
    intro: [
      'AR Spatially стал полноценным мобильным продуктом в области Spatial Computing и Augmented Reality, объединяющую пользователей, художников и бизнес через геолокацию и пространственный контент.',
      'В рамках проекта были созданы:',
    ],
    items: [
      'продуктовая стратегия',
      'Масштабируемая UX-архитектура мобильного продукта - 32 пользовательских сценариев, пользовательские потоки и взаимодействие для iOS и Android',
      'Спроектировал систему из 120+ экранов на единых компонентах — это позволило команде разработчиков вести iOS и Android параллельно без рассинхрона интерфейса.',
      'Создана единая дизайн-система для iOS и Android',
    ],
    achievements: {
      heading: 'Ключевые достижения',
      items: [
        'Полный цикл проектирования продукта с нуля одним дизайнером',
        'Создание UX для новой категории продукта в области Spatial Computing',
        'Спроектировал ключевые сценарии работы с AR-контентом что согласно данным маркетинг отдела ускорило работу новичка приложения по созданию AR объекта - время сократилось с 4 минут до 2х минут.',
        'Разработка масштабируемой дизайн-системы',
        '«Связал 2D-карту и иммерсивный AR-режим так, что переход между ними воспринимается естественно — это сняло главный барьер входа для новичков.»',
        'Формирование визуального и продуктового фундамента для дальнейшего развития платформы',
      ],
    },
  },
};

export default arSpatially;
