import type { CaseContent, CaseImageManifestEntry } from './ar-spatially.ts';

/**
 * «kloo» / sleo.io — educational platform & business community case study.
 * Copy transcribed verbatim from Figma (file SagpfeC9cZBWcmybhRFqab,
 * frame 503:3828 «3case») via text-layer names from get_metadata.
 * Imagery is wired as <CasePlaceholder> slots (see klooImages manifest) and
 * swapped for real PNGs once the Figma asset quota allows export.
 */
export const kloo: CaseContent = {
  title: 'sleo.io',
  meta: [
    'Образовательная платформа и бизнес-комьюнити',
    'Дата: с 2019 года по 2023',
    'www: sleo.io',
  ],
  description:
    'SLEO — международная цифровая платформа, объединяющая экспертов, авторов и профессионалов из различных сфер деятельности. Проект создан для формирования глобального сообщества специалистов, обмена знаниями, публикации авторского контента и организации онлайн- и офлайн-мероприятий.',
  tags: [
    'UX/UI Design',
    'UX Research',
    'User Flow Design',
    'Community Platform',
    'Expert Marketplace',
    'Design system',
    'Dashboard & Profile Design',
  ],
  sections: [
    {
      heading: 'О проекте',
      paragraphs: [
        'Проект был реализован по готовому ТЗ маркетинговой команды. UX-исследования, интервью и тестирования в рамках проекта не проводились.',
        'В рамках проекта мной было сделано:',
      ],
      list: [
        'Лендинг',
        'Проектирование внутренней системы платформы для двух ключевых ролей: создателей контента (лекторов, коучей и экспертов) и пользователей, приобретающих образовательные материалы, курсы и услуги',
        'Дизайн-система для масштабирования проекта',
      ],
    },
    {
      heading: 'Команда и роль',
      blocks: [
        {
          title: 'Команда',
          body: 'Me — UI/UX designer, 3 Front-end Developers, 2 Backend Developers, QA, 1 Product Managers, 5+ Marketing Team',
        },
        { title: 'Tech-стек', body: 'Figma, Adobe Photoshop / Illustrator' },
        { title: 'Моя роль в проекте sleo.io', body: 'UI/UX Designer' },
      ],
      paragraphs: ['В рамках проекта я отвечал за:'],
      list: [
        'Разработку UX-структуры сайта',
        'Проектирование пользовательских сценариев',
        'Создание визуальной концепции бренда',
        'Дизайн интерфейсов для десктопной и мобильной версии',
      ],
    },
    {
      heading: 'Задача',
      paragraphs: [
        'Создать единую платформу, где эксперты могут публиковать цифровой контент, организовывать мероприятия и развивать профессиональное сообщество, а пользователи — находить, приобретать и потреблять образовательный контент.',
      ],
    },
    {
      heading: 'Этап — Landing Page',
      paragraphs: [
        'Проект начался с разработки Landing Page, который помог представить идею платформы, определить её ценность для пользователей и протестировать интерес аудитории. Совместно с маркетинговой командой были сформированы цели продукта, определены основные пользовательские роли и ключевые сценарии взаимодействия.',
      ],
    },
    {
      heading: 'Этап — Создание полноценной архитектуры проекта',
      paragraphs: [
        'На основе полученных данных командой маркетинга, и лид. проекта - была спроектирована архитектура полноценной платформы, включающей:',
      ],
      list: [
        'систему регистрации и авторизации пользователей',
        'персональные кабинеты для различных ролей пользователей',
        'дашборд для управления контентом и активностью',
        'Creator Studio для создания и публикации цифровых материалов',
        'систему создания и управления онлайн- и офлайн-мероприятиями',
        'инструменты продажи курсов, материалов и экспертных услуг',
        'каталог контента и мероприятий для студентов и клиентов',
        'систему покупки, скачивания и записи на курсы и события',
      ],
    },
  ],
  result: {
    heading: 'Результат',
    items: [
      'Разработка UX-архитектуры образовательной SaaS-платформы',
      'Создание единой дизайн-системы',
      'Проектирование интерфейсов для преподавателей, участников, администраторов и руководителей',
      'Разработка адаптивных веб- и мобильных интерфейсов',
    ],
  },
};

