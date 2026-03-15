import { memo } from 'react';
import { useInView } from '../hooks/useInView';
import { IconHeritage, IconLeaf, IconMap } from '../components/Icons';
import aboutImage from '../assets/about.webp';
import './About.css';

const highlights = [
  { label: 'Автентичність', desc: "Кам'яна кладка та дерево", Icon: IconHeritage },
  { label: 'Затишок', desc: 'Сімейна атмосфера', Icon: IconLeaf },
  { label: 'Локація', desc: '19 хв до замку пішки', Icon: IconMap },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="about"
      className={`about-section ${inView ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="container about-section__grid">

        <div className="about-section__images">
          <div className="about-section__img-frame">
            <img src={aboutImage} alt="Old Town Interior" className="about-section__img" />
            <div className="about-section__img-overlay" />
          </div>
          <div className="about-section__decoration" />
        </div>

        <div className="about-section__content">
          <div className="reveal reveal--delay-1">
            <span className="section-eyebrow">Мистецтво гостинності</span>
            <h2 className="section-title">
              Маленький готель з <em>великою душею</em>
            </h2>
          </div>

          <div className="about-section__lead reveal reveal--delay-2">
            Гостерія «Old Town» — це шість унікальних номерів у самому серці Старого міста.
          </div>

          <div className="about-section__text reveal reveal--delay-3">
            <p>
              Тут все сповнене автентикою: кам'яні стіни, паркетні підлоги, натуральне
              дерево в інтер'єрі. Ми пишаємось домашньою атмосферою, де кожен гість
              відчуває турботу, а не стандартний сервіс.
            </p>
            <p className="about-section__text-accent">
              Наша родина зустрічає вас особисто — з ключем, порадою щодо прогулянки і теплим словом.
            </p>
          </div>

          <div className="about-section__highlights">
            {highlights.map((item, idx) => (
              <div key={idx} className={`about-highlight reveal reveal--delay-${idx + 4}`}>
                <div className="about-highlight__icon-box">
                  <item.Icon width={20} height={20} />
                </div>
                <div className="about-highlight__txt">
                  <span className="about-highlight__label">{item.label}</span>
                  <span className="about-highlight__desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-section__action reveal reveal--delay-7">
            <a href="#rooms" className="btn btn-primary">Відкрити номери</a>
          </div>
        </div>

      </div>
    </section>
  );
}
