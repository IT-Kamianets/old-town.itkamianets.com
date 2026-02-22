// sections/About.jsx
// Hotel story, atmosphere, and key facts — split image/text layout

import { useRevealClass } from '../hooks/useInView';
import './About.css';

// Replace with actual interior / facade photo
const ABOUT_IMAGE_1 = 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=900&q=80';
const ABOUT_IMAGE_2 = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80';

const highlights = [
  { icon: '🏰', label: 'Середньовічне оточення', desc: "Кам'янець-Подільський замок за 19 хвилин пішки" },
  { icon: '🏡', label: 'Сімейний заклад',         desc: 'Затишок і персональний підхід до кожного гостя' },
  { icon: '🌿', label: 'Натуральні матеріали',     desc: "Кам'яні стіни, дерево, автентична атмосфера" },
  { icon: '🌇', label: 'Вид на місто',             desc: 'З кожного номера відкривається панорама Старого міста' },
];

export default function About() {
  const title   = useRevealClass('');
  const imgWrap = useRevealClass('reveal--left');
  const text    = useRevealClass('reveal--right');

  return (
    <section id="about" className="section section--alt about">
      <div className="container">

        <div className="about__layout">

          {/* Left — images stacked */}
          <div ref={imgWrap.ref} className={`about__images ${imgWrap.className}`}>
            <div className="about__img-main">
              <img
                src={ABOUT_IMAGE_1}
                alt="Інтер'єр Гостерії Old Town — затишна вітальня з кам'яними стінами"
                loading="lazy"
              />
            </div>
            <div className="about__img-accent">
              <img
                src={ABOUT_IMAGE_2}
                alt="Деталь інтер'єру — дерево і камінь"
                loading="lazy"
              />
              <div className="about__badge">
                <span className="about__badge-year">Старе місто</span>
                <span className="about__badge-text">Кам'янець-Подільський</span>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div ref={text.ref} className={`about__text ${text.className}`}>
            <p className="section-eyebrow">Про нас</p>
            <div className="divider" />
            <h2 className="section-title about__title">
              Маленький готель<br />
              <em>з великою душею</em>
            </h2>

            <p className="about__lead">
              Гостерія «Old Town» — це шість унікальних номерів у самому серці
              Старого міста Кам'янця-Подільського, за кроком від середньовічних
              кам'яних вулиць і за 19 хвилин пішки від легендарного замку.
            </p>

            <p className="about__body">
              Тут все сповнене автентикою: кам'яні стіни, паркетні підлоги, натуральне
              дерево в інтер'єрі. Ми пишаємось домашньою атмосферою, де кожен гість
              відчуває турботу, а не стандартний сервіс. Наша родина зустрічає вас
              особисто — з ключем, порадою щодо прогулянки і теплим словом.
            </p>

            <p className="about__body">
              Кам'янець-Подільський — одне з найкрасивіших міст України, де
              середньовічна архітектура співіснує зі звичайним пульсом повсякденного
              життя. Ми раді бути вашим домом тут.
            </p>

            {/* Highlights grid */}
            <ul className="about__highlights" aria-label="Ключові переваги">
              {highlights.map(({ icon, label, desc }) => (
                <li key={label} className="about__highlight">
                  <span className="about__highlight-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <strong>{label}</strong>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#rooms" className="btn btn-dark">
              Переглянути номери
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