/**
 * Image manifest for the kloo / sleo.io case page.
 * Each entry corresponds to one <CasePlaceholder> in kloo.astro.
 * Swap-in pattern: see src/data/cases/ar-spatially.ts header.
 */
export const klooImages: CaseImageManifestEntry[] = [
  {
    filename: 'cases/kloo/flow-landing.png',
    description: 'Landing Page user flow — флоу лендинга',
    ratio: '424/849',
    section: 'Этап — Landing Page, left',
    figmaNode: '518:11034',
  },
  {
    filename: 'cases/kloo/landing.png',
    description: 'Landing Page — лендинг платформы',
    ratio: '662/849',
    section: 'Этап — Landing Page, right',
    figmaNode: '510:4339',
  },
  {
    filename: 'cases/kloo/sitemap-userflow.png',
    description: 'Карта сайта и основные user flow',
    ratio: '954/616',
    section: 'Архитектура — sitemap & user flow',
    figmaNode: '513:4361',
  },
  {
    filename: 'cases/kloo/dashboard.png',
    description: 'Dashboard — центральный экран системы',
    ratio: '981/634',
    section: 'Часть экранов внутренней системы проекта — Dashboard',
    figmaNode: '509:4321',
  },
  {
    filename: 'cases/kloo/internal-screens.png',
    description: 'Экраны внутренней системы — широкая раскладка',
    ratio: '982/223',
    section: 'Часть экранов внутренней системы проекта — wide row',
    figmaNode: '515:4409',
  },
  {
    filename: 'cases/kloo/pricing.png',
    description: 'Экран выбора тарифных планов и управления подпиской',
    ratio: '574/471',
    section: 'Часть экранов внутренней системы проекта — pricing',
    figmaNode: '517:11017',
  },
  {
    filename: 'cases/kloo/feed-main.png',
    description: 'Feed & Wallet — главный экран',
    ratio: '538/348',
    section: 'Feed & Wallet — main',
    figmaNode: '515:4444',
  },
  {
    filename: 'cases/kloo/feed.png',
    description: 'Feed & Wallet — социальная лента',
    ratio: '538/347',
    section: 'Feed & Wallet — feed',
    figmaNode: '515:4445',
  },
  {
    filename: 'cases/kloo/shopping-cart.png',
    description: 'Feed & Wallet — корзина',
    ratio: '538/348',
    section: 'Feed & Wallet — shopping cart',
    figmaNode: '515:4447',
  },
  {
    filename: 'cases/kloo/wallet.png',
    description: 'Feed & Wallet — кошелёк',
    ratio: '538/348',
    section: 'Feed & Wallet — wallet',
    figmaNode: '515:4448',
  },
  {
    filename: 'cases/kloo/mobile-landing.png',
    description: 'Мобильный экран — лендинг',
    ratio: '207/465',
    section: 'Часть мобильных экранов платформы — 1/5',
    figmaNode: '517:11007',
  },
  {
    filename: 'cases/kloo/mobile-wallet.png',
    description: 'Мобильный экран — кошелёк',
    ratio: '207/465',
    section: 'Часть мобильных экранов платформы — 2/5',
    figmaNode: '517:11008',
  },
  {
    filename: 'cases/kloo/mobile-main-1.png',
    description: 'Мобильный экран — главная 1',
    ratio: '207/465',
    section: 'Часть мобильных экранов платформы — 3/5',
    figmaNode: '517:11009',
  },
  {
    filename: 'cases/kloo/mobile-main-2.png',
    description: 'Мобильный экран — главная 2',
    ratio: '207/465',
    section: 'Часть мобильных экранов платформы — 4/5',
    figmaNode: '517:11010',
  },
  {
    filename: 'cases/kloo/mobile-event.png',
    description: 'Мобильный экран — мероприятие',
    ratio: '207/465',
    section: 'Часть мобильных экранов платформы — 5/5',
    figmaNode: '517:11011',
  },
];

export default kloo;
