// sections/About.jsx
// Hotel story, atmosphere, and key facts — split image/text layout

import { memo } from 'react';
import { useRevealClass } from '../hooks/useInView';
import { IconTower, IconHome, IconLeaf, IconCityView } from '../components/Icons';
import aboutImage from '../assets/about.webp'; // ← імпорт замість рядка
import './About.css';

const highlights = [
  { Icon: IconTower,    label: 'Середньовічне оточення', desc: "Кам'янець-Подільський замок за 19 хвилин пішки" },
  { Icon: IconHome,     label: 'Сімейний заклад',         desc: 'Затишок і персональний підхід до кожного гостя' },
  { Icon: IconLeaf,     label: 'Натуральні матеріали',     desc: "Кам'яні стіни, дерево, автентична атмосфера" },
  { Icon: IconCityView, label: 'Вид на місто',             desc: 'З кожного номера відкривається панорама Старого міста' },
];

// Мемоізований елемент highlight
const HighlightItem = memo(function HighlightItem({ Icon, label, desc }) {
  return (
    <li className="about__highlight">
      <span className="about__highlight-icon">
        <Icon width={22} height={22} />
      </span>
      <div>
        <strong>{label}</strong>
        <p>{desc}</p>
      </div>
    </li>
  );
});

export default function About() {
  const imgWrap = useRevealClass('reveal--left');
  const text    = useRevealClass('reveal--right');

  return (
    <section id="about" className="section section--alt about">
      <div className="container">

        <div className="about__layout">

          {/* Left — single image */}
          <div ref={imgWrap.ref} className={`about__images ${imgWrap.className}`}>
            <div className="about__img-main">
              <img
                src={aboutImage}
                alt="Інтер'єр Гостерії Old Town — затишна атмосфера"
                loading="lazy"
                decoding="async"
              />
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

            <ul className="about__highlights" aria-label="Ключові переваги">
              {highlights.map(({ Icon, label, desc }) => (
                <HighlightItem key={label} Icon={Icon} label={label} desc={desc} />
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
