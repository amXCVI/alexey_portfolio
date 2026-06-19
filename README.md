# Сайт-визитка — Алексей С.

Лёгкий статический одностраничник на [Astro](https://astro.build) по макету Figma.
Светлая минималистичная тема, ~0 клиентского JS, self-hosted шрифт Manrope.

## Команды

```bash
npm install        # установка зависимостей
npm run dev        # локальная разработка (http://localhost:4321)
npm run build      # сборка в ./dist
npm run preview    # предпросмотр собранного сайта
npm run check      # проверка типов (astro check)
```

## Структура

```
src/
  layouts/Layout.astro     — каркас страницы, <head>, мета/OG, шрифт
  pages/index.astro        — сборка секций
  components/              — Hero, SkillsCard, TechStackCard, Experience(+Card), Accordion, Section
  data/content.ts          — весь текстовый контент (из макета)
  styles/                  — tokens.css (дизайн-токены) + global.css
  assets/images/           — фото и превью (оптимизируются Astro в webp/avif)
public/                    — favicon.svg, og.png
```

## Деплой на GitHub Pages

Деплой автоматический через GitHub Actions (`.github/workflows/deploy.yml`).

1. Создайте репозиторий на GitHub и запушьте код в ветку `main`.
2. В репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Каждый push в `main` собирает и публикует сайт.

`base`-путь и адрес сайта определяются автоматически (`actions/configure-pages`),
поэтому конфиг работает и для project-страниц (`/<repo>`), и для корневых
(`<user>.github.io`). Локально можно переопределить через `SITE_URL` / `BASE_PATH`.

## Качество

Lighthouse (desktop): Performance 100 · Accessibility 96 · Best Practices 100 · SEO 100.
Адаптив: 320–1440+. Аккордеоны кейсов работают без JS (progressive enhancement).
