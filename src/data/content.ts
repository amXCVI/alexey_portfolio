// Page content, transcribed verbatim from the Figma mockup
// (file SagpfeC9cZBWcmybhRFqab, frames 334:8926 / 387:9628).

export const skills: string[] = [
  'Проектирую цифровые продукты и сложные интерфейсы для SaaS, Web3, мобильных и веб-платформ — от концепции до финального UI.',
  'Формирую UX-архитектуру: User Flows, Customer Journey Maps (CJM), информационную архитектуру и многошаговые пользовательские сценарии.',
  'Прорабатываю пользовательские сценарии (User Stories, Job Stories), упрощаю процессы и снижаю когнитивную нагрузку.',
  'Создаю wireframes и интерактивные прототипы, тестирую гипотезы и проверяю решения до разработки.',
  'Разрабатываю и поддерживаю дизайн-системы: UI Kits и стандарты интерфейсов.',
  'Готовлю дизайн к разработке: handoff, спецификации, состояния интерфейсов и взаимодействие с командами разработки.',
];

export const skillsNote: string[] = [
  'Работаю в Figma на продвинутом уровне: Components, Variants, Auto Layout, Prototyping и Design Tokens.',
  'Работаю в Agile-командах и участвую в полном цикле развития продукта.',
];

export const techStack: string[] = [
  'Figma: auto-layout, components, variants, prototype, smart animate, design-tokens + AI tolls',
  'Adobe Photoshop, Illustrator + генерация изображение AI tolls',
];

export const techSubLabel = 'Так же имею представления о:';

export const techExtra: string[] = ['Adobe After Effects, Spine2D, lottie animation.'];

// ---- Work experience ----

export interface SubProject {
  title: string;
  note: string;
  /** Case-study button label. */
  cta: string;
}

export interface Job {
  /** Company / product name (accent-coloured). */
  company: string;
  role: string;
  period: string;
  description: string;
  /** Body tone: 'muted' (#363636) or 'strong' (#201f1f). */
  tone: 'muted' | 'strong';
  /** Optional preview image key. */
  image?: 'ar' | 'tap';
  /** Larger role line (NXmarketing uses 20px). */
  roleLarge?: boolean;
  /** Card-level case-study button (omitted when sub-projects carry their own). */
  cta?: string;
  /** NXmarketing-style button with a trailing arrow. */
  ctaArrow?: boolean;
  subProjects?: SubProject[];
}

export const jobs: Job[] = [
  {
    company: 'AR Spatially',
    role: 'Product Designer',
    period: 'с 2023 по 2026',
    description:
      'Инновационная платформа дополненной реальности, объединяющая цифровой контент с физическим пространством. Проект позволяет размещать интерактивные 3D-объекты в реальных локациях, создавая уникальный пользовательский опыт.',
    tone: 'muted',
    image: 'ar',
    cta: 'Кейс продукта',
  },
  {
    company: 'Tap Topia - Web3 Play 2 Own battle game',
    role: 'Product Designer',
    period: 'с 2023 по 2026',
    description:
      'Мобильная игровая платформа, сочетающая элементы RPG, стратегии и развития персонажей. Проект предлагает игрокам исследовать уникальные миры, участвовать в сражениях и развивать собственную игровую экосистему.',
    tone: 'muted',
    image: 'tap',
    cta: 'Кейс продукта',
  },
  {
    company: 'Sleogroup',
    role: 'Product Designer',
    period: 'с 2019 по 2023',
    description:
      'Евпропейская компания Возглавлял дизайн-направление компании и отвечал за развитие трёх ключевых цифровых продуктов в сферах EdTech, PropTech и Digital Services. Руководил полным циклом проектирования — от исследования потребностей пользователей и формирования продуктовой стратегии до запуска и развития цифровых продуктов на европейском рынке.',
    tone: 'strong',
    subProjects: [
      {
        title: 'Образовательная платформа и бизнес-комьюнити',
        note: 'Экосистема для студентов, преподавателей, коучей и инвесторов с онлайн-конференциями, маркетплейсом образовательных программ, системой обучения, коммуникации и профессионального развития.',
        cta: 'Кейс продукта',
      },
      {
        title: 'Инвестиционная платформа недвижимости',
        note: 'Цифровая инвестиционная платформа для проектов недвижимости на Северном Кипре. Спроектировал инвестиционный портал, личный кабинет инвестора, цифровой кошелёк и инструменты управления инвестициями.',
        cta: 'Кейс продукта',
      },
      {
        title: 'Креативная студия полного цикла',
        note: 'Внутренняя дизайн-студия, создающая цифровые продукты и сервисы для экосистемы компании.',
        cta: 'Кейс продукта',
      },
    ],
  },
  {
    company: 'Digital-агентство NXmarketing',
    role: 'UX/UI Designer',
    period: 'с 2016 по 2019',
    description:
      'NX Marketing — агентство цифровых продуктов и интернет-маркетинга, занимающееся разработкой сайтов, веб-сервисов и решений для онлайн-продвижения бизнеса.',
    tone: 'strong',
    roleLarge: true,
    cta: 'Моя роль и достижения',
    ctaArrow: true,
  },
];
