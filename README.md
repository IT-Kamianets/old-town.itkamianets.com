# Гостерія Old Town — Веб-сайт

Сайт для бутик-готелю «Old Town» у Кам'янці-Подільському.

---

## Швидкий старт

```bash
npm install
npm start       # dev server → http://localhost:3000
npm run build   # production build → /build
```

---

## Структура файлів

```
src/
├── styles/
│   ├── main.css        ← Design tokens, reset, base styles, animations
│   └── utils.css       ← Утиліти (skip-link, text-center тощо)
│
├── hooks/
│   └── useInView.js    ← Intersection Observer для scroll-анімацій
│
├── components/         ← Переможні UI-компоненти
│   ├── Header.jsx / .css
│   └── Footer.jsx / .css
│
├── sections/           ← Секції сторінки (одна = один файл)
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Rooms.jsx / .css
│   ├── Services.jsx / .css
│   ├── Gallery.jsx / .css
│   ├── Location.jsx / .css
│   └── BookingForm.jsx / .css
│
├── App.jsx             ← Кореневий компонент
└── index.jsx           ← React entry point
```

---

## Дизайн-система

### Кольори

| Змінна               | Hex       | Використання                    |
|----------------------|-----------|---------------------------------|
| `--color-bg`         | `#FAF7F2` | Основний фон                    |
| `--color-bg-alt`     | `#F2EBE0` | Альтернативний фон секцій       |
| `--color-stone`      | `#C9B99A` | Мʼякий акцент, деталі          |
| `--color-stone-light`| `#E8DDD0` | Блоки на темному фоні           |
| `--color-wood`       | `#3D2B1F` | Темне дерево — хедер, футер     |
| `--color-wood-light` | `#6B4F3A` | Світліше дерево                 |
| `--color-burgundy`   | `#7A1C1C` | Бордовий — CTA, акценти         |
| `--color-text`       | `#2C1F14` | Основний текст                  |
| `--color-text-muted` | `#7A6B5D` | Другорядний текст               |

### Шрифти

- **Cormorant Garamond** — заголовки, display-текст (елегантний, histórico)
- **Jost** — body-текст, UI-елементи (чистий, сучасний)

### Spacing scale

```css
--space-xs:  8px
--space-sm:  16px
--space-md:  24px
--space-lg:  40px
--space-xl:  64px
--space-2xl: 96px
--space-3xl: 144px
```

---

## Як замінити фото

### Hero
Відкрий `src/sections/Hero.jsx`, знайди:
```js
const HERO_IMAGE = 'https://...';
```
Заміни на реальне фото фасаду готелю або виду на місто.
Рекомендований розмір: **1920×1080px або більше**, формат WebP.

### About (2 фото)
У `src/sections/About.jsx`:
```js
const ABOUT_IMAGE_1 = '...'; // Основне фото (інтер'єр, атмосфера)
const ABOUT_IMAGE_2 = '...'; // Акцентне маленьке фото (деталь)
```

### Rooms (по 1 фото на тип)
У `src/sections/Rooms.jsx`:
```js
const ROOM_IMGS = {
  deluxe: '...',  // Фото Делюкс номеру
  quad:   '...',  // Фото чотиримісного
  family: '...',  // Фото Family з каміном
};
```

### Gallery (8 фото)
У `src/sections/Gallery.jsx` — масив `PHOTOS[]`.
Кожне фото має два поля:
- `src` — повнорозмірне (min 1200px)
- `thumb` — thumbnail для швидкого завантаження (600px)

Варіанти `span`:
- `'wide'` — займає 2 колонки (горизонтальне)
- `'tall'` — займає 2 рядки (вертикальне)
- `''` — звичайна клітинка

---

## Бронювання / форма

Форма в `BookingForm.jsx` зараз симулює відправку.
Для реального підключення:

### Варіант 1 — Formspree (найпростіше, безкоштовно)
1. Зареєструйся на [formspree.io](https://formspree.io)
2. Створи форму — отримай ID
3. В `handleSubmit()` розкоментуй fetch-запит, встав свій ID

### Варіант 2 — EmailJS
1. [emailjs.com](https://emailjs.com) — підключається до Gmail/Outlook
2. Встанови: `npm install @emailjs/browser`

---

## Карта

У `Location.jsx` використовується **OpenStreetMap** (без API ключа).
Координати вже вказані приблизно — скоригуй їх точно:

```js
const OSM_URL =
  'https://www.openstreetmap.org/export/embed.html?bbox=26.576%2C48.669%2C26.592%2C48.678&layer=mapnik&marker=48.6727%2C26.5848';
```

Точні координати: **48.6727° N, 26.5848° E** (вул. П'ятницька, 8).

---

## Соціальні мережі

У `Footer.jsx` — масив `socials[]`. Встав реальні посилання на Instagram, Facebook, Booking.com.

---

## SEO

У `public/index.html`:
- `<title>` — вже заповнено
- `<meta description>` — готово
- `og:image` — розкоментуй і вкажи реальне URL фото (1200×630px)
- `<link rel="canonical">` — розкоментуй, вкажи свій домен

---

## Анімації

Всі scroll-анімації — через `useInView` хук + CSS класи `.reveal`:
```
.reveal           → fade + slide up
.reveal--left     → fade + slide from left
.reveal--right    → fade + slide from right
.reveal--scale    → fade + scale up
```
Стани `in-view` додаються автоматично через IntersectionObserver.

Hero анімує через CSS `@keyframes` з `animation-delay` (стагер).

---

## Деплой

### Netlify / Vercel
```bash
npm run build
# Деплой папку /build
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Додати в package.json: "homepage": "https://yourusername.github.io/repo"
# Додати scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```
